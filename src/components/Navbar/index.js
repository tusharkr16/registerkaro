"use client";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="relative z-50 px-6 py-4 md:px-12 md:py-6 bg-transparent">
      <div className="flex justify-between items-center">
        
        <div className="text-2xl font-bold text-black">
          <span>LOGO</span>
          <span className="text-blue-600">TYPE</span>
        </div>

        
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Services</NavLink>
            <NavLink href="#">Contact</NavLink>
          </div>

          <div className="flex items-center space-x-4 ml-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 rounded-full bg-white border border-gray-300 text-black placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-40 lg:w-48 transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-gray-500 h-4 w-4" />
            </div>
          </div>
        </div>

       
        <div className="flex md:hidden items-center space-x-4">
          <button
            className="p-2"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search size={20} className="text-black" />
          </button>
          <button
            className="p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-black" />
            ) : (
              <Menu size={24} className="text-black" />
            )}
          </button>
        </div>
      </div>

     
      {searchOpen && (
        <div className="mt-4 md:hidden relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <Search className="absolute left-3 top-2.5 text-gray-500 h-4 w-4" />
        </div>
      )}

     
      {mobileMenuOpen && (
        <div className="mt-4 md:hidden bg-white border border-gray-200 rounded-lg p-4 space-y-3 shadow-md">
          <MobileNavLink href="#">Home</MobileNavLink>
          <MobileNavLink href="#">About</MobileNavLink>
          <MobileNavLink href="#">Services</MobileNavLink>
          <MobileNavLink href="#">Contact</MobileNavLink>
        </div>
      )}
    </nav>
  );
};


const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="hover:text-blue-600 transition-colors font-medium text-black"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="block hover:text-blue-600 transition-colors text-black"
  >
    {children}
  </a>
);