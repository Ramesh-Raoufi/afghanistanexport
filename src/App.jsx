import React, { useEffect, useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { I18nProvider, useI18n, rtlLangs, supportedLangs } from "./i18n";
import logoAfghanistanExport from "./assets/logo-afghanistan-export.svg";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Exporters from "./pages/Exporters";
import Buyers from "./pages/Buyers";
import Logistics from "./pages/Logistics";
import News from "./pages/News";
import Resources from "./pages/Resources";
import Marketplace from "./pages/Marketplace";
import Calculator from "./pages/Calculator";

function AppShell() {
  const { t, lang, setLang } = useI18n();
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/products", label: t("nav.products") },
    { to: "/news", label: t("nav.news") },
    { to: "/resources", label: t("nav.resources") },
  ];
  const baseLink =
    "relative px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const isRTL = rtlLangs.includes(lang);
  return (
    <div
      className="app min-h-screen flex flex-col bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <header
        className={`bg-white/70 dark:bg-gray-900/70 backdrop-blur sticky top-0 z-40 shadow-sm border-b border-primary-100/40 dark:border-gray-800`}
      >
        <div
          className={`container-custom flex items-center gap-6 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <h1 className={"flex items-center py-2 pr-4"}>
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img
                src={logoAfghanistanExport}
                alt="Afghanistan Export"
                className={`h-14 w-auto ${
                  isRTL ? "ml-0 mr-2" : "-ml-2"
                } drop-shadow-sm transition-all`}
              />
            </Link>
          </h1>
          <nav
            className={`flex gap-1 text-sm font-medium ${
              isRTL ? "mr-auto" : "ml-auto"
            }`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${baseLink} ${
                    isActive
                      ? "text-white bg-primary-700 shadow-sm dark:bg-primary-600"
                      : "text-primary-700 hover:bg-primary-50 hover:text-primary-800 dark:text-primary-200 dark:hover:bg-gray-800 dark:hover:text-white"
                  } ${isRTL ? "rounded-md" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          {/* <div className={`flex items-center gap-2 ${isRTL ? "pr-2" : "pl-2"}`}>
            <button
              onClick={() => {
                const idx = supportedLangs.findIndex((l) => l.code === lang);
                const next = supportedLangs[(idx + 1) % supportedLangs.length];
                setLang(next.code);
              }}
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-primary-700 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-700"
              title="Change language"
            >
              {supportedLangs.find((l) => l.code === lang)?.label}
            </button>
            <button
              onClick={() => setDark((d) => !d)}
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-300"
              title="Toggle dark mode"
            >
              {dark ? "🌙" : "☀️"}
            </button>
          </div> */}
        </div>
      </header>

      <main className="container-custom py-6 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/exporters" element={<Exporters />} />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/news" element={<News />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </main>

      <footer className="mt-12 border-t border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800">
        <div className="container-custom py-8 text-sm text-gray-500 dark:text-gray-400 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Afghan Export Platform (Demo)
          </span>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-gray-700 dark:hover:text-gray-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-gray-700 dark:hover:text-gray-200"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-gray-700 dark:hover:text-gray-200"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppShell />
    </I18nProvider>
  );
}
