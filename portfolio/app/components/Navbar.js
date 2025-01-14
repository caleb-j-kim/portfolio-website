"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  // Get the current route, e.g. "/pages/resume"
  const pathname = usePathname()

  // A small helper to decide if a route matches the current path
  function isActive(route) {
    return pathname === route
  }

  return (
    <div className="bg-gray-800 text-white py-8 px-6 flex items-center justify-between">
        
      {/* Left side: Logo (WIP) */}
      <h1 className="text-xl font-bold">CJK</h1>

      {/* Right side: Links */}
      <div className="flex space-x-6">
        <Link
          href="/pages/home"
          className={`cursor-pointer hover:underline ${
            isActive("/pages/home") ? "font-bold" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/pages/about"
          className={`cursor-pointer hover:underline ${
            isActive("/pages/about") ? "font-bold" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/pages/projects"
          className={`cursor-pointer hover:underline ${
            isActive("/pages/projects") ? "font-bold" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="/pages/organizations"
          className={`cursor-pointer hover:underline ${
            isActive("/pages/organizations") ? "font-bold" : ""
          }`}
        >
          Organizations
        </Link>
        <Link
          href="/pages/experience"
          className={`cursor-pointer hover:underline ${
            isActive("/pages/experience") ? "font-bold" : ""
          }`}
        >
          Experience
        </Link>
        <Link
          href="/pages/resume"
          className={`cursor-pointer hover:underline ${
            isActive("/pages/resume") ? "font-bold" : ""
          }`}
        >
          Resume
        </Link>
        <Link
          href="/pages/contact"
          className={`cursor-pointer hover:underline ${
            isActive("/pages/contact") ? "font-bold" : ""
          }`}
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
