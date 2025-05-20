/*eslint-disable*/
"use client";
import CountryData from "country-data";
import React, { useState } from "react";
import { useCreateUserMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import { toast } from "sonner";
import FormSelect from "@/components/form/FormSelect";
import FormTextarea from "@/components/form/FormTextarea";
import FormImageUpload from "@/components/form/FormImageUpload";

interface Step {
  number: number;
  title: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Post buy requirements to Get Quotations from top suppliers",
  },
  {
    number: 2,
    title: "Compare quotes received from top suppliers",
  },
  {
    number: 3,
    title: "Seal the deal with best supplier",
  },
];

const Steps = () => {
  return (
    <div className="relative flex flex-col lg:grid lg:grid-cols-3 items-center justify-between gap-8 row-gap-8">
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2  lg:w-[650px] 2xl:w-[900px] h-1 bg-customBlue lg:block hidden"></div>
      {steps.map((step: Step) => (
        <div
          key={step.number}
          className="relative sm:text-center flex flex-col items-center"
        >
          <div className="flex items-center justify-center size-20 mb-4 text-5xl font-extrabold rounded-full text-white bg-customBlue sm:mx-auto relative z-10">
            {step.number}
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-center px-4">
            {step.title}
          </h6>
        </div>
      ))}
    </div>
  );
};

