"use client"

import { FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BuyerRequirementList from "./BuyerRequirementList";
import BuyerCategories from "./BuyerCategories";
import NewSuppliersList from "@/components/suppliers/NewSuppliersList";
import { useState } from "react";

export default function BuyerMarketplace() {
  const [productName, setProductName] = useState("");

  const handleSubmit = () => {
    // console.log("Entered Product Name:", productName);
  };

  return (
    <div className="container pt-6">
      {/* Search Bar */}
      <div className="bg-heroBg border p-4 rounded-lg flex flex-col md:flex-row items-start md:items-center md:justify-center gap-6 mb-6 ">
        <div className="flex items-center gap-2">
          <FileText className="w-6 h-6 text-textGray" />
          <span className="font-medium whitespace-nowrap">
            Post Your Buy Requirement
          </span>
        </div>
        <div className="flex items-center gap-4 w-full max-w-xl">
          <div className="flex-1">
            <Input
              placeholder="Enter Product Name"
              className="w-full"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <Button
            className="bg-customBlue hover:bg-customButtonHoverBlue whitespace-nowrap"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-[350px,1fr] gap-6">
        <div className="md:sticky md:top-8 h-fit space-y-8">
          <BuyerCategories />
          <NewSuppliersList />
        </div>

        <BuyerRequirementList />
      </div>
    </div>
  );
}
