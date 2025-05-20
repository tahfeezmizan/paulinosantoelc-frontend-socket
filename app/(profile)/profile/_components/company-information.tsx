"use client";

import Link from "next/link";
import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { CompanyDataType } from "@/types/companyDataType";
import Image from "next/image";

export default function CompanyInformation({
  companyData,
  user,
}: {
  companyData?: CompanyDataType;
  user: { isVerified: boolean; firstName?: string; lastName?: string; email?: string; phoneNumber?: string };
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!companyData) {
    return <p className="text-red-500">Company information not available.</p>;
  }

  const {
    businessIdentification = "Not provided",
    companyEstablish = "Not provided",
    companyName = "Not provided",
    companyWebsite = "Not provided",
    countryName = "Not provided",
    numberOfEmployees = "Not provided",
    tradeLicense = "",
  } = companyData;

  const { isVerified } = user;

  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-100 pb-2">
          <h2 className="text-2xl font-hanken font-semibold mb-4">
            Company Information
          </h2>

          <div className="space-y-3 font-roboto">
            {isVerified && (
              <div className="flex items-center gap-2 text-sm">
                <RiVerifiedBadgeFill className="h-5 w-5 text-[#49ADF4]" />
                <span>Verified Account</span>
              </div>
            )}

            <Link
              href="/profile/edit-account"
              className="flex items-center justify-start md:justify-end gap-2 text-sm"
            >
              <FiEdit className="h-5 w-5" />
              <span>Edit Account</span>
            </Link>
          </div>
        </div>

        <div className="mt-6 space-y-2 font-roboto">
          <div className="flex flex-col md:flex-row items-start lg:items-center">
            <span className="w-80 text-start text-lg font-medium">
              Company Name*
            </span>
            <span className="text-base">{companyName || "No Company"}</span>
          </div>
          <div className="flex flex-col md:flex-row items-start lg:items-center">
            <span className="w-80 text-start text-lg font-medium">
              Country Name*
            </span>
            <span className="text-base">{countryName || "Bangladesh"}</span>
          </div>
          <div className="flex flex-col md:flex-row items-start lg:items-center">
            <span className="w-80 text-start text-lg font-medium">
              Company Establish*
            </span>
            <span className="text-base">
              {companyEstablish || "20-10-2004"}
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-start lg:items-center">
            <span className="w-80 text-start text-lg font-medium">
              Number of Employees*
            </span>
            <span className="text-base">{numberOfEmployees || "100"}</span>
          </div>
          <div className="flex flex-col md:flex-row items-start lg:items-center">
            <span className="w-80 text-start text-lg font-medium">
              Company Website (URL)*
            </span>
            <span className="text-base">
              {companyWebsite || "www.google.com"}
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-start lg:items-center">
            <span className="w-80 text-start text-lg font-medium">
              Business Identification Number*
            </span>
            <span className="text-base">
              {businessIdentification || "4587656"}
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-start lg:items-center">
            <span className="w-80 text-start text-lg font-medium">
              Trade license*
            </span>
            {tradeLicense ? (
              <Image
                src={tradeLicense}
                alt="Trade License"
                width={100}
                height={100}
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            ) : (
              <span className="text-base">Not provided</span>
            )}
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && tradeLicense && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 z-60 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 transition-colors"
            >
              <FiX className="h-6 w-6" />
            </button>
            <Image
              src={tradeLicense}
              alt="Trade License (Full Screen)"
              width={1000}
              height={1000}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}