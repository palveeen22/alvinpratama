import { ThemeProvider } from "@/shared/lib/ThemeProvider";
import "./globals.css";
import { cx } from 'class-variance-authority'
import { Navbar } from "@/widgets/Navbar";
import { Footer } from '@/widgets/Footer';
import localFont from 'next/font/local'
interface RootLayout {
  children: React.ReactNode;
  params: {
    locale: string;
  }
}

const selectaFont = localFont({
  src: [
    {
      path: './../../src/assets/fonts/FontsFree-Net-SELECTA-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    // Bisa tambah variant lain
  ],
  variable: '--font-selecta',
  display: 'swap',
})

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayout>) {
  return (
    <html className={cx(selectaFont.variable)} lang={locale}>
      <body>
        <ThemeProvider attribute='class' enableSystem disableTransitionOnChange>
          <main className='mx-auto flex min-h-screen max-w-4xl flex-col flex-wrap gap-10 px-4 py-6 mt-5 md:py-12 md:gap-16'>
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
