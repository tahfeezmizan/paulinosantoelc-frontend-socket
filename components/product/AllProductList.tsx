"use client";

import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import Link from "next/link";
import AllProductCard from "./AllProductCard";
import { ProductTypes } from "@/types/productTypes";

export default function AllProductList() {
  const { data: products } = useGetAllProductsQuery({});

  return (
    <div className="w-full mx-auto">
      <nav className=" mb-6 px-6 py-4 rounded-lg bg-white">
        <div className="flex gap-4 md:gap-8">
          <div className="mr-4 px-1  border-b-2 border-customBlue text-customBlue cursor-pointer ">
            Product
          </div>
          <Link href="/suppliers" className=" mr-4 px-1 text-textBlack">
            Suppliers
          </Link>
          <Link href="/buyer" className=" mr-4 px-1  text-textBlack">
            Buyers
          </Link>
        </div>
      </nav>

      <div className="space-y-4">
        {products?.map((product: ProductTypes) => (
          <AllProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}
