"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import FadeIn from "./FadeIn"

// Shared carousel used by the Projects, Organizations, and Experience pages —
// each one steps through a single array of "cards" one at a time.
export default function DetailCarousel({ eyebrow, items, activeIndex, onNext, onPrev, onJump }) {
  const active = items[activeIndex]

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowRight") onNext()
      if (event.key === "ArrowLeft") onPrev()
    },
    [onNext, onPrev]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
      <FadeIn key={`heading-${activeIndex}`}>
        <div className="text-center">
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display mt-4 text-3xl font-bold text-foreground sm:text-5xl">
            {active.title}
          </h1>
          {active.subtitle && (
            <h2 className="font-display mt-2 text-lg font-medium text-foreground/80 sm:text-xl">
              {active.subtitle}
            </h2>
          )}
          <p className="mt-2 text-sm font-bold text-accentRed">{active.date}</p>
        </div>
      </FadeIn>

      <FadeIn key={`body-${activeIndex}`} delay={100}>
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start">
          {/* Details */}
          <div className="order-2 lg:order-1 lg:col-span-3">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              {active.details?.map(({ label, value }) => (
                <div key={label} className="mb-5 last:mb-0">
                  <div className="font-display text-xs font-semibold uppercase tracking-wider text-muted">
                    {label}
                  </div>
                  <div className="mt-1.5 text-sm leading-relaxed text-foreground/90">{value}</div>
                </div>
              ))}
              <div className="mt-6 max-h-80 overflow-y-auto pr-2 text-[15px] leading-relaxed text-foreground/80">
                {active.description}
              </div>
            </div>

            {active.link && (
              <a
                href={active.link.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-glow transition-colors duration-200 hover:bg-accent-hover"
              >
                {active.link.label}
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-border bg-elevated">
              <Image
                src={active.image}
                alt={active.title}
                width={800}
                height={800}
                className="h-auto w-full object-cover"
                priority={activeIndex === 0}
              />
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Controls */}
      <div className="mt-12 flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover"
          >
            <ArrowLeft size={18} />
          </button>
          <span className="min-w-[4.5rem] text-center text-sm font-medium text-muted">
            {activeIndex + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-1">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => onJump(index)}
              aria-label={`Go to ${item.title}`}
              aria-current={index === activeIndex}
              className="group flex h-9 w-9 cursor-pointer items-center justify-center"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-200 ${
                  index === activeIndex
                    ? "w-6 bg-accent"
                    : "w-2 bg-white/25 group-hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
