import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function NavbarWithModal() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Reference for modal to check clicks outside
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on component unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <button onClick={toggleMenu} className="absolute top-6 right-6 text-customBlue">
        <X size={28} />
      </button>

      {/* Modal (Navbar) */}
      {menuOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black"
        >
          <div className="flex flex-col space-y-4 text-center text-[#7bbefd] mt-12 bg-white p-6 rounded-lg shadow-lg">
            <Link href="/" className="text-xl hover:text-customBlue" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/product" className="text-xl hover:text-customBlue" onClick={toggleMenu}>
              Product
            </Link>
            <Link href="/directory" className="text-xl hover:text-customBlue" onClick={toggleMenu}>
              Business Directory
            </Link>
            <Link href="/buyer" className="text-xl hover:text-customBlue" onClick={toggleMenu}>
              Buyer
            </Link>
            <Link href="/suppliers" className="text-xl hover:text-customBlue" onClick={toggleMenu}>
              Suppliers
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
