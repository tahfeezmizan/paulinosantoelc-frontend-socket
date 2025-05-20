/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Modal from "@/components/ui/Modal";
import {
  useCreateSubscriptionMutation,
  useGetAllPlansQuery,
} from "@/redux/api/planApi";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";

const featuresList = [
  "Membership Badge",
  "Directly contact any Buyer to the Seller on our website",
  "Chat with your customers",
  "Your complete product catalog with images on swissglobu.com",
  "Complete business profile with Factory, Production and Management details on swissglobu.com",
  "High search ranking (other companies can find you easily)",
  "Display your products and factory images on our homepage",
  "Highest level of promotion with unlimited benefits",
];

export default function PricingTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const { data: plansData } = useGetAllPlansQuery({});
  const [createSubscription] = useCreateSubscriptionMutation({});
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  // console.log(plansData);

  const plans = plansData?.map((plan: any) => ({
    id: plan?.id,
    name: plan?.planName?.toUpperCase(),
    price: `Starts From $${plan?.price}`,
    monthlyNote: plan?.duration ? `Total for ${plan?.duration}` : "",
    features: [
      plan?.membershipBadge || "—",
      plan?.contactBuyerLimit || "—",
      plan?.chatWithCustomers ? "Yes" : "NO",
      plan?.productCatalogImages
        ? "Unlimited products with images"
        : "No product images",
      plan?.completeBusinessProfile
        ? "Complete profile with images"
        : "One-page simple text. No images.",
      plan?.searchRanking || "—",
      plan?.displayOnHomepage ? "✔" : "No",
      plan?.highestPromotion ? "unlimited benefits" : "No",
    ],
    button: "Get Started",
    highlight: plan?.planName?.toLowerCase() === "gold", // Example condition
  }));

  const handleSubscription = async (selectedPlanId: number) => {
    // console.log("Selected Plan ID:", selectedPlanId);
    try {
      const res = await createSubscription({ planId: selectedPlanId }).unwrap();
      if (res?.success) {
        setClientSecret(res?.data?.client_secret);
      }
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-x-auto py-10 px-4">
      <div className="grid grid-cols-5 container border  px-0">
        <div className="bg-gray-50 p-6 flex items-center">
          <h3 className="text-xl font-medium">Top Features & Benefits</h3>
        </div>

        {plans?.map((plan: any, i: number) => (
          <div
            key={i}
            className={`${plan?.highlight ? "" : ""} border-l border-gray-200`}
          >
            <h3 className="text-xl font-bold text-center py-4 bg-[#E6F6FD]">
              {plan?.name}
            </h3>
            <div className="p-5 space-y-4 pt-14">
              {plan?.price && (
                <p className="text-xl text-black flex items-center justify-center gap-8 border p-1 rounded-lg border-gray-200">
                  {plan?.price}
                </p>
              )}
              {plan?.monthlyNote && (
                <p className="text-base text-black flex items-center justify-center gap-8">
                  {plan?.monthlyNote}
                </p>
              )}
            </div>
          </div>
        ))}

        {featuresList.map((feature, idx) => (
          <React.Fragment key={idx}>
            <div className=" p-5 border-t border-gray-200 text-left text-base">
              {feature}
            </div>
            {plans?.map((plan: any, pi: number) => (
              <div
                key={`${idx}-${pi}`}
                className="p-5 border-t border-l border-gray-200 text-base text-center"
              >
                {plan?.features[idx] || "—"}
              </div>
            ))}
          </React.Fragment>
        ))}

        <div className="bg-gray-50"></div>
        {plans?.map((plan: any, i: number) => (
          <div key={i} className="p-6 border-t border-l border-gray-200">
            <button
              onClick={() => {
                handleSubscription(plan?.id);
                setSelectedPlanId(plan?.id);
                setIsOpen(true);
              }}
              className="bg-[#00A9EA] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
            >
              {plan?.button}
            </button>
            {isOpen && (
              <Elements
                stripe={stripePromise}
                options={{ clientSecret: clientSecret ?? undefined }}
              >
                <Modal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  planId={selectedPlanId}
                  clientSecret={clientSecret}
                />
              </Elements>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
