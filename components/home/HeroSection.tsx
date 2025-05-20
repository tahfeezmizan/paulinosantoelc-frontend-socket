import Image from "next/image";
import HeroImage from "@/assets/images/home/heroImage.png";
import ScaleUp from "../motion/ScaleUp";
import TransitionX from "../motion/TransitionX";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-heroBg">
      <div className="container z-10 flex flex-col  items-center justify-between md:flex-row ">
        <TransitionX className="flex flex-col justify-center space-y-4 flex-1 py-8 pt-12 ">
          <h1 className="text-3xl font-semibold tracking-[0.28px] leading-10 sm:text-3xl md:text-4xl xl:text-6xl hanken-text">
            Connect with Verified Suppliers and Buyers Globally.
          </h1>
          <p className="text-sm md:text-lg text-gray-600">
            B2B-Business is a Global B2B Platform for Suppliers and Buyers to
            Find, Connect and Communicate - Digitally.
          </p>
          <div>
            <Link
              href="/product"
              className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out px-4 py-2 md:px-6 md:py-3 rounded-lg mt-10 text-white"
            >
              Explore Products
            </Link>
          </div>
        </TransitionX>
        <div className=" flex-1 self-end pt-12">
          <ScaleUp>
            <Image
              src={HeroImage}
              alt="Global B2B Platform Illustration"
              width={600}
              height={400}
              className="object-contain w-full h-auto px-4 "
              priority
            />
          </ScaleUp>
        </div>
      </div>
    </div>
  );
}
