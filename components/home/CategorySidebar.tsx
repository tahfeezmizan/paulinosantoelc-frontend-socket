/*eslint-disable*/

"use client";

import { useState } from "react";
import searchIcon from "@/assets/icons/home/searchIcon.png";
import sellIcon from "@/assets/icons/home/sellIcon.png";
import showcaseIcon from "@/assets/icons/home/showcaseIcon.png";
import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CategorySidebar() {
  const { data: products } = useGetAllProductsQuery({});
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Get unique categories from products
  const uniqueCategories: string[] = Array.from(
    new Set(products?.map((product: any) => product.category))
  );

  // Simulated subcategories (in real case, this would come from backend)
  const subcategories: Record<string, string[]> = {
    Electronics: ["Phones", "Laptops", "Cameras"],
    Clothing: ["Men", "Women", "Kids"],
    Furniture: ["Sofas", "Tables", "Beds"],
  };

  // Handle toggle for "See All"
  const displayedCategories = showAll
    ? uniqueCategories
    : uniqueCategories.slice(0, 8);

  return (
    <div>
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 hanken-text">
          Product Category
        </h2>

        <ul>
          {displayedCategories.map((category) => (
            <li key={category}>
              <button
                className="w-full flex items-center justify-between py-2 px-1 text-sm sm:text-base text-gray-700 hover:text-customBlue transition-colors"
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category ? null : category
                  )
                }
              >
                <span>{category}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Subcategories */}
              {activeCategory === category &&
                subcategories[category]?.map((sub, index) => (
                  <Link
                    key={index}
                    href={`/${category}/${sub}`}
                    className="block text-sm text-gray-600 ml-4 py-1 hover:underline"
                  >
                    {sub}
                  </Link>
                ))}
            </li>
          ))}

          {/* See All toggle */}
          {uniqueCategories.length > 8 && (
            <button
              className="text-customBlue hover:underline px-1 py-2"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "See All"}
            </button>
          )}
        </ul>
      </div>

      {/* Info Buttons */}
      <div className="space-y-3 mt-6">
        <button className="w-full bg-customSoftBlue text-black hover:bg-blue-100 border border-customBlue px-6 py-4 rounded-lg flex items-center justify-start gap-3">
          <Image
            src={searchIcon || "/placeholder.svg"}
            alt="Search"
            width={1000}
            height={1000}
            className="rounded-full w-10 h-10"
          />
          Get Found by Buyers
        </button>
        <button className="w-full bg-customSoftBlue text-black hover:bg-blue-100 border border-customBlue px-6 py-4 rounded-lg flex items-center justify-start gap-3">
          <Image
            src={showcaseIcon || "/placeholder.svg"}
            alt="Showcase"
            width={1000}
            height={1000}
            className="rounded-full w-10 h-10"
          />
          Showcase Your Product
        </button>
        <button className="w-full bg-customSoftBlue text-black hover:bg-blue-100 border border-customBlue px-6 py-4 rounded-lg flex items-center justify-start gap-3">
          <Image
            src={sellIcon || "/placeholder.svg"}
            alt="Sell"
            width={1000}
            height={1000}
            className="rounded-full w-10 h-10"
          />
          Sell More - Grow Fast
        </button>
      </div>
    </div>
  );
}
