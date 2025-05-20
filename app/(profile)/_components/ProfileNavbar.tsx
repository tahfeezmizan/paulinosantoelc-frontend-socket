"use client";
import Link from "next/link";
import { User, Home, Mail, Package, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProfileNavbar() {
  const handleLogout = () => {
    localStorage?.removeItem("email");
    localStorage?.removeItem("accessToken");
    localStorage?.removeItem("persist:root");
    window.location.href = "/";
  };

  return (
    <header className="bg-[#005580] text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <User className="h-5 w-5" />
          <span className="font-medium">Business</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="flex items-center space-x-1 hover:text-gray-200"
          >
            <Home className="h-5 w-5" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link
            href="/messages"
            className="flex items-center hover:text-gray-200"
          >
            <Mail className="h-5 w-5" />
          </Link>

          {/* Profile dropdown for larger screens (>768px) */}
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="focus:outline-none">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                    <User className="h-5 w-5 text-[#005580]" />
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/profile/inbox"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Inbox</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/profile/my-product"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Package className="h-4 w-4" />
                    <span>My Products</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 cursor-pointer  w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
