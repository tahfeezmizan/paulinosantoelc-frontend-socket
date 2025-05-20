"use client";

import React from "react";
import { Sidebar } from "../(auth)/_components/supplier/sidebar";
import ProfileNavbar from "./_components/ProfileNavbar";
import ProfileFooter from "./_components/profileFooter";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <ProfileNavbar />

      <div className="container mx-auto flex-1 px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-8 xxl:grid-cols-9 gap-10">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-1 xl:col-span-2 xxl:col-span-2">
            <Sidebar />
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 xl:col-span-6 xxl:col-span-7">
            {children}
          </div>
        </div>
      </div>

      <ProfileFooter />
    </div>
  );
}
