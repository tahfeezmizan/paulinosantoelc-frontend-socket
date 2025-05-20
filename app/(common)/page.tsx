import ProductListingPage from "../../components/home/ProductListingPage";
import HeroSection from "../../components/home/HeroSection";
import FoodProductSupplySection from "@/components/home/FoodProductSupplySection";
import FashionProductSupplySection from "@/components/home/FashionProductSupplySection";
import ComputerProductSupplySection from "@/components/home/ComputerProductSupplySection";
import { BuyersSuppliersSection } from "@/components/home/BuyersSuppliersSection";
import { MarketplaceSection } from "@/components/home/MarketplaceSection";

export default function Home() {
  return (
    <div className="bg-bgWhite space-y-12">
      <HeroSection />
      <ProductListingPage />
      <FoodProductSupplySection />
      <FashionProductSupplySection />
      <ComputerProductSupplySection />
      <BuyersSuppliersSection />
      <MarketplaceSection />
    </div>
  );
}
