import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Al Qasr | Authentic Middle Eastern Cuisine',
  description: 'Experience the finest Middle Eastern cuisine at Al Qasr. Where ancient traditions meet modern culinary excellence.',
  keywords: ['restaurant', 'middle eastern', 'arabic cuisine', 'fine dining', 'Al Qasr'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${playfair.variable} ${inter.variable} font-serif antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
