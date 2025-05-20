import CountryGrid from "@/components/directory/CountryGrid";
import DirectoryHero from "@/components/directory/DirectoryHero";
import WorldBusinessDirectory from "@/components/directory/WorldBusinessDirectory";

export default function Buyers() {
  return (
    <div className="bg-bgWhite space-y-16">
      <DirectoryHero/>
      <CountryGrid/>
      <WorldBusinessDirectory/>
    </div>
  );
}