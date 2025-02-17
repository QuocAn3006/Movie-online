/* eslint-disable react-hooks/rules-of-hooks */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/global.css';
import { ThemeModeScript } from 'flowbite-react';
import { useFetch } from '@/hooks';
import Navbar from '@/components/Navbar';
import 'swiper/swiper-bundle.css';
import { Footer } from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ThunMov - Xem phim online miễn phí không quảng cáo',
  description:
    'Website cung cấp phim miễn phí nhanh chất lượng cao. Phim online VietSub, Thuyết minh, lồng tiếng chất lượng Full HD. Nguồn phim vietsub chất lượng cao cập nhật nhanh nhất.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { genresData, countriesData } = await getNavbarData();
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={`bg-black/95 ${inter.className}`}>
        <Navbar genresData={genresData} countriesData={countriesData} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

async function getNavbarData() {
  const [{ data: genresData }, { data: countriesData }] = await Promise.all([
    useFetch('/the-loai'),
    useFetch('/quoc-gia'),
  ]);
  return { genresData, countriesData };
}
