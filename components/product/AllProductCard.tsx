import productsImg from "@/assets/images/products-img.png";
import { Card } from "@/components/ui/card";
import { ProductTypes } from "@/types/productTypes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AllProductCard({ product }: { product: ProductTypes }) {
  const pathName = usePathname();

  console.log(product);

  return (
    <Card className="p-4 border border-[#E8E8E8]">
      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
        {/* Product Image */}
        <div className="flex items-center justify-between gap-6">
          <Link
            href={`/product/${product?.id}`}
            className="w-full md:max-w-64 h-auto md:h-40 relative overflow-hidden rounded-md"
          >
            <Image
              src={product?.image || productsImg}
              alt={product?.productName || "Product Image"}
              width={1000}
              height={1000}
              className="object-cover rounded-md transition duration-300 ease-in-out hover:scale-105"
            />
          </Link>
          {/* Product Details */}
          <div className="flex-2 min-w-0 pr-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-customTextRed text-sm border-r pr-2">
                +1 More products
              </span>
              <span className="text-textSoftGray text-sm">
                {product?.category}
              </span>
            </div>
            <h3 className="text-xl text-textBlack mb-2">
              {product.productName}
            </h3>
            <p className="text-textSoftGray text-sm mb-4">
              {product?.details}{" "}
              <Link
                href={`/product/${product?.id}`}
                className="text-customBlue hover:underline"
              >
                Show more
              </Link>
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <div className="text-textGray">
                <span className="text-textBlack">Origin: </span>
                {product?.countryOfOrigin}
              </div>
              <div className="text-textGray">
                <span className="text-textBlack">Price: </span>
                {product?.price}
              </div>
              <div className="text-textGray">
                <span className="text-textBlack">MOQ: </span>
                {product?.productCode}
              </div>
            </div>
          </div>
        </div>

        {/* Supplier Information */}
        <div className="w-full flex flex-1 min-w-48 mr-0 p-5 flex-col items-start md:items-center justify-center gap-4 border-l">
          <div className="text-left space-y-2">
            <div className="font-medium text-lg">
              {product?.countryOfOrigin}
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <Image
                src={product?.companyInfo?.logo || "/placeholder.svg"}
                alt="US Flag"
                width={20}
                height={15}
                className="rounded-sm w-5 h-5"
              />
              {product?.companyInfo?.countryName}
            </div>
          </div>

          {pathName === "/profile/my-product" ? (
            <Link
              href={`/profile/my-product/${product.id}`}
              className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out px-3 py-[6px] rounded-md text-white"
            >
              Edit Product
            </Link>
          ) : (
            <Link
              href={`/suppliers/${product?.id}`}
              className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out px-3 py-[6px] rounded-md text-white"
            >
              Contact Supplier
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
