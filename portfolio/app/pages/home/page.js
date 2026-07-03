//Home Page (cd portfolio -> npm run dev)

import Link from "next/link"
import { ArrowUpRight, FileDown } from "lucide-react"
import Navbar from "../../components/Navbar"
import FadeIn from "../../components/FadeIn"
import Footer from "../../components/Footer"

const stack = [
  "Python", "TypeScript", "React / Next.js", "PyTorch", "FastAPI", "AWS", "PostgreSQL", "Swift",
]

const stats = [
  { label: "M.S. Human-Computer Interaction", value: "Georgia Tech" },
  { label: "Personal & team projects shipped", value: "10+" },
  { label: "Current role", value: "Software Engineer, AMD" },
]

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="ambient-glow left-1/2 top-[-15%] h-[32rem] w-[32rem] -translate-x-1/2 bg-accent/20" />
        <div className="ambient-glow bottom-[-20%] right-[-10%] h-96 w-96 bg-accentRed/15 animate-float-slow" />

        <section className="relative mx-auto flex min-h-[calc(100dvh-65px)] max-w-content flex-col items-center justify-center px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
              Available for new opportunities
            </span>

            <h1 className="font-display mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Hi, I&apos;m Caleb Kim.
              <br />
              <span className="bg-gradient-to-r from-accent to-accentRed bg-clip-text text-transparent">
                I build software that solves real problems.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m a software engineer and graduate student at Georgia Tech studying Human-Computer
              Interaction. I care about shipping thoughtful, well-crafted products &mdash; from machine
              learning pipelines to full-stack web apps.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/pages/projects"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-glow transition-colors duration-200 hover:bg-accent-hover"
              >
                View my work
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/pages/resume"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-hover"
              >
                Resume
                <FileDown size={16} />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="mt-16 w-full">
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-surface px-5 py-6 text-center"
                >
                  <div className="font-display text-lg font-bold text-foreground">{value}</div>
                  <div className="mt-1 text-xs leading-snug text-muted">{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={250} className="mt-14 w-full">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-muted">
              Technologies I work with
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  )
}
