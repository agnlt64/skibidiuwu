import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { education } from "@/data"
import { Icon } from "@/components/ui/icon"

export function EducationSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-3xl font-bold text-center">Education</h2>

        <Card className="hover:bg-gradient-to-br hover:from-black/50 hover:to-pink-900/20 hover:border-pink-800 transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name={education.icon} className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>{education.degree}</CardTitle>
                <CardDescription>{education.institution} • {education.graduation}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {education.description}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
