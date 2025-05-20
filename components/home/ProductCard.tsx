import eyeIcon from "@/assets/icons/home/eyeIcon.png";
import messageIcon from "@/assets/icons/home/messageIcon.png";
import countryImage from "@/assets/images/home/countryImage.png";
import productsImg from "@/assets/images/products-img.png";
import { ProductTypes } from "@/types/productTypes";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: ProductTypes }) {
  // console.log("Product Card", product);
  // const {images, productName, category} = product;

  return (
    <Link href={`/product`}>
      <div className=" rounded-lg overflow-hidden ">
        <div
          className="relative h-auto w-full overflow-hidden rounded-lg"
          style={{ aspectRatio: "342/213" }}
        >
          <Image
            src={productsImg || product?.images[0]}
            alt={product?.productName || "Product Image"}
            fill
            className="object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src={countryImage || "/placeholder.svg"}
                alt="US Flag"
                width={20}
                height={15}
                className="rounded-sm w-[18px] h-[18]"
              />
              <p className="text-sm text-gray-600">
                {product?.category || product?.category}
              </p>
            </div>
          </div>

          <div className="text-sm text-textSoftGray mb-2">
            {product?.category || product?.category}
          </div>
          <h3 className="text-base block font-medium mb-2 line-clamp-2">
            {product?.productName}
          </h3>

          <div className="flex gap-2 ">
            <button className=" px-3 py-2 text-sm text-customBlue rounded-md hover:bg-[#e6eef8] border border-customBlue transition-colors flex items-center justify-center gap-2">
              <Image
                src={eyeIcon || "/placeholder.svg"}
                alt="US Flag"
                width={20}
                height={15}
                className="rounded-sm w-5 h-5"
              />
              Quick View
            </button>
            <button className=" px-3 py-2 text-sm border border-customBlue rounded-md hover:bg-[#e6eef8] transition-colors">
              <Image
                src={messageIcon || "/placeholder.svg"}
                alt="US Flag"
                width={20}
                height={15}
                className="rounded-sm w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
