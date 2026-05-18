"use client";

import React from "react";

export const DamperCutaway = ({ open: openProp, autoplay = false, height = 360 }) => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { if (openProp != null) setOpen(openProp); }, [openProp]);
  React.useEffect(() => {
    if (!autoplay) return;
    let t;
    const cycle = () => {
      setOpen(true);
      t = setTimeout(() => { setOpen(false); t = setTimeout(cycle, 2200); }, 2200);
    };
    cycle();
    return () => clearTimeout(t);
  }, [autoplay]);

  const W = 720, H = 360;
  const bladeAngle = open ? 0 : 90;
  return (
    <div
      className="relative bg-mandik-paper-soft hairline"
      onMouseEnter={() => !autoplay && setOpen(true)}
      onMouseLeave={() => !autoplay && setOpen(false)}
      onClick={() => !autoplay && setOpen(!open)}
      style={{ height }}
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id="metal-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#506077" strokeWidth="0.5" />
          </pattern>
        </defs>

        <rect x="40" y="60" width="20" height="240" fill="url(#metal-hatch)" stroke="#506077" strokeWidth="1" />
        <rect x="660" y="60" width="20" height="240" fill="url(#metal-hatch)" stroke="#506077" strokeWidth="1" />
        <rect x="60" y="60" width="600" height="8" fill="#506077" />
        <rect x="60" y="292" width="600" height="8" fill="#506077" />

        <rect x="60" y="68" width="600" height="224" fill="#ffffff" stroke="#506077" strokeWidth="0.8" />

        <rect x="90" y="120" width="44" height="120" fill="#ffffff" stroke="#506077" strokeWidth="1" />
        <text x="112" y="115" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#506077">BFL230</text>
        <g stroke="#506077" strokeWidth="0.8" fill="none">
          {[0,1,2,3,4,5,6,7].map(i => (
            <ellipse key={i} cx="112" cy={130 + i*13} rx="14" ry="3" />
          ))}
        </g>
        <line x1="134" y1="180" x2="170" y2="180" stroke="#506077" strokeWidth="2" />

        <g>
          <rect x="170" y="170" width="20" height="20" fill="#f2a900" stroke="#1a1a1a" strokeWidth="0.8" />
          <text x="180" y="206" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#506077">72°C</text>
        </g>

        <g transform={`translate(400 180) rotate(${bladeAngle})`} className="blade">
          <rect x="-100" y="-10" width="200" height="20" fill="#506077" />
          {open && (
            <g style={{ animation: "pageIn 240ms ease-out both" }}>
              <rect x="-100" y="-10" width="200" height="2.5" fill="#26d07c" />
              <rect x="-100" y="7.5" width="200" height="2.5" fill="#26d07c" />
            </g>
          )}
          <rect x="-101" y="-10" width="2" height="20" fill="#1a1a1a" />
          <rect x="99" y="-10" width="2" height="20" fill="#1a1a1a" />
          <circle cx="0" cy="0" r="8" fill="#ffffff" stroke="#506077" strokeWidth="1.4" />
          <circle cx="0" cy="0" r="2.5" fill="#506077" />
        </g>

        <g stroke="#506077" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.55">
          <line x1="400" y1="76" x2="400" y2="172" />
          <line x1="400" y1="188" x2="400" y2="284" />
        </g>

        {open && (
          <g stroke="#26d07c" strokeWidth="1.4" fill="none" style={{ animation: "pageIn 240ms ease-out both" }}>
            {[110, 250].map((y) => (
              <g key={y}>
                <line x1="200" y1={y} x2="540" y2={y} />
                <path d={`M540 ${y} l-8 -4 M540 ${y} l-8 4`} />
              </g>
            ))}
          </g>
        )}

        <g fontFamily="JetBrains Mono" fontSize="10" fill="#506077">
          <line x1="60" y1="40" x2="660" y2="40" stroke="#506077" strokeWidth="0.5" />
          <line x1="60" y1="34" x2="60" y2="46" stroke="#506077" strokeWidth="0.5" />
          <line x1="660" y1="34" x2="660" y2="46" stroke="#506077" strokeWidth="0.5" />
          <text x="360" y="32" textAnchor="middle">B = 800 mm</text>

          <line x1="700" y1="68" x2="700" y2="292" stroke="#506077" strokeWidth="0.5" />
          <line x1="694" y1="68" x2="706" y2="68" stroke="#506077" strokeWidth="0.5" />
          <line x1="694" y1="292" x2="706" y2="292" stroke="#506077" strokeWidth="0.5" />
          <text x="708" y="184" textAnchor="start">H = 500 mm</text>
        </g>

        <g fontFamily="Saira Semi Condensed" fontWeight="600" fontSize="11" fill="#1a1a1a">
          <line x1="112" y1="120" x2="112" y2="80" stroke="#1a1a1a" strokeWidth="0.6" />
          <text x="112" y="74" textAnchor="middle">SERVOPOHON</text>

          <line x1="180" y1="170" x2="180" y2="220" stroke="#1a1a1a" strokeWidth="0.6" />
          <text x="180" y="232" textAnchor="middle">TEPELNÁ POJISTKA</text>

          <line x1="400" y1="180" x2="500" y2="320" stroke="#1a1a1a" strokeWidth="0.6" />
          <text x="500" y="334" textAnchor="middle">LIST KLAPKY / CaSi</text>

          <line x1="50" y1="180" x2="20" y2="180" stroke="#1a1a1a" strokeWidth="0.6" />
          <text x="16" y="172" textAnchor="end">PŘÍRUBA</text>
          <text x="16" y="186" textAnchor="end" fontFamily="JetBrains Mono" fontSize="9" fill="#506077">EN 1505</text>
        </g>
      </svg>

      <div className="absolute bottom-4 left-4 flex items-center gap-3 mono text-[11px] text-mandik-steel">
        <span className={`w-2 h-2 ${open ? "bg-accent" : "bg-mandik-steel"}`} />
        <span>{open ? "STAV: OTEVŘENO · průchod 100%" : "STAV: ZAVŘENO · EI 120 S"}</span>
      </div>
      <div className="absolute bottom-4 right-4 h-label text-[10px] text-mandik-steel-70 select-none">
        {autoplay ? "AUTO" : "POHNI MYŠÍ / KLIKNI"}
      </div>
    </div>
  );
};
