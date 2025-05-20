"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { SupplierProductForm } from "./BuyerProductForm";
// import SupplierProductList from "./BuyerProductList";

// interface ProductData {
//   productName: string;
//   category: string;
//   subCategory: string;
//   details: string;
//   usage: string;
//   productCode: string;
//   brandName: string;
//   countryOfOrigin: string;
//   minOrderQuantity: string;
//   brandCode: string;
//   businessType: string[];
//   images: { file: File; url: string }[];
// }

export default function SupplierProductPage() {
  const [isAddMode, setIsAddMode] = useState(false);

  // const handleSubmit = (data: ProductData) => {
  //   console.log("this is data", data);
  //   setIsAddMode(false)
  // };

  return (
    <div className="container mx-auto py-2 px-0 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{isAddMode ? "Product Details" : "My Products"}</h1>
        <Button className="bg-customBlue hover:bg-customButtonHoverBlue" onClick={() => setIsAddMode(!isAddMode)}>
          <Plus className="w-4 h-4 mr-2" />
          {isAddMode ? "View Products" : "Add Product"}
        </Button>
      </div>

      {/* {isAddMode ? (
        <SupplierProductForm onSubmit={handleSubmit} onCancel={() => setIsAddMode(false)} />
      ) : (
        <SupplierProductList />
      )} */}
    </div>
  );
}
