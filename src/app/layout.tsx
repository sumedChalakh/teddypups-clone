import type { Metadata, Viewport } from 'next';
import { Fraunces, Figtree, Shantell_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { MobileStickyBar } from '@/components/layout/MobileStickyBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { PawTrailCanvas } from '@/components/ui/PawTrailCanvas';

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
  metadataBase: new URL('https://teddypups-clone-eta.vercel.app'),
  alternates: {
    canonical: 'https://teddypups-clone-eta.vercel.app',
  },
  title: {
    default: 'TeddyPups U.A.E. — Premium teacup puppies in Dubai',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/brand/icon.png',
    apple: '/brand/icon.png',
  },
  openGraph: {
    title: 'TeddyPups U.A.E. — Premium teacup puppies in Dubai',
    description: siteConfig.description,
    url: 'https://teddypups-clone-eta.vercel.app',
    siteName: siteConfig.name,
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/brand/logo.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeddyPups U.A.E. — Premium teacup puppies in Dubai',
    description: siteConfig.description,
    images: ['/brand/logo.png'],
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
          <PawTrailCanvas />
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
