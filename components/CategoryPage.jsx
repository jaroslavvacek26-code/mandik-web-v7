"use client";

import React from "react";
import { SectionLabel } from "./Primitives";

// Vykresluje stránku kategorie výrobků (např. /vyroba/pozarni-technika).
// Data odpovídají odpovědi mandik.info/api/v1/ltu/portfolio (jeden item z pole).

const GroupCard = ({ group, categorySlug }) => {
  const img = group.gallery?.[0];
  return (
    <a
      href={`/vyroba/${categorySlug}/${group.slug}`}
      className="tile group relative bg-white hairline overflow-hidden flex flex-col transition-shadow hover:shadow-lg"
    >
      <span className="tile-bar" style={{ background: "#26d07c" }} />
      <div className="relative aspect-[4/3] bg-mandik-paper-soft">
        {img ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={img.url}
            alt={img.description || group.name}
            className="absolute inset-0 w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="h-display text-5xl text-mandik-steel/20">M</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="h-display text-[18px] text-mandik-ink group-hover:text-accent transition-colors leading-tight">
          {group.name}
        </h3>
        {group.subtitle && (
          <p className="mono text-[11px] text-mandik-steel-70 mt-1">{group.subtitle}</p>
        )}
      </div>
    </a>
  );
};

const GroupGrid = ({ groups = [], categorySlug }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {groups.map((g) => (
      <GroupCard key={g.public_id} group={g} categorySlug={categorySlug} />
    ))}
  </div>
);

export const CategoryPage = ({ category }) => {
  const hasSubcategories = (category.subcategories?.length ?? 0) > 0;

  return (
    <div className="bg-white">
      <div className="max-w-[1320px] mx-auto px-10 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mono text-[11px] text-mandik-steel-70 mb-10">
          <a href="/" className="hover:text-accent transition-colors">Domů</a>
          <span>/</span>
          <span className="text-mandik-ink">{category.name}</span>
        </nav>

        {/* Hlavička kategorie */}
        <div className="mb-14">
          <SectionLabel>Výrobky</SectionLabel>
          <h1 className="h-display text-[48px] leading-[1.05] text-mandik-ink mb-5">
            {category.name}
          </h1>
          <div className="w-16 h-1 bg-accent mb-6" />
          {category.description && (
            <p className="text-mandik-steel-80 leading-relaxed max-w-3xl text-[15px]">
              {category.description}
            </p>
          )}
        </div>

        {/* Skupiny */}
        {hasSubcategories ? (
          <div className="space-y-14">
            {category.subcategories.map((sub) => (
              <section key={sub.public_id}>
                <div className="flex items-center gap-4 mb-6">
                  {sub.gallery?.[0] && (
                    <div className="relative w-12 h-12 overflow-hidden shrink-0 hairline">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={sub.gallery[0].url} alt={sub.name} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div>
                    <h2 className="h-display text-[26px] text-mandik-ink">{sub.name}</h2>
                    <div className="mt-1 w-10 h-0.5 bg-accent" />
                  </div>
                </div>
                <GroupGrid groups={sub.groups} categorySlug={category.slug} />
              </section>
            ))}
          </div>
        ) : (
          <GroupGrid groups={category.groups} categorySlug={category.slug} />
        )}
      </div>
    </div>
  );
};
