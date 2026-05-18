"use client";

import React from "react";
import { SectionLabel, SectionTitle, Button, Photo, Stat, useInView } from "./Primitives";

const TIMELINE = [
  { year: "1990", title: "Založení společnosti", body: "Patrik Mandík zakládá v Hostomicích malou kovovýrobu. Prvních 7 zaměstnanců." },
  { year: "1995", title: "První protipožární klapky", body: "PKTM I — první klapka s certifikací EI 60 pro český trh." },
  { year: "2002", title: "AHU jednotky MANDÍK", body: "Rozšíření portfolia o sestavné vzduchotechnické jednotky. Certifikace Eurovent." },
  { year: "2008", title: "Hala B — automatizace", body: "Nová výrobní hala s CNC ohraňovacími lisy. Kapacita ×3." },
  { year: "2014", title: "Jaderná technika", body: "Certifikace KTA 1401, 10CFR APP10. První dodávky pro evropské JE." },
  { year: "2019", title: "Vstup na britský trh", body: "Certifikace BRE. Dodávky 22 Bishopsgate, Battersea Power Station." },
  { year: "2024", title: "Hala C — AHU expanze", body: "+18 000 m² pro velkokapacitní AHU jednotky. Kapacita 100 000 m³/h." },
  { year: "2026", title: "BACnet, BIM-first", body: "Kompletní portfolio přechází na BACnet MS/TP a Revit LOD 350." },
];

const ParallaxScene = ({ y, label, h = 540, big }) => (
  <div className="relative overflow-hidden bg-mandik-steel hairline" style={{ height: h }}>
    <div className="absolute inset-0" style={{ transform: `translateY(${y * 0.18}px) scale(1.08)`, transition: "transform 50ms linear" }}>
      <div className="w-full h-full img-placeholder">
        <span style={{ fontSize: 13 }}>{label}</span>
      </div>
    </div>
    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,26,0.5), transparent)" }} />
    {big && (
      <div className="absolute bottom-8 left-8 right-8 text-white">
        <div className="mono text-[10px] uppercase tracking-wider text-white/70 mb-2">{big.k}</div>
        <div className="h-display text-[44px] leading-[1.05] max-w-2xl">{big.t}</div>
      </div>
    )}
  </div>
);

