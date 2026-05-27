"use client";

import React from "react";
import { Logo } from "./Primitives";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61577072474342",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mandik_as",
    path: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10A5 5 0 0012 7zm0 8a3 3 0 110-6 3 3 0 010 6zm6.5-8.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mandik-as",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@officialmandik",
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

export const Footer = ({ onNav, categories = [] }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-mandik-steel text-white mt-auto">
      {/* Pomyslné světlé rozdělení sekcí — výška odpovídá spodnímu stripu níže (border-t + py-4 + text-xs ≈ 49 px) */}
      <div className="bg-mandik-paper-soft h-[49px]" aria-hidden="true" />

      {/* Hlavní tělo */}
      <div className="max-w-[1320px] mx-auto px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1.6fr_1px_1fr] gap-0">
          {/* Sloupec 1 — logo + adresa + kontakt */}
          <div className="pb-10 lg:pb-0 lg:pr-12">
            {/* -ml-3 (= -12px): zarovnání s levou hranou rozbalovacího menu v hlavičce.
                Hodnotu lze měnit (-ml-2 = -8px, -ml-4 = -16px, …). */}
            <Logo invert size={56} onNav={onNav} className="-ml-4" />

            <div className="mt-8 space-y-6">
              <div>
                <p className="h-label text-[10px] text-white/45 mb-2">Adresa společnosti</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  MANDÍK, a.s.<br />
                  Dobříšská 550<br />
                  267 24 Hostomice<br />
                  Česká republika
                </p>
              </div>

              <div>
                <p className="h-label text-[10px] text-white/45 mb-2">Kontaktujte nás</p>
                <ul className="space-y-1.5 text-sm text-white/80">
                  <li>
                    <a href="tel:+420311706706" className="flex items-center gap-2 hover:text-white transition-colors">
                      <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +420 311 706 706
                    </a>
                  </li>
                  <li>
                    <a href="mailto:mandik@mandik.cz" className="flex items-center gap-2 hover:text-white transition-colors">
                      <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      mandik@mandik.cz
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mandik.cz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                      <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      www.mandik.cz
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Svislý oddělovač */}
          <div className="hidden lg:block bg-white/15" />

          {/* Sloupec 2 — Společnost + Výrobky */}
          <div className="pb-10 lg:pb-0 lg:px-12">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="h-label text-[10px] text-white/45 mb-4">Naše společnost</p>
                <ul className="space-y-2.5 text-sm text-white/75">
                  {[
                    { label: "O nás" },
                    { label: "Reference" },
                    { label: "Novinky" },
                    { label: "Kariéra" },
                    { label: "Certifikace a dokumenty" },
                    { label: "Kontakt" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a href="/" className="hover:text-white transition-colors">{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="h-label text-[10px] text-white/45 mb-4">Výrobky</p>
                <ul className="space-y-2.5 text-sm text-white/75">
                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <li key={cat.slug}>
                        <a href={`/vyroba/${cat.slug}`} className="hover:text-white transition-colors">
                          {cat.name}
                        </a>
                      </li>
                    ))
                  ) : (
                    <>
                      <li><a href="/vyroba/divize/vzduchotechnicke-komponenty" className="hover:text-white transition-colors">AHC komponenty</a></li>
                      <li><a href="/vyroba/divize/vzduchotechnicke-jednotky" className="hover:text-white transition-colors">AHU jednotky</a></li>
                      <li><a href="/vyroba/divize/prumyslove-vytapeni" className="hover:text-white transition-colors">Průmyslové topné systémy</a></li>
                      <li><a href="/vyroba/divize/specialni-aplikace" className="hover:text-white transition-colors">Speciální aplikace</a></li>
                    </>
                  )}
                  <li><a href="/" className="hover:text-white transition-colors">Servis</a></li>
                  <li><a href="/" className="hover:text-white transition-colors">Ke stažení</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Svislý oddělovač */}
          <div className="hidden lg:block bg-white/15" />

          {/* Sloupec 3 — Sociální sítě */}
          <div className="lg:pl-12">
            <p className="h-label text-[10px] text-white/45 mb-4">Sociální sítě</p>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {SOCIAL_LINKS.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spodní strip — copyright + právní */}
      <div className="bg-mandik-steel-90 border-t border-white/10">
        <div className="max-w-[1320px] mx-auto px-10 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white/45">
          <p>© 1990–{year} MANDÍK, a.s. Všechna práva vyhrazena.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">Zásady zpracování osobních údajů</a>
            <span className="text-white/25">|</span>
            <a href="#" className="hover:text-white/70 transition-colors">Cookies</a>
            <span className="text-white/25">|</span>
            <a href="#" className="hover:text-white/70 transition-colors">Whistleblowing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
