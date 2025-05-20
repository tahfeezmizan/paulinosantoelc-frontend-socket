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

const BuyerSignup = () => {
  const router = useRouter();
  const [createUser, { isLoading }] = useCreateUserMutation();
  const countries = CountryData.countries.all;
  const [isAgreed, setIsAgreed] = useState(false);

  const countryOptions = countries.map((country: any, index: number) => ({
    value: `${country.alpha2}-${index}`,
    label: country.name,
  }));

  const submitHandler = async (data: any) => {
    if (!isAgreed) {
      toast.error("You must agree to the terms before proceeding.");
      return;
    }

    console.log(data);

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

      // console.log("User Data",res);

      if (res?.success === true) {
        localStorage.setItem("email", res?.data?.email);
        toast.success(res?.message);
        if (res?.message == "OTP sent successfully") {
          router.push("/verify-otp");
        }
        router.push("/login");
      }
    } catch (error: unknown) {
      toast(
        (error as { data?: { message?: string } })?.data?.message ||
          "An error occurred"
      );
    }
  };

  return (
    <div className="mx-auto container">
      <div className="text-center grid gap-4 mb-6">
        <h1 className="font-bold text-[40px] leading-[48px] text-black">
          Join Free on B2B
        </h1>
        <p className="text-base font-medium capitalize leading-5 text-carbon">
          Use Our Simple Business Listing Form to Get Listed & Grow
        </p>
      </div>
      <Form
        submitHandler={submitHandler}
        className="space-y-6  p-4  md:p-8 w-full"
      >
        <div className="flex gap-5 w-full ">
          <FormInput
            name="firstName"
            label="First Name"
            placeholder="First Name"
            required
            parentClass="w-full"
            className="rounded-md border border-[#B6B6B6]   p-3 shadow-sm outline-none focus:outline-none"
          />
          <FormInput
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
            required
            parentClass="w-full"
            className="rounded-md border border-[#B6B6B6]   p-3 shadow-sm outline-none focus:outline-none"
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
          className="rounded-md border border-[#B6B6B6]   p-3 shadow-sm outline-none focus:outline-none"
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          placeholder="Please enter your e-mail"
          required
          className="rounded-md border border-[#B6B6B6]   p-3 shadow-sm outline-none focus:outline-none"
        />
        <FormInput
          name="phoneNumber"
          label="Phone Number"
          placeholder="Please enter your phone number"
          required
          className="rounded-md border border-[#B6B6B6]   p-3 shadow-sm outline-none focus:outline-none"
        />
        <FormInput
          name="whatsappNumber"
          label="WhatsApp Number"
          placeholder="Please enter your WhatsApp number"
          required
          className="rounded-md border border-[#B6B6B6]   p-3 shadow-sm outline-none focus:outline-none"
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="Please enter your password"
          required
          className="rounded-md border border-[#B6B6B6]   p-3 shadow-sm outline-none focus:outline-none"
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
            I Agree to Business & Product Listing Terms
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
            {isLoading ? "Submitting..." : "Join Free Now"}
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
          showcase their offerings to reach global buyers. By accessing or using
          B2BMAP’s services, you agree to abide by our terms, ensuring legal and
          ethical trade practices.
        </p>
        <p className="mt-3">
          The platform supports industries like agriculture, electronics,
          fashion, machinery, health, and more. It prohibits listings that
          violate laws or intellectual property rights, including counterfeit
          items, weapons, restricted substances, or illegal products like banned
          chemicals, adult content, and government-issued documents. Ensuring
          the legality of listed products is the member’s responsibility.
        </p>
        <p className="mt-3">
          B2BMAP offers both free and premium memberships. Premium members enjoy
          enhanced visibility, exclusive marketing tools, and a greater
          potential to connect with buyers. Violations of our terms may lead to
          removal of listings or account termination without refunds, even for
          premium members.
        </p>
        <p className="mt-3">
          To maintain fairness and safety, B2BMAP periodically updates its
          guidelines. Sellers are encouraged to check our Terms of Use and
          Privacy Policy to stay informed. Leverage B2BMAP to connect with a
          global audience, expand your business, and ensure compliance with all
          policies for a seamless experience.
        </p>
      </section>
    </div>
  );
};

export default BuyerSignup;
