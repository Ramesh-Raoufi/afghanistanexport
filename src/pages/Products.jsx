import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/sample";
import ProductCard from "../components/ProductCard";
import { useI18n } from "../i18n";

export default function Products() {
  const { t, lang } = useI18n();
  const [q, setQ] = useState("");
  const isRTL = lang === "fa";
  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.category.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="space-y-6" dir={isRTL ? "rtl" : "ltr"}>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-card p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-100">
              {t("products.title")}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {t("products.subtitle")}
            </p>
          </div>
          <div className="w-full md:w-72">
            <input
              className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
              placeholder={t("products.searchPlaceholder")}
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-16 bg-white dark:bg-gray-900 rounded-xl shadow-card">
            <p className="text-gray-500 dark:text-gray-400">
              {t("products.empty")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
