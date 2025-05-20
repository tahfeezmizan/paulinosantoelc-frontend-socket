"use client";

import AllProductCard from "@/components/product/AllProductCard";
import { useGetMyProductsQuery } from "@/redux/api/poroductApi";
import { ProductTypes } from "@/types/productTypes";
import Link from "next/link";

export default function MyProductsPage() {
  const { data: products } = useGetMyProductsQuery({});

  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between mb-11">
          <div className="">
            <h2 className="text-3xl font-hanken font-medium leading-10">
              Show More All Product
            </h2>
            <p className="text-base font-roboto leading-10 text-gray-600">
              Please provide details information about your product. It helps
              you to reach potential buyers easily.
            </p>
          </div>
          <Link
            href="/profile/add-product"
            className="text-base font-roboto text-white bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out px-3 py-[6px] rounded-lg"
          >
            Add Product
          </Link>
        </div>

        {/* <Products /> */}

        <div className="space-y-4">
          {products?.map((product: ProductTypes) => (
            <AllProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
