"use client";

import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import { ProductTypes } from "@/types/productTypes";
import Link from "next/link";
import { ProductCard } from "./ProductCard";

// const featuredProducts = [
//   {
//     imageUrl: foodImage,
//     title: "Refined Sunflower Oil Wholesale Supplier for Cooking & Skincare",
//     company: "Golden Pacific Oils",
//     category: "Agro & Agriculture",
//     rating: 4.0,
//     countryImage: countryImage,
//   },
//   {
//     imageUrl: foodImage,
//     title: "Refined Sunflower Oil Wholesale Supplier for Cooking & Skincare",
//     company: "Golden Pacific Oils",
//     category: "Agro & Agriculture",
//     rating: 4.0,
//     countryImage: countryImage,
//   },
//   {
//     imageUrl: foodImage,
//     title: "Refined Sunflower Oil Wholesale Supplier for Cooking & Skincare",
//     company: "Golden Pacific Oils",
//     category: "Agro & Agriculture",
//     rating: 4.0,
//     countryImage: countryImage,
//   },
//   {
//     imageUrl: foodImage,
//     title: "Refined Sunflower Oil Wholesale Supplier for Cooking & Skincare",
//     company: "Golden Pacific Oils",
//     category: "Agro & Agriculture",
//     rating: 4.0,
//     countryImage: countryImage,
//   },
// ];

export default function FoodProductSupplySection() {
  const { data: products } = useGetAllProductsQuery({});

  return (
    <div className="container">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl hanken-text">
          Food and Agricultural Product Suppliers
        </h1>
        <Link href="/suppliers" className="text-customBlue hover:underline">
          See All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products?.map((product: ProductTypes, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
