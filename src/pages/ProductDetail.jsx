import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/sample";

export default function ProductDetail() {
  const { id } = useParams();
  const p = products.find((x) => x.id === id);
  if (!p)
    return (
      <div className="bg-white rounded-xl shadow-card p-6">
        <h3 className="text-lg font-semibold">Product not found</h3>
      </div>
    );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-card p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {p.image && (
            <div className="w-full md:w-1/3 aspect-[3/2] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-800">
              {p.name}
            </h2>
            <div className="mt-2 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-medium bg-primary-50 text-primary-700 px-2 py-1 rounded">
                {p.category}
              </span>
              {p.certifications.map((c) => (
                <span
                  key={c}
                  className="text-xs font-medium bg-green-50 text-green-700 px-2 py-1 rounded"
                >
                  {c}
                </span>
              ))}
              {p.certifications.length === 0 && (
                <span className="text-xs text-gray-500">
                  No certifications listed
                </span>
              )}
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {p.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-xl shadow-card p-5">
          <h3 className="font-semibold text-gray-800">Packaging & Capacity</h3>
          <ul className="mt-3 text-sm text-gray-600 space-y-1">
            <li>
              <strong>Packaging:</strong> {p.packaging.join(", ")}
            </li>
            <li>
              <strong>Capacity:</strong> {p.capacity}
            </li>
            <li>
              <strong>Destinations:</strong> {p.destinations.join(", ")}
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-card p-5">
          <h3 className="font-semibold text-gray-800">
            Photos & Certifications
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Images placeholder. Certifications:{" "}
            {p.certifications.join(", ") || "None listed"}.
          </p>
          <button className="mt-4 inline-flex items-center gap-2 text-sm text-primary-700 font-medium">
            Request Sample →
          </button>
        </div>
      </div>
    </div>
  );
}
