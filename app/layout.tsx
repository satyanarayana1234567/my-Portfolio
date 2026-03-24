import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0D1B2A',
  
}

export const metadata: Metadata = {
  title: 'Kamireddy Satyanarayana | Full-Stack Developer & UI/UX Designer',
  description: 'Portfolio of Kamireddy Satyanarayana - Full-Stack Developer, UI/UX Designer, and Computer Science student building elegant digital experiences with React, Node.js, and Figma.',
  keywords: 'developer, designer, portfolio, react, nodejs, fullstack, web development, uiux',
  authors: [{ name: 'Kamireddy Satyanarayana' }],
  creator: 'Kamireddy Satyanarayana',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://satyanarayana-portfolio.com',
    title: 'Kamireddy Satyanarayana | Full-Stack Developer & UI/UX Designer',
    description: 'Explore my portfolio showcasing web development projects, design thinking, and technical expertise.',
    siteName: 'Kamireddy Satyanarayana',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
