/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import { useParams } from "next/navigation";

export default function CompanyOverview() {
  const params = useParams();

  const { data: products } = useGetAllProductsQuery({});
  const singleProduct = products?.filter(
    (product: any) => String(product.id) === String(params.id)
  );
  const companyData = singleProduct?.[0]?.user?.companyInfo;

  console.log("Buyer Contact Page Params", singleProduct);
  // console.log("filtering company data", companyData);
  if (!singleProduct?.length) {
    return <div>Loading company data...</div>;
  }

  const companyInfo = {
    name: "Korim Group",
    businessType: ["Manufacturer", "Supplier", "Wholesaler"],
    mainProducts: "Agro & Agriculture",
    contactNumber: "+8801957xxxxx",
    whatsapp: "+8801957xxxxx",
    registerAddress:
      "JL RA, Rajmini No.2, Ngemplak, Pekalongan, Kec. Batealit, Kabupaten Jepara",
    zipCode: "59461",
    country: "Bangladesh",
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Company Overview</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-textGray">Company Name:</div>
          <div>{companyData.companyName}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-textGray">Business Type:</div>
          <div className="flex gap-2 flex-wrap">{companyData.businessType}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-textGray">Main Products:</div>
          <div>{companyInfo.mainProducts}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-textGray">Contact Number:</div>
          <div>{companyInfo.contactNumber}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-textGray">Whatsapp:</div>
          <div>{companyInfo.whatsapp}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-textGray">Register Address:</div>
          <div>{companyInfo.registerAddress}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-textGray">Zip Code:</div>
          <div>{companyInfo.zipCode}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-textGray">Country:</div>
          <div>{companyData.countryName}</div>
        </div>
      </div>
    </div>
  );
}
