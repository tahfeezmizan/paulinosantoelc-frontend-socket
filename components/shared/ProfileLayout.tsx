"use client";
import ProfileNavbar from "@/app/(profile)/_components/ProfileNavbar";
import { usePathname } from "next/navigation";
import React from "react";

type ProfileLayoutProps = {
  children: React.ReactNode;
};

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  const pathname = usePathname();

  if (pathname !== "/profile") return null;

  return (
    <div className="border border-red-500">
      <ProfileNavbar />
      {children}
    </div>
  );
}
