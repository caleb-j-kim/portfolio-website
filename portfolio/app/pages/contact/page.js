//Contact Page

import { Mail, ArrowUpRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";
import { GithubIcon, LinkedinIcon } from "../../components/icons/BrandIcons";

const links = [
  {
    href: "https://github.com/caleb-j-kim",
    label: "GitHub",
    detail: "caleb-j-kim",
    icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/caleb-jiho-kim/",
    label: "LinkedIn",
    detail: "caleb-jiho-kim",
    icon: LinkedinIcon,
  },
  {
    href: "mailto:cc.kim0906@gmail.com",
    label: "Email",
    detail: "cc.kim0906@gmail.com",
    icon: Mail,
  },
]

export default function Contact() {
    return (
        <div>
          <Navbar />

          <main className="relative overflow-hidden">
            <div className="ambient-glow left-1/2 top-[-10%] h-96 w-96 -translate-x-1/2 bg-accent/15" />
            <div className="ambient-glow bottom-[-15%] right-[-10%] h-72 w-72 bg-accentRed/10 animate-float-slow" />

            <div className="mx-auto max-w-content px-6 py-16 text-center sm:py-20">
              <FadeIn>
                <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
                  Contact
                </span>
                <h1 className="font-display mt-4 text-3xl font-bold text-foreground sm:text-5xl">
                  Let&apos;s get in touch!
                </h1>
                <p className="mt-3 text-base text-muted">
                  Pick whichever works best for you &mdash; I&apos;m always happy to connect.
                </p>
              </FadeIn>

              <FadeIn delay={100}>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                  {links.map(({ href, label, detail, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                      className="group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-8 transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover"
                    >
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors duration-200 group-hover:text-accent">
                        <Icon size={22} strokeWidth={1.75} />
                      </span>
                      <span className="font-display text-sm font-semibold text-foreground">
                        {label}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted">
                        {detail}
                        <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>
          </main>

          <Footer />
        </div>
    )
}
