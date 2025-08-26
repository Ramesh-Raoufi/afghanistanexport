import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/sample";
import ProductCard from "../components/ProductCard";
import { useI18n } from "../i18n";

export default function Home() {
  const { t, lang } = useI18n();
  const isRTL = lang === "fa";
  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={isRTL ? 'font-["Vazirmatn",sans-serif]' : ""}
    >
      <section className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {t("home.heroTitle")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {t("home.heroSubtitle")}
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              to="/products"
              className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              {t("home.exploreProducts")}
            </Link>
            <Link
              to="/exporters"
              className="border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {t("home.findExporters")}
            </Link>
          </div>
        </div>
        {/* Hero illustration removed (asset no longer used) */}
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
          {t("home.featured")}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
