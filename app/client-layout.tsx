'use client';

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/components/theme-provider';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-blue-100 bg-[#222176] sticky top-0 z-50">
      {/* <div className="bg-blue-600 text-white py-1">
        <div className="container flex justify-between items-center px-4 md:px-6">
          <p className="text-xs md:text-sm">Now accepting new patients!</p>
          <div className="flex items-center">
            <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1" />
            <span className="text-xs md:text-sm">(604) 123-4567</span>
          </div>
        </div>
      </div> */}
      <div className="container flex py-2 items-center text-white px-4 md:px-6 md:py-4">
        <div className="flex-1 ml-2">
          <Link href="/" className="flex items-center gap-2">
            {/* <Image
            src="/images/daol-logo.png"
            alt="Daol Dental Logo"
            width={100}
            height={100}
          /> */}
            <span className="text-2xl font-bold">DAOL DENTAL CLINIC</span>
          </Link>
        </div>

        <nav className="ml-auto hidden gap-8 md:flex md:text-lg">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#team">Our Team</Link>
          <Link href="/#testimonials">Testimonials</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="hidden ml-auto md:block md:ml-8">
          <button className="rounded-3xl bg-transparent border-white border-[2px] flex justify-center items-center text-white px-6 py-2 md:text-xl md:border-[3px]">
            <Link href="/register">Book Appointment</Link>
          </button>
        </div>
        <button
          className="ml-4 rounded-md p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden text-white">
          <nav className="flex flex-col pb-2">
            <Link href="/" className="py-2 border-b-[1px] border-gray-100">
              Home
            </Link>
            <Link
              href="/#about"
              className="py-3 border-b-[1px] border-gray-100"
            >
              About
            </Link>
            <Link
              href="/#services"
              className="py-3 border-b-[1px] border-gray-100"
            >
              Services
            </Link>
            <Link href="/#team" className="py-3 border-b-[1px] border-gray-100">
              Our Team
            </Link>
            <Link
              href="/#testimonials"
              className="py-3 border-b-[1px] border-gray-100"
            >
              Testimonials
            </Link>
            <Link href="/#contact" className="py-3">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
