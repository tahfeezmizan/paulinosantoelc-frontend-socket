// eslint-disable-next-line @typescript-eslint/no-unused-vars

"use client";

import productsImg from "@/assets/images/products-img.png";
import { LogOut, Mail, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useGetLoggedInUserQuery } from "@/redux/api/authApi";

export function Sidebar() {
  const pathname = usePathname();
  const { data: user } = useGetLoggedInUserQuery(null);

  return (
    <div className="w-full md:w-80 flex flex-col gap-6">
      <div className="p-8 bg-blue-50 flex flex-col gap-6 items-center border-[#B0E4F8] border rounded-md">
        <div className="w-20 h-20 overflow-hidden rounded-full border-4 border-[#54C5F1] bg-gray-300 flex items-center justify-center mb-2">
          <Image
            src={productsImg}
            alt="Supplier Logo"
            className="object-cover rounded-md transition duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-2xl hanken-text font-semibold">
            {user?.firstName} {" " + user?.lastName}
          </h3>
          <p className="hanken-text text ">{user?.role}</p>
        </div>
      </div>

      <nav className="flex-1 py-8 px-6 bg-blue-50 border-[#B0E4F8] border rounded-md">
        <ul className="space-y-1 mb-6 font-roboto">
          <li>
            <Link
              href="/profile"
              className={`
                flex items-center gap-3 px-3 py-2 text-base font-medium rounded-md
                ${
                  pathname === "/profile"
                    ? "bg-[#00A9EA] text-white"
                    : "text-gray-600 hover:bg-blue-100"
                }
              `}
            >
              <LuLayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/profile/inbox"
              className={`
                flex items-center gap-3 px-3 py-2 text-base font-medium rounded-md
                ${
                  pathname === "/profile/inbox"
                    ? "bg-[#00A9EA] text-white"
                    : "text-gray-600 hover:bg-blue-100"
                }
              `}
            >
              <Mail className="h-5 w-5" />
              Inbox
            </Link>
          </li>
          <li>
            <Link
              href="/profile/my-product"
              className={`
                flex items-center gap-3 px-3 py-2 text-base font-medium rounded-md
                ${
                  pathname === "/profile/my-product"
                    ? "bg-[#00A9EA] text-white"
                    : "text-gray-600 hover:bg-blue-100"
                }
              `}
            >
              <Package className="h-5 w-5" />
              My Product
            </Link>
          </li>
          <li>
            <Link
              href="/profile/create-requirement"
              className={`
                flex items-center gap-3 px-3 py-2 text-base font-medium rounded-md
                ${
                  pathname === "/profile/create-requirement"
                    ? "bg-[#00A9EA] text-white"
                    : "text-gray-600 hover:bg-blue-100"
                }
              `}
            >
              <Package className="h-5 w-5" />
              Create Buy Requirement
            </Link>
          </li>
          {/* Uncomment if needed */}
          {/* <li>
            <Link
              href="/profile/pricing-plan"
              className={`
                flex items-center gap-3 px-3 py-2 text-base font-medium rounded-md
                ${pathname === "/profile/pricing-plan" ? "bg-[#00A9EA] text-white" : "text-gray-600 hover:bg-blue-100"}
              `}
            >
              <PieChart className="h-5 w-5" />
              Pricing Plan
            </Link>
          </li> */}
        </ul>

        <div className="p-4 border-t">
          <Link
            href="/logout"
            className={`
              flex items-center gap-3 px-3 py-2 text-base font-roboto font-medium rounded-md
              ${
                pathname === "/logout"
                  ? "bg-[#00A9EA] text-white"
                  : "text-gray-600 hover:bg-blue-100"
              }
            `}
          >
            <LogOut className="h-5 w-5" />
            Log Out
          </Link>
        </div>
      </nav>
    </div>
  );
}
