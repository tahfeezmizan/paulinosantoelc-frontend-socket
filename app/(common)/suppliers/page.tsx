import TabbedShowcase from "@/components/product/TabbedShowcase";
import globe from "@/assets/icons/products/globe.png";
import target from "@/assets/icons/products/target.png";
import business from "@/assets/icons/products/business.png";
import Image from "next/image";
// import AllProductListPage from "@/components/product/AllProductListPage";
// import CountrySuppliers from "@/components/product/CountrySuppliers";
// import ProductDirectoryInfo from "@/components/product/ProductDirectoryInfo";
import AllSuppliersListPage from "@/components/suppliers/AllSuppliersListPage";
import DirectoryBanner from "@/components/suppliers/DirectoryBanner";

export default function Product() {
  return (
    <div className="bg-bgWhite space-y-16">
      <div className="grid lg:grid-cols-3 container gap-8">
        <TabbedShowcase />
        <div className="lg:col-span-2 bg-customSoftBlue p-6 lg:p-12 flex flex-col items-center justify-center text-center my-6">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-black hanken-text">
              Discover Trusted Manufacturers & Suppliers Globally
            </h1>
            <p className="text-textGray ">
              Explore a Global Network of Manufacturers and Wholesalers by
              Category or Location. Add Your Business to B2BMAP&apos;s Comprehensive
              Suppliers & Manufacturers Directory Today!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src={globe || "/placeholder.svg"}
                  alt="US Flag"
                  width={1000}
                  height={1000}
                  className="rounded-sm w-10 h-10"
                />
                <span className="font-semibold">Global Reach</span>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src={target || "/placeholder.svg"}
                  alt="US Flag"
                  width={1000}
                  height={1000}
                  className="rounded-sm w-10 h-10"
                />
                <span className="font-semibold">Targeted Buyers</span>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src={business || "/placeholder.svg"}
                  alt="US Flag"
                  width={1000}
                  height={1000}
                  className="rounded-sm w-10 h-10"
                />
                <span className="font-semibold">Business Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllSuppliersListPage />
      <DirectoryBanner/>
    </div>
  );
}
