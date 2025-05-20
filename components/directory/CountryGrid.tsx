"use client";

import { useState } from "react";
import DirectoryInfo from "./DirectoryInfo";
import Image from "next/image";
import FadeUp from "../motion/FadeUp";
import supplierContry from "../../app/supplier-country.json";

interface CountryCardProps {
  name: string;
  flag: string;
}

function CountryCard({ name, flag }: CountryCardProps) {
  return (
    <div>
      <div className="aspect-[3/2] w-full">
        <Image
          src={flag || "/placeholder.svg"}
          alt={`${name} flag`}
          className="h-full w-full object-cover"
          width={320}
          height={213}
        />
      </div>
      <div className="p-2 text-center">
        <h3 className="font-semibold text-textBlack">{name}</h3>
        <p className="text-sm text-textSoftGray">List Of Business</p>
      </div>
    </div>
  );
}

export default function CountryGrid() {
  const countries = supplierContry.map((item) => ({
    name: item.country,
    flag: item.flag || "/placeholder.svg",
  }));

  const ITEMS_PER_PAGE = 14;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCountries = countries.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="container">
      <DirectoryInfo />
      <div className="grid grid-cols-3 gap-8 sm:gap-8 md:gap-16 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
        {paginatedCountries.map((country, index) => (
          <FadeUp key={index} delay={0.3} duration={0.7}>
            <CountryCard {...country} />
          </FadeUp>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center gap-4 items-center">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded text-white bg-customBlue hover:bg-customButtonHoverBlue disabled:opacity-50"
        >
          Prev
        </button>
        <span className="font-medium text-gray-600">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded text-white bg-customBlue hover:bg-customButtonHoverBlue disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
