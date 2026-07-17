import { redirect } from "next/navigation";

export default function InventoryPage() {
  redirect("/pricing-agent?tab=inventory");
}

