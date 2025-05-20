import Image from "next/image";
import Link from "next/link";
import supplierCountry from "../../app/supplier-country.json";

// const newSuppliers = [
//   { countryName: "United States", countryImage: countryImage },
//   { countryName: "Canada", countryImage: countryImage },
//   { countryName: "United Kingdom", countryImage: countryImage },
//   { countryName: "Germany", countryImage: countryImage },
//   { countryName: "France", countryImage: countryImage },
//   { countryName: "Japan", countryImage: countryImage },
//   { countryName: "Australia", countryImage: countryImage },
//   { countryName: "India", countryImage: countryImage },
//   { countryName: "Brazil", countryImage: countryImage },
//   { countryName: "China", countryImage: countryImage },
// ];

export default function NewSuppliersList() {
  return (
    <div className="bg-white rounded-lg p-6 ">
      <h2 className="text-2xl font-semibold mb-4 hanken-text border-custom ">
        New Suppliers
      </h2>
      <ul className="space-y-2">
        {supplierCountry?.slice(30, 50).map((supplier) => (
          <li key={supplier.country}>
            <button className="w-full flex items-center justify-start gap-4 py-2 px-1 text-sm sm:text-base text-gray-700 hover:text-customBlue transition-colors">
              <Image
                src={supplier.flag || "/placeholder.svg"}
                alt={`${supplier.country} flag`}
                width={24}
                height={16}
                className="rounded-sm"
              />
              <span>{supplier.country}</span>
            </button>
          </li>
        ))}
        <Link
          href={"/suppliers"}
          className="text-customBlue hover:underline px-1 py-2"
        >
          See All
        </Link>
      </ul>
    </div>
  );
}
