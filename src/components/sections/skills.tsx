import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skillCategories } from "@/data"
import { Icon } from "@/components/ui/icon"
import { SkillBadge } from "@/components/ui/skill-badge"

export function SkillsSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold text-center">Skills & Technologies</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="hover:bg-gradient-to-br hover:from-black/50 hover:to-pink-900/20 hover:border-pink-800 transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={category.icon} className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
