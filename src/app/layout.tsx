import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import Footer from './_components/Footer/footer';
import Header from './_components/Header/header';

export const metadata: Metadata = {
  title: 'VC Training',
  description: 'Victory Church Training Centre',
};
const mouse_memories = localFont({
  src: '../../public/fonts/MouseMemoirs-Regular.ttf',
  weight: '400',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mouse_memories.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
