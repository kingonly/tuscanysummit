"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#0D0D0D]/95 backdrop-blur-xl py-4 border-b border-[#F5F0E8]/5" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/tuscany.png"
              alt="Tuscany Lightning Summit Logo"
              width={36}
              height={36}
              className="brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-xs tracking-[0.2em] uppercase text-[#F5F0E8]/60">
                Tuscany
              </span>
              <span className="text-sm font-semibold tracking-wide text-[#F5F0E8]">
                Lightning Summit
              </span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-[#F5F0E8] transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-[#F5F0E8] transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-[#F5F0E8] transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`} 
              />
            </div>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: "#about", label: "About" },
              { href: "#location", label: "Location" },
              { href: "#agenda", label: "Agenda" },
              { href: "#host", label: "Host" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-colors group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-[#F5F0E8]/5 rounded-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
              </Link>
            ))}
            
            <Link
              href="https://luma.com/fcp4ov95"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 relative inline-flex items-center px-5 py-2.5 text-sm font-semibold text-[#0D0D0D] bg-gradient-to-r from-[#F4A524] to-[#C75B39] overflow-hidden group"
            >
              <span className="relative z-10 tracking-wide">Apply</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#C75B39] to-[#F4A524] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`${
            isMobileMenuOpen 
              ? "max-h-[400px] opacity-100 mt-4" 
              : "max-h-0 opacity-0 mt-0"
          } md:hidden overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <div className="flex flex-col gap-2 p-4 bg-[#1A1A1A]/95 backdrop-blur-xl rounded-xl border border-[#F5F0E8]/10">
            {[
              { href: "#about", label: "About" },
              { href: "#location", label: "Location" },
              { href: "#agenda", label: "Agenda" },
              { href: "#host", label: "Host" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-[#F5F0E8]/70 hover:text-[#F5F0E8] hover:bg-[#F5F0E8]/5 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              href="https://luma.com/fcp4ov95"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mx-4 py-3 text-center font-semibold text-[#0D0D0D] bg-gradient-to-r from-[#F4A524] to-[#C75B39]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply for Invitation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
