"use client";

import React from "react";
import { Button, CategoryBand } from "./Primitives";

const LIBRARY = [
  { product: "PKTM III+", line: "Protipožární klapky", color: "#74d1ea", types: ["PDF","DWG","RFA","IFC","STEP","BACnet"], count: 23 },
  { product: "PKI-EI", line: "Protipožární klapky", color: "#74d1ea", types: ["PDF","DWG","RFA","IFC"], count: 18 },
  { product: "FDMQ", line: "Protipožární klapky · multilist", color: "#74d1ea", types: ["PDF","DWG","RFA"], count: 14 },
  { product: "RKKTM", line: "Regulační klapky", color: "#74d1ea", types: ["PDF","DWG","RFA"], count: 11 },
  { product: "MAA · MSA", line: "Tlumiče hluku", color: "#74d1ea", types: ["PDF","DWG"], count: 16 },
  { product: "ALCM · DVS", line: "Anemostaty a vyústky", color: "#74d1ea", types: ["PDF","DWG","RFA"], count: 22 },

  { product: "MANDÍK AHU", line: "AHU jednotky", color: "#26d07c", types: ["PDF","DWG","RFA","IFC","Modbus"], count: 31 },
  { product: "Sestavné jednotky", line: "AHU jednotky", color: "#26d07c", types: ["PDF","DWG"], count: 12 },
  { product: "Hygienické provedení", line: "AHU jednotky", color: "#26d07c", types: ["PDF","DWG","RFA"], count: 9 },

  { product: "MONZUN", line: "Teplovzdušné agregáty", color: "#f2a900", types: ["PDF","DWG","STEP"], count: 14 },
  { product: "HEATWING", line: "Plynová tepelná čerpadla", color: "#f2a900", types: ["PDF","DWG","Modbus"], count: 8 },
  { product: "HELIOS · GAMA", line: "Sálavé panely", color: "#f2a900", types: ["PDF","DWG"], count: 7 },

  { product: "Jaderná technika", line: "Speciální aplikace", color: "#ffd700", types: ["PDF","DWG","STEP"], count: 6 },
  { product: "Tunelové systémy", line: "Speciální aplikace", color: "#ffd700", types: ["PDF","DWG"], count: 5 },
];

const CERTS = ["ISO 9001","KTA 1401","10CFR APP10","EUROVENT","RLT-Geräte","BRE","VDI 6022","DIN 1946-4","EN 15650","EN 1366-2","EN 12101-3","ATEX"];

