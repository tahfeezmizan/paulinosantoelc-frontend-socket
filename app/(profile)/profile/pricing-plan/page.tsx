import React from "react";
import PricingTable from "../../_components/pricing-table";

export default function page() {
  return (
    <div>
      <div className="w-full container mx-auto py-10 lg:py-20">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Boost Your Business with Go4WorldBusiness</h1>
          <p className="text-gray-600">Drive Sales and Growth with Our All-in-One Business Plan.</p>
        </div>
        <PricingTable />
      </div>
    </div>
  );
}
