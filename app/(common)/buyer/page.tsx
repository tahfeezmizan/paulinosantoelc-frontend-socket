import BuyerLeadsSection from "./_components/BuyerLeadsSection";
import BuyerMarketplace from "./_components/BuyerMarketplace";
import BuyerPageBanner from "./_components/BuyerPageBanner";



export default function Buyers() {
  return (
    <div className="bg-bgWhite space-y-16">
      <BuyerMarketplace/>
      <BuyerPageBanner/>
      <BuyerLeadsSection/>
    </div>
  );
}
