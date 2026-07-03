//To provide sleek transitions between each of the different projects, organizations, or experiences.

"use client"

import { useRef, useEffect, useState } from "react"

export default function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target)
      }
    },
    // A ratio-based threshold (e.g. 0.1) means a block taller than the
    // viewport may never cross it on initial load, since its own visible
    // fraction stays small even while most of the viewport is filled with
    // it. Trigger on any visible pixel instead.
    { threshold: 0 }
    )

    if (ref.current) {
        observer.observe(ref.current)
    }

    return () => {
        if (ref.current) {
            observer.unobserve(ref.current)
        }
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      className={`
        transition-all duration-700 ease-out
        transform
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
        }
        ${className}
      `}
    >
      {children}
    </div>
  )
}