"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Skills", href: "/skills" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Resume", href: "/resume" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gray-800 p-2.5 relative z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <a href='/' className="relative rotate-6 w-20 h-16 md:w-24 md:h-20">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </a>
        </div>

        {/* Hamburger Button (Visible on Small Screens) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none ml-2"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-14 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-14 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6h16.5"
              />
            </svg>
          )}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    text-l px-3 py-2 rounded-md transition-colors duration-300 
                    ${isActive 
                      ? "bg-slate-200 text-black font-bold"
                      : "text-white hover:bg-slate-400 hover:text-black"}
                  `}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <>
          {/* Overlay behind dropdown */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)} // Close menu when clicking outside
          ></div>

          {/* Dropdown Menu */}
          <ul
            className="
              absolute top-full left-0 w-full 
              bg-gray-800 
              md:hidden flex flex-col space-y-4 
              p-4 mt-1 z-50
            "
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="text-center">
                  <Link
                    href={item.href}
                    className={`
                      block w-full text-l px-3 py-2 rounded-md transition-colors duration-300 
                      ${isActive 
                        ? "bg-slate-200 text-black font-bold"
                        : "text-white hover:bg-slate-400 hover:text-black"}
                    `}
                    onClick={() => setIsOpen(false)} // Close menu after clicking a link
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </nav>
  );
}
