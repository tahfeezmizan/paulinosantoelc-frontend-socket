"use client";

import productsImg from "@/assets/images/products-img.png";
import { ProductCard } from "@/components/home/ProductCard";
import ContactFormProductsDetails from "@/components/product/productsDetailsPage/ContactFormProductsDetails";
import SupplierInfo from "@/components/product/productsDetailsPage/SupplierInfo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import { ProductTypes } from "@/types/productTypes";
import { ChevronUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductsDetailsPage() {
  const { data: products } = useGetAllProductsQuery({});
  const params = useParams();

  const product = products?.find(
    (product: ProductTypes) => product.id === params.id
  );

  console.log("Producxt details", product);

  return (
    <div className="bg-gray-50 ">
      <div className="container mx-auto px-4 py-4 text-sm text-gray-600">
        <div className="flex flex-wrap items-center">
          <Link href="/b2b" className="hover:text-gray-900">
            B2B
          </Link>
          <ChevronUpIcon className="h-4 w-4 mx-2 text-gray-400 hidden sm:inline" />

          <Link href="/product" className="hover:text-gray-900">
            Product
          </Link>
          <ChevronUpIcon className="h-4 w-4 mx-2 text-gray-400 hidden sm:inline" />

          <Link href="/minerals-raw-materials" className="hover:text-gray-900">
            Minerals & Raw Materials
          </Link>
          <ChevronUpIcon className="h-4 w-4 mx-2 text-gray-400 hidden sm:inline" />

          <Link href="/iron-steel-copper" className="hover:text-gray-900">
            Iron & Steel Copper
          </Link>
          <ChevronUpIcon className="h-4 w-4 mx-2 text-gray-400 hidden sm:inline" />

          <span className="text-gray-400 break-words mt-2 sm:mt-0">
            {product?.productName}
          </span>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <Card className="container mx-auto bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Product Image & Slider */}
            <div className="lg:w-1/3 w-full">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-md bg-gray-100 mb-4">
                <Image
                  src={productsImg}
                  alt="High Purity Copper Wire Scrap"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="slider-controler flex flex-wrap gap-4">
                {[...Array(4)].map((_, idx) => (
                  <Image
                    key={idx}
                    src={productsImg}
                    alt="High Purity Copper Wire Scrap"
                    width={0} // Let Tailwind handle the sizing
                    height={0}
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 111px"
                    className="rounded-md w-[68px] h-[50px] md:h-[72px] sm:w-[100px] sm:h-[90px] lg:w-[111px] lg:h-[60px]"
                    priority
                  />
                ))}
              </div>
            </div>
            {/* Product Details */}
            <div className="flex-1 w-full">
              <h1 className="text-xl hanken-text font-semibold text-gray-900 md:text-2xl">
                {product?.productName}
              </h1>

              {/* Price and CTA */}
              <div className="mt-4 rounded-md border border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-2">
                  <div className="font-medium text-gray-700">
                    USD 6700 / Metric Ton
                  </div>
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    Get Best Price
                  </Button>
                </div>
              </div>

              {/* Specifications Table */}
              <div className="mt-4 overflow-hidden rounded-md border border-gray-200">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700">
                        Country of Origin
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Netherlands
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700">
                        MOQ
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        10 Metric Ton
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700">
                        Price
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        USD 6700 / Metric Ton
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700">
                        HS Code
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">82900</td>
                    </tr>
                    <tr>
                      <td className="bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700">
                        Category
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Materials Raw &gt; Iron & Steel Copper
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-20">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 hanken-text">
          {product?.productName}
        </h1>
        <p className="text-sm sm:text-base py-6 text-gray-700">
          {product?.details}
          <br />
          <br />
          {product?.details}
          <br />
          <br />
          {product?.details}
        </p>

        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 hanken-text mt-6 lg:mt-10">
          Product Usages
        </h1>
        <p className="text-sm sm:text-base py-6 text-gray-700">
          {product?.usage}
        </p>
      </div>

      <div className="container px-4 md:px-0 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SupplierInfo />
          <ContactFormProductsDetails />
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 py-6 lg:py-20 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-2xl hanken-text font-bold text-gray-900">
            Minerals & Raw Materials Products
            <br />
            <span className="text-gray-800">- Korim Group</span>
          </h1>
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-700 font-medium whitespace-nowrap"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products
            ?.slice(0, 4)
            ?.map((product: ProductTypes, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
