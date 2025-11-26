"use client"

import type React from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { Analytics } from "@vercel/analytics/next"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <Analytics />
    </LanguageProvider>
  )
}
