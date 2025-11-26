"use client"

import { ExternalLink, Github, FolderGit2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

// ------------------------------
// 1. CONFIG : uniquement la partie technique
// ------------------------------
const projects = [
  {
    key: "nlp_disease",
    tags: ["Python", "Flask", "NLP", "Scikit-learn"],
    link: "#",
    github: "#",
    icon: FolderGit2,
  },
  {
    key: "hotel_bi",
    tags: ["Power BI", "SQL", "Backend Logic", "Data Modeling"],
    link: "#",
    github: "#",
    icon: FolderGit2,
  },
  {
    key: "fullstack_security",
    tags: ["Java", "Spring Boot", "Angular", "JWT", "Docker"],
    link: "#",
    github: "#",
    icon: FolderGit2,
  },
  {
    key: "bigdata",
    tags: ["Apache Spark", "Hadoop", "MongoDB", "NoSQL"],
    link: "#",
    github: "#",
    icon: FolderGit2,
  },
]

export default function Projects() {
  const { language } = useLanguage()

  const t = (key: string) => getTranslation(language, key)

  return (
    <section id="projects" className="py-20 bg-slate-50 border-y border-slate-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 space-y-12">

        {/* HEADER */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t("projects.title")}
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, index) => {
            const title = t(`projects.items.${p.key}.title`)
            const description = t(`projects.items.${p.key}.description`)

            return (
              <div
                key={index}
                className="p-8 bg-white rounded-xl border border-slate-200 hover:shadow-xl transition-all"
              >
                <div className="flex justify-between mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    <p.icon size={24} />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {title}
                </h3>

                <p className="text-slate-600 text-sm mb-6">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-slate-100 border text-slate-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <a href={p.link} className="flex items-center gap-2 text-sm hover:text-blue-600">
                    {t("projects.viewProject")} <ExternalLink size={14} />
                  </a>

                  <a href={p.github} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900">
                    {t("projects.code")} <Github size={14} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
