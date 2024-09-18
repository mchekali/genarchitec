"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="bg-[#fff] shadow-2xl sticky top-0 p-4"
      style={{ zIndex: 1 }}
      data-headlessui-state=""
    >
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative flex items-center">
          <div className="flex flex-1 items-center sm:justify-between">
            <div className="flex flex-shrink-0 items-center border-right">
              {/* Logo Link */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/nextstep-logo.png`}
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <div className="hidden lg:flex items-center border-right">
              <div className="flex justify-end space-x-4">
                {/* Navigation Links */}
                <Link
                  href="#"
                  className="navlinks text-slate-900 hover:text-white hover:bg-slate-500 px-3 py-4 rounded-md text-smlg font-normal"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="navlinks text-slate-900 hover:text-white hover:bg-gray-500 px-3 py-4 rounded-md text-sm font-normal"
                >
                  Login
                </Link>
                <Link
                  href="#"
                  className="navlinks text-slate-900 hover:text-white hover:bg-gray-500 px-3 py-4 rounded-md text-sm font-normal"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div className="block lg:hidden">
            {/* Menu Toggle Button */}
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="block h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="flex flex-col space-y-2">
              {/* Mobile Navigation Links */}
              <Link
                href="#"
                className="navlinks text-slate-900 hover:text-white hover:bg-slate-500 px-3 py-2 rounded-md text-sm font-normal"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="navlinks text-slate-900 hover:text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-normal"
              >
                Login
              </Link>
              <Link
                href="#"
                className="navlinks text-slate-900 hover:text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-normal"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
