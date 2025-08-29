import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { siteConfig, navigation } from "@/data"
import { Icon } from "@/components/ui/icon"

export function HeroSection() {
  return (
    <section className="relative px-6 pt-20 pb-12 text-center">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-balance">
            Hey, I&apos;m <span className="text-primary">{siteConfig.name}</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="inline-block">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm hover:bg-primary/60 transition-colors cursor-pointer"
              >
                <Icon name={item.icon} className="w-4 h-4 mr-2" />
                {item.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
