import { App } from "@/components/App";
import { fetchPortfolio } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function Page() {
  const categories = await fetchPortfolio("cs").catch(() => []);
  return <App categories={categories} />;
}
