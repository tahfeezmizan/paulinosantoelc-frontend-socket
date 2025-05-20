import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import directoryHome from "@/assets/images/directory/directoryHome.png";
import Link from "next/link";

export default function DirectoryHero() {
  return (
    <div className=" w-full pt-8">
      <div className="container  ">
        <div className="flex gap-16 lg:gap-24 flex-col lg:flex-row items-center justify-between bg-white px-4 lg:px-12 py-8 rounded-lg">
          <div className="  flex items-center">
            <Image
              src={directoryHome}
              alt="Global B2B Platform Illustration"
              width={600}
              height={400}
              className="object-contain w-[800px] h-auto"
              priority
            />
          </div>
          <div className="space-y-4  w-full">
            {[
              "Reach Millions of Buyers and Sellers Worldwide.",
              "Build Your Free Business Profile on Our B2B Platform.",
              "Expand Your Business Network with Smart B2B Tools.",
              "Global Business Connections Made Easy with B2B Directories.",
              "Enhance Your Brand Visibility with Top Google Rankings.",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-customBlue" />
                <span className="text-sm text-textGray">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 max-w-52 ">
            <Link href={"/profile/my-product"}>
              <Button className="bg-customBlue hover:bg-customButtonHoverBlue">
                List Your Business-Free
              </Button>
            </Link>
            <Link href={"/pricing"} className="">
              <Button className="bg-customBlue hover:bg-customButtonHoverBlue">
                View Membership Plan
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
