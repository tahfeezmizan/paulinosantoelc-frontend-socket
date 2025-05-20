"use client";

import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import { ProductTypes } from "@/types/productTypes";
import { ChevronRight } from "lucide-react";

export default function BuyerCategories() {
  const { data: products } = useGetAllProductsQuery({});

  // console.log("Buyer category", products[0]?.category);

  return (
    <div className="bg-white rounded-lg p-4 h-fit ">
      <h2 className="text-lg font-semibold mb-4">Buyer Category</h2>
      <ul>
        {products?.map((product: ProductTypes) => (
          <li key={product.id}>
            <button className="w-full flex items-center justify-between py-2 px-1 text-sm sm:text-base text-gray-700 hover:text-customBlue transition-colors">
              <span>{product.category}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </li>
        ))}

        <button className="text-customBlue hover:underline px-1 py-2">
          See All
        </button>
      </ul>
    </div>
  );
}
