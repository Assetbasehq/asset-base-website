"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Menu, X } from "lucide-react";
import assetBaseLogo from "@/public/images/asset-base-logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-black text-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-end gap-2">
          <Image
            src={assetBaseLogo}
            alt="Assetbase logo"
            width={30}
            height={30}
            className="mb-1"
          />
          <p className="text-3xl font-semibold">Assetbase</p>
          <Badge
            variant="default"
            className="bg-custom-green text-white mb-1 rounded-sm"
          >
            beta
          </Badge>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={24} className="cursor-pointer" />
          ) : (
            <Menu
              size={24}
              className="cursor-pointer hover:text-primary transition duration-300"
            />
          )}
        </button>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-[300px] bg-black text-white shadow-lg z-70 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <X
              className="cursor-pointer hover:text-primary transition duration-300"
              size={24}
            />
          </button>
        </div>
        <div className="flex flex-col items-start px-6 gap-6">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-50 z-60 transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link
        href="/"
        onClick={onClick}
        className="relative before:absolute before:-bottom-2 before:left-0 before:h-[2px] before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
      >
        About Us
      </Link>
      <Link
        href="/"
        onClick={onClick}
        className="relative before:absolute before:-bottom-2 before:left-0 before:h-[2px] before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
      >
        Blog
      </Link>
      <a
        href={`${process.env.NEXT_PUBLIC_APP_URL}`}
        target="_blank"
        onClick={onClick}
        rel="noopener noreferrer"
        className="border px-4 py-2 rounded bg-black hover:bg-white hover:text-black transition-colors duration-300"
      >
        Sign In
      </a>
      <a
        // target="_blank"
        onClick={onClick}
        className="px-4 py-2 rounded-full bg-custom-orange font-semibold hover:bg-primary/90 transition-colors duration-300"
      >
        Connect Wallet
      </a>
    </>
  );
}
