import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DirectoryBanner() {
  return (
    <section className="container pb-16">
      {/* Top Banner */}
      <div className="bg-bannerBackground text-white rounded-lg p-8 md:p-12 text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          Get quotes from top Suppliers and
          <br className="hidden sm:block" /> Exporters for Free!
        </h2>
        <Link href="/profile/create-requirement">
          <button className="text-white border-white border py-2 px-4 rounded-lg font-normal hover:bg-white hover:text-bannerBackground transition duration-300 ease-in-out">
            Tell Us What You Need
          </button>
        </Link>
      </div>

      {/* Directory Info Section */}
      <div className="">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-custom">
          <h1 className="text-xl md:text-2xl leading-tight text-textBlack hanken-text">
            Comprehensive Directory of Global
            <br className="hidden sm:block" /> Manufacturers and Wholesale
            Suppliers
          </h1>
          <Link href={"/profile"}>
            <Button className="bg-customBlue hover:bg-customButtonHoverBlue whitespace-nowrap">
              List Your Product Free
            </Button>
          </Link>
        </div>

        <div className="space-y-4 text-gray-600">
          <p className="leading-relaxed">
            Showcase your manufacturing company or wholesale supply business for
            free and connect with buyers searching for the products you offer.
            Our global directory highlights manufacturers, wholesalers,
            exporters, and trading companies across all industries, simplifying
            the search for raw materials and finished goods worldwide.
          </p>

          <p className="leading-relaxed">
            Whether you&apos;re looking to streamline sourcing or grow your
            business, our comprehensive database allows buyers to find reliable
            suppliers and high-quality materials in one convenient location.
          </p>

          <p className="leading-relaxed">
            List your business today to expand your visibility, reach global
            markets, and drive more sales effortlessly—all at no cost.
          </p>
        </div>
      </div>
    </section>
  );
}
