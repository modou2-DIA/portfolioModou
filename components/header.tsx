"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import type { Language } from "@/lib/translations"

interface HeaderProps {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation()

  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.contact"), href: "#contact" },
  ]

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setIsLangOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          MD
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="p-2 hover:bg-card rounded-lg transition-colors flex items-center gap-2"
              aria-label="Select language"
            >
              <Globe size={20} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-lg">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-primary/10 transition-colors ${
                    language === "en" ? "text-primary font-semibold" : ""
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange("fr")}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-primary/10 transition-colors ${
                    language === "fr" ? "text-primary font-semibold" : ""
                  }`}
                >
                  Français
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-card rounded-lg transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
