import React, { useState, useEffect } from 'react';
import { 
  Upload, 
  Calendar, 
  RefreshCw, 
  CheckCircle, 
  Loader2, 
  Sparkles, 
  FileText, 
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Clock,
  BookOpen,
  X
} from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { KPISection } from './components/KPISection';
import { RevenueIntelligence } from './components/RevenueIntelligence';
import { CustomerIntelligence } from './components/CustomerIntelligence';
import { ExecutiveRecommendation } from './components/ExecutiveRecommendation';
import { AIAnalystChat } from './components/AIAnalystChat';
import { MarketIntelligenceAgent } from './components/MarketIntelligenceAgent';
import { ReportCenter } from './components/ReportCenter';
import { BusinessSettings } from './components/BusinessSettings';
import { ScenarioSimulator } from './components/ScenarioSimulator';
import { 
  uploadDataset, 
  loadSampleData, 
  getSectionExplanation
} from './services/api';
import type { DashboardData } from './services/api';

type AppState = 'landing' | 'preview' | 'processing' | 'dashboard';

const PROCESSING_STEPS = [
  'Reading CSV Dataset...',
  'Cleaning Data & Handling Missing Metrics...',
  'Engineering Seasonality & Lag Features...',
  'Fitting ML Revenue Forecast Models...',
  'Calculating Feature SHAP Importances...',
  'Retrieving Latest Market Intelligence feeds...',
  'Analyzing Payment Lags & Customer Ledgers...',
  'Invoking Gemma 4 31B reasoning layer...',
  'Finalizing Dashboard Layout...'
];

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  
  // Two-stage preview validator states
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<{ headers: string[]; rows: string[][] } | null>(null);
  const [detectedFields, setDetectedFields] = useState<string[]>([]);
  
  // Chat state
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Explanation Modal state
  const [explainModal, setExplainModal] = useState<{
    isOpen: boolean;
    section: string;
    loading: boolean;
    content: string;
  }>({
    isOpen: false,
    section: '',
    loading: false,
    content: ''
  });

  // Simulated upload progress + processing stepper animation
  const startProcessing = (dataPromise: Promise<DashboardData>) => {
    setAppState('processing');
    setCurrentStepIndex(0);
    setUploadProgress(0);

    // 1. Simulate upload progress (0 to 100% in 1 second)
    const uploadInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(uploadInterval);
          return 100;
        }
        return prev + 25;
      });
    }, 200);

    // 2. Play through the agent reasoning steps
    let step = 0;
    const stepInterval = setInterval(() => {
      if (step < PROCESSING_STEPS.length - 1) {
        step++;
        setCurrentStepIndex(step);
      } else {
        clearInterval(stepInterval);
        // Wait for the actual API data promise to resolve
        dataPromise.then((data) => {
          setDashboardData(data);
          setAppState('dashboard');
        }).catch((err) => {
          console.error("API error:", err);
          alert("Pipeline failed: " + err.message);
          setAppState('landing');
        });
      }
    }, 600);
  };

  const processUploadedFile = (file: File) => {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.split('\n').map(line => line.trim()).filter(Boolean);
      if (lines.length > 0) {
        const headers = lines[0].split(',').map(h => h.trim());
        const rows = lines.slice(1, 6).map(line => line.split(',').map(r => r.trim()));
        setFilePreview({ headers, rows });
        
        // Map detected columns
        const detected: string[] = [];
        headers.forEach(h => {
          const lower = h.toLowerCase();
          if (lower.includes('revenue') || lower.includes('sales')) detected.push('Revenue');
          if (lower.includes('order')) detected.push('Orders');
          if (lower.includes('customer') || lower.includes('company')) detected.push('Customer');
          if (lower.includes('invoice')) detected.push('Invoice');
          if (lower.includes('payment') || lower.includes('delay')) detected.push('Payment Date / Lags');
          if (lower.includes('steel') || lower.includes('cost') || lower.includes('price')) detected.push('Steel Cost');
          if (lower.includes('machine') || lower.includes('util')) detected.push('Machine Utilization');
        });
        setDetectedFields(detected);
        setAppState('preview');
      }
    };
    reader.readAsText(file.slice(0, 4096)); // read first 4KB
  };

  const triggerUploadAnalysis = () => {
    if (!selectedFile) return;
    const promise = uploadDataset(selectedFile);
    startProcessing(promise);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    processUploadedFile(files[0]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processUploadedFile(files[0]);
    }
  };

  const handleLoadSample = () => {
    const promise = loadSampleData();
    startProcessing(promise);
  };

  // Triggers explanation modal instantly with pre-loaded onboarding data
  const handleOpenExplanation = async (section: string) => {
    if (!dashboardData) return;
    
    let content = "";
    if (section === 'forecast') {
      content = dashboardData.kpis.forecast_explanation || "No forecast explanation cached. Run analysis again.";
    } else if (section === 'shap') {
      content = dashboardData.shap_explanation || "No SHAP details cached. Run analysis again.";
    } else {
      content = "Detailed analysis is available directly on the corresponding page.";
    }

    setExplainModal({
      isOpen: true,
      section,
      loading: false,
      content
    });
  };

  // Simple custom markdown renderer helper
  const renderExplanationMarkdown = (md: string) => {
    return md.split('\n').map((line, idx) => {
      let cleanLine = line.trim();
      if (cleanLine.startsWith('### ')) {
        return <h4 key={idx} className="text-sm font-bold text-slate-800 mt-4 mb-2 flex items-center gap-1.5">{cleanLine.replace('### ', '')}</h4>;
      }
      if (cleanLine.startsWith('## ')) {
        return <h3 key={idx} className="text-base font-extrabold text-blue-900 mt-5 mb-2.5 border-b border-slate-100 pb-1.5">{cleanLine.replace('## ', '')}</h3>;
      }
      if (cleanLine.startsWith('# ')) {
        return <h2 key={idx} className="text-lg font-black text-slate-900 mt-6 mb-3">{cleanLine.replace('# ', '')}</h2>;
      }
      if (cleanLine.startsWith('* ') || cleanLine.startsWith('- ')) {
        return <li key={idx} className="text-xs text-slate-600 ml-4 list-disc mb-1.5">{cleanLine.substring(2)}</li>;
      }
      if (cleanLine.includes('**')) {
        const parts = cleanLine.split('**');
        return (
          <p key={idx} className="text-xs text-slate-600 leading-relaxed mb-3">
            {parts.map((p, i) => i % 2 === 1 ? <strong key={i} className="text-slate-900 font-bold">{p}</strong> : p)}
          </p>
        );
      }
      if (cleanLine === '') return <div key={idx} className="h-2"></div>;
      return <p key={idx} className="text-xs text-slate-600 leading-relaxed mb-3">{cleanLine}</p>;
    });
  };

  const getSectionTitle = (sec: string) => {
    switch (sec) {
      case 'forecast': return 'Revenue Forecast Explanation';
      case 'shap': return 'Model Attribution (SHAP) Insights';
      case 'customer_risk': return 'Customer Risk Matrix Analysis';
      case 'market_impact': return 'Macro Market Impact Assessment';
      case 'recommendation': return 'Operational Action Roadmap';
      default: return 'AI Financial Consultation';
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* LANDING PAGE */}
      {appState === 'landing' && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden bg-slate-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

          <div className="w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-8 relative z-10 shadow-xl text-center flex flex-col gap-6">
            <div className="flex justify-center">
              <div className="p-4 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl text-white shadow-lg shadow-rose-500/20">
                <Sparkles size={32} className="animate-pulse" />
              </div>
            </div>
            
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight font-sans">Revenue Intelligence Agent</h1>
              <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">
                An AI Financial Copilot for Manufacturing MSMEs. Parse files, project revenues, monitor ledger risks, and fetch real-time market data.
              </p>
            </div>

            {/* Drag & Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="border-2 border-dashed border-slate-300 hover:border-rose-500 hover:bg-rose-50/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all group"
            >
              <input
                type="file"
                id="file-upload"
                onChange={handleFileUpload}
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                className="hidden"
              />
              <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-2">
                <div className="p-3 bg-slate-50 rounded-full text-slate-400 group-hover:text-rose-600 transition-colors">
                  <Upload size={24} />
                </div>
                <span className="text-xs font-semibold text-slate-700">Drag & drop ledger dataset or browse</span>
                <span className="text-[10px] text-slate-400">Supports CSV, XLS, XLSX format</span>
              </label>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 tracking-wider uppercase border-b border-slate-200 pb-1.5">
                <span>Supported Data columns</span>
                <span>Ready to model</span>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-center mt-1">
                {['Revenue History', 'Orders', 'Invoices', 'Payments', 'Customer Ledger', 'Inventory', 'Machine Utilization'].map((d, i) => (
                  <span key={i} className="text-[9px] font-semibold bg-slate-50 text-slate-600 px-2.5 py-1 rounded-lg border border-slate-200">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-100 pt-5">
              <p className="text-[10px] text-slate-500 font-semibold">Want to test instantly without uploading?</p>
              <button
                onClick={handleLoadSample}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-md shadow-slate-950/10 transition-all flex items-center justify-center gap-2"
              >
                <span>Load Meenakshi Precision Components sample</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TWO-STAGE PREVIEW & SCHEMA VALIDATION PAGE */}
      {appState === 'preview' && filePreview && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden bg-slate-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

          <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-8 relative z-10 shadow-xl flex flex-col gap-6">
            <div>
              <span className="text-[10px] font-bold text-rose-600 tracking-widest uppercase">Stage 2: Schema Validation</span>
              <h1 className="text-xl font-extrabold text-slate-950 tracking-tight mt-1">Review & Validate Columns</h1>
              <p className="text-xs text-slate-500 mt-1">We found {filePreview.headers.length} columns in {selectedFile?.name}. Confirm details before starting analysis.</p>
            </div>

            {/* Detected fields list */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Detected Mapping Fields</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Revenue', 'Orders', 'Customer', 'Invoice', 'Payment Date / Lags', 'Steel Cost', 'Machine Utilization'].map((field) => {
                  const isDetected = detectedFields.includes(field) || (field === 'Customer' && detectedFields.some(f => f.includes('Customer')));
                  return (
                    <div key={field} className={`p-2 rounded-lg border text-[11px] font-bold flex items-center justify-between ${
                      isDetected ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-slate-100 border-slate-200 text-slate-400'
                    }`}>
                      <span>{field}</span>
                      <span>{isDetected ? '✓' : '×'}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Data Table Preview */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 overflow-hidden text-left">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Raw Data Preview (First 5 Rows)</h3>
              <div className="overflow-x-auto max-w-full">
                <table className="w-full text-left text-[10px] font-mono text-slate-700 whitespace-nowrap">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-bold">
                      {filePreview.headers.slice(0, 6).map((h, i) => <th key={i} className="pb-1.5 pr-4">{h}</th>)}
                      {filePreview.headers.length > 6 && <th className="pb-1.5">...</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {filePreview.rows.map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-100 last:border-0">
                        {row.slice(0, 6).map((col, i) => <td key={i} className="py-1.5 pr-4 text-slate-600">{col}</td>)}
                        {row.length > 6 && <td className="py-1.5 text-slate-400">...</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setAppState('landing')}
                className="flex-1 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 transition-colors"
              >
                Upload another file
              </button>
              <button
                onClick={triggerUploadAnalysis}
                className="flex-1 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold shadow-md shadow-rose-500/10 transition-all"
              >
                Start Copilot Analysis
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROCESSING ANIMATION PAGE */}
      {appState === 'processing' && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50 text-slate-600">
          <div className="w-full max-w-md flex flex-col gap-6">
            <div className="flex items-center gap-3 justify-center mb-2">
              <Loader2 className="animate-spin text-rose-500" size={24} />
              <h2 className="text-lg font-bold text-slate-900 tracking-tight font-sans">AI Agent Reasoning Pipeline</h2>
            </div>

            {/* Stepper block */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-3 shadow-md">
              {PROCESSING_STEPS.map((step, idx) => {
                const isPassed = idx < currentStepIndex;
                const isActive = idx === currentStepIndex;
                return (
                  <div 
                     key={idx} 
                     className={`flex items-center gap-3 text-xs transition-colors duration-300 ${
                       isPassed ? 'text-emerald-600 font-semibold' : isActive ? 'text-slate-900 font-extrabold animate-pulse font-sans' : 'text-slate-400'
                     }`}
                  >
                    {isPassed ? (
                      <CheckCircle size={14} className="flex-shrink-0 text-emerald-500" />
                    ) : isActive ? (
                      <Loader2 size={14} className="flex-shrink-0 text-rose-500 animate-spin" />
                    ) : (
                      <div className="w-3.5 h-3.5 border-2 border-slate-200 rounded-full flex-shrink-0"></div>
                    )}
                    <span>{step}</span>
                  </div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                <span>Uploading ledger file</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                   className="h-full bg-rose-500 rounded-full transition-all duration-300" 
                   style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DASHBOARD PAGE */}
      {appState === 'dashboard' && dashboardData && (
        <div className="flex-1 flex overflow-hidden h-screen">
          {/* Left Sidebar */}
          <Sidebar 
            data={dashboardData}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            onOpenChat={() => setIsChatOpen(true)}
            onTriggerUpload={() => setAppState('landing')}
          />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col overflow-y-auto bg-slate-100 p-6 gap-6">
            
            {/* Header top bar */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-4 no-print">
              <div>
                <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-baseline gap-2 capitalize">
                  {activeSection === 'dashboard' ? 'Dashboard Overview' :
                   activeSection === 'revenue' ? 'Revenue Forecast' :
                   activeSection === 'customers' ? 'Customer Intelligence' :
                   activeSection === 'advisor' ? 'AI Executive Advisor' :
                   activeSection === 'market' ? 'Market Intelligence Agent' :
                   activeSection === 'reports' ? 'Briefing & Report Center' :
                   activeSection === 'settings' ? 'Business Settings' : activeSection}
                </h1>
                <p className="text-[10px] text-slate-500 mt-1 font-medium">Updated just now &bull; Real-time analysis sync</p>
              </div>
              <div className="flex items-center gap-3 text-xs">
                {/* Data Connected Pill */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 font-semibold rounded-full border border-emerald-100">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  <span>Data Connected</span>
                </div>
                {/* Gemma Live Pill */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 font-semibold rounded-full border border-emerald-100">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  <span>GEMMA LIVE</span>
                </div>
                {/* Re-run button styled cleanly */}
                <button
                  onClick={() => setAppState('landing')}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white hover:bg-slate-800 rounded-lg font-semibold transition-colors ml-2"
                >
                  <RefreshCw size={12} />
                  <span>Re-run</span>
                </button>
              </div>
            </div>

            {/* Stepper Status Banner */}
            <div className="bg-white border border-slate-200 rounded-xl p-3 px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 no-print">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle size={14} className="text-emerald-500" />
                <span className="font-bold">Data Loaded:</span>
                <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono text-[10px]">{dashboardData.summary.last_upload_filename}</span>
                <span className="text-slate-400">&bull;</span>
                <Clock size={12} className="text-slate-400" />
                <span>Analysis Generated Just now</span>
              </div>
              <div className="text-[10px] text-slate-500 font-medium italic">
                Our AI has analyzed your historical data and external market signals to generate actionable insights.
              </div>
            </div>

            {/* Page Router */}
            {activeSection === 'dashboard' && (
              <>
                <ScenarioSimulator 
                  data={dashboardData} 
                  onSimulationResult={(simData) => setDashboardData(simData)} 
                  onReset={handleLoadSample}
                />
                <KPISection data={dashboardData} />
                <ExecutiveRecommendation 
                  data={dashboardData} 
                  onExplain={handleOpenExplanation}
                />
              </>
            )}

            {activeSection === 'upload' && (
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm max-w-xl mx-auto text-center flex flex-col gap-5">
                <h3 className="font-extrabold text-sm text-slate-800 uppercase tracking-wider">Business Data Integration</h3>
                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="border-2 border-dashed border-slate-200 hover:border-blue-500 hover:bg-slate-50/50 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all group"
                >
                  <input
                    type="file"
                    id="file-upload-dashboard"
                    onChange={handleFileUpload}
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    className="hidden"
                  />
                  <label htmlFor="file-upload-dashboard" className="cursor-pointer flex flex-col items-center gap-2">
                    <div className="p-3 bg-slate-100 rounded-full text-slate-400 group-hover:text-blue-600 transition-colors">
                      <Upload size={24} />
                    </div>
                    <span className="text-xs font-semibold text-slate-600">Drag & drop ledger dataset or browse</span>
                    <span className="text-[10px] text-slate-400">Supports CSV, XLS, XLSX format</span>
                  </label>
                </div>
              </div>
            )}

            {activeSection === 'forecast' && (
              <>
                <ScenarioSimulator 
                  data={dashboardData} 
                  onSimulationResult={(simData) => setDashboardData(simData)} 
                  onReset={handleLoadSample}
                />
                <RevenueIntelligence 
                  data={dashboardData} 
                  onExplain={handleOpenExplanation}
                />
              </>
            )}

            {activeSection === 'customers' && (
              <CustomerIntelligence 
                data={dashboardData} 
                onExplain={handleOpenExplanation}
              />
            )}

            {activeSection === 'market' && (
              <MarketIntelligenceAgent data={dashboardData} />
            )}

            {activeSection === 'executive' && (
              <ExecutiveRecommendation 
                data={dashboardData} 
                onExplain={handleOpenExplanation}
              />
            )}

            {activeSection === 'reports' && (
              <ReportCenter data={dashboardData} />
            )}

            {activeSection === 'settings' && (
              <BusinessSettings 
                data={dashboardData} 
                onUpdateBusinessName={(newName) => {
                  setDashboardData(prev => prev ? {
                    ...prev,
                    summary: {
                      ...prev.summary,
                      business_name: newName
                    }
                  } : null);
                }}
              />
            )}

            {/* Evidence & Data Sources display tags */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm no-print">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                Evidence & Data Sources
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-2">Internal Data (Uploaded)</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Sales History', 'Customer Ledger', 'Payment History', 'Orders', 'Inventory', 'Machine Utilization'].map((t, i) => (
                      <span key={i} className="bg-slate-50 text-slate-600 border border-slate-200 px-2 py-1 rounded text-[10px] font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-2">External Sources (Real-time)</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Moneycontrol', 'Economic Times', 'Ministry of MSME', 'IMD Weather', 'SteelMint', 'Auto Component Manufacturers Assoc.'].map((t, i) => (
                      <span key={i} className="bg-slate-50 text-slate-600 border border-slate-200 px-2 py-1 rounded text-[10px] font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Model Info Footer */}
            <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-200 pt-4 mt-2 no-print">
              <div className="flex gap-4">
                <span>Model: <strong>{dashboardData.is_ml_mode ? 'XGBoost Regressor' : 'Triple Exponential Smoothing Fallback'}</strong></span>
                <span>Trained on: <strong>{dashboardData.summary.data_records_count} Weekly Records</strong></span>
                <span>Evaluation (MAE): <strong>₹{dashboardData.forecast_data.prediction_interval_std.toFixed(2)} Lakh</strong></span>
              </div>
              <button 
                onClick={() => handleOpenExplanation('shap')}
                className="text-blue-600 hover:underline font-bold"
              >
                View Model Details
              </button>
            </div>

          </div>

          {/* AI Chat Sidebar Drawer */}
          <AIAnalystChat 
            isOpen={isChatOpen} 
            onClose={() => setIsChatOpen(false)} 
            data={dashboardData}
          />

          {/* Explanation Modal */}
          {explainModal.isOpen && (
            <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] shadow-2xl flex flex-col border border-slate-200 animate-scale-in">
                {/* Modal Header */}
                <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-900 rounded-t-3xl text-white">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} />
                    <h3 className="font-bold text-sm">{getSectionTitle(explainModal.section)}</h3>
                  </div>
                  <button 
                    onClick={() => setExplainModal(prev => ({ ...prev, isOpen: false }))}
                    className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto flex-1 bg-slate-50/50">
                  {explainModal.loading ? (
                    <div className="flex flex-col gap-3 justify-center items-center py-12">
                      <Loader2 className="animate-spin text-blue-600" size={32} />
                      <p className="text-xs text-slate-500 font-medium">Gemma is drafting explanation details...</p>
                    </div>
                  ) : (
                    <div className="prose prose-slate max-w-none">
                      {renderExplanationMarkdown(explainModal.content)}
                    </div>
                  )}
                </div>
                
                {/* Modal Footer */}
                <div className="p-4 border-t border-slate-100 bg-white flex justify-end rounded-b-3xl">
                  <button
                    onClick={() => setExplainModal(prev => ({ ...prev, isOpen: false }))}
                    className="py-1.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold"
                  >
                    Close Explanation
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
