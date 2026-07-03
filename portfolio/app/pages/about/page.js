//About Page

import Image from "next/image"
import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";
import profile from "../../../public/images/aboutmeimage.jpg"

const interests = [
  "Cooking", "Weightlifting", "Video Games", "Traveling", "Fishing", "Photography",
]

export default function About() {
    return (
        <div>
          <Navbar />

          <main className="relative overflow-hidden">
            <div className="ambient-glow left-[-10%] top-[10%] h-80 w-80 bg-accent/15" />
            <div className="ambient-glow bottom-[-15%] right-[-10%] h-80 w-80 bg-accentRed/10 animate-float-slow" />

            <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
              <FadeIn>
                <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
                  About
                </span>
                <h1 className="font-display mt-4 text-3xl font-bold text-foreground sm:text-5xl">
                  Hi! I&apos;m Caleb.
                </h1>
              </FadeIn>

              <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start">
                <FadeIn delay={100} className="lg:col-span-2">
                  <div className="overflow-hidden rounded-2xl border border-border-strong shadow-2xl shadow-black/50">
                    <Image
                      src={profile}
                      alt="Caleb Kim"
                      className="h-auto w-full object-cover"
                      placeholder="blur"
                      priority
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={200} className="lg:col-span-3">
                  <div className="space-y-5 text-[15px] leading-relaxed text-foreground sm:text-base">
                    <p>
                      I&apos;m currently a graduate student studying Computer Science at the Georgia
                      Institute of Technology, where I&apos;m pursuing a Master&apos;s Degree with a
                      concentration in Human-Computer Interaction. Previously, I received my Bachelor&apos;s
                      Degree in Computer Science at the University of Texas at Dallas. Aside from academia,
                      I&apos;m a software developer who enjoys hobbies like cooking, weightlifting, playing
                      video games, traveling, fishing, photography, and more. Throughout my time in
                      university I&apos;ve been involved in various organizations and created multiple
                      personal projects as well.
                    </p>
                    <p>
                      Whether I&apos;m coding a new application, learning a new dish, or exploring the world
                      through my camera lens, I love tackling new challenges and sharing what I&apos;ve
                      learned along the way. Thank you for stopping by &mdash; I&apos;m looking forward to
                      connecting, collaborating, and growing as not only a developer, but as a person too.
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="font-display text-xs font-semibold uppercase tracking-wider text-muted">
                      Outside of work
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {interests.map((interest) => (
                        <span
                          key={interest}
                          className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground/80"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </main>

          <Footer />
        </div>
    )
}
