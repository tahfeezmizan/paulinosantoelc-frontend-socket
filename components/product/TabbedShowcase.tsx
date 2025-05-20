"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function TabbedShowcase() {
  return (
    <div className="w-full max-w-3xl mx-auto py-6">
      <Tabs defaultValue="products" className="w-full bg-white">
        <TabsList className="w-full grid grid-cols-3 bg-white text-base ">
          <TabsTrigger
            value="products"
            className="data-[state=active]:bg-customSoftBlue data-[state=active]:text-black rounded-none  data-[state=active]:border-customSoftBlue  border text-black"
          >
            Products
          </TabsTrigger>
          <TabsTrigger
            value="suppliers"
            className="data-[state=active]:bg-customSoftBlue data-[state=active]:text-black rounded-none  data-[state=active]:border-customSoftBlue border-y text-black"
          >
            Suppliers
          </TabsTrigger>
          <TabsTrigger
            value="buyers"
            className="data-[state=active]:bg-customSoftBlue data-[state=active]:text-black rounded-none  data-[state=active]:border-customSoftBlue  border text-black"
          >
            Buyers
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="products"
          className="px-6 py-14 space-y-6 text-textGray"
        >
          <div className="space-y-4">
            <p>
              List your products with an easy-to-use product catalog and connect
              with thousands of global buyers and importers.
            </p>
            <p>
              Unsure of your target market? Join B2BMAP.com for free and market
              your products worldwide.
            </p>
          </div>
          <div className=" flex justify-center">
            <Link
              href={"/profile/add-product"}
              className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out px-4 md:px-6 py-3 rounded-md text-white"
            >
              Showcase Your Products Now
            </Link>
          </div>
        </TabsContent>

        <TabsContent
          value="suppliers"
          className="px-6 py-14 space-y-6 text-textGray"
        >
          <div className="space-y-4">
            <p>
              List your products with an easy-to-use product catalog and connect
              with thousands of global buyers and importers.
            </p>
            <p>
              Unsure of your target market? Join B2BMAP.com for free and market
              your products worldwide.
            </p>
          </div>
          <div className=" flex justify-center">
            <button className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out px-4 md:px-6 py-3 rounded-md text-white">
              Find Suppliers Now
            </button>
          </div>
        </TabsContent>

        <TabsContent
          value="buyers"
          className="px-6 py-14 space-y-6 text-textGray"
        >
          <div className="space-y-4">
            <p>
              List your products with an easy-to-use product catalog and connect
              with thousands of global buyers and importers.
            </p>
            <p>
              Unsure of your target market? Join B2BMAP.com for free and market
              your products worldwide.
            </p>
          </div>
          <div className=" flex justify-center">
            <button className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out px-4 md:px-6 py-3 rounded-md text-white">
              Connect with Buyers Now
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
