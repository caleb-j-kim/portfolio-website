//About Page

import Link from "next/link";

export default function About() {
    return (
        <div>
          { /* Navbar */ }
          <div className="bg-gray-800 text-white py-8 px-6 flex items-center justify-between">
            { /* Left side: Logo (WIP) */ }
            <h1 className="text-xl font-bold">CJK</h1>
    
            { /* Right side: Links */ }
            <div className="flex space-x-6">
          <Link href="/pages/home" className="cursor-pointer hover:underline">Home</Link>
          <Link href="/pages/about" className="cursor-pointer hover:underline font-bold">About</Link>
          <Link href="/pages/projects" className="cursor-pointer hover:underline">Projects</Link>
          <Link href="/pages/organizations" className="cursor-pointer hover:underline">Organizations</Link>
          <Link href="/pages/experience" className="cursor-pointer hover:underline">Experience</Link>
          <Link href="/pages/resume" className="cursor-pointer hover:underline">Resume</Link>
          <Link href="/pages/contact" className="cursor-pointer hover:underline">Contact</Link>
        </div>
        </div>

        { /* Background */ }

        <div className="bg-gray-300 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Flex Container for Image + Text */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          
          {/* Left column: Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/images/aboutmeimage.jpg"
              alt="Caleb Kim"
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>

          {/* Right column: Text */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-black mb-6">
              Hi! I'm Caleb.
            </h1>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I’m currently a senior studying Computer Science at the University of Texas at Dallas. Aside from focusing on academia, I am a software
              developer who enjoys many hobbies such as cooking, weightlifting, playing video games, traveling, fishing, photography, and more.
              Throughout my time in university I have been involved in various organizations and have created multiple personal projects as well. 
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Whether I'm coding a new application, creating or learning a new dish, or exploring the world through my camera lens, I love tackling new
              challenges and sharing what I have learned along the way. Thank you for stopping by - I'm looking forward to connecting, collaborating, and
              growing as not only a developer, but as a person as well.
            </p>
            </div>
          </div>

        </div>
      </div>

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