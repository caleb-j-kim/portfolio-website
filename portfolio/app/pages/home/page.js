//Home Page (cd portfolio -> npm run dev)

import Link from "next/link";
import FadeIn from "../../components/FadeIn";

export default function Home() {
  return (
    <div>
      { /* Navbar */ }
      <div className="bg-gray-800 text-white py-8 px-6 flex items-center justify-between">
        { /* Left side: Logo (WIP) */ }
        <h1 className="text-xl font-bold">CJK</h1>

        { /* Right side: Links */ }
        <div className="flex space-x-6">
          <Link href="/pages/home" className="cursor-pointer hover:underline font-bold">Home</Link>
          <Link href="/pages/about" className="cursor-pointer hover:underline">About</Link>
          <Link href="/pages/projects" className="cursor-pointer hover:underline">Projects</Link>
          <Link href="/pages/organizations" className="cursor-pointer hover:underline">Organizations</Link>
          <Link href="/pages/experience" className="cursor-pointer hover:underline">Experience</Link>
          <Link href="/pages/resume" className="cursor-pointer hover:underline">Resume</Link>
          <Link href="/pages/contact" className="cursor-pointer hover:underline">Contact</Link>
        </div>
      </div>

      { /* Background (add image)*/ }
      <main className="flext items-center justify-center h-screen bg-red-900 px-12 py-8">
        <FadeIn>
        <h1 className="text-4xl font-bold text-black text-center">Hello, My name is Caleb Kim.
        </h1>
        <div className="text-2xl font-bold text-center">Please interact with the task bar to learn more about me!</div>
        </FadeIn>
      </main>

      { /* Footer */ }
      <footer className="bg-gray-800 text-white py-6 px-6 flex items-center justify-between">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">

          { /* Links */ }
          <div className="flex space-x-4 mb-4">
            <a
              href="https://github.com/caleb-j-kim"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              <img
                src="/images/githublogo.png"
                alt="GitHub"
                className="w=6 h-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/caleb-jiho-kim/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              <img
                src="/images/linkedinlogo.png"
                alt="LinkedIn"
                className="w=6 h-6"
              />
            </a>
            <a 
              href="mailto:cc.kim0906@gmail.com" 
              className="hover:underline"
            >
              <img
                src="/images/emaillogo.png"
                alt="Email"
                className="w=6 h-6"
              />
            </a>
          </div>
          
          <div className="font-bold text-lg mb-1">Caleb Kim</div>

          <div className="text-sm">&copy; 2025 Caleb Kim. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  )
}