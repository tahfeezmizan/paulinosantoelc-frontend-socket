"use client";

import { useGetLoggedInUserQuery } from "@/redux/api/authApi";
import { CompanyDataType } from "@/types/companyDataType";
import BusinessInfo from "./business-info";
import CompanyDetails from "./company-details";
import CompanyInformation from "./company-information";
import ContactAndOwnerInfo from "./contact-and-owner-info";

export default function UserProfilePage() {
  const { data: user, isLoading, error } = useGetLoggedInUserQuery({});
  const companyData: CompanyDataType = user?.companyInfo || {};

  console.log("Company Data", companyData);
  console.log("Login user", user);

  if (isLoading) {
    return <div className="p-8">Loading user information...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-red-500">
        Error loading user information. Please try again.
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-medium font-hanken mb-2">
          Welcome {user?.firstName || "User"}{" "}
          {user?.lastName ? " " + user?.lastName : ""}!
        </h1>
        <p className="text-gray-600 text-lg">
          Please Update Your {user?.role || "User"} Account
        </p>
      </div>

      <CompanyInformation
        companyData={companyData}
        user={
          user
            ? {
                isVerified: user.isVerified || false,
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                email: user.email || "",
                phoneNumber: user.phoneNumber || "",
              }
            : {
                isVerified: false,
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
              }
        }
      />

      <BusinessInfo companyData={companyData} />
      <CompanyDetails companyData={companyData} />
      <ContactAndOwnerInfo
        companyData={companyData}
        user={
          user
            ? {
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                email: user.email || "",
                phoneNumber: user.phoneNumber || "",
              }
            : {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
              }
        }
      />
    </main>
  );
}
