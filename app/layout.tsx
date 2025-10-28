import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NexaFlow AI - Advanced Cryptocurrency Arbitrage Trading',
  description: 'Harness cutting-edge AI algorithms to identify and execute profitable arbitrage opportunities across 50+ cryptocurrency exchanges in milliseconds.',
  keywords: 'cryptocurrency, arbitrage, trading, AI, machine learning, automated trading, crypto bot',
  authors: [{ name: 'NexaFlow AI' }],
  openGraph: {
    title: 'NexaFlow AI - Advanced Cryptocurrency Arbitrage Trading',
    description: 'Harness cutting-edge AI algorithms to identify and execute profitable arbitrage opportunities across 50+ cryptocurrency exchanges.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexaFlow AI - Advanced Cryptocurrency Arbitrage Trading',
    description: 'Harness cutting-edge AI algorithms to identify and execute profitable arbitrage opportunities.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
