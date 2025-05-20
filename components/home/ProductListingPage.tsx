"use client";

import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import { ProductTypes } from "@/types/productTypes";
import Link from "next/link";
import { CategorySidebar } from "./CategorySidebar";
import { ProductCard } from "./ProductCard";

export default function ProductListingPage() {
  const { data: products } = useGetAllProductsQuery({});

  console.log("Featured Products", products);

  return (
    <div className="min-h-screen ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-8">
          <div className="md:sticky md:top-8 h-fit">
            <CategorySidebar />
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl hanken-text">Featured Products</h1>
              <Link href="/product" className="text-customBlue hover:underline">
                See All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {products?.map((product: ProductTypes) => (
                <ProductCard key={product?.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
