/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import Link from "next/link";
import compnayFlags from "../../app/supplier-country.json";

const supplierPoints = [
  "Market products to verified buyers effectively.",
  "Connect directly with millions of B2B buyers.",
  "Boost online visibility, attract targeted buyers.",
  "Receive inquiries, sell directly, do more business.",
  "Get new leads from B2B marketplace, maximize sales.",
  "Digitize b2b marketing, grow business, sell directly.",
];

const buyerPoints = [
  "Source products from qualified suppliers worldwide.",
  "Find product details and compare offers easily.",
  "Meet custom buy requirements, trade effortlessly.",
  "Request samples and quotes directly from suppliers.",
  "Save time, effort & money by comparing products and quotes.",
  "Expand sourcing channel and secure supply chain",
];

// const brazilLocations = Array(9).fill({
//   country: "Brazil",
//   flag: countryImage || "/placeholder.svg",
// });

export function MarketplaceSection() {
  const flagData = compnayFlags;

  // console.log("Copnay", flagData);
  return (
    <div className="container pt-4 text-textGray space-y-6 md:space-y-16 pb-16">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-heroBg border border-customBlue rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl border-custom text-textBlack hanken-text">
              Suppliers & Exporters
            </h2>
            <p className=" text-sm mb-6">
              Boost Your Business Online - Expand Your Reach, Connect with
              buyers, Maximize Sales through B2B Marketplace
            </p>
            <ul className="space-y-3 mb-6">
              {supplierPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-2 text-sm ">
                  <span className="">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end">
            <Link
              href={"/profile"}
              className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out px-3 py-[6px] rounded-md text-white "
            >
              Start Selling
            </Link>
          </div>
        </div>

        <div className="bg-heroBg border border-customBlue rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl border-custom text-textBlack hanken-text">
              Buyers & Importers
            </h2>
            <p className=" text-sm mb-6">
              Source Quality Products - Discover, Compare & Connect with Top
              Suppliers for Custom Buying Needs
            </p>
            <ul className="space-y-3 mb-6">
              {buyerPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-2 text-sm ">
                  <span className="">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end">
            <Link
              href={"/profile/create-requirement"}
              className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out px-3 py-[6px] rounded-md text-white"
            >
              Start Buying
            </Link>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
        <div>
          <h2 className="text-xl border-custom text-textBlack hanken-text">
            Grow Your Business With B2B
          </h2>
          <p className=" text-sm mb-2 leading-5">
            B2B-Business is a comprehensive global B2B marketplace and
            cross-border trade platform, designed to empower small and
            medium-sized enterprises to expand their reach worldwide. Our
            all-in-one solution enables suppliers and buyers to seamlessly
            connect and communicate directly. We showcase supplier profiles and
            their products, making it simple for buyers to discover and source
            from leading suppliers. With our user-friendly platform, growing
            your business globally has never been easier. Discover endless
            opportunities with B2B-Business!{" "}
            <span>
              <button className="text-customBlue hover:underline text-sm">
                About B2B...
              </button>
            </span>
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center border-custom">
            <h2 className="text-xl text-textBlack hanken-text">
              Regional B2B Marketplaces
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {compnayFlags?.slice(0, 9)?.map((location: any, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src={location.flag || "/placeholder.svg"}
                  alt={`${location.country} flag`}
                  width={24}
                  height={16}
                  className="rounded-sm"
                />
                <span className="text-sm">{location.country}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4"></div>
        </div>
      </div>
    </div>
  );
}
