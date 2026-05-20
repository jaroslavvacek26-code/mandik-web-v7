// Server-side helpery pro mandik.info API.
// PORTFOLIO_TOKEN čteme z env (na Vercelu doplnit do projekt-settings → Environment Variables).

const API_BASE = "https://mandik.info/api/v1/ltu";

function serverHeaders() {
  return { Authorization: `Bearer ${process.env.PORTFOLIO_TOKEN ?? ""}` };
}

/** Portfolio – kategorie výrobků (Požární technika, Odvod kouře, …) */
export async function fetchPortfolio(locale = "cs") {
  try {
    const res = await fetch(`${API_BASE}/portfolio/?locale=${locale}`, {
      headers: serverHeaders(),
      next: { revalidate: 600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : data.results ?? [];
  } catch {
    return [];
  }
}
