"use client";

import React from "react";
import { SectionLabel, SectionTitle, Button, CategoryBand, SpecTable } from "./Primitives";
import { DamperCutaway } from "./DamperCutaway";

const DOWNLOADS = [
  { type: "PDF", name: "Katalogový list — PKTM III+", size: "2.4 MB", ver: "v 7.2", lang: "CS · EN · DE", primary: true },
  { type: "PDF", name: "Návod k montáži a údržbě", size: "1.1 MB", ver: "v 4.1", lang: "CS · EN · DE · UK" },
  { type: "DWG", name: "2D výkres — všechny rozměry", size: "8.6 MB", ver: "2024-Q4", lang: "—" },
  { type: "RFA", name: "Revit rodina (LOD 350)", size: "4.2 MB", ver: "2024.1", lang: "—", primary: true },
  { type: "IFC", name: "BIM model (IFC4)", size: "2.0 MB", ver: "2024.1", lang: "—" },
  { type: "PDF", name: "Prohlášení o vlastnostech (DoP)", size: "320 KB", ver: "1066-CPR-1014", lang: "CS · EN · DE" },
  { type: "PDF", name: "Certifikát ČSN EN 15650", size: "560 KB", ver: "—", lang: "CS · EN" },
  { type: "PDF", name: "Protokol o tlakové ztrátě", size: "910 KB", ver: "VUT 2023-117", lang: "CS · EN" },
  { type: "STEP", name: "3D model — všechny varianty", size: "12.4 MB", ver: "2024.1", lang: "—" },
  { type: "BACnet", name: "PICS — interoperabilita", size: "180 KB", ver: "Rev. C", lang: "EN" },
];

const TYPE_COLORS = { PDF: "#506077", DWG: "#26d07c", RFA: "#74d1ea", IFC: "#506077", STEP: "#506077", BACnet: "#f2a900" };

const DownloadRow = ({ d }) => (
  <a href="#" className="grid grid-cols-[80px_1fr_140px_120px_90px_40px] items-center gap-5 px-5 py-4 hairline hover:bg-mandik-paper-soft transition-colors">
    <div className="h-display text-[12px] px-2 py-1 text-white inline-flex justify-center" style={{ background: TYPE_COLORS[d.type] }}>{d.type}</div>
    <div>
      <div className="text-mandik-ink text-[14px]">{d.name}</div>
      {d.primary && <div className="mono text-[10px] text-accent uppercase tracking-wider mt-1">Nejstahovanější</div>}
    </div>
    <div className="mono text-[12px] text-mandik-steel-70">{d.ver}</div>
    <div className="mono text-[11px] text-mandik-steel-70">{d.lang}</div>
    <div className="mono text-[12px] text-mandik-steel text-right tabular-nums">{d.size}</div>
    <div className="flex justify-end">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-mandik-steel">
        <path d="M8 2v10M3 8l5 5 5-5M2 14h12" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </div>
  </a>
);

