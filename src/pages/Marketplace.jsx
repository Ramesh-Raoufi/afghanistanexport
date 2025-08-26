import React from "react";
import { products } from "../data/sample";

export default function Marketplace() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h2 className="text-lg font-semibold">Marketplace</h2>
        <p className="text-gray-600">
          Simple marketplace to contact exporters for quotes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-card overflow-hidden flex flex-col border border-gray-100"
          >
            <div className="aspect-[3/2] bg-gray-100 overflow-hidden">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h4 className="text-base font-semibold text-gray-800">
                {p.name}
              </h4>
              <p className="text-xs text-primary-700 mt-1 font-medium">
                {p.category}
              </p>
              <p className="mt-2 text-sm text-gray-600 flex-1">
                {p.description}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm font-medium">
                  Request Quote
                </button>
                <span className="text-[10px] text-gray-400">{p.capacity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
