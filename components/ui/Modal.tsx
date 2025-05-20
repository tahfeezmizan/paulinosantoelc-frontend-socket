/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useGetAllPlansQuery } from "@/redux/api/planApi";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "sonner";

type FormData = {
  membershipPlan: "sixMonth" | "year";
  cardNumber: string;
  expiry: string;
  cvc: string;
  nameOnCard: string;
  country: string;
  zipCode: string;
};

export default function Modal({
  isOpen,
  setIsOpen,
  planId,
  clientSecret,
}: any) {
  const id = planId;
  const { data: plansData } = useGetAllPlansQuery({});
  const plan = plansData?.find((plan: any) => plan.id === id);
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector((state: any) => state?.user?.user?.user);
  const userName = user?.firstName + " " + user?.lastName;
  const [stripeError, setStripeError] = useState<string | null>(null);
  // const [isProcessing, setIsProcessing] = useState(false);

  function close() {
    setIsOpen(false);
  }

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
    hidePostalCode: true,
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      membershipPlan: "sixMonth",
      country: "United States",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("Captured Form Data:", data);
    if (!stripe || !elements) {
      return;
    }

    try {
      const { error, paymentIntent } = await stripe?.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              name: userName,
              email: user?.email,
            },
          },
        }
      );
      console.log("User Payment", paymentIntent);
      if (error) {
        setStripeError(error.message || "Payment failed");
      } else if (paymentIntent?.status === "succeeded") {
        toast.success("Payment Successful");
        // router.push("/confirmation");
      }
    } catch (error: any) {
      toast.error(stripeError || error?.message);
      // console.log(error);
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen bg-black/10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white text-black p-6 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-3xl font-semibold leading-normal text-black"
              >
                Pay Here
              </DialogTitle>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 mt-3"
              >
                <div>
                  <label className="block mb-2 font-medium">
                    Membership Plan:{" "}
                    <span className="bg-[#00a8ea59] p-1 rounded-lg ml-1">
                      {plan?.planName}
                    </span>
                  </label>
                  <label className="block mb-2 font-medium">
                    Plan Value: ${plan?.price}
                  </label>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <label className="block font-medium mb-2">
                    Card Information
                  </label>
                  <div className="p-3 border border-gray-300 rounded-lg">
                    <CardElement options={cardElementOptions} />
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 space-y-3">
                  <input
                    type="text"
                    placeholder="Country"
                    {...register("country", {
                      required: "Country is required",
                    })}
                    className="w-full border px-4 py-2 rounded-md"
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm">
                      {errors.country.message}
                    </p>
                  )}

                  <input
                    type="text"
                    placeholder="ZIP Code"
                    {...register("zipCode", {
                      required: "ZIP Code is required",
                    })}
                    className="w-full border px-4 py-2 rounded-md"
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 text-sm">
                      {errors.zipCode.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00A9EA] hover:bg-blue-600 text-white py-2 rounded-md font-semibold"
                >
                  Pay ${plan?.price.toFixed(2)}
                </button>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
