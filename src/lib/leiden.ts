export interface GraphNode {
  id: string;
  name: string;
  revenue?: string;
  employeeCount?: number;
  margin?: string;
  region?: string;
  material?: string;
}

export interface GraphLink {
  source: string;
  target: string;
  weight: number;
}

/**
 * A client-side TypeScript implementation of the Leiden community detection algorithm
 * (modularity optimization with refinement phase to guarantee well-connected communities).
 */
export function runLeidenClustering(
  nodes: GraphNode[],
  links: GraphLink[],
  resolution: number = 1.0
): Map<string, number> {
  const nodeMap = new Map<string, number>(); // node ID -> index 0..N-1
  nodes.forEach((n, idx) => nodeMap.set(n.id, idx));

  const N = nodes.length;
  const edgeWeights = Array.from({ length: N }, () => new Float64Array(N));

  // Initialize weights
  let totalEdgeWeight = 0;
  links.forEach(l => {
    const sIdx = nodeMap.get(l.source);
    const tIdx = nodeMap.get(l.target);
    if (sIdx !== undefined && tIdx !== undefined) {
      edgeWeights[sIdx][tIdx] = l.weight;
      edgeWeights[tIdx][sIdx] = l.weight;
      totalEdgeWeight += l.weight;
    }
  });

  const m = totalEdgeWeight;
  if (m === 0) {
    // Fallback: each in its own community
    const fallback = new Map<string, number>();
    nodes.forEach((n, idx) => fallback.set(n.id, idx));
    return fallback;
  }

  // Node strengths (degrees)
  const k = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < N; j++) {
      sum += edgeWeights[i][j];
    }
    k[i] = sum;
  }

  // Community partition: community assignments (0..N-1)
  let communities = new Int32Array(N);
  for (let i = 0; i < N; i++) {
    communities[i] = i;
  }

  // Step 1: Local Moving (similar to Louvain but running in queue of active nodes)
  let changed = true;
  let iter = 0;
  while (changed && iter < 10) {
    changed = false;
    iter++;

    // Stable, deterministic order of nodes
    const nodeQueue = Array.from({ length: N }, (_, idx) => idx);

    for (const u of nodeQueue) {
      const currentComm = communities[u];
      
      // Find neighbor communities
      const commWeights = new Map<number, number>();
      for (let v = 0; v < N; v++) {
        if (edgeWeights[u][v] > 0) {
          const c = communities[v];
          commWeights.set(c, (commWeights.get(c) || 0) + edgeWeights[u][v]);
        }
      }

      // Find community that maximizes modularity gain: deltaQ = Sigma_in - (Sigma_tot * k_u) / m
      let bestComm = currentComm;
      let maxGain = 0;

      // Compute total strengths of each community
      const commStrengths = new Float64Array(N);
      for (let i = 0; i < N; i++) {
        commStrengths[communities[i]] += k[i];
      }

      for (const [c, wIn] of commWeights.entries()) {
        if (c === currentComm) continue;

        // Modularity gain formula
        const gain = wIn - resolution * (commStrengths[c] * k[u]) / (2 * m);
        if (gain > maxGain) {
          maxGain = gain;
          bestComm = c;
        }
      }

      if (bestComm !== currentComm) {
        communities[u] = bestComm;
        changed = true;
      }
    }
  }

  // Step 2: Refinement Phase (Leiden-specific check)
  // Ensures all communities are well-connected internally. If not, they are split.
  const refinedCommunities = new Int32Array(N);
  for (let i = 0; i < N; i++) {
    refinedCommunities[i] = -1;
  }
  let currentRefinedId = 0;

  for (let c = 0; c < N; c++) {
    // Find all nodes belonging to community `c`
    const commNodes: number[] = [];
    for (let i = 0; i < N; i++) {
      if (communities[i] === c) commNodes.push(i);
    }

    if (commNodes.length === 0) continue;

    // Run connected components sub-division within community `c`
    const visited = new Set<number>();
    for (const node of commNodes) {
      if (visited.has(node)) continue;

      // BFS to find connected sub-component inside community
      const component: number[] = [];
      const queue: number[] = [node];
      visited.add(node);

      while (queue.length > 0) {
        const u = queue.shift()!;
        component.push(u);

        for (const v of commNodes) {
          if (!visited.has(v) && edgeWeights[u][v] > 0) {
            visited.add(v);
            queue.push(v);
          }
        }
      }

      // Assign sub-component to its own refined community ID
      for (const refinedNode of component) {
        refinedCommunities[refinedNode] = currentRefinedId;
      }
      currentRefinedId++;
    }
  }

  // Map refined indices back to Node IDs
  const result = new Map<string, number>();
  nodes.forEach((n, idx) => {
    result.set(n.id, refinedCommunities[idx]);
  });

  return result;
}
