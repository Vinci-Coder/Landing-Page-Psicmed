import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mind & Wellness | Professional Psychology Services",
  description:
    "Compassionate psychological services including therapy, counseling, and assessment for individuals, couples, and families.",
  keywords: "psychologist, therapy, counseling, mental health, anxiety, depression, trauma, couples therapy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mindandwellness.com",
    title: "Mind & Wellness | Professional Psychology Services",
    description:
      "Compassionate psychological services including therapy, counseling, and assessment for individuals, couples, and families.",
    siteName: "Mind & Wellness Psychology",
    images: [
      {
        url: "https://mindandwellness.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mind & Wellness Psychology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mind & Wellness | Professional Psychology Services",
    description: "Compassionate psychological services for mental health and personal growth.",
    images: ["https://mindandwellness.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
