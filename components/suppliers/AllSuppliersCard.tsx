/* eslint-disable @typescript-eslint/no-explicit-any */

import supplierImage from "@/assets/images/suppliers/suppliersImage.png";
import countryImage from "@/assets/images/home/countryImage.png";
import Image, { StaticImageData } from "next/image";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  user: any
}

interface AllSuppliersCardProps {
  supplier: Supplier;
}

export default function AllSuppliersCard({ supplier }: AllSuppliersCardProps) {
  // console.log(supplier?.user)
  const supplierData = supplier?.user?.companyInfo;
  console.log("Supplier",supplier)


  return (
    <div className="w-full rounded-lg p-4 mb-4 bg-white">
      <div className="flex justify-between items-center mb-4 border-b pb-4">
        <div className="flex items-center gap-2">
          <Image
            src={supplierData?.countryImage || countryImage}
            alt={`${supplierData?.countryName} flag`}
            width={24}
            height={16}
            className="rounded-sm "
          />
          <span className="text-sm text-textGray">{supplierData?.country}</span>
        </div>
        <Link href={`suppliers/${supplier?.id}`}>
          <Button
            variant="default"
            className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out text-white"
          >
            Contact Supplier
          </Button>
        </Link>
      </div>

      <div className="flex flex-col xl:flex-row gap-4 items-center">
        <div className="w-full md:w-64 rounded-lg overflow-hidden flex items-center justify-center bg-red-200">
          <Image
            src={supplierData?.companyImage || supplierImage  || "/placeholder.svg"}
            alt={supplierData?.companyName}
            width={120}
            height={60}
            className="object-contain w-full h-auto transition duration-300 ease-in-out hover:scale-105"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-textBlack">
            {supplierData?.companyName}
          </h3>

          <p className="text-sm text-textGray mb-2">
            {supplierData?.about} {" "}
            <button className="text-customBlue hover:text-customButtonHoverBlue transition duration-300 ease-in-out">
              Show more
            </button>
          </p>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-textGray">
              <span className="">Business Type:</span> {supplierData?.businessType}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Building2 className="w-4 h-4" />
              <span>Automotive Equipment Supplier from {supplierData?.countryName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
