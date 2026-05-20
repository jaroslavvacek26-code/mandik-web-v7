"use client";

import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";
import { ProductDetail } from "./ProductDetail";
import { ReferencesScreen } from "./References";
import { DownloadsScreen } from "./Downloads";
import { AboutScreen } from "./About";
import { ContactStub } from "./Contact";

const DEFAULT_TWEAKS = {
  heroMedia: "video",
  parallax: true,
  accent: "#26d07c",
};

export const App = ({ categories = [] }) => {
  const [route, setRoute] = React.useState("home");
  const [lang, setLang] = React.useState("cs");
  const tweaks = DEFAULT_TWEAKS;

  const onNav = (next) => {
    setRoute(next);
    if (typeof window !== "undefined" && window.scrollTo) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header route={route} onNav={onNav} lang={lang} onLang={setLang} categories={categories} />

      <main key={route} className="flex-1">
        {route === "home" && <Homepage onNav={onNav} tweaks={tweaks} />}
        {route === "product" && <ProductDetail onNav={onNav} />}
        {route === "references" && <ReferencesScreen onNav={onNav} />}
        {route === "downloads" && <DownloadsScreen onNav={onNav} />}
        {route === "about" && <AboutScreen onNav={onNav} />}
        {route === "category" && <ProductDetail onNav={onNav} />}
        {route === "contact" && <ContactStub onNav={onNav} />}
      </main>

      <Footer onNav={onNav} categories={categories} />
    </div>
  );
};
