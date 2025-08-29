import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { aboutCards } from "@/data"
import { Icon } from "@/components/ui/icon"

export function AboutSection() {
  return (
    <section className="px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold text-center">About Me</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {aboutCards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              className="group hover:bg-gradient-to-br hover:from-black/50 hover:to-pink-900/20 hover:border-pink-800 transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={card.icon} className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {card.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
