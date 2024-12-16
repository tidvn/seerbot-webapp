import Providers from '@/components/app/layout/providers';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import Script from 'next/script';
import { cn } from '@/utils';
import { fontSans } from '@/utils/fonts';
import { appConfig } from '@/constants/app.contants';

export const metadata: Metadata = {
  title: appConfig.title,
  description: appConfig.description
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable, `block md:hidden`)}>
        <Script src="https://telegram.org/js/telegram-web-app.js" defer />
        <NextTopLoader />
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
