"use client";

import AllProductCard from "@/components/product/AllProductCard";
import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import { ProductTypes } from "@/types/productTypes";

export default function Products() {
  const { data: products } = useGetAllProductsQuery({});

  console.log("Product Page", products);

  return (
    <div className="space-y-4">
      {products?.map((product: ProductTypes) => (
        <AllProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
}
