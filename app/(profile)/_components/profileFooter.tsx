import Link from "next/link";

export default function ProfileFooter() {
  return (
    <footer className="w-full bg-[#005577] text-white">
      <div className="container mx-auto">
        {/* Footer Links - Responsive layout */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-center items-center py-4 px-4 text-center">
          <Link href="/dashboard" className="px-3 py-2 text-sm hover:underline">
            Dashboard
          </Link>
          <Link href="/inbox" className="px-3 py-2 text-sm hover:underline">
            Inbox
          </Link>
          <Link
            href="/my-product"
            className="px-3 py-2 text-sm hover:underline"
          >
            My Product
          </Link>
          <Link
            href="/buy-requirements"
            className="px-3 py-2 text-sm hover:underline"
          >
            My Buy Requirements
          </Link>
          <Link
            href="/business-profile"
            className="px-3 py-2 text-sm hover:underline"
          >
            Business Profile
          </Link>
          <Link
            href="/help-center"
            className="px-3 py-2 text-sm hover:underline"
          >
            Help Center
          </Link>
          <Link
            href="/premium-service"
            className="px-3 py-2 text-sm hover:underline"
          >
            Premium Service
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs py-2 border-t border-[#006688]">
          Copyright 2020 © Go4WorldBusiness
        </div>
      </div>
    </footer>
  );
}
