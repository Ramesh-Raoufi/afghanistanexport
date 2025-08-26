import React from "react";
import { news } from "../data/sample";
import { useI18n } from "../i18n";

export default function About() {
  const { t, lang } = useI18n();
  const isRTL = lang === "fa";
  const stats = [
    { label: t("about.stats.exportValue"), value: "$1.6B" },
    { label: t("about.stats.categories"), value: "4+" },
    { label: t("about.stats.jobs"), value: "Millions" },
    { label: t("about.stats.destinations"), value: "50+" },
  ];
  const values = [
    {
      title: t("about.values.quality.title"),
      body: t("about.values.quality.body"),
    },
    {
      title: t("about.values.heritage.title"),
      body: t("about.values.heritage.body"),
    },
    {
      title: t("about.values.opportunity.title"),
      body: t("about.values.opportunity.body"),
    },
    {
      title: t("about.values.sustainability.title"),
      body: t("about.values.sustainability.body"),
    },
  ];
  return (
    <div className="space-y-10" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero / Intro */}
      <section className="relative overflow-hidden rounded-2xl  p-8 md:p-12 shadow-card bg-white dark:bg-gray-900">
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400 tracking-tight">
            {t("about.hero")}
          </h2>
          <p className="mt-4  leading-relaxed text-gray-700 dark:text-gray-300">
            {t("about.heroLead")}
          </p>
        </div>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_60%)]" />
      </section>

      {/* Stats */}
      <section>
        <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-400 mb-4 tracking-wide uppercase">
          {t("about.snapshot")}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-white dark:bg-gray-900 p-5 shadow-card border border-primary-100 dark:border-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl font-bold text-primary-700 dark:text-primary-300">
                {s.value}
              </div>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative & Timeline */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-card border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-primary-700 mb-3">
              {t("about.strategic")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("about.strategicBody")}
            </p>
          </div>
          <div className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-card border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-primary-700 mb-3">
              {t("about.trade")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("about.tradeBody")}
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl bg-gradient-to-br from-white dark:from-gray-900 to-primary-50/60 dark:to-gray-800 p-6 shadow-card border border-primary-100 dark:border-gray-800">
            <h3 className="text-sm font-semibold tracking-wide text-primary-700 uppercase mb-3">
              {t("about.headlines")}
            </h3>
            <ul className="space-y-3">
              {news.slice(0, 4).map((n) => (
                <li key={n.id} className="group">
                  <p className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                    {n.title}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {n.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-400 mb-4 tracking-wide uppercase">
          {t("about.focus")}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-5 shadow-card border border-gray-100 dark:border-gray-800 group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary-600/5 via-transparent to-transparent" />
              <h4 className="font-semibold text-primary-700 dark:text-primary-300 mb-2">
                {v.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
