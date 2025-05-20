/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { StaticImageData } from "next/image";
import AllSuppliersCard from "./AllSuppliersCard";
import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import Link from "next/link";

export interface Supplier {
  id: string;
  country: string;
  countryImage: StaticImageData;
  companyName: string;
  description: string;
  businessType: string;
  additionalInfo: string;
  companyImage: StaticImageData;
}

export default function AllSuppliersList() {
  const { data: products } = useGetAllProductsQuery({});

  // console.log(products)

  return (
    <div className="mx-auto">
      <div className="space-y-4">
        <nav className="  mb-6 px-6 py-4 rounded-lg bg-white">
          <div className="flex gap-4 md:gap-8">
            <Link href="/product" className=" mr-4 px-1 text-textBlack">
              Product
            </Link>
            <div className="mr-4 px-1  border-b-2 border-customBlue text-customBlue cursor-pointer ">
              Suppliers
            </div>
            <Link href="/buyer" className=" mr-4 px-1  text-textBlack">
              Buyers
            </Link>
          </div>
        </nav>
        {products?.map((product: any) => (
          <AllSuppliersCard key={product.id} supplier={product} />
        ))}
      </div>
    </div>
  );
}
