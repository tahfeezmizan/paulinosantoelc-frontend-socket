import Link from "next/link";

export default function WorldBusinessDirectory() {
  return (
    <div className="pb-16">
      <div className=" bg-bannerBackground flex flex-col items-center justify-center py-16 text-white ">
        <div className=" container text-center space-y-4 md:space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium hanken-text">
            The Worldwide Business Directory by B2B....
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-6xl mx-auto text-customSoftBlue">
            List your business in B2BMAP&apos;s global directory to connect and
            grow your B2B opportunities. Create a company profile, showcase your
            products, and get noticed by businesses worldwide. Our free
            directory lets you search by country or category to find global
            partners, both large and small. Gain exposure and expand your reach
            in international markets. Join B2BMAP for free today and enhance
            your business connections globally!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/pricing"
              className="px-6 py-2.5 bg-bgWhite text-bannerBackground rounded hover:bg-opacity-90 transition-colors min-w-[160px] text-sm sm:text-base font-semibold"
            >
              See Plan & Pricing
            </Link>
            <Link
              href="join-free"
              className="px-6 py-2.5 bg-bgWhite text-bannerBackground rounded hover:bg-opacity-90 transition-colors min-w-[160px] text-sm sm:text-base font-semibold"
            >
              Sign Up For Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
