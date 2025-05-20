import logo from "@/assets/images/home/logo.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="hero"
                width={200}
                height={200}
                className="w-10 h-10"
              />
              <span className="text-2xl hanken-text">Business</span>
            </div>
            <p className="text-gray-300 text-sm">
              B2B-Business is a Global B2B Platform for Suppliers and Buyers to
              Find, Connect and Communicate - Digitally.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="hover:bg-customBlue transition-colors p-1 border border-gray-300 hover:border-customBlue rounded-full"
              >
                <Facebook size={16} /> {/* Smaller icon size */}
              </Link>
              <Link
                href="#"
                className="hover:bg-customBlue transition-colors p-1 border border-gray-300 hover:border-customBlue rounded-full"
              >
                <Instagram size={16} /> {/* Smaller icon size */}
              </Link>
              <Link
                href="#"
                className="hover:bg-customBlue transition-colors p-1 border border-gray-300 hover:border-customBlue rounded-full"
              >
                <Twitter size={16} /> {/* Smaller icon size */}
              </Link>
              <Link
                href="#"
                className="hover:bg-customBlue transition-colors p-1 border border-gray-300 hover:border-customBlue rounded-full"
              >
                <Linkedin size={16} /> {/* Smaller icon size */}
              </Link>
              <Link
                href="#"
                className="hover:bg-customBlue transition-colors p-1 border border-gray-300 hover:border-customBlue rounded-full"
              >
                <Youtube size={16} /> {/* Smaller icon size */}
              </Link>
            </div>
          </div>

          {/* B2B-Business for Seller */}
          <div className="space-y-4">
            <h3 className="text-lg ">B2B-Business for Seller</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-customBlue transition-colors"
                >
                  Become Premium Member
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-customBlue transition-colors"
                >
                  Create Seller Profile
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-customBlue transition-colors"
                >
                  Display Your Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-customBlue transition-colors"
                >
                  Alert on Buying Leads
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-customBlue transition-colors"
                >
                  Latest Buying Leads
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-customBlue transition-colors"
                >
                  Join Free Now
                </Link>
              </li>
            </ul>
          </div>

          {/* B2B-Business for Buyer */}
          <div className="space-y-4">
            <h3 className="text-lg ">B2B-Business for Buyer</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-customBlue transition-colors"
                >
                  Post Your Buy Requirement
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-customBlue transition-colors"
                >
                  Search Products or Suppliers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-customBlue transition-colors"
                >
                  Sour your Product
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-customBlue transition-colors"
                >
                  Global Business Directory
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-customBlue transition-colors"
                >
                  List of Companies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-customBlue transition-colors"
                >
                  List of Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg ">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-4">
                <MapPin className="shrink-0 mt-1" size={16} />
                <span>
                  1658 Rosewood Lane
                  <br />
                  New York city, NY
                </span>
              </li>
              <li>
                <Link
                  href="tel:2129299953"
                  className="flex items-center gap-4  transition-colors"
                >
                  <Phone size={16} />
                  <span className="text-customBlue">212 929 9953</span>
                </Link>
              </li>
              <li className="space-y-2 flex items-center gap-4">
                <Mail size={16} />
                <div>
                  <p>Customer Support:</p>
                  <Link
                    href="mailto:customer@ftribe.com"
                    className="flex items-center gap-2 text-customBlue hover:underline"
                  >
                    customer@ftribe.com
                  </Link>
                </div>
              </li>
              <li className="space-y-2 flex items-center gap-4">
                <Mail size={16} />
                <div>
                  <p>Security Error Report:</p>
                  <Link
                    href="mailto:admin@ftribe.com"
                    className="flex items-center gap-2 text-customBlue hover:underline"
                  >
                    admin@ftribe.com
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" bg-bgWhite text-black">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm ">
            <p>Copyright 2020 © B2B-Business</p>
            <nav>
              <ul className="flex flex-wrap justify-center gap-4">
                <li className="pr-4 border-r border-gray-300">
                  <Link
                    href="#"
                    className="hover:text-customBlue transition-colors"
                  >
                    New Product
                  </Link>
                </li>
                <li className="pr-4 border-r border-gray-300">
                  <Link
                    href="#"
                    className="hover:text-customBlue transition-colors"
                  >
                    Business Director
                  </Link>
                </li>
                <li className="pr-4 border-r border-gray-300">
                  <Link
                    href="#"
                    className="hover:text-customBlue transition-colors"
                  >
                    Buyer
                  </Link>
                </li>
                <li className="pr-4 border-r border-gray-300">
                  <Link
                    href="#"
                    className="hover:text-customBlue transition-colors"
                  >
                    Suppliers
                  </Link>
                </li>
                <li className="pr-4 border-r border-gray-300">
                  <Link
                    href="#"
                    className="hover:text-customBlue transition-colors"
                  >
                    Region
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-customBlue transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
