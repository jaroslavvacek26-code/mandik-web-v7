"use client";

import React from "react";
import { Logo } from "./Primitives";

const NAV = [
  {
    key: "vyroba",
    label: "Výroba",
    columns: [
      {
        title: "VZT komponenty",
        color: "#74d1ea",
        items: [
          { name: "Protipožární klapky", code: "PKTM III+ · PKI-EI · FDMQ", route: "product" },
          { name: "Regulační klapky", code: "RKKTM · RK-O · RKQ", route: "category" },
          { name: "Mřížky a anemostaty", code: "ALCM · KSM · DVS", route: "category" },
          { name: "Tlumiče hluku", code: "MAA · MSA · MAR", route: "category" },
        ],
      },
      {
        title: "AHU jednotky",
        color: "#26d07c",
        items: [
          { name: "MANDÍK AHU", code: "do 100 000 m³/h", route: "category" },
          { name: "Sestavné jednotky", code: "RLT certifikace", route: "category" },
          { name: "Hygienické provedení", code: "VDI 6022 · DIN 1946-4", route: "category" },
        ],
      },
      {
        title: "Topné systémy",
        color: "#f2a900",
        items: [
          { name: "Teplovzdušné agregáty", code: "MONZUN", route: "category" },
          { name: "Plynová tepelná čerpadla", code: "HEATWING", route: "category" },
          { name: "Sálavé panely", code: "HELIOS / GAMA", route: "category" },
        ],
      },
      {
        title: "Speciální aplikace",
        color: "#ffd700",
        items: [
          { name: "Jaderné elektrárny", code: "KTA 1401 · 10CFR APP10", route: "category" },
          { name: "Tunelové systémy", code: "EN 12101-3", route: "category" },
          { name: "Zakázkový vývoj", code: "OEM", route: "category" },
        ],
      },
    ],
  },
  { key: "ke-stazeni", label: "Ke stažení", route: "downloads" },
  { key: "reference", label: "Reference", route: "references" },
  { key: "firma", label: "O společnosti", route: "about" },
  { key: "novinky", label: "Novinky" },
  { key: "kariera", label: "Kariéra" },
  { key: "kontakt", label: "Kontakt" },
];

const LanguageSwitch = ({ value = "cs", onChange }) => (
  <div className="flex items-center gap-1 h-label text-[11px]">
    {["cs", "en", "de", "uk"].map((l) => (
      <button
        key={l}
        onClick={() => onChange?.(l)}
        className={`px-1.5 py-0.5 transition-colors ${value === l ? "text-white" : "text-white/55 hover:text-white"}`}
      >
        {l.toUpperCase()}
      </button>
    ))}
  </div>
);

const Search = ({ open, setOpen }) => {
  const inputRef = React.useRef(null);
  React.useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  return (
    <div className={`flex items-center transition-[width] duration-200 ease-out ${open ? "w-72" : "w-9"}`}>
      <button
        aria-label="Hledat"
        onClick={() => setOpen(!open)}
        className="w-9 h-9 flex items-center justify-center text-white/80 hover:text-white"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M11 11l3.2 3.2" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>
      {open && (
        <input
          ref={inputRef}
          placeholder="hledat výrobek, kód, dokument…"
          className="bg-transparent border-b border-white/40 placeholder:text-white/45 text-white text-sm w-full pb-1 outline-none focus:border-accent mono"
        />
      )}
    </div>
  );
};

