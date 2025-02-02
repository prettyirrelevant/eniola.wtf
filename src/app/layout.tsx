import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import Script from 'next/script';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https:/eniola.wtf'),
  title: {
    default: 'Isaac Adewumi',
    template: '%s | Isaac Adewumi',
  },
  description:
    "Building software, documenting learnings, and sharing thoughts on tech, football, and life's adventures.",
  openGraph: {
    title: 'Isaac Adewumi',
    description:
      "Building software, documenting learnings, and sharing thoughts on tech, football, and life's adventures.",
    url: 'https:/eniola.wtf',
    siteName: 'Isaac Adewumi',
    locale: 'en_US',
    type: 'website',
    images: ['https:/eniola.wtf/og/home'],
  },
  robots: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  twitter: {
    title: 'Isaac Adewumi',
    card: 'summary_large_image',
    creator: '@eniolawtf',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.seline.so/seline.js"
          data-token="289f88dc43848ec"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Navbar />
          {children}
        </div>
      </body>
      <Script />
    </html>
  );
}
