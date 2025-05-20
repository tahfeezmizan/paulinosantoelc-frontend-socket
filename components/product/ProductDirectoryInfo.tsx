import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductDirectoryInfo() {
  return (
    <div className="w-full pb-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-2xl leading-normal text-textBlack max-w-xl hanken-text">
            Expand Your Reach with B2B-Go4WorldBusiness Comprehensive Product
            Directory
          </h2>
          <Link href={"/profile/my-product"}>
            <Button className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out text-white">
              List Your Product Free
            </Button>
          </Link>
        </div>

        <div className="space-y-4 text-textGray">
          <p className="leading-relaxed">
            B2BMAP&apos;s product directory is the ideal platform for businesses
            to feature their wholesale products at competitive B2B prices. With
            a wide array of categories sorted by industry, our directory
            simplifies bulk buying and makes it easy for businesses to discover
            the right products quickly.
          </p>

          <p className="leading-relaxed">
            Listing your products on our platform opens doors to expanding your
            reach, boosting your visibility, and unlocking countless sales
            opportunities.
          </p>

          <div className="space-y-2">
            <h3 className=" font-semibold ">
              Why Choose B2BMAP&apos;s Product Directory?
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Effortlessly browse or search for products by category.</li>
              <li>Compare features and wholesale prices with ease.</li>
              <li>
                Showcase your products to attract new buyers, explore fresh
                markets, and build your brand.
              </li>
            </ul>
          </div>

          <p className="leading-relaxed">
            Whether you&apos;re a manufacturer, supplier, or exporter, B2BMAP
            offers you the opportunity to reach a global audience and grow your
            business. Start today by signing up and listing your products in our
            user-friendly B2B directory!
          </p>
        </div>
      </div>
    </div>
  );
}
