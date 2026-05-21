import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollObserver } from '@/components/scroll-observer'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f1e' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Himanshu Gupta - Full Stack Developer',
  description: 'Full Stack Developer with 3+ years of experience specializing in React, Next.js, Node.js, and TypeScript. Portfolio showcasing projects in e-commerce, AI platforms, and scalable applications.',
  generator: 'v0.app',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, TypeScript, Portfolio, Web Development',
  openGraph: {
    title: 'Himanshu Gupta - Full Stack Developer',
    description: 'Explore my projects and expertise in modern web development',
    type: 'website',
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-slate-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="portfolio-theme"
        >
          <ScrollObserver />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
