"use client";

import pricingIcon from "@/assets/icons/home/pricing.png";
import userIcon from "@/assets/icons/home/user-icon.jpg";
import logo from "@/assets/images/home/logo.png";
import { useGetLoggedInUserQuery } from "@/redux/api/authApi";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

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

const Topbar: React.FC = () => {
  const token = useSelector((state: RootState) => state?.user?.accessToken);
  const user = useSelector((state: RootState) => state?.user?.user?.user);
  const { data: loginUser } = useGetLoggedInUserQuery({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  console.log(loginUser);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  // console.log({ user });

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("persist:root");
    window.location.href = "/login";
  };

  return (
    <div className="w-full border-b bg-textBlack text-bgWhite py-3">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="hero"
              width={200}
              height={200}
              className="w-10 h-10"
            />
            <span className="text-2xl font-normal hanken-text">Business</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center px-8">
          <div className="relative w-full max-w-md text-textGray">
            <input
              type="search"
              placeholder="What are you looking for?"
              className="w-full rounded-md border border-input bg-background px-3 py-3 text-sm ring-offset-background placeholder:text-customGray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button className="absolute right-0 top-0 h-full rounded-l-none py-2 px-6 bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out text-bgWhite rounded-md">
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/pricing"
            className="hidden md:flex font-medium items-center justify-center gap-2"
          >
            <Image
              src={pricingIcon}
              alt="hero"
              width={200}
              height={200}
              className="w-5 h-5"
            />
            Pricing
          </Link>

          {user?.email || token ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="transition duration-300 ease-in-out rounded-lg"
              >
                <Image
                  src={userIcon}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full ml-5"
                />
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-200">
                  <div className="flex items-center px-4 py-3 border-b border-gray-200">
                    <Image
                      src={userIcon || "/path-to-profile.jpg"}
                      width={100}
                      height={100}
                      alt="Profile"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="text-sm font-medium text-gray-700">
                      {/* {user?.firstName + " " + user?.lastName || "User Name"} */}
                      {loginUser?.firstName || "User"}{" "}
                      {loginUser?.lastName ? " " + loginUser?.lastName : ""}
                    </div>
                  </div>
                  <div className="py-2">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className="hidden md:block font-medium pl-4">
                Sign In
              </Link>
              <Link
                href="/join-free"
                className="bg-customBlue hover:bg-customButtonHoverBlue transition duration-300 ease-in-out px-3 py-[6px] rounded-lg"
              >
                Join Free
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
