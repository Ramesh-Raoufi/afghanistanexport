import React from "react";

export default function Resources() {
  const items = [
    {
      title: "How to export from Afghanistan",
      type: "Guide",
      desc: "Step-by-step process overview (placeholder).",
    },
    {
      title: "Business tips for exporters",
      type: "Article",
      desc: "Operational tips and market entry suggestions.",
    },
    {
      title: "Training programs",
      type: "Training",
      desc: "Upcoming capacity building sessions.",
    },
    {
      title: "International market requirements",
      type: "Regulation",
      desc: "Standards & compliance notes.",
    },
  ];
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-card p-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Educational Resources
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Guides and references for Afghan exporters (sample data).
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div
            key={i.title}
            className="bg-white rounded-xl shadow-card p-5 flex flex-col"
          >
            <span className="text-xs font-medium bg-primary-50 text-primary-700 px-2 py-0.5 rounded w-fit">
              {i.type}
            </span>
            <h3 className="mt-2 font-semibold text-gray-800">{i.title}</h3>
            <p className="mt-2 text-sm text-gray-600 flex-1">{i.desc}</p>
            <button className="mt-4 text-sm font-medium text-primary-700 hover:text-primary-600">
              Open →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
