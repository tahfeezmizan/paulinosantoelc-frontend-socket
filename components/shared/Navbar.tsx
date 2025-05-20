"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path
      ? "text-customBlue sm:border-b sm:border-customBlue"
      : "text-textBlack";

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <nav className="w-full bg-white text-textBlack py-6 relative">
      <div className="container flex justify-end sm:justify-between items-center">
        <div className="hidden sm:flex space-x-6 lg:space-x-14">
          <Link
            href="/"
            className={`transition-all duration-300 ease-in-out ${isActive(
              "/"
            )}`}
          >
            Home
          </Link>
          <Link
            href="/product"
            className={`transition-all duration-300 ease-in-out ${isActive(
              "/product"
            )}`}
          >
            Product
          </Link>
          <Link
            href="/pricing"
            className={`transition-all duration-300 ease-in-out ${isActive(
              "/pricing"
            )}`}
          >
            Pricing
          </Link>
          <Link
            href="/directory"
            className={`transition-all duration-300 ease-in-out ${isActive(
              "/directory"
            )}`}
          >
            Business Directory
          </Link>
          <Link
            href="/buyer"
            className={`transition-all duration-300 ease-in-out ${isActive(
              "/buyer"
            )}`}
          >
            Buyer
          </Link>
          <Link
            href="/suppliers"
            className={`transition-all duration-300 ease-in-out ${isActive(
              "/suppliers"
            )}`}
          >
            Suppliers
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button onClick={toggleMenu} className="sm:hidden self-end">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Modal with Transition */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-sm p-6 shadow-lg relative"
            >
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-customBlue"
              >
                <X size={28} />
              </button>
              <div className="flex flex-col space-y-4 text-center text-[#7bbefd] mt-12">
                <Link
                  href="/"
                  className="text-xl hover:text-customBlue"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="/product"
                  className="text-xl hover:text-customBlue"
                  onClick={toggleMenu}
                >
                  Product
                </Link>
                <Link
                  href="/directory"
                  className="text-xl hover:text-customBlue"
                  onClick={toggleMenu}
                >
                  Business Directory
                </Link>
                <Link
                  href="/buyer"
                  className="text-xl hover:text-customBlue"
                  onClick={toggleMenu}
                >
                  Buyer
                </Link>
                <Link
                  href="/suppliers"
                  className="text-xl hover:text-customBlue"
                  onClick={toggleMenu}
                >
                  Suppliers
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
