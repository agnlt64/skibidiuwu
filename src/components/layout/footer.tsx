import { siteConfig } from "@/data"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-muted-foreground">
          {siteConfig.footer}
        </p>
      </div>
    </footer>
  )
}
