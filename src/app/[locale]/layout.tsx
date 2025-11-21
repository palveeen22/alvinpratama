import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans, GeistMono } from 'geist/font'
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";
import { cx } from 'class-variance-authority'
import Footer from "@/components/Footer";
import { getUrl } from "@/lib/urls";
import { getHeaders } from "@/lib/getHeaders";
import { getMetadata } from "@/lib/metadata";
import { statTitle } from "@/data/metakey";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
  const title = statTitle;
  const url = getUrl({ path: (await getHeaders()).path });

  return await getMetadata({
    title,
    openGraphArticle: {
      ogUrl: url
    },
  });
};

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({
  children,
  params // ⚠️ Jangan destructure di parameter
}: Readonly<RootLayoutProps>) {
  // ✅ Await params dulu
  const { locale } = await params
  
  // Validate locale
  if (!locale.includes(locale)) {
    notFound()
  }

  // ✅ Get messages for next-intl
  const messages = await getMessages()

  return (
    <html 
      className={cx(GeistSans.variable, GeistMono.variable)} 
      lang={locale}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider 
            attribute='class' 
            enableSystem 
            disableTransitionOnChange
          >
            <main className='mx-auto flex min-h-screen max-w-4xl flex-col flex-wrap gap-10 px-6 md:py-12 py-4 md:gap-16'>
              <Navbar />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}