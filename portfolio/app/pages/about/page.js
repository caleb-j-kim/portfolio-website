//About Page

import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";

export default function About() {
    return (
        <div>
          { /* Navbar */ }
        <Navbar />

        { /* Background */ }
        <FadeIn>
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
      </FadeIn>

        { /* Footer */ }
      <Footer />
    </div>
    )
}