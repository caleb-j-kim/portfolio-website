//Contact Page

import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";

export default function Contact() {
    return (
        <div>
          { /* Navbar */ }
          <Navbar />
        
        { /* Background */ }

        <FadeIn>
        <div className="bg-gray-300 min-h-screen py-12">
        <h1 className="text-4xl font-bold text-black text-center mb-6">
              Let's Get in Touch!
            </h1>
        <div className="text-2xl font-bold text-black poppins-regular text-center">Click on one of these three buttons to connect with me.</div>
        
        { /* Links */ }
          <div className="flex space-x-4 mb-4 py-4 items-center justify-center">
            <a
              href="https://github.com/caleb-j-kim"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              <img
                src="/images/githublogo.png"
                alt="GitHub"
                className="w-80 h-80"
              />
              <div className="text-black text-center font-extrabold size-base">GitHub</div>
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
                className="w-80 h-80"
              />
              <div className="text-black text-center font-extrabold size-base">LinkedIn</div>
            </a>
            <a 
              href="mailto:cc.kim0906@gmail.com" 
              className="hover:underline"
            >
              <img
                src="/images/emaillogo.png"
                alt="Email"
                className="w-80 h-80"
              />
              <div className="text-black text-center font-extrabold size-base">Gmail</div>
            </a>
          </div>
        </div>
        </FadeIn>

        { /* Footer */ }
      <footer className="bg-gray-300 text-white py-6 px-6 flex items-center justify-between">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
          
          <div className="font-bold text-lg mb-1 text-black">Caleb Kim</div>

          <div className="text-sm text-black">&copy; 2025 Caleb Kim. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
    )
}