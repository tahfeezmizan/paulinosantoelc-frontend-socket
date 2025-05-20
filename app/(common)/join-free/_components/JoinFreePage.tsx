"use client";
import React, { useState } from "react";
import joinFree from "@/assets/images/join-free/join-free.svg";
import Image from "next/image";
import Link from "next/link";

const JoinFreePage = () => {
  const [selected, setSelected] = useState<"supplier" | "buyer">("supplier");

  const handleButtonClick = (type: "supplier" | "buyer") => {
    setSelected(type);
  };

  return (
    <div className="container mx-auto py-5 mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <section className="text-center bg-joinFree p-5 rounded-sm">
          <div className="lg:p-10">
            <h1 className="text-2xl font-bold">B2B-Business</h1>
            <p className="mt-2">
              List Your Business on Our Business Directory & B2B Marketplace
            </p>
            <div className="flex gap-5  mt-5 relative">
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-300"></div>
              <button
                onClick={() => handleButtonClick("supplier")}
                className={`${
                  selected === "supplier" ? "border-b-2 border-customBlue" : ""
                } py-2  text-gray-700 font-semibold z-10 relative`}
              >
                Supplier
              </button>
              <button
                onClick={() => handleButtonClick("buyer")}
                className={`${
                  selected === "buyer" ? "border-b-2 border-customBlue" : ""
                } py-2  text-gray-700 font-semibold z-10 relative`}
              >
                Buyer
              </button>
            </div>
            {selected === "supplier" && (
              <div className="mt-5 text-left">
                <h2 className="text-xl font-bold">Why Join B2B-Business?</h2>
                <ul className="list-disc pl-5 mt-3">
                  <li>
                    Reach Verified Buyers and Market Your Products Efficiently.
                  </li>
                  <li>Directly Connect with Millions of Trusted B2B Buyers.</li>
                  <li>
                    Increase Online Visibility and Attract Relevant Buyers.
                  </li>
                  <li>Receive Direct Inquiries and Close Deals Faster.</li>
                  <li>
                    Generate Quality Leads and Maximize Your Sales Potential.
                  </li>
                  <li>
                    Digitize Your B2B Marketing to Expand and Sell Globally.
                  </li>
                </ul>
              </div>
            )}
            {selected === "buyer" && (
              <div className="mt-5 text-left">
                <h2 className="text-xl font-bold">Why Join B2B-Business?</h2>
                <ul className="list-disc pl-5 mt-3">
                  <li>Access to a Wide Range of Verified Suppliers.</li>
                  <li>Find Quality Products and Services Easily.</li>
                  <li>Connect Directly with Trusted Suppliers Worldwide.</li>
                  <li>Streamline Your Procurement Process.</li>
                  <li>Get Competitive Offers and Deals.</li>
                  <li>Expand Your Sourcing Options Globally.</li>
                </ul>
              </div>
            )}
          </div>
          <Image
            src={joinFree || "/placeholder.svg"}
            alt="Join Free on B2B-Business"
            width={1000}
            height={1000}
            className=""
          />
        </section>

        <section className="text-center bg-joinFree p-5 lg:p-10 rounded-sm flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl font-bold">Join Free on B2B-Business</h1>
          <p>
            Your gateway to global business opportunities. List your business to
            connect with buyers and suppliers worldwide.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/buyer-signup"
              className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out px-3 py-[6px] rounded-md text-white"
            >
              I am a Buyer
            </Link>
            <Link
              href="/supplier-signup"
              className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out px-3 py-[6px] rounded-md text-white"
            >
              I am a Supplier
            </Link>
          </div>
        </section>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-bold">
          B2BMAP Business & Product Listing Guidelines
        </h2>
        <p className="mt-3">
          B2BMAP is a global B2B platform connecting buyers and sellers,
          offering businesses the tools to promote their products and services
          effectively. Businesses can list products, create profiles, and
          showcase their offerings to reach global buyers. By accessing or using
          B2BMAP’s services, you agree to abide by our terms, ensuring legal and
          ethical trade practices.
        </p>
        <p className="mt-3">
          The platform supports industries like agriculture, electronics,
          fashion, machinery, health, and more. It prohibits listings that
          violate laws or intellectual property rights, including counterfeit
          items, weapons, restricted substances, or illegal products like banned
          chemicals, adult content, and government-issued documents. Ensuring
          the legality of listed products is the member’s responsibility.
        </p>
        <p className="mt-3">
          B2BMAP offers both free and premium memberships. Premium members enjoy
          enhanced visibility, exclusive marketing tools, and a greater
          potential to connect with buyers. Violations of our terms may lead to
          removal of listings or account termination without refunds, even for
          premium members.
        </p>
        <p className="mt-3">
          To maintain fairness and safety, B2BMAP periodically updates its
          guidelines. Sellers are encouraged to check our Terms of Use and
          Privacy Policy to stay informed. Leverage B2BMAP to connect with a
          global audience, expand your business, and ensure compliance with all
          policies for a seamless experience.
        </p>
      </section>
    </div>
  );
};

export default JoinFreePage;
