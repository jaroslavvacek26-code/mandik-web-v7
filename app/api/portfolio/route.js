import { NextResponse } from "next/server";
import { fetchPortfolio } from "@/lib/api";

export async function GET(req) {
  const locale = req.nextUrl.searchParams.get("locale") ?? "cs";
  const data = await fetchPortfolio(locale);
  return NextResponse.json(data);
}