const ProductHero = () => (
  <section className="relative bg-white pt-[124px] border-b border-mandik-rule">
    <div className="max-w-[1320px] mx-auto px-10 py-12">
      <div className="flex items-center gap-2 mono text-[11px] text-mandik-steel-70 mb-10">
        <a href="#" className="hover:text-accent">Výroba</a>
        <span>/</span>
        <a href="#" className="hover:text-accent">AHC komponenty</a>
        <span>/</span>
        <a href="#" className="hover:text-accent">Protipožární klapky</a>
        <span>/</span>
        <span className="text-mandik-ink">PKTM III+</span>
      </div>

      <div className="grid grid-cols-12 gap-10 items-start">
        <div className="col-span-7">
          <CategoryBand color="#74d1ea" label="AHC komponenty · Protipožární klapky" kicker="kód 28.3.140" />
          <h1 className="h-display text-[88px] leading-[0.95] mt-6">PKTM III+</h1>
          <div className="mt-3 text-mandik-steel-80 text-[18px] max-w-xl">
            Protipožární klapka s tepelnou pojistkou pro obdélníkové potrubí. List klapky z kalcium-silikátu. Certifikace EI 30 — EI 120.
          </div>

          <div className="mt-10 flex items-center gap-px bg-mandik-rule hairline">
            {[
              ["EI 120 S", "Třída"],
              ["1 600×1 000", "Max. rozměr (mm)"],
              ["32 Pa", "Δp @ 6 m/s"],
              ["72 °C", "Aktivace pojistky"],
              ["BFL230", "Servopohon"],
            ].map(([v, k]) => (
              <div key={k} className="bg-white p-5 flex-1 min-w-[140px]">
                <div className="mono text-[10px] uppercase tracking-wider text-mandik-steel-70">{k}</div>
                <div className="h-display text-[22px] mt-1">{v}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Button variant="primary" href="#downloads">Stáhnout dokumentaci</Button>
            <Button variant="ghost" href="#">Poptat / konfigurovat</Button>
            <a href="#" className="mono text-[11px] text-mandik-steel uppercase tracking-wider hover:text-accent">+ porovnat</a>
          </div>
        </div>
        <div className="col-span-5">
          <DamperCutaway height={380} autoplay />
          <div className="mt-3 grid grid-cols-3 gap-px bg-mandik-rule hairline">
            {["FOTO 01","FOTO 02","FOTO 03"].map((p) => (
              <div key={p} className="bg-white aspect-square img-placeholder">{p}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Downloads = () => (
  <section id="downloads" className="bg-mandik-paper-soft">
    <div className="max-w-[1320px] mx-auto px-10 py-20">
      <div className="grid grid-cols-12 gap-10 items-end mb-10">
        <div className="col-span-7">
          <SectionLabel color="#26d07c">Ke stažení</SectionLabel>
          <SectionTitle>Dokumentace<br/>v ≤ 2 kliknutí.</SectionTitle>
        </div>
        <div className="col-span-5 text-sm text-mandik-steel-80">
          Vše bez registrace. PDF · DWG · RFA · IFC · STEP. Strojově čitelné protokoly pro výpočtové nástroje.
        </div>
      </div>

      <div className="grid grid-cols-12 gap-px bg-mandik-rule hairline">
        <div className="col-span-3 bg-white p-6">
          <div className="h-label text-[11px] text-mandik-steel mb-4">Filtry</div>
          <div className="space-y-4 text-sm">
            <div>
              <div className="mono text-[10px] text-mandik-steel-70 uppercase tracking-wider mb-2">Formát</div>
              <div className="flex flex-wrap gap-1">
                {["VŠE","PDF","DWG","RFA","IFC","STEP","BACnet"].map((f, i) => (
                  <span key={f} className={`px-2 py-1 mono text-[11px] ${i===0 ? "bg-mandik-steel text-white" : "bg-mandik-paper-soft text-mandik-steel hover:bg-mandik-rule cursor-pointer"}`}>{f}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="mono text-[10px] text-mandik-steel-70 uppercase tracking-wider mb-2">Jazyk</div>
              <div className="flex gap-1">
                {["CS","EN","DE","UK"].map((l) => (
                  <span key={l} className="px-2 py-1 mono text-[11px] bg-mandik-paper-soft text-mandik-steel hover:bg-mandik-rule cursor-pointer">{l}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="mono text-[10px] text-mandik-steel-70 uppercase tracking-wider mb-2">Třída EI</div>
              <div className="flex gap-1 flex-wrap">
                {["30","60","90","120"].map((l) => (
                  <span key={l} className="px-2 py-1 mono text-[11px] bg-mandik-paper-soft text-mandik-steel hover:bg-mandik-rule cursor-pointer">EI {l}</span>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-mandik-rule mono text-[11px] text-mandik-steel-70 leading-relaxed">
              Hromadné stažení balíčku ZIP — vyberte soubory a klikněte „Stáhnout vybrané".
            </div>
          </div>
        </div>

        <div className="col-span-9 bg-white">
          <div className="grid grid-cols-[80px_1fr_140px_120px_90px_40px] gap-5 px-5 py-3 mono text-[10px] uppercase tracking-wider text-mandik-steel-70 border-b border-mandik-rule">
            <div>Typ</div><div>Soubor</div><div>Verze</div><div>Jazyk</div><div className="text-right">Velikost</div><div></div>
          </div>
          {DOWNLOADS.map((d) => <DownloadRow key={d.name} d={d} />)}
          <div className="px-5 py-4 flex items-center justify-between bg-mandik-paper-soft">
            <div className="mono text-[11px] text-mandik-steel-70">10 souborů · ~33 MB</div>
            <Button variant="primary" href="#">Stáhnout vše (ZIP)</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TabbedSpecs = () => {
  const [tab, setTab] = React.useState("technical");
  const tabs = [
    { id: "technical", label: "Technické parametry" },
    { id: "rozmery", label: "Rozměry & rozsah" },
    { id: "instalace", label: "Instalace" },
    { id: "udrzba", label: "Údržba" },
    { id: "rizeni", label: "Řízení & BACnet" },
  ];

  return (
    <section className="bg-white border-t border-mandik-rule">
      <div className="max-w-[1320px] mx-auto px-10 py-20">
        <SectionLabel>Specifikace</SectionLabel>
        <div className="flex items-center gap-px bg-mandik-rule hairline mb-10 overflow-x-auto no-bar">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`bg-white px-5 py-3 h-label text-[11px] whitespace-nowrap transition-colors ${tab===t.id ? "text-accent" : "text-mandik-steel hover:text-mandik-ink"}`}
            >{t.label}</button>
          ))}
        </div>

        {tab === "technical" && (
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-6">
              <SpecTable rows={[
                ["Třída požární odolnosti", "EI 30 / 60 / 90 / 120 S"],
                ["Tvar průřezu", "Obdélníkový / čtvercový"],
                ["Rozsah B × H", "200 × 200 — 1 600 × 1 000 mm (krok 5 mm)"],
                ["Skříň", "Kalcium-silikát Promatect-L500, t = 38 mm"],
                ["List klapky", "Kalcium-silikát, jednolist"],
                ["Provozní teplota okolí", "−30 °C / +50 °C, max. 95 % rel. vlhkost"],
                ["Aktivační teplota", "72 °C (volitelně 95 °C)"],
                ["Třída těsnosti při zavřené poloze", "Třída 4 dle EN 1751"],
                ["Skříň — třída těsnosti", "Třída C dle EN 1751"],
              ]} />
            </div>
            <div className="col-span-6">
              <SpecTable rows={[
                ["Servopohon — verze", "BFL230, BFL24, BFLT24-T-ST"],
                ["Napájení servopohonu", "230 V AC / 24 V AC/DC"],
                ["Doba zavření", "≤ 60 s při výpadku napájení"],
                ["Signalizace polohy", "2× SPDT, IP54"],
                ["Komunikace", "BACnet MS/TP, Modbus RTU (volitelně)"],
                ["Připojení k potrubí", "Příruba EN 1505, manžeta SR-S"],
                ["Hmotnost (typ. 600 × 400)", "12,4 kg"],
                ["Záruka", "5 let na konstrukci · 2 roky na servopohon"],
                ["Certifikace", "ČSN EN 15650, EN 1366-2, 1366-8"],
              ]} />
            </div>
          </div>
        )}
        {tab !== "technical" && (
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-7">
              <div className="img-placeholder aspect-[4/3]">
                {tab === "rozmery" && "ROZMĚROVÝ DIAGRAM"}
                {tab === "instalace" && "INSTALACE — DETAIL ZDIVO/SDK"}
                {tab === "udrzba" && "ÚDRŽBA — ROČNÍ TEST"}
                {tab === "rizeni" && "SCHÉMA BACNET / MODBUS"}
              </div>
            </div>
            <div className="col-span-5">
              <SpecTable rows={[
                ["Položka A", "Hodnota referenční"],
                ["Položka B", "Hodnota referenční"],
                ["Položka C", "Hodnota referenční"],
                ["Položka D", "Hodnota referenční"],
              ]} />
              <div className="mt-5 text-sm text-mandik-steel-80">Pro vyplnění obsahu této záložky odkážeme na manuál v sekci „Ke stažení".</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Related = () => (
  <section className="bg-mandik-paper-soft">
    <div className="max-w-[1320px] mx-auto px-10 py-20">
      <SectionLabel color="#74d1ea">Související výrobky · Protipožární klapky</SectionLabel>
      <SectionTitle className="mb-10">Z&nbsp;rodiny PK<span className="text-mandik-steel">.</span></SectionTitle>
      <div className="grid grid-cols-4 gap-px bg-mandik-rule hairline">
        {[
          { code: "PKI-EI", label: "Kruhový průřez · EI 120", note: "⌀ 100 — 800 mm" },
          { code: "FDMQ", label: "Multilist · velké průřezy", note: "do 2 000 × 1 500" },
          { code: "PKTM SE", label: "Pro suchou výstavbu", note: "EI 60 / EI 90" },
          { code: "PKD-EX", label: "Provedení Ex (ATEX)", note: "Zóna 1 / 21" },
        ].map((p) => (
          <a key={p.code} href="#" className="tile relative bg-white p-5">
            <span className="tile-bar" style={{ background: "#74d1ea" }} />
            <div className="aspect-square img-placeholder relative mb-4">
              <span>{p.code}</span>
            </div>
            <div className="h-display text-[18px]">{p.code}</div>
            <div className="text-[13px] text-mandik-steel-80">{p.label}</div>
            <div className="mono text-[11px] text-mandik-steel-70 mt-2">{p.note}</div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export const ProductDetail = ({ onNav }) => (
  <div data-screen-label="ProductDetail" className="page-enter">
    <ProductHero />
    <Downloads />
    <TabbedSpecs />
    <Related />
  </div>
);