const MegaMenu = ({ active, onEnter, onLeave }) => {
  if (!active || !active.columns) return null;
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="absolute left-0 right-0 top-full bg-white text-mandik-ink shadow-[0_1px_0_#e1e3e8] hairline"
      style={{ animation: "pageIn 180ms ease-out both" }}
    >
      <div className="max-w-[1320px] mx-auto px-10 py-10 grid grid-cols-4 gap-px bg-mandik-rule">
        {active.columns.map((col) => (
          <div key={col.title} className="bg-white p-6 hover:bg-mandik-paper-soft transition-colors">
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-2 w-8" style={{ background: col.color }} />
              <span className="h-label text-[11px] text-mandik-ink">{col.title}</span>
            </div>
            <ul className="space-y-3">
              {col.items.map((it) => (
                <li key={it.name}>
                  <a
                    href={it.route === "product" ? "#/vyroba/pktm-iii-plus" : "#/vyroba"}
                    data-route={it.route}
                    className="block group"
                  >
                    <div className="h-display text-[16px] text-mandik-ink group-hover:text-mandik-steel">
                      {it.name}
                    </div>
                    <div className="mono text-[11px] text-mandik-steel-70 mt-0.5">{it.code}</div>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#/vyroba"
              className="mt-6 inline-flex items-center gap-2 h-label text-[10px] text-mandik-steel hover:text-accent"
            >
              přehled skupiny
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5h8M6 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4"/></svg>
            </a>
          </div>
        ))}
      </div>
      <div className="border-t border-mandik-rule">
        <div className="max-w-[1320px] mx-auto px-10 py-4 flex items-center justify-between mono text-[11px] text-mandik-steel-70">
          <span>3 200+ položek v katalogu · 12 jazyků dokumentace · aktualizace 14. 5. 2026</span>
          <a href="#/ke-stazeni" data-route="downloads" className="text-mandik-steel hover:text-accent uppercase tracking-wider">otevřít centrum dokumentace ↗</a>
        </div>
      </div>
    </div>
  );
};

export const Header = ({ route, onNav, lang = "cs", onLang }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [barX, setBarX] = React.useState(0);
  const navRef = React.useRef(null);
  const closeTimer = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = NAV.find((n) => n.key === hovered);

  const cancelClose = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setHovered(null), 140);
  };

  const handleEnter = (e, key) => {
    cancelClose();
    setHovered(key);
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();
    setBarX(rect.left - parentRect.left + rect.width / 2);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-[background,backdrop-filter] duration-200 ${
        scrolled ? "header-blur" : "bg-mandik-steel"
      }`}
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
    >
      {/* top utility row */}
      <div className="border-b border-white/10">
        <div className="max-w-[1320px] mx-auto px-10 h-9 flex items-center justify-between text-white/70 text-[11px]">
          <div className="flex items-center gap-6 mono">
            <span>ISO 9001</span>
            <span className="opacity-50">·</span>
            <span>KTA 1401</span>
            <span className="opacity-50">·</span>
            <span>EUROVENT</span>
            <span className="opacity-50">·</span>
            <span>BRE</span>
            <span className="opacity-50">·</span>
            <span>RLT</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+420318697111" className="hover:text-white mono">+420 318 697 111</a>
            <a href="#" className="hover:text-white h-label">Pro distributory</a>
            <LanguageSwitch value={lang} onChange={onLang} />
          </div>
        </div>
      </div>

      {/* main bar */}
      <div className="max-w-[1320px] mx-auto px-10 h-[68px] flex items-center justify-between relative">
        <Logo invert size={78} onNav={onNav} />
        <nav ref={navRef} className="relative flex items-center gap-1">
          {NAV.map((n) => {
            const isActive = route === n.route;
            return (
              <a
                key={n.key}
                href="#"
                onMouseEnter={(e) => handleEnter(e, n.key)}
                onClick={(e) => { e.preventDefault(); if (n.route) onNav(n.route); setHovered(null); }}
                className={`relative px-4 h-[68px] flex items-center h-label text-[11px] transition-colors ${
                  isActive ? "text-accent" : "text-white/85 hover:text-white"
                }`}
              >
                {n.label}
              </a>
            );
          })}
          {hovered && (
            <span
              className="absolute bottom-0 h-[2px] w-12 bg-accent transition-transform duration-150"
              style={{ transform: `translateX(${barX - 24}px)` }}
            />
          )}
        </nav>
        <div className="flex items-center gap-4">
          <Search open={searchOpen} setOpen={setSearchOpen} />
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onNav("contact"); }}
            className="hidden lg:inline-flex h-9 items-center px-4 bg-accent text-mandik-ink h-label text-[11px] hover:bg-[#1ec170]"
          >
            Poptávka
          </a>
        </div>

        <MegaMenu active={active} onEnter={cancelClose} onLeave={scheduleClose} />
      </div>
    </header>
  );
};
