import './globals.css';

import Footer from '@/components/layout/footer';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import clsx from 'clsx';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={clsx('min-h-screen bg-black', inter.className)}>
        <div className="relative flex flex-col h-screen justify-between container mx-auto max-w-7xl pt-8 md:pt-16 px-6">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
