/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  useCreateUserMutation,
  useLoginUserMutation,
} from "@/redux/api/authApi";
import { useAddContactMutation } from "@/redux/api/contactApi";
import { useGetSingleProductQuery } from "@/redux/api/poroductApi";
import { setUser } from "@/redux/slice/userSlice";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import CompanyOverview from "./CompanyOverview";

interface FormData {
  subject: string;
  message: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  whatsappNumber?: string;
  agreedToTerms?: any;
}

interface EmailError {
  data?: {
    message?: string;
  };
};

type ContactFormProps = {
  supplierId: string | string[] | undefined;
};


interface User {
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  accessToken: string;
}

interface RootState {
  user: {
    accessToken: string | [];
    user: {
      user: User;
    };
  };
}

export default function ContactForm({
  supplierId,
}: FormData & ContactFormProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state?.user?.user?.user);
  const [memberType, setMemberType] = useState("existing");
  const [loginUser] = useLoginUserMutation();
  const [createUser] = useCreateUserMutation();
  const accessToken = localStorage.getItem("accessToken");
  const { data: singlerSuppliderId } = useGetSingleProductQuery(
    supplierId as string
  );
  const [sendEmail] = useAddContactMutation();
  const suppliderId = singlerSuppliderId?.data?.userId;

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const userPayload = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email,
      phoneNumber: data?.phoneNumber,
      whatsappNumber: data?.whatsappNumber,
      password: data?.password,
    };

    console.log(userPayload);

    const isValid = await trigger("agreedToTerms");
    if (!isValid) {
      toast.error("You must agree to the terms and conditions.");
      return;
    }

    try {
      const persistMessageData = {
        subject: data.subject,
        message: data.message,
      };

      // Scenario A: Existing Member Route
      if (memberType === "existing") {
        const res = await loginUser(data).unwrap();
        if (res?.success) {
          dispatch(setUser(res));
          toast.success(res?.message || "Login successful");

          // Send the message after successful login
          const sendemailRes = await sendEmail({
            receiverId: suppliderId,
            subject: persistMessageData.subject,
            message: persistMessageData.message,
          });

          if (sendemailRes?.data?.success) {
            toast.success("Message sent successfully");
          } else {
            const errorMessage =
              (sendemailRes?.error as EmailError)?.data?.message ||
              "Failed to send message";
            toast.error(errorMessage);
          }
        } else {
          toast.error("Login failed");
        }
      }

      // Scenario B: New Member Route
      if (memberType === "new") {
        // Step 1: Register user and send OTP
        const res = await createUser({
          ...userPayload,
          role: "BUYER",
          companyInfo: { countryName: "Unknown", companyName: "Unknown" },
        }).unwrap();

        console.log();

        if (res?.success) {
          toast.success(res.message);
          localStorage.setItem("email", res?.data?.email);

          const sendemailRes = await sendEmail({
            receiverId: suppliderId,
            subject: data.subject,
            message: data.message,
          });

          console.log("send Email res ", sendemailRes);
          toast.success("Message sent successfully");
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl space-y-8">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold">Send message to:</h2>

        <div className="space-y-4">
          <div className="flex justify-start items-center">
            <Label className="w-36">To:</Label>
            <div className="text-textGray">
              Korim Group <span className="text-xs">(Owner)</span>
            </div>
          </div>

          <div className="flex justify-start items-center">
            <Label htmlFor="subject" className="w-36">
              Subject*
            </Label>
            <Controller
              control={control}
              name="subject"
              rules={{ required: "Subject is required" }}
              render={({ field }) => (
                <Input {...field} placeholder="Please enter your question" />
              )}
            />
          </div>
          {errors.subject?.message && (
            <p className="text-customTextRed pl-32">
              {String(errors.subject.message)}
            </p>
          )}
          <div className="flex justify-start items-start">
            <Label htmlFor="message" className="pt-2 w-36">
              Message*
            </Label>
            <Controller
              control={control}
              name="message"
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder="Please enter your message"
                  className="min-h-[120px]"
                />
              )}
            />
          </div>

          {errors.message && (
            <p className="text-customTextRed pl-32">
              {String(errors.message.message)}
            </p>
          )}

          {!user?.email && !accessToken ? (
            <div className="">
              <RadioGroup
                value={memberType}
                onValueChange={(value) => {
                  setMemberType(value);
                  setValue("firstName", "");
                  setValue("lastName", "");
                }}
              >
                <div className="flex gap-4 py-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="existing" id="existing" />
                    <Label htmlFor="existing">Existing Member</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="new" id="new" />
                    <Label htmlFor="new">New Member</Label>
                  </div>
                </div>
              </RadioGroup>

              {memberType === "existing" ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Controller
                      control={control}
                      name="email"
                      rules={{ required: "E-mail is required" }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="email"
                          placeholder="Please enter your email"
                        />
                      )}
                    />
                    {errors.email && (
                      <p className="text-customTextRed">
                        {String(errors.email.message)}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Controller
                      control={control}
                      name="password"
                      rules={{ required: "Password is required" }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="password"
                          placeholder="Please enter your password"
                        />
                      )}
                    />
                    {errors.password && (
                      <p className="text-customTextRed">
                        {String(errors.password.message)}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Controller
                        control={control}
                        name="firstName"
                        rules={{
                          required:
                            memberType === "new"
                              ? "First name is required"
                              : false,
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="Enter your first name"
                          />
                        )}
                      />
                      {errors.firstName && (
                        <p className="text-customTextRed">
                          {String(errors.firstName.message)}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Controller
                        control={control}
                        name="lastName"
                        rules={{
                          required:
                            memberType === "new"
                              ? "Last name is required"
                              : false,
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="Enter your last name"
                          />
                        )}
                      />
                      {errors.lastName && (
                        <p className="text-customTextRed">
                          {String(errors.lastName.message)}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Controller
                      control={control}
                      name="email"
                      rules={{ required: "E-mail is required" }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="email"
                          placeholder="Please enter your email"
                        />
                      )}
                    />
                    {errors.email && (
                      <p className="text-customTextRed">
                        {String(errors.email.message)}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Controller
                      control={control}
                      name="phoneNumber"
                      rules={{
                        required:
                          memberType === "new"
                            ? "Phone number is required"
                            : false,
                      }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="tel"
                          placeholder="Please enter your phone number"
                        />
                      )}
                    />
                    {errors.phoneNumber && (
                      <p className="text-customTextRed">
                        {String(errors.phoneNumber.message)}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">whatsapp Number</Label>
                    <Controller
                      control={control}
                      name="whatsappNumber"
                      rules={{
                        required:
                          memberType === "new"
                            ? "whatsapp number is required"
                            : false,
                      }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="tel"
                          placeholder="Please enter your whatsapp number"
                        />
                      )}
                    />
                    {errors.whatsappNumber && (
                      <p className="text-customTextRed">
                        {String(errors.whatsappNumber.message)}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Controller
                      control={control}
                      name="password"
                      rules={{ required: "Password is required" }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="password"
                          placeholder="Please enter your password"
                        />
                      )}
                    />
                    {errors.password && (
                      <p className="text-customTextRed">
                        {String(errors.password.message)}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            ""
          )}

          <Button
            className="bg-customBlue hover:bg-customButtonHoverBlue"
            type="submit"
          >
            Send Message
          </Button>
        </div>
      </form>

      <CompanyOverview />
    </div>
  );
}
