import { projects } from "@/data"
import { ProjectCard } from "@/components/ui/project-card"

export function ProjectsSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold text-center">My Best Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              content={project.content}
              technologies={project.technologies}
              href={project.href}
              private={project.private}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
