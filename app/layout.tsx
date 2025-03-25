import type React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import ClientLayout from './client-layout';
import './globals.css';
import Header from './client-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daol Dental Clinic',
  description: 'Advanced dental care with a personal touch',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
