"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const { t } = useTranslation()
  const fullText = t("hero.title")
  const typingSpeed = 60

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, typingSpeed)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 animate-fade-in-up">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{t("hero.name")}</h1>
              <div className="text-2xl md:text-3xl h-12 text-primary font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">{t("hero.description")}</p>
            </div>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                {t("hero.viewProjects")} <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-card transition-colors"
              >
                {t("hero.getInTouch")}
              </a>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com"
                className="p-3 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="p-3 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@modoudiar.dev"
                className="p-3 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl animate-pulse-glow"></div>
              <div className="absolute inset-0 bg-card rounded-3xl border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-sm text-muted-foreground">{t("hero.fullStack")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
