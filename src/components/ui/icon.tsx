import { 
  Code,
  Crown,
  BookOpen,
  Zap,
  Monitor,
  Server,
  Wrench,
  Cpu,
  GraduationCap,
  Youtube,
  Instagram,
  MessageCircle,
  Github,
  LucideIcon
} from "lucide-react"

export const iconMap: Record<string, LucideIcon> = {
  Code,
  Crown,
  BookOpen,
  Zap,
  Monitor,
  Server,
  Wrench,
  Cpu,
  GraduationCap,
  Youtube,
  Instagram,
  MessageCircle,
  Github
}

interface IconProps {
  name: string
  className?: string
}

export function Icon({ name, className }: IconProps) {
  const IconComponent = iconMap[name]
  
  if (!IconComponent) {
    return null
  }
  
  return <IconComponent className={className} />
}
