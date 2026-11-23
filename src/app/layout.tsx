import type { Metadata, Viewport } from 'next';
import { Fraunces, Figtree, Shantell_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { MobileStickyBar } from '@/components/layout/MobileStickyBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
});

const shantellSans = Shantell_Sans({
  subsets: ['latin'],
  variable: '--font-shantell',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/brand/icon.png',
    apple: '/brand/icon.png',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_AE',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#fffdf8',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${figtree.variable} ${shantellSans.variable}`}
    >
      <body className="bg-brand-cream text-brand-dark antialiased flex flex-col min-h-screen">
        <SmoothScroll>
          <Navbar />
          <div className="flex-1 pt-16 sm:pt-20">{children}</div>
          <Footer />
          <FloatingWhatsApp />
          <MobileStickyBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
