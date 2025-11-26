"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { t } = useTranslation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:diamoddou2001@gmail.com", color: "hover:text-primary" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/modou-dia-1a90b9308/", color: "hover:text-primary" },
    { icon: Github, label: "GitHub", href: "https://github.com/modou2-DIA", color: "hover:text-accent" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-accent" },
  ]

  return (
    <section id="contact" className="py-20 bg-card/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-12">
          <div className="space-y-4 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t("contact.title")}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 animate-fade-in-up">
            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">{t("contact.sendMessage")}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder={t("contact.name")}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder={t("contact.email")}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <input
                  type="text"
                  placeholder={t("contact.subject")}
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <textarea
                  placeholder={t("contact.message")}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  {t("contact.submit")}
                </button>
              </form>
            </div>

            {/* Social Links & Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("contact.connectWithMe")}</h3>
                <p className="text-muted-foreground">{t("contact.connectDescription")}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      className={`p-6 bg-background rounded-lg border border-border hover:border-primary transition-all flex flex-col items-center justify-center gap-3 ${social.color}`}
                    >
                      <IconComponent size={24} />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  )
                })}
              </div>

              <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">{t("contact.quickResponse")}</p>
                <p className="font-semibold text-primary">{t("contact.quickResponseText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