export const DownloadsScreen = ({ onNav }) => {
  const [q, setQ] = React.useState("");
  const [format, setFormat] = React.useState("VŠE");
  const [area, setArea] = React.useState("VŠE");

  const filtered = LIBRARY.filter((l) => {
    if (q && !(l.product + " " + l.line).toLowerCase().includes(q.toLowerCase())) return false;
    if (format !== "VŠE" && !l.types.includes(format)) return false;
    if (area !== "VŠE" && !l.line.toLowerCase().includes(area.toLowerCase())) return false;
    return true;
  });

  return (
    <div data-screen-label="Downloads" className="page-enter pt-[108px] min-h-screen bg-mandik-paper-soft">
      <section className="bg-mandik-ink text-white">
        <div className="max-w-[1320px] mx-auto px-10 py-16">
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 bg-accent" />
                <span className="h-label text-xs text-accent">Centrum dokumentace</span>
              </div>
              <h1 className="h-display text-[72px] leading-[0.95]">3 218 dokumentů.<br/>Bez registrace.</h1>
              <p className="mt-6 text-white/75 text-[16px] max-w-lg leading-relaxed">
                Hledejte podle výrobku, kódu, normy nebo formátu. Vše je strojově čitelné, indexované a aktualizované.
              </p>
            </div>
            <div className="col-span-5 grid grid-cols-3 gap-px bg-white/10">
              <div className="bg-mandik-ink p-4">
                <div className="mono text-[10px] text-white/55">PDF</div>
                <div className="h-display text-[28px]">1 942</div>
              </div>
              <div className="bg-mandik-ink p-4">
                <div className="mono text-[10px] text-white/55">DWG / RFA</div>
                <div className="h-display text-[28px]">880</div>
              </div>
              <div className="bg-mandik-ink p-4">
                <div className="mono text-[10px] text-white/55">CERTIFIKÁTY</div>
                <div className="h-display text-[28px]">396</div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white text-mandik-ink flex items-center hairline">
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none" className="ml-5 text-mandik-steel">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M11 11l3.2 3.2" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <input
              value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="hledat: PKTM, EI 120, BACnet PICS, 1366-2 …"
              className="flex-1 px-5 py-5 outline-none mono text-[15px]"
            />
            <button className="bg-accent text-mandik-ink h-full px-8 py-5 h-label text-[11px] hover:bg-[#1ec170]">Hledat</button>
          </div>
        </div>
      </section>

      <section className="bg-mandik-paper-soft">
        <div className="max-w-[1320px] mx-auto px-10 py-12">
          <div className="grid grid-cols-12 gap-10">
            <aside className="col-span-3 space-y-8">
              <div>
                <div className="h-label text-[11px] text-mandik-steel mb-3">Výrobní oblast</div>
                <div className="space-y-1">
                  {[["VŠE", "#506077"], ["AHC komponenty", "#74d1ea"], ["AHU jednotky", "#26d07c"], ["Topné systémy", "#f2a900"], ["Speciální aplikace", "#ffd700"]].map(([a, c]) => (
                    <button key={a} onClick={() => setArea(a)} className={`w-full text-left flex items-center gap-3 px-3 py-2 transition-colors ${area === a ? "bg-mandik-ink text-white" : "bg-white hairline text-mandik-ink hover:bg-white"}`}>
                      <span className="block w-2 h-2" style={{ background: c }} />
                      <span className="text-[13px]">{a}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="h-label text-[11px] text-mandik-steel mb-3">Formát</div>
                <div className="flex flex-wrap gap-1">
                  {["VŠE","PDF","DWG","RFA","IFC","STEP","BACnet","Modbus"].map((f) => (
                    <button key={f} onClick={() => setFormat(f)} className={`px-3 py-1.5 mono text-[11px] transition-colors ${format === f ? "bg-mandik-steel text-white" : "bg-white hairline text-mandik-steel hover:bg-mandik-rule"}`}>{f}</button>
                  ))}
                </div>
              </div>

              <div>
                <div className="h-label text-[11px] text-mandik-steel mb-3">Certifikace</div>
                <div className="flex flex-wrap gap-1">
                  {CERTS.map((c) => (
                    <span key={c} className="px-2 py-1 mono text-[10px] bg-white hairline text-mandik-steel hover:bg-mandik-rule cursor-pointer">{c}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="h-label text-[11px] text-mandik-steel mb-3">Třída EI</div>
                <div className="flex gap-1 flex-wrap">
                  {["30","60","90","120","240"].map((l) => (
                    <span key={l} className="px-2 py-1 mono text-[11px] bg-white hairline text-mandik-steel hover:bg-mandik-rule cursor-pointer">EI {l}</span>
                  ))}
                </div>
              </div>

              <div className="hairline bg-white p-4">
                <div className="h-label text-[10px] text-mandik-steel mb-2">API přístup</div>
                <p className="text-[12px] text-mandik-steel-80 leading-relaxed">
                  Pro projekční kanceláře nabízíme přímý přístup k metadatům přes JSON API a webhook na novou verzi.
                </p>
                <a href="#" className="block mt-3 mono text-[11px] text-accent hover:underline">→ docs.mandik.cz/api</a>
              </div>
            </aside>

            <div className="col-span-9">
              <div className="flex items-center justify-between mb-5 mono text-[12px] text-mandik-steel-70">
                <span>{filtered.length} výrobků · {filtered.reduce((s, f) => s + f.count, 0)} souborů</span>
                <div className="flex items-center gap-3">
                  <span>Seřadit:</span>
                  <select className="bg-white hairline px-2 py-1 outline-none">
                    <option>Nejnovější</option>
                    <option>Nejstahovanější</option>
                    <option>Abecedně</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-px bg-mandik-rule hairline">
                {filtered.map((l) => (
                  <a key={l.product} href="#" onClick={(e) => { e.preventDefault(); onNav("product"); }} className="tile relative bg-white p-5">
                    <span className="tile-bar" style={{ background: l.color }} />
                    <CategoryBand color={l.color} label={l.line} />
                    <div className="mt-4 h-display text-[22px]">{l.product}</div>
                    <div className="mt-5 flex flex-wrap gap-1">
                      {l.types.map((t) => (
                        <span key={t} className="px-2 py-0.5 mono text-[10px] bg-mandik-paper-soft text-mandik-steel">{t}</span>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-mandik-rule flex items-center justify-between">
                      <span className="mono text-[12px] text-mandik-steel">{l.count} souborů</span>
                      <span className="h-label text-[10px] text-mandik-steel hover:text-accent">Otevřít →</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 hairline bg-white p-7 grid grid-cols-12 gap-7 items-center">
                <div className="col-span-8">
                  <div className="h-label text-[11px] text-mandik-steel-70">Nemůžete najít, co potřebujete?</div>
                  <div className="h-display text-[24px] mt-2">Pošlete nám číslo zakázky — vrátíme kompletní balíček do 2&nbsp;hodin.</div>
                </div>
                <div className="col-span-4 flex justify-end">
                  <Button variant="primary" href="#">Vyžádat dokumentaci</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
