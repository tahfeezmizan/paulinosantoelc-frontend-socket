/* eslint-disable @typescript-eslint/no-explicit-any */

import countryImage from "@/assets/images/home/countryImage.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BuyerRequirementItemProps {
  requirement: {
    id: string;
    productName: string;
    location: string;
    quantity: string;
    packagingTerms: string;
    buyerCountryFlag: StaticImageData | string;
    buyerCountry: string;
    buyQuantity: string;
    minOrderQuantity: string;
    user: any;
  };
}

export default function BuyerRequirementItem({
  requirement,
}: BuyerRequirementItemProps) {
  const buyerData = requirement?.user?.companyInfo;

  const { companyName } = buyerData;

  console.log("from buyer Requirement", requirement);
  console.log("BuyerData", buyerData);

  return (
    <div className="bg-white rounded-lg py-4 px-6 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
      <div className="lg:pr-4 ">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl text-textBlack hanken-text font-medium">
            Buy Requirement for {companyName}
          </h3>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <p>
            <span className="mr-2">
              Product Requirement: {requirement.productName} - Buyer Location:{" "}
              {requirement.location} - Quantity Needed: {requirement.quantity} -
              Packaging Terms: {requirement.packagingTerms}
            </span>
            {/* <p className="ml-2 inline"></p> */}
            <Link
              href={`/suppliers/${requirement?.id}`}
              className="text-customBlue hover:text-customButtonHoverBlue"
            >
              View Supplier
            </Link>
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="font-medium">Buyer From:</span>
              <span className="flex items-center gap-2">
                <Image
                  src={countryImage}
                  alt="Country Flag"
                  width={24}
                  height={16}
                  className="rounded-sm"
                />
                {requirement.buyerCountry}
              </span>
            </div>

            <p>
              <span className="font-medium">Buy Quantity:</span>{" "}
              {requirement.minOrderQuantity} Pieces
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-1 min-w-48 mr-0 p-5 flex-col items-start md:items-center justify-end gap-4 border-l">
        <Link
          href={`/suppliers/${requirement?.id}`}
          className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out px-3 py-[6px] rounded-md text-white"
        >
          Contact Buyer
        </Link>
      </div>
    </div>
  );
}
