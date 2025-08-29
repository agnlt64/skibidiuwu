import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { SocialLink } from "@/data"

export function SocialButton({ name, icon, href }: SocialLink) {
  return (
    <Link href={href} target="_blank">
      <Button
        variant="outline"
        size="lg"
        className="w-full bg-transparent hover:bg-black hover:text-white hover:cursor-pointer hover:border-pink-800 transition-colors duration-300"
      >
        <Icon name={icon} />
        <span className="text-sm">{name}</span>
      </Button>
    </Link>
  )
}
