/* eslint-disable @typescript-eslint/no-explicit-any */

import countryImage from "@/assets/images/home/countryImage.png";
import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import BuyerRequirementItem from "./BuyerRequirementItem";

export const buyRequirements = [
  {
    id: "1",
    productName: "Mustard Oil",
    location: "India",
    quantity: "100 Litres",
    packagingTerms: "As per buyer's request",
    buyerCountryFlag: countryImage,
    buyerCountry: "Australia",
    buyQuantity: "100 Liter",
  },
  {
    id: "2",
    productName: "Mustard Oil",
    location: "India",
    quantity: "100 Litres",
    packagingTerms: "As per buyer's request",
    buyerCountryFlag: countryImage,
    buyerCountry: "Australia",
    buyQuantity: "100 Liter",
  },
  {
    id: "3",
    productName: "Mustard Oil",
    location: "India",
    quantity: "100 Litres",
    packagingTerms: "As per buyer's request",
    buyerCountryFlag: countryImage,
    buyerCountry: "Australia",
    buyQuantity: "100 Liter",
  },
  {
    id: "4",
    productName: "Mustard Oil",
    location: "India",
    quantity: "100 Litres",
    packagingTerms: "As per buyer's request",
    buyerCountryFlag: countryImage,
    buyerCountry: "Australia",
    buyQuantity: "100 Liter",
  },
  {
    id: "5",
    productName: "Mustard Oil",
    location: "India",
    quantity: "100 Litres",
    packagingTerms: "As per buyer's request",
    buyerCountryFlag: countryImage,
    buyerCountry: "Australia",
    buyQuantity: "100 Liter",
  },
  {
    id: "6",
    productName: "Mustard Oil",
    location: "India",
    quantity: "100 Litres",
    packagingTerms: "As per buyer's request",
    buyerCountryFlag: countryImage,
    buyerCountry: "Australia",
    buyQuantity: "100 Liter",
  },
  {
    id: "7",
    productName: "Mustard Oil",
    location: "India",
    quantity: "100 Litres",
    packagingTerms: "As per buyer's request",
    buyerCountryFlag: countryImage,
    buyerCountry: "Australia",
    buyQuantity: "100 Liter",
  },
  {
    id: "8",
    productName: "Mustard Oil",
    location: "India",
    quantity: "100 Litres",
    packagingTerms: "As per buyer's request",
    buyerCountryFlag: countryImage,
    buyerCountry: "Australia",
    buyQuantity: "100 Liter",
  },
  {
    id: "9",
    productName: "Mustard Oil",
    location: "India",
    quantity: "100 Litres",
    packagingTerms: "As per buyer's request",
    buyerCountryFlag: countryImage,
    buyerCountry: "Australia",
    buyQuantity: "100 Liter",
  },
  {
    id: "10",
    productName: "Mustard Oil",
    location: "India",
    quantity: "100 Litres",
    packagingTerms: "As per buyer's request",
    buyerCountryFlag: countryImage,
    buyerCountry: "Australia",
    buyQuantity: "100 Liter",
  },
  {
    id: "11",
    productName: "Mustard Oil",
    location: "India",
    quantity: "100 Litres",
    packagingTerms: "As per buyer's request",
    buyerCountryFlag: countryImage,
    buyerCountry: "Australia",
    buyQuantity: "100 Liter",
  },
  {
    id: "12",
    productName: "Mustard Oil",
    location: "India",
    quantity: "100 Litres",
    packagingTerms: "As per buyer's request",
    buyerCountryFlag: countryImage,
    buyerCountry: "Australia",
    buyQuantity: "100 Liter",
  },
];

export default function BuyerRequirementList() {
  const { data: buyer } = useGetAllProductsQuery({});
  // console.log(buyer);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl hanken-text p-6 bg-white rounded-lg text-textBlack">
        Latest Buyer / B2B Leads
      </h2>

      {buyer?.map((buyers: any) => (
        <BuyerRequirementItem key={buyers.id} requirement={buyers} />
      ))}
    </div>
  );
}