const Timeline = () => (
  <section className="bg-white border-t border-mandik-rule">
    <div className="max-w-[1320px] mx-auto px-10 py-24">
      <SectionLabel>Časová osa</SectionLabel>
      <SectionTitle className="mb-14">Tři dekády české výroby<span className="text-mandik-steel">.</span></SectionTitle>

      <div className="grid grid-cols-4 gap-px bg-mandik-rule hairline">
        {TIMELINE.map((t) => (
          <div key={t.year} className="bg-white p-7">
            <div className="h-display text-[36px] text-mandik-steel">{t.year}</div>
            <div className="mt-2 h-1 w-8 bg-accent" />
            <div className="mt-5 h-display text-[18px] leading-tight">{t.title}</div>
            <div className="mt-2 text-[13px] text-mandik-steel-80 leading-relaxed">{t.body}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Numbers = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref);
  return (
    <section ref={ref} className="bg-mandik-paper-soft">
      <div className="max-w-[1320px] mx-auto px-10 py-24">
        <SectionLabel>Výroba v číslech</SectionLabel>
        <div className="grid grid-cols-6 gap-px bg-mandik-rule hairline mt-8">
          <div className="bg-white p-7"><Stat value={62000} suffix=" m²" label="Výrobních ploch" sub="Hala A · B · C" inView={inView} /></div>
          <div className="bg-white p-7"><Stat value={4} label="CNC ohýbací linky" sub="Trumpf · Amada" inView={inView} /></div>
          <div className="bg-white p-7"><Stat value={2} suffix="" label="Vlastní zkušebny" sub="EI 240 · Δp · akustika" inView={inView} /></div>
          <div className="bg-white p-7"><Stat value={372} label="Zaměstnanců" sub="z toho 56 ve vývoji" inView={inView} /></div>
          <div className="bg-white p-7"><Stat value={25800} suffix=" ks" label="Měsíční kapacita" sub="Klapky všech tříd" inView={inView} /></div>
          <div className="bg-white p-7"><Stat value={48700} suffix="+" label="Dokončených projektů" sub="1990–2026" inView={inView} /></div>
        </div>
      </div>
    </section>
  );
};

const Family = () => (
  <section className="bg-mandik-steel text-white">
    <div className="max-w-[1320px] mx-auto px-10 py-24 grid grid-cols-12 gap-10 items-center">
      <div className="col-span-5">
        <Photo label="RODINA MANDÍK · 2025" ratio="4/5" />
      </div>
      <div className="col-span-7">
        <SectionLabel color="#26d07c"><span className="text-accent">Rodinná firma</span></SectionLabel>
        <h2 className="h-display text-[44px] leading-[1.05]">Druhá generace.<br/>Stejná značka.</h2>
        <p className="mt-6 text-white/80 text-[16px] leading-relaxed max-w-xl">
          MANDÍK je rodinná společnost — od roku 1990 ve vlastnictví zakladatelské rodiny. Druhá generace převzala vedení v roce 2018. Vývoj, výroba i&nbsp;servis zůstávají v&nbsp;Hostomicích.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-px bg-white/10">
          {[
            { name: "Patrik Mandík st.", role: "Zakladatel · 1990" },
            { name: "Patrik Mandík ml.", role: "Generální ředitel" },
            { name: "Anna Mandíková", role: "Technický ředitel" },
          ].map((p) => (
            <div key={p.name} className="bg-mandik-steel p-5">
              <div className="h-display text-[18px]">{p.name}</div>
              <div className="mono text-[11px] text-white/65 mt-1">{p.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const AboutScreen = ({ onNav }) => {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div data-screen-label="About" className="page-enter pt-[108px]">
      <section className="bg-white">
        <div className="max-w-[1320px] mx-auto px-10 pt-12 pb-6">
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-8">
              <SectionLabel>O společnosti</SectionLabel>
              <h1 className="h-display text-[80px] leading-[0.92]">
                Hostomice. 1990.<br/>
                <span className="text-mandik-steel">Vyrábíme to,<br/>co se dá&nbsp;spočítat.</span>
              </h1>
            </div>
            <div className="col-span-4 text-mandik-steel-80 text-[15px] leading-relaxed">
              MANDÍK a.s. je česká rodinná společnost specializovaná na protipožární a vzduchotechnické komponenty, AHU jednotky a průmyslové topné systémy. Vyrábíme pro výškové budovy, jaderné elektrárny a technologické kampusy napříč Evropou.
            </div>
          </div>
        </div>

        <div className="max-w-[1320px] mx-auto px-10 pt-14 grid grid-cols-12 gap-px bg-mandik-rule hairline">
          <div className="col-span-7 bg-white">
            <ParallaxScene y={y - 600} h={620} label="LASER · CNC OHRAŇOVACÍ LIS TRUMPF TRUBEND 7000" big={{ k: "Hala A · 18 000 m²", t: "Ohyb plechu na 0,1 mm. Každý kus jde přes kontrolu rozměrů." }} />
          </div>
          <div className="col-span-5 bg-white p-10 flex flex-col justify-between">
            <div>
              <div className="mono text-[10px] uppercase tracking-wider text-mandik-steel-70">01 / 03</div>
              <div className="mt-3 h-display text-[28px] leading-tight">Plech, příruba, hrana.</div>
              <p className="mt-5 text-[14px] text-mandik-steel-80 leading-relaxed">
                Začínáme rolí pozinkovaného plechu z Liberecka. Tloušťka 0,8 — 1,5 mm. Laserové dělení, CNC ohyb, hraněná zámková spoj. Žádné gumy v&nbsp;požárně-bezpečnostní cestě.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-4 mono text-[12px]">
                <div><div className="text-mandik-steel-70">Tolerance</div><div className="text-mandik-ink text-[14px] mt-1">± 0,1 mm</div></div>
                <div><div className="text-mandik-steel-70">CNC linky</div><div className="text-mandik-ink text-[14px] mt-1">4 × Trumpf</div></div>
              </div>
            </div>
          </div>

          <div className="col-span-5 bg-white p-10 flex flex-col justify-between">
            <div>
              <div className="mono text-[10px] uppercase tracking-wider text-mandik-steel-70">02 / 03</div>
              <div className="mt-3 h-display text-[28px] leading-tight">List klapky z&nbsp;kalcium-silikátu.</div>
              <p className="mt-5 text-[14px] text-mandik-steel-80 leading-relaxed">
                Kalcium-silikátový list je srdcem každé protipožární klapky. Frézujeme z&nbsp;38 mm desky Promatect-L500. Po obvodu těsnění z&nbsp;intumescentní pásky — při 250&nbsp;°C nabobtná až 8×.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-4 mono text-[12px]">
                <div><div className="text-mandik-steel-70">Materiál</div><div className="text-mandik-ink text-[14px] mt-1">Promatect-L500</div></div>
                <div><div className="text-mandik-steel-70">Intumescence</div><div className="text-mandik-ink text-[14px] mt-1">×8 @ 250 °C</div></div>
              </div>
            </div>
          </div>
          <div className="col-span-7 bg-white">
            <ParallaxScene y={y - 1100} h={520} label="LIST KLAPKY · KALCIUM-SILIKÁT" big={{ k: "Frézovací linka", t: "38 mm Promatect-L500 — intumescentní těsnění po obvodu." }} />
          </div>

          <div className="col-span-7 bg-white">
            <ParallaxScene y={y - 1700} h={580} label="ZKUŠEBNA EI 240 · TESTOVACÍ BUŇKA" big={{ k: "Vlastní zkušebna · od 2014", t: "Každá nová verze klapky projde dvojí ohnivou zkouškou." }} />
          </div>
          <div className="col-span-5 bg-white p-10 flex flex-col justify-between">
            <div>
              <div className="mono text-[10px] uppercase tracking-wider text-mandik-steel-70">03 / 03</div>
              <div className="mt-3 h-display text-[28px] leading-tight">Test do destrukce.</div>
              <p className="mt-5 text-[14px] text-mandik-steel-80 leading-relaxed">
                Vlastní zkušebna podle EN 1366-2 a EN 1363-1. Klapku zatížíme provozním tlakem, zapálíme pec a měříme integritu po 30, 60, 90, 120 a&nbsp;240 minutách. Žádný výrobek neopustí halu bez certifikátu.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-4 mono text-[12px]">
                <div><div className="text-mandik-steel-70">Max. teplota pece</div><div className="text-mandik-ink text-[14px] mt-1">1 100 °C</div></div>
                <div><div className="text-mandik-steel-70">Zkoušek / rok</div><div className="text-mandik-ink text-[14px] mt-1">218</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Numbers />
      <Timeline />
      <Family />

      <section className="bg-white border-t border-mandik-rule">
        <div className="max-w-[1320px] mx-auto px-10 py-20 grid grid-cols-12 gap-10 items-center">
          <div className="col-span-8">
            <SectionLabel>Navštivte výrobu</SectionLabel>
            <h2 className="h-display text-[40px] leading-tight">Hostomice u Berouna · 49°51′N, 14°02′E</h2>
            <p className="mt-3 text-mandik-steel-80 text-[15px] max-w-2xl">
              Pro projekční kanceláře pořádáme exkurze prvních čtvrtků v měsíci. Plat. — 40 osob max. Domluvte si termín nebo si projděte 360° virtuální showroom.
            </p>
          </div>
          <div className="col-span-4 flex justify-end gap-3">
            <Button variant="ghost" href="#">360° showroom</Button>
            <Button variant="primary" href="#">Domluvit prohlídku</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
