import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tax Edge Fin Solutions | Tax & Finance Advisory in Vijayawada',
  description: 'Expert financial advisory for GST filing, tax planning, accounting & business loans in Vijayawada, Guntur & Andhra Pradesh.',
  keywords: 'tax consultant Vijayawada, GST filing, accounting services, business loans, financial advisor',
  openGraph: {
    title: 'Tax Edge Fin Solutions',
    description: 'Integrated business advisory services in Andhra Pradesh',
    url: 'https://taxedgefinsolutions.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
