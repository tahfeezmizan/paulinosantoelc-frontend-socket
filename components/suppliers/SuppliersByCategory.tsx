"use client";

import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import { ProductTypes } from "@/types/productTypes";
import { ChevronRight } from "lucide-react";

export default function SuppliersByCategory() {
  const { data: products } = useGetAllProductsQuery({});
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 hanken-text border-custom">
        Suppliers By Category
      </h2>
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
