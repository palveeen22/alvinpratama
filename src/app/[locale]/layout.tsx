import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans, GeistMono } from 'geist/font'
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";
import { cx } from 'class-variance-authority'
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rahmanaulia.com'),
  title: {
    default: 'Alvin Pratama',
    template: '%s | Alvin Pratama',
  },
  description: 'Software Engineer',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Alvin Pratama',
  },
}

interface RootLayout {
  children: React.ReactNode;
  params: {
    locale: string;
  }
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayout>) {
  return (
    <html className={cx(GeistSans.variable, GeistMono.variable)} lang={locale}>
      <body>
        <ThemeProvider attribute='class' enableSystem disableTransitionOnChange>
          <main className='mx-auto flex min-h-screen max-w-[1280px] flex-col flex-wrap gap-10 px-6 md:py-12 py-4 md:gap-16'>
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
