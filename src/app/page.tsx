import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { EducationSection } from "@/components/sections/education"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { SocialsSection } from "@/components/sections/socials"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <SocialsSection />
      <Footer />
    </div>
  )
}
