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
          <main className='mx-auto flex min-h-screen max-w-4xl flex-col flex-wrap gap-10 px-6 md:py-12 py-4 md:gap-16'>
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
