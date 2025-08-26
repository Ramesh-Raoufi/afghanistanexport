import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-xl shadow-card overflow-hidden flex flex-col border border-gray-100 dark:border-gray-800">
      <div className="aspect-[3/2] bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {!product.image && (
          <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
            No image
          </div>
        )}
        <div className="absolute top-2 left-2 bg-primary-50 dark:bg-primary-700/20 text-primary-700 dark:text-primary-200 text-[10px] font-medium px-2 py-1 rounded uppercase tracking-wide">
          {product.category}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3 flex-1">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <Link
            to={`/products/${product.id}`}
            className="text-sm font-medium text-primary-700 hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-200"
          >
            Details →
          </Link>
          <span className="text-[10px] text-gray-400 dark:text-gray-500">
            Cap: {product.capacity}
          </span>
        </div>
      </div>
    </div>
  );
}