const SupplierSignup = () => {
  const router = useRouter();
  const [isNewMember, setIsNewMember] = useState(false); // Defaults to New Member

  const [createUser, { isLoading }] = useCreateUserMutation();
  const countries = CountryData.countries.all;
  const [isAgreed, setIsAgreed] = useState(false); // Track checkbox state
  const [isFileUploadRequired, setIsFileUploadRequired] = useState(false); // Track file upload requirement

  const countryOptions = countries.map((country: any, index: number) => ({
    value: `${country.alpha2}-${index}`,
    label: country.name,
  }));
  const productCategoryOptions: any = [
    { value: "electronics", label: "Electronics" },
    { value: "clothing", label: "Clothing" },
    { value: "home-appliances", label: "Home Appliances" },
    { value: "books", label: "Books" },
    { value: "toys", label: "Toys" },
    // Add more categories as needed
  ];
  const submitHandler = async (data: any) => {
    console.log("data", data);
    if (!isAgreed) {
      toast.error("You must agree to the terms before proceeding.");
      return;
    }
    try {
      const res = await createUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        whatsappNumber: data.whatsappNumber,
        role: "BUYER",
        password: data.password,
        companyInfo: {
          countryName:
            countries.find((country: any) => country.alpha2 === data.country)
              ?.name || "Unknown",
          companyName: data.companyName,
        },
      }).unwrap();
      // console.log(res);
      if (res?.success === true) {
        localStorage.setItem("email", res?.data?.email);
        toast.success(res?.message);
        // if (res?.message == "OTP sent successfully") {
        //   router.push("/verify-otp");
        // }
        // router.push("/login");
      }
    } catch (error: unknown) {
      toast(
        (error as { data?: { message?: string } })?.data?.message ||
          "An error occurred"
      );
    }
  };
  return (
    <>
      <div className="mx-auto container">
        <Steps />

        <div className="text-center grid gap-4 pt-10">
          <h1 className="font-bold text-[40px] leading-[48px] text-black">
            Post Your Buy Requirement
          </h1>
          <p className="text-base font-medium capitalize leading-5 text-carbon">
            Tell Us About Your Buy Requirement & Receive Quotes From Top
            Suppliers{" "}
          </p>
        </div>
        <Form
          submitHandler={submitHandler}
          className="space-y-6 p-4 md:p-8 w-full"
        >
          <FormInput
            name="productName"
            label="Product Name"
            placeholder="Enter Product name"
            required
            className="rounded-md border border-[#B6B6B6] p-3 shadow-sm outline-none focus:outline-none"
          />
          <FormSelect
            name="Category"
            label="Select Product Category"
            options={productCategoryOptions}
            required={true}
            className="rounded-md border p-3 border-[#B6B6B6] shadow-sm outline-none focus:outline-none"
          />
          <FormTextarea
            name="details"
            label="Description"
            placeholder="Describe your buying requirement including specifications, sizes etc"
            required={true}
            rows={6}
            className="rounded-md border p-3 border-[#B6B6B6] shadow-sm outline-none focus:outline-none"
          />
          {/* Radio buttons to choose Yes or No for file upload */}
          <p>Have Product Image?</p>

          <div className="flex gap-5 w-full mb-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="yesUpload"
                name="fileUploadRequired"
                checked={isFileUploadRequired}
                onChange={() => setIsFileUploadRequired(true)}
                className="mr-2"
              />
              <label htmlFor="yesUpload" className="text-sm">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="noUpload"
                name="fileUploadRequired"
                checked={!isFileUploadRequired}
                onChange={() => setIsFileUploadRequired(false)}
                className="mr-2"
              />
              <label htmlFor="noUpload" className="text-sm">
                No
              </label>
            </div>
          </div>
          <FormImageUpload
            name="image"
            required={isFileUploadRequired}
            className="w-full"
            disabled={!isFileUploadRequired}
          />

          
          {/* Radio buttons to choose New Member or Existing Member */}
          
          
          <div className="flex gap-5 w-full mb-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="existingMember"
                name="memberType"
                checked={!isNewMember}
                onChange={() => setIsNewMember(false)}
                className="mr-2"
              />
              <label htmlFor="existingMember" className="text-sm">
                Existing Member
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="newMember"
                name="memberType"
                checked={isNewMember}
                onChange={() => setIsNewMember(true)}
                className="mr-2"
              />
              <label htmlFor="newMember" className="text-sm">
                New Member
              </label>
            </div>
          </div>

          {/* Conditional rendering for New Member fields */}
          {isNewMember && (
            <>
              <div className="flex gap-5 w-full">
                <FormInput
                  name="firstName"
                  label="First Name"
                  placeholder="First Name"
                  required
                  parentClass="w-full"
                  className="rounded-md border border-[#B6B6B6] p-3 shadow-sm outline-none focus:outline-none"
                />
                <FormInput
                  name="lastName"
                  label="Last Name"
                  placeholder="Last Name"
                  required
                  parentClass="w-full"
                  className="rounded-md border border-[#B6B6B6] p-3 shadow-sm outline-none focus:outline-none"
                />
              </div>
              <FormSelect
                name="country"
                label="Select Country"
                options={countryOptions}
                required={true}
                className="rounded-md border p-3 border-[#B6B6B6] shadow-sm outline-none focus:outline-none"
              />
              <FormInput
                name="companyName"
                label="Company Name"
                placeholder="Please enter your company name"
                required
                className="rounded-md border border-[#B6B6B6] p-3 shadow-sm outline-none focus:outline-none"
              />
              <FormInput
                name="phoneNumber"
                label="Phone Number"
                placeholder="Please enter your phone number"
                required
                className="rounded-md border border-[#B6B6B6] p-3 shadow-sm outline-none focus:outline-none"
              />
              <FormInput
                name="whatsappNumber"
                label="WhatsApp Number"
                placeholder="Please enter your WhatsApp number"
                required
                className="rounded-md border border-[#B6B6B6] p-3 shadow-sm outline-none focus:outline-none"
              />
            </>
          )}

          {/* These fields are shown for both New Member and Existing Member */}
          <FormInput
            name="email"
            type="email"
            label="Email"
            placeholder="Please enter your e-mail"
            required
            className="rounded-md border border-[#B6B6B6] p-3 shadow-sm outline-none focus:outline-none"
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            placeholder="Please enter your password"
            required
            className="rounded-md border border-[#B6B6B6] p-3 shadow-sm outline-none focus:outline-none"
          />

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="agreeTerms" className="text-sm">
               By clicking Submit, you agree to our service terms & general
              agreement{" "}
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className={` text-white p-3 rounded-md flex justify-center items-center ${
                isLoading || !isAgreed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-customBlue hover:bg-blue-600"
              }`}
              disabled={isLoading || !isAgreed}
            >
              {isLoading ? "Submitting..." : "Submit Your Requrment"}
            </button>
          </div>

          <p className="text-center text-sm">
            Already a Member?{" "}
            <a href="/login" className="text-customBlue">
              Click Here to Login
            </a>
          </p>
        </Form>

        
        <section className="mt-5  p-4  md:p-8">
          <h2 className="text-xl font-bold">
            B2BMAP Business & Product Listing Guidelines
          </h2>
          <p className="mt-3">
            B2BMAP is a global B2B platform connecting buyers and sellers,
            offering businesses the tools to promote their products and services
            effectively. Businesses can list products, create profiles, and
            showcase their offerings to reach global buyers. By accessing or
            using B2BMAP’s services, you agree to abide by our terms, ensuring
            legal and ethical trade practices.
          </p>
          <p className="mt-3">
            The platform supports industries like agriculture, electronics,
            fashion, machinery, health, and more. It prohibits listings that
            violate laws or intellectual property rights, including counterfeit
            items, weapons, restricted substances, or illegal products like
            banned chemicals, adult content, and government-issued documents.
            Ensuring the legality of listed products is the member’s
            responsibility.
          </p>
          <p className="mt-3">
            B2BMAP offers both free and premium memberships. Premium members
            enjoy enhanced visibility, exclusive marketing tools, and a greater
            potential to connect with buyers. Violations of our terms may lead
            to removal of listings or account termination without refunds, even
            for premium members.
          </p>
          <p className="mt-3">
            To maintain fairness and safety, B2BMAP periodically updates its
            guidelines. Sellers are encouraged to check our Terms of Use and
            Privacy Policy to stay informed. Leverage B2BMAP to connect with a
            global audience, expand your business, and ensure compliance with
            all policies for a seamless experience.
          </p>
        </section>
      </div>
    </>
  );
};

export default SupplierSignup;
