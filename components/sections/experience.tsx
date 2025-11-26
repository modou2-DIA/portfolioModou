import { Briefcase, GraduationCap } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
}

interface EducationItem {
  degree: string
  period: string
  school: string
  focus: string
}


export default function Experience() {
  const { t } = useTranslation()

  const experiences = t("experience.experiences")
  const education = t("experience.educations")

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t("experience.title")}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-semibold flex items-center gap-3">
                <Briefcase className="text-primary" size={28} />
                {t("experience.professionalExperience")}
              </h3>
              <div className="space-y-4">
                {experiences.map((exp:ExperienceItem, idx:number) => (
                  <div
                    key={idx}
                    className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-primary font-medium text-sm mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-semibold flex items-center gap-3">
                <GraduationCap className="text-accent" size={28} />
                {t("experience.education")}
              </h3>
              <div className="space-y-4">
                {education.map((edu:EducationItem, idx:number) => (
                  <div
                    key={idx}
                    className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-accent font-medium text-sm mb-2">{edu.school}</p>
                    <p className="text-muted-foreground text-sm">Focus: {edu.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
