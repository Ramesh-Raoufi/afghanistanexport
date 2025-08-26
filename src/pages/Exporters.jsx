import React, { useState } from "react";
import { exporters } from "../data/sample";

export default function Exporters() {
  const [q, setQ] = useState("");
  const filtered = exporters.filter(
    (e) =>
      e.name.toLowerCase().includes(q.toLowerCase()) ||
      e.location.toLowerCase().includes(q.toLowerCase()) ||
      e.products.join(" ").includes(q.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-card p-6 flex flex-col md:flex-row gap-4 md:items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Exporters Directory
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Registered Afghan exporters with basic profile data.
          </p>
        </div>
        <div className="w-full md:w-72">
          <input
            className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
            placeholder="Search company, product, location"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-xl shadow-card p-5 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  {exp.name}
                  {exp.verified && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                      Verified
                    </span>
                  )}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{exp.location}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600 flex-1">
              Products: {exp.products.join(", ")}
            </p>
            <div className="mt-4 text-xs text-gray-500 space-y-1">
              <p>License: {exp.license || "Not listed"}</p>
              <p>
                Contact: {exp.contact.email}
                {exp.contact.phone ? ` • ${exp.contact.phone}` : ""}
              </p>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-16 bg-white rounded-xl shadow-card text-gray-500">
            No exporters found.
          </div>
        )}
      </div>
    </div>
  );
}
