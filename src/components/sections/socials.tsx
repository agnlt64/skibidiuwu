import { socialLinks } from "@/data"
import { SocialButton } from "@/components/ui/social-button"

export function SocialsSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-12 text-3xl font-bold">My Socials</h2>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {socialLinks.map((social) => (
            <SocialButton
              key={social.name}
              name={social.name}
              icon={social.icon}
              href={social.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
