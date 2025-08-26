import React from "react";

export default function Buyers() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-card p-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Buyers & Investors
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Opportunities, partnership models, and success stories (placeholder).
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-card p-6">
        <h3 className="font-semibold text-gray-800">Upcoming Trade Fairs</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-600">
          <li>Global Agro Expo — Q4 2025</li>
          <li>Carpet & Handicraft Summit — Q1 2026</li>
        </ul>
      </div>
    </div>
  );
}
