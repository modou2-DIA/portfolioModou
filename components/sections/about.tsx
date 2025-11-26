import { useTranslation } from "@/hooks/use-translation"

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t("about.title")}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 animate-fade-in-up">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">{t("about.para1")}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("about.para2")}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("about.para3")}</p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-primary">{t("about.approach")}</h3>
                <p className="text-muted-foreground">{t("about.approachText")}</p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-accent">{t("about.vision")}</h3>
                <p className="text-muted-foreground">{t("about.visionText")}</p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-accent">{t("about.currently")}</h3>
                <p className="text-muted-foreground">{t("about.currentlyText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
