/* eslint-disable @typescript-eslint/no-explicit-any */

import { Mail } from "lucide-react";
import CompanyOverview from "./CompanyOverview";
import { useParams } from "next/navigation";
import { useGetAllProductsQuery } from "@/redux/api/poroductApi";

interface HomeContentProps {
  setCurrentView: (view: "home" | "contact") => void;
}

export default function HomeContent({ setCurrentView }: HomeContentProps) {
  const params = useParams();
  const { data: products } = useGetAllProductsQuery({});

  const singleProduct = products?.filter(
    (product: any) => String(product.id) === String(params.id)
  );
  const companyData = singleProduct?.[0]?.user?.companyInfo;

  console.log("Buyer Contact Page Params", params);
  // console.log("filtering company data", companyData);
  if (!singleProduct?.length) {
    return <div>Loading company data...</div>;
  }

  return (
    <div className="max-w-4xl space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">About {companyData?.companyName}</h2>
        <p className="text-textGray">
          {companyData?.about} <br />
          Based in Indonesia, All Seasons is a leading manufacturer of premium
          outdoor furniture, blending craftsmanship, durability and sustainable
          design. Specializing in high-quality wooden furniture, we create
          stylish and functional pieces that elevate outdoor spaces, from
          private homes to luxury resorts.
        </p>
        <p className="text-textGray">
          Our signature collections, including the Prim and Luna series, are
          crafted with precision using responsibly sourced teak, ensuring
          long-lasting beauty even in harsh weather conditions. Designed for
          comfort and sophistication, our furniture transforms patios, gardens,
          and hospitality spaces into inviting retreats.
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => setCurrentView("contact")}
            className="flex items-center gap-3 border border-customBlue text-customBlue px-5 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-customBlue hover:text-white"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </button>
        </div>
      </div>
      <CompanyOverview />
    </div>
  );
}
