import React, { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState(1000);
  const [taxRate, setTaxRate] = useState(5);
  const [shipping, setShipping] = useState(200);

  const tax = (value * taxRate) / 100;
  const total = value + tax + Number(shipping);

  const inputCls =
    "w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none";
  const labelCls = "text-xs font-medium text-gray-600";

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-card p-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Export Calculator
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Estimate total cost including duty and shipping (demo only).
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div>
            <label className={labelCls}>Goods value (USD)</label>
            <input
              type="number"
              className={inputCls}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
          </div>
          <div>
            <label className={labelCls}>Tax / Duty rate (%)</label>
            <input
              type="number"
              className={inputCls}
              value={taxRate}
              onChange={(e) => setTaxRate(Number(e.target.value))}
            />
          </div>
          <div>
            <label className={labelCls}>Shipping cost (USD)</label>
            <input
              type="number"
              className={inputCls}
              value={shipping}
              onChange={(e) => setShipping(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="mt-6 bg-gray-50 rounded-lg p-4 flex flex-wrap gap-6 text-sm">
          <div>
            <span className="font-semibold text-gray-700">Tax:</span> $
            {tax.toFixed(2)}
          </div>
          <div>
            <span className="font-semibold text-gray-700">
              Total estimated:
            </span>{" "}
            ${total.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
