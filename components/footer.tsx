import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

import { getTranslation } from "@/lib/translations"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // language from context or default
const { language = "en" } = useLanguage()
const t = (key: string) => getTranslation(language, key)


  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* GRID SECTIONS */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* SECTION 1 - BRAND */}
          <div>
            <div className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Modou DIA
            </div>
            <p className="text-sm text-muted-foreground">
              {t("hero.title")}
            </p>
          </div>

          {/* SECTION 2 - LINKS */}
          <div>
            <h4 className="font-semibold mb-4">
              {language === "en" ? "Navigation" : "Navigation"}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  {t("nav.skills")}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition-colors">
                  {t("nav.experience")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* SECTION 3 - RESOURCES */}
          <div>
            <h4 className="font-semibold mb-4">
              {language === "en" ? "Resources" : "Ressources"}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://drive.google.com/file/d/1oov0wSvUO3ukb8-WGPZTE5MMKPNMwaVt/view?usp=drive_link"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  {language === "en" ? "Resume" : "CV"}
                </a>
              </li>
              <li>
                <a
                  href="mailto:diamoddou2001@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  {language === "en" ? "Email Me" : "M’écrire"}
                </a>
              </li>
            </ul>
          </div>

          {/* SECTION 4 - SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4">
              {language === "en" ? "Social" : "Réseaux"}
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/modou2-DIA"
                target="_blank"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/modou-dia-1a90b9308/"
                target="_blank"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:diamoddou2001@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} Modou DIA. 
              {language === "en" ? " All rights reserved." : " Tous droits réservés."}
            </p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                {language === "en" ? "Privacy Policy" : "Politique de confidentialité"}
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                {language=== "en" ? "Terms of Service" : "Conditions d’utilisation"}
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
