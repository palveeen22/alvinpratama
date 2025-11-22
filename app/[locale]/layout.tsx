import { GeistSans, GeistMono } from 'geist/font'
import { ThemeProvider } from "@/shared/lib/ThemeProvider";
import "./globals.css";
import { cx } from 'class-variance-authority'
import { Navbar } from "@/widgets/Navbar";
import { Footer } from '@/widgets/Footer';

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
