import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.scss';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PrintCraft — онлайн-конструктор для полиграфии',
  description: 'Собирайте макеты для печати визиток, флаеров, сертификатов и другой полиграфии.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

