import React from "react";

export default function Logistics() {
  const items = [
    {
      title: "Customs Regulations",
      desc: "Overview of export customs processes.",
    },
    { title: "Shipping Routes", desc: "Air, land and sea route summaries." },
    {
      title: "Documentation",
      desc: "Invoice, certificate of origin, quality docs.",
    },
    { title: "Freight Forwarders", desc: "Sample list of logistics partners." },
  ];
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-card p-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Logistics & Trade Support
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Guidance and resources to move goods efficiently (sample).
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.title} className="bg-white rounded-xl shadow-card p-5">
            <h3 className="font-semibold text-gray-800">{i.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
