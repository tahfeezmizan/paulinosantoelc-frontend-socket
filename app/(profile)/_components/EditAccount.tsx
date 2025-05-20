import { AboutBusinessInformationForm } from "@/app/(auth)/_components/supplier/form-sections/about-business-information-form";
import { CeoInformationForm } from "@/app/(auth)/_components/supplier/form-sections/ceo-information-form";
import { CompanyInformationForm } from "@/app/(auth)/_components/supplier/form-sections/company-information-form";
import { OwnerInformationForm } from "@/app/(auth)/_components/supplier/form-sections/owner-information-form";
import { useGetLoggedInUserQuery } from "@/redux/api/authApi";
import { useUpdateMeMutation } from "@/redux/api/userApi";
import type { FormData } from "@/types/EditAccountType";
import { CompanyDataType, RootState } from "@/types/EditAccountType";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export default function EditAccount() {
  const methods = useForm<FormData>();
  const user = useSelector((state: RootState) => state?.user?.user?.user);
  const { data } = useGetLoggedInUserQuery(null);
  const companyData: CompanyDataType = data?.companyInfo;
  const router = useRouter();

  const [tradeLicenseFile, setTradeLicenseFile] = useState<File | null>(null);
  const [companyLogoFile, setCompanyLogoFile] = useState<File | null>(null);

  
  const handleImageUpload =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        if (field === "companyInformation.tradeLicense") {
          setTradeLicenseFile(file);
        } else if (field === "companyInformation.logo") {
          setCompanyLogoFile(file);
        }
      }
    };

  const flattenData = (data: FormData) => {
    console.log(data);
    const newData = {
      ...data.ceoInformation,
      ...data.companyInformation,
      ...data.businessInformation,
      ...data.ownerInformation,
    };

    const formatedData = {
      firstName: newData?.firstName,
      lastName: newData?.lastName,
      phoneNumber: newData?.phoneNumber,
      whatsappNumber: newData?.whatsappNumber,
      companyInfo: {
        countryName: newData?.countryName,
        companyName: newData?.companyName,
        companyEstablish: newData?.companyEstablish,
        numberOfEmployees: newData?.numberOfEmployees,
        companyWebsite: newData?.companyWebsite,
        businessIdentification: newData?.businessIdentification,
        businessType: newData?.businessType,
        businessCategory: newData?.category,
        subCategory: newData?.subCategory,
        about: newData?.about,
        field: "field", // static value
        mainProducts: newData?.mainProducts,
        controlPolicy: newData?.controlPolicy === "true", // convert to boolean
        companyAddress: newData?.address,
        zipCode: newData?.zipCode,
        district: newData?.district,
        ownerName: newData?.ownerName,
        ownerEmail: newData?.ownerEmail,
        ownerPhone: newData?.ownerPhone,
      },
    };

    return {
      formatedData,
    };
  };

  const [updateUser] = useUpdateMeMutation();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const formData = new FormData();

      // Get flattened data
      const { formatedData } = flattenData(data);

      console.log("All form data with confomr post request", formatedData);

      // Append files if they exist
      if (companyLogoFile) formData.append("logo", companyLogoFile);
      if (tradeLicenseFile) formData.append("tradeLicense", tradeLicenseFile);

      formData.append("bodyData", JSON.stringify(formatedData));

      // Log what's being sent (for debugging)
      console.log("Sending data:", {
        bodyData: formatedData,
        logo: companyLogoFile,
        tradeLicense: tradeLicenseFile,
      });

      // Send to API
      const response = await updateUser({
        body: formData,
        // Add headers if needed (like authorization)
      }).unwrap();

      if (response?.success === true) {
        toast.success(response.message);
        router.push("/profile");
      }
      console.log("Update successful:", response);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold font-hanken mb-2">
          Welcome {user?.firstName} {" " + user?.lastName}
        </h1>
        <p className="text-gray-600 text-lg normal-case">
          Please Update Your {user?.role} Account
        </p>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CompanyInformationForm
            companyData={companyData}
            handleImageUpload={handleImageUpload}
            tradeLicenseFile={tradeLicenseFile}
            companyLogoFile={companyLogoFile}
          />
          <AboutBusinessInformationForm companyData={companyData} />
          <CeoInformationForm ceoInfo={data} />
          <OwnerInformationForm ownerInfo={companyData} />

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md mt-10 text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
