"use client";

import React from "react";
import { Logo } from "./Primitives";

const FOOTER_COLS = [
  {
    title: "Výroba",
    items: ["VZT komponenty", "AHU jednotky", "Průmyslové topné systémy", "Speciální aplikace", "Zakázkový vývoj"],
  },
  {
    title: "Pro projektanty",
    items: ["Centrum dokumentace", "DWG / RFA modely", "Certifikáty (ISO, KTA, BRE)", "Kalkulátor tlakové ztráty", "Technická podpora"],
  },
  {
    title: "Společnost",
    items: ["O společnosti", "Reference", "Novinky", "Kariéra", "Kontakt"],
  },
  {
    title: "Distribuce",
    items: ["Evropská zastoupení", "Stát se distributorem", "B2B portál", "Termíny dodání", "Reklamace"],
  },
];

export const Footer = ({ onNav }) => (
  <footer className="bg-mandik-steel text-white mt-24">
    <div className="max-w-[1320px] mx-auto px-10 pt-16 pb-10">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4">
          <Logo invert size={64} onNav={onNav} />
          <p className="mt-6 text-white/75 text-sm max-w-xs leading-relaxed">
            Česká rodinná společnost. Vyrábíme protipožární a vzduchotechnické komponenty, AHU jednotky a průmyslové topné systémy od roku 1990.
          </p>
          <div className="mt-8 mono text-[12px] text-white/70 space-y-1">
            <div>Dobříšská 550</div>
            <div>267 24 Hostomice</div>
            <div>Česká republika</div>
            <div className="pt-3">+420 318 697 111</div>
            <div>mandik@mandik.cz</div>
          </div>
        </div>
        {FOOTER_COLS.map((c) => (
          <div key={c.title} className="col-span-2">
            <div className="h-label text-[11px] text-white/55 mb-4">{c.title}</div>
            <ul className="space-y-2.5 text-sm text-white/85">
              {c.items.map((i) => (
                <li key={i}><a href="#" className="hover:text-accent">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-6 border-t border-white/15 flex items-center justify-between text-[12px] text-white/55 mono">
        <div className="flex items-center gap-5">
          <span>© 1990–2026 MANDÍK, a.s.</span>
          <span className="opacity-50">·</span>
          <span>IČ 26212412</span>
          <span className="opacity-50">·</span>
          <span>DIČ CZ26212412</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Zásady zpracování osobních údajů</a>
          <a href="#" className="hover:text-white">Cookies</a>
          <a href="#" className="hover:text-white">Whistleblowing</a>
        </div>
      </div>
    </div>
  </footer>
);
