import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import { ClientLayout } from "@/components/client-layout"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Modou DIA - AI & Data Engineering Portfolio",
  description:
    "Portfolio showcasing AI/ML, Data Engineering, and Software Development expertise. Specializing in NLP and Large-Scale Data Systems.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icone1.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icone1.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icone1.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/icone1.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
