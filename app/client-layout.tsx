'use client';

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/components/theme-provider';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-blue-100 bg-white sticky top-0 z-50">
      <div className="bg-blue-600 text-white py-1">
        <div className="container flex justify-between items-center px-4 md:px-6">
          <p className="text-xs md:text-sm">Now accepting new patients!</p>
          <div className="flex items-center">
            <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1" />
            <span className="text-xs md:text-sm">(604) 123-4567</span>
          </div>
        </div>
      </div>
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/daol-logo.png"
            alt="Daol Dental Logo"
            width={100}
            height={100}
          />
          <span className="text-2xl font-bold text-blue-600">Daol Dental</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            href="/#team"
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            Our Team
          </Link>
          <Link
            href="/#testimonials"
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            Testimonials
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>
        <div className="ml-auto md:ml-4">
          <Link href="/register">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Book Appointment
            </Button>
          </Link>
        </div>
        <button
          className="ml-4 rounded-md p-2 text-gray-500 md:hidden"
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
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-500 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-gray-500 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium text-gray-500 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/#team"
              className="text-sm font-medium text-gray-500 hover:text-blue-600"
            >
              Our Team
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium text-gray-500 hover:text-blue-600"
            >
              Testimonials
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-gray-500 hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

// Changed from named export to default export
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
}
