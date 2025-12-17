"use client"

import { projects } from "@/data"
import { ProjectCard } from "@/components/ui/project-card"

export function ProjectsSection() {
  return (
    <section className="relative px-6 py-24" id="projects">
      {/* Background decoration */}
      <div className="blob-pink w-80 h-80 bottom-1/4 -right-40 opacity-20" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">
            My work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text-pink">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I&apos;ve worked on, from tools to creative experiments
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`animate-fade-in-up opacity-0 stagger-${index + 1}`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                content={project.content}
                technologies={project.technologies}
                href={project.href}
                private={project.private}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
