import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons"

const links = [
  { href: "https://github.com/caleb-j-kim", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/caleb-jiho-kim/", label: "LinkedIn", icon: LinkedinIcon },
  { href: "mailto:cc.kim0906@gmail.com", label: "Email", icon: Mail },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-base">
      <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-6 py-10">
        <div className="flex items-center gap-3">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              aria-label={label}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-border-strong hover:text-accent"
            >
              <Icon size={18} strokeWidth={1.75} />
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="font-display text-sm font-semibold text-foreground">Caleb Kim</div>
          <div className="mt-1 text-xs text-muted">&copy; {new Date().getFullYear()} Caleb Kim. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
