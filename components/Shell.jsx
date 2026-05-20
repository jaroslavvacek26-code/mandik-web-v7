"use client";

import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

// Společný layout pro statické routy (např. /vyroba/[category]/[group]).
// Homepage si Header/Footer renderuje sama přes <App>, aby zachovala SPA-style
// přepínání obrazovek. Tady jen obalíme children fixed hlavičkou a patičkou.
export const Shell = ({ categories = [], children }) => {
  const [lang, setLang] = React.useState("cs");
  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} onLang={setLang} categories={categories} />
      <main className="flex-1 pt-[116px]">{children}</main>
      <Footer categories={categories} />
    </div>
  );
};
