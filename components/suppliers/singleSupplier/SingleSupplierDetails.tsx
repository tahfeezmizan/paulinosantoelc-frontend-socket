/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import ContactForm from "@/components/suppliers/singleSupplier/ContactForm";
import HomeContent from "@/components/suppliers/singleSupplier/HomeContent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import { FileText, Globe2, Home, Package, Users } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function SingleSupplierDetails() {
  const [currentView, setCurrentView] = useState<"home" | "contact">("home");
  const params = useParams();
  const { data: products } = useGetAllProductsQuery({});

  const singleProduct = products?.filter(
    (product: any) => String(product.id) === String(params.id)
  );

  const userData = singleProduct?.[0]?.user;
  
  if (!singleProduct?.length) {
    return <div>Loading company data...</div>;
  }

  return (
    <div className="flex flex-col ">
      <nav className="w-full bg-white shadow-sm">
        <div className="flex justify-between items-center w-full py-2 container">
          {/* Left Section */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="grid grid-cols-3 gap-[3px] w-fit hover:bg-slate-100 rounded-sm transition-colors">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-[6px] h-[6px] bg-[#005F7F] rounded-[1px]"
                    />
                  ))}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[240px] p-2 ">
                <div className="flex flex-col space-y-1">
                  <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-2.5 text-base text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                  >
                    <Home className="w-5 h-5" />
                    Home
                  </Link>
                  <Link
                    href="/product"
                    className="flex items-center gap-3 px-4 py-2.5 text-base text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                  >
                    <Package className="w-5 h-5" />
                    Product
                  </Link>
                  <Link
                    href="/directory"
                    className="flex items-center gap-3 px-4 py-2.5 text-base text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                  >
                    <Globe2 className="w-5 h-5" />
                    Business Directory
                  </Link>
                  <Link
                    href="/buyer"
                    className="flex items-center gap-3 px-4 py-2.5 text-base text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    Buyer
                  </Link>
                  <Link
                    href="/suppliers"
                    className="flex items-center gap-3 px-4 py-2.5 text-base text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                  >
                    <Users className="w-5 h-5" />
                    Supplier
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="">
              <span className="text-xl sm:text-2xl font-semibold text-textBlack">
                {userData?.firstName + " " + userData?.lastName}
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end gap-2 text-right">
            <span className="text-sm font-medium">
              {userData?.firstName + " " + userData?.lastName}
            </span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 6-9 11-9 11s-9-5-9-11a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{userData?.companyInfo?.countryName}</span>
            </div>
          </div>
        </div>
        <nav className="bg-white py-4">
          <div className="flex gap-6 container">
            {["home", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => setCurrentView(item as "home" | "contact")}
                className={`relative text-black text-lg transition-all duration-500 font-bold ${
                  currentView === item ? "opacity-100" : "opacity-70"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* Active underline effect */}
                {currentView === item && (
                  <div className="absolute left-0 bottom-0 w-full h-1 bg-customBlue" />
                )}
              </button>
            ))}
          </div>
        </nav>
      </nav>

      <main className="flex-1 py-6 bg-bgWhite pb-12">
        <div className="container">
          {currentView === "home" ? (
            <HomeContent setCurrentView={setCurrentView} />
          ) : (
            <ContactForm
              supplierId={params?.id}
              subject="Default Subject"
              message="Default Message"
            />
          )}
        </div>
      </main>

      <footer className="bg-[#005F7F] py-6 text-center">
        <p className="text-bgWhite text-sm ">
          Copyright 2020 © Go4WorldBusiness
        </p>
      </footer>
    </div>
  );
}
