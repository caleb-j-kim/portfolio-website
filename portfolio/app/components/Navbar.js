"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import logo from "../icon.png"

const links = [
  { href: "/pages/home", label: "Home" },
  { href: "/pages/about", label: "About" },
  { href: "/pages/projects", label: "Projects" },
  { href: "/pages/organizations", label: "Organizations" },
  { href: "/pages/experience", label: "Experience" },
  { href: "/pages/resume", label: "Resume" },
  { href: "/pages/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  function isActive(route) {
    return pathname === route
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-base/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3">
        <Link
          href="/pages/home"
          className="group flex items-center gap-3 cursor-pointer"
          aria-label="Caleb Kim — Home"
        >
          <Image
            src={logo}
            alt="Caleb Kim logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl border border-border-strong shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`cursor-pointer rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive(href)
                  ? "bg-surface text-foreground"
                  : "text-muted hover:bg-surface-hover hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-surface-hover lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav panel */}
      <nav
        className={`overflow-hidden border-border transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                isActive(href)
                  ? "bg-surface text-foreground"
                  : "text-muted hover:bg-surface-hover hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
