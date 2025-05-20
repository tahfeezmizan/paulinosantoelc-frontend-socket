"use client";

import { useState } from "react";
import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import { ChevronRight } from "lucide-react";

export function ProductPageCategorySidebar() {
  const { data: products } = useGetAllProductsQuery({});
  const [showAll, setShowAll] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Extract unique categories and their subcategories from product data
  const categoriesMap: { [key: string]: string[] } = {};

  products?.forEach((product: { category: string; subcategory?: string }) => {
    if (!categoriesMap[product.category]) {
      categoriesMap[product.category] = [];
    }
    if (
      product.subcategory &&
      !categoriesMap[product.category].includes(product.subcategory)
    ) {
      categoriesMap[product.category].push(product.subcategory);
    }
  });

  const categoryList = Object.keys(categoriesMap);
  const visibleCategories = showAll ? categoryList : categoryList.slice(0, 8);

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 hanken-text">
        Product Category
      </h2>
      <ul>
        {visibleCategories.map((category) => (
          <li key={category}>
            <button
              onClick={() =>
                setExpandedCategory((prev) =>
                  prev === category ? null : category
                )
              }
              className="w-full flex items-center justify-between py-2 px-1 text-sm sm:text-base text-gray-700 hover:text-customBlue transition-colors"
            >
              <span>{category}</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Subcategory list */}
            {expandedCategory === category && (
              <ul className="pl-4 text-gray-600 text-sm">
                {categoriesMap[category].map((sub, idx) => (
                  <li key={idx} className="py-1">
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* See All toggle */}
      {categoryList.length > 8 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-customBlue hover:underline px-1 py-2"
        >
          {showAll ? "Show Less" : "See All"}
        </button>
      )}
    </div>
  );
}
