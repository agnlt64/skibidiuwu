import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Project } from "@/data"

export function ProjectCard(props: Project) {
  const { title, description, content, technologies, href } = props;
  return (
    <Link href={href} target="_blank">
      <Card className="group h-full hover:bg-gradient-to-br hover:from-black/50 hover:to-pink-900/20 hover:border-pink-800 transition-all duration-300 cursor-pointer">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="group-hover:text-primary transition-colors flex items-center gap-2">
                {title}
                {props.private && (
                    <Badge key={title} variant="outline" className="text-sm border-red-500">Private</Badge>
                )}
            </CardTitle>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech: string) => (
              <Badge key={tech} variant="outline" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {content}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
