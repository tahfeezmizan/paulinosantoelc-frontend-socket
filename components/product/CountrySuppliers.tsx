// import { ChevronRight } from "lucide-react"
import Image from "next/image";
import supplierContry from "../../app/supplier-country.json";


// interface Country {
//   country: string;
//   flag: string;
// }

export default function CountrySuppliers() {
  // Sample data - in a real app this would come from an API or database
  // const countries: Country[] = Array(48).fill({
  //   name: "Brazil",
  //   flag: countryImage,
  // });

  return (
    <div className="bg-white py-8">
      <div className="container">
        <div className="flex justify-between items-center mb-4 border-custom">
          <h2 className="text-2xl hanken-text">
            Country Wise Product Suppliers
          </h2>
          {/* <button className="text-customBlue hover:text-customButtonHoverBlue flex items-center">
          More
          <ChevronRight className="w-4 h-4 ml-1" />
        </button> */}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {supplierContry?.map((country, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 md:space-x-4 p-2  hover:bg-bgWhite rounded-lg cursor-pointer transition duration-300 ease-in-out"
            >
              <Image
                src={country.flag || "/placeholder.svg"}
                alt={`${country.flag} flag`}
                width={24}
                height={20}
                className="rounded-sm"
              />
              <span className=" text-black">{country.country}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
