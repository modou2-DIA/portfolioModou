import { Code2, Database, Brain, Zap } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function Skills() {
  const { t } = useTranslation()

  const skillCategories = [
    {
      title: t("skills.categories.aiml"),
      icon: Brain,
      color: "text-primary",
      skills: t("skills.items.aiml"),
    },
    {
      title: t("skills.categories.dataeng"),
      icon: Database,
      color: "text-accent",
      skills: t("skills.items.dataeng"),
    },
    {
      title: t("skills.categories.softdev"),
      icon: Code2,
      color: "text-primary",
      skills: t("skills.items.softdev"),
    },
    {
      title: t("skills.categories.devops"),
      icon: Zap,
      color: "text-accent",
      skills: t("skills.items.devops"),
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t("skills.title")}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {skillCategories.map((category, idx) => {
              const IconComponent = category.icon
              return (
                <div
                  key={idx}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
                >
                  <IconComponent
                    className={`${category.color} w-8 h-8 mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill:string, skillIdx:number) => (
                      <li key={skillIdx} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
