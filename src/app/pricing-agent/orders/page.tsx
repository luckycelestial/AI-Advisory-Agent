import { redirect } from "next/navigation";

export default function OrdersPage() {
  redirect("/pricing-agent?tab=orders");
}

