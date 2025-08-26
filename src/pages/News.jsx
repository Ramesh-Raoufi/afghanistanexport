import React, { useMemo, useState } from "react";
import { news } from "../data/sample";

export default function News() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const categories = useMemo(
    () => ["all", ...Array.from(new Set(news.map((n) => n.category)))],
    []
  );
  const filtered = news
    .filter((n) => (category === "all" ? true : n.category === category))
    .filter((n) =>
      [n.title, n.summary, ...(n.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    )
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl p-8 md:p-12 text-primary-700  shadow-card">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            News & Insights
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            Market trends, trade policy updates, logistics developments and
            event highlights from Afghanistan's export sectors.
          </p>
        </div>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
      </section>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors shadow-sm backdrop-blur-sm ${
                category === c
                  ? "bg-primary-600 text-white border-primary-600"
                  : "bg-white/70 dark:bg-gray-900/60 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800"
              }`}
            >
              {c === "all" ? "All" : c}
            </button>
          ))}
        </div>
        <div className="md:ml-auto w-full md:w-64">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search news..."
            className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-700"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((n) => (
          <article
            key={n.id}
            className="group relative flex flex-col rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-card overflow-hidden"
          >
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide">
                <span className="px-2 py-1 rounded bg-primary-50 dark:bg-primary-700/20 text-primary-700 dark:text-primary-300">
                  {n.category}
                </span>
                <span className="text-gray-400 dark:text-gray-500">
                  {new Date(n.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors line-clamp-2">
                {n.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                {n.summary}
              </p>
              {n.tags && (
                <div className="mt-4 flex flex-wrap gap-1">
                  {n.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-4 flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                <button className="text-xs font-medium text-primary-700 dark:text-primary-300 hover:underline">
                  Read more
                </button>
                <span className="text-[10px] text-gray-400 dark:text-gray-500">
                  ID: {n.id}
                </span>
              </div>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-20 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              No news matches your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
