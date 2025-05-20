import Image from "next/image";
import countryImage from "@/assets/images/home/countryImage.png";
import Link from "next/link";

import suppliersFlags from "../../app/supplier-country.json";

const buyingLeads = [
  {
    country: "Brazil",
    flag: countryImage || "/placeholder.svg",
    requirement: "Buy Requirement for Mustard Oil",
  },
  {
    country: "Brazil",
    flag: countryImage || "/placeholder.svg",
    requirement: "Buy Requirement - Manganese Dioxide",
  },
  {
    country: "Brazil",
    flag: countryImage || "/placeholder.svg",
    requirement: "RFQ for Stainless Steel 420",
  },
  {
    country: "Brazil",
    flag: countryImage || "/placeholder.svg",
    requirement: "Buy Requirement - SDN in Vegetable Oil and Edible Oil",
  },
  {
    country: "Brazil",
    flag: countryImage || "/placeholder.svg",
    requirement: "Buy Requirement - SDN in Vegetable Oil and Edible Oil",
  },
  {
    country: "Brazil",
    flag: countryImage || "/placeholder.svg",
    requirement: "Buy Requirement for Titanium Dioxide",
  },
];

export function BuyersSuppliersSection() {
  return (
    <div className="bg-heroBg py-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Suppliers Box */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center  border-custom ">
              <h2 className="text-2xl ">New Suppliers</h2>
            </div>
            <div className="space-y-4">
              {suppliersFlags?.slice(10, 20).map((supplier, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image
                    src={supplier.flag || "/placeholder.svg"}
                    alt={`${supplier.country} flag`}
                    width={24}
                    height={16}
                    className="rounded-sm"
                  />
                  <span className="text-gray-700">{supplier.country}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/join-free"
                className="text-customBlue hover:underline text-sm "
              >
                See More
              </Link>
            </div>
            <div className="mt-6 flex justify-end">
              <Link
                href="/join-free"
                className="bg-customBlue hover:bg-customLinkHoverBlue transition duration-300 ease-in-out px-3 py-[6px] rounded-md text-white"
              >
                Join For Free
              </Link>
            </div>
          </div>

          {/* Buying Leads Box */}
          <div className="bg-white rounded-lg p-6 shadow-sm lg:col-span-2">
            <div className="flex justify-between items-center border-custom ">
              <h2 className="text-2xl hanken-text">Latest Buying Leads</h2>
              <Link
                href={"/buyer"}
                className="text-customBlue hover:underline text-sm"
              >
                View All Leads
              </Link>
            </div>

            <div className="overflow-hidden">
              <div className="overflow-x-auto table-scrollbar">
                <table className="min-w-[600px]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-4 font-semibold text-black">
                        Buyer From
                      </th>
                      <th className="text-left pb-4 font-semibold text-black">
                        Buyer&apos;s Requirements
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {buyingLeads.map((lead, index) => (
                      <tr key={index}>
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <Image
                              src={lead.flag || "/placeholder.svg"}
                              alt={`${lead.country} flag`}
                              width={24}
                              height={16}
                              className="rounded-sm"
                            />
                            <span className="text-gray-700">
                              {lead.country}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 text-gray-700">
                          {lead.requirement}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-end">
              <Link
                href={"/buyer"}
                className="bg-customBlue hover:bg-customLinkHoverBlue transition duration-300 ease-in-out px-3 py-[6px] rounded-md text-white"
              >
                Connect With Buyers
              </Link>
              <Link
                href="/buyer"
                className=" px-3 py-[6px]  text-customBlue rounded-md hover:bg-blue-50 border border-customBlue transition-colors flex items-center justify-center gap-2"
              >
                Post Buy Requirement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
