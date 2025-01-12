//To provide sleek transitions between each of the different projects, organizations, or experiences.

"use client"

import { useRef, useEffect, useState } from "react"

export default function FadeIn({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1 }
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
      className={`
        transition-all duration-700 ease-in-out
        transform
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
        }
      `}
    >
      {children}
    </div>
  )
}