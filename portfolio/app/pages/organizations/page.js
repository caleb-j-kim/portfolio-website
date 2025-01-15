//Organizations Page
"use client"

import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function Organizations() {

// Array of organizations, used to display only one work experience at a time.

const organizations = [

  {
    title: "Association of Computing Machinery (ACM) UTD",
    date: "February 2022 - Present",
    position: "Co-Director",
    description: "ACM is known as the largest and oldest international scientific and educational computing society in the industry. ACM UTD is the student chapter of ACM at the University of Texas at Dallas and also is known to be the most popular organization for anything related to Computer Science. I initially joined in my second semester of university after seeing a flyer about while walking towards one of my classes inside of the Engineering and Computer Science building. I wouldn't be directly involved with the organization until my junior year where I joined as a participant inside of their Research division in Spring of 2024. Following that semester, I have joined their Education department from the summer of 2024 to December 2024 as an officer, where I am responsible for providing resources to those who want to learn more about professional fields that they can use their technology degrees for. Some of the most popular fields included Software Engineering, Cybersecurity, Data Analysis, and Machine Learning Engineering. Since December, I have been appointed to the position of Co-Director and I will continue to provide said resources along with continuing to create events with fellow organizations, companies such as CBRE, and professors at our university.",
    image: "/images/ACMUTDLogo.png",
  },

  {
    title: "Filipino Student Association (FSA)",
    date: "August 2021 - Present",
    position: "Family Head",
    description: "FSA was the second organization I have ever joined at UTD and this organization aims to teach people about Filipino culture and about one of their most popular dialects, Tagalog while dividing members up into small communities which were referred to as 'Pamilyas'. Each one of these Pamilyas would have a couple of 'Kuyas & Ates' or 'Older Brothers & Sisters' who would be responsible for taking care of the 'Adings' or 'Younger Brothers & Sisters'. Unlike most other organizations, this organization ran yearly instead of semesterly and I was a Ading my first year along with in this current school year but was a Kuya during my second year. I did not renew my membership with FSA my junior year as I felt like I would not be able to make the time committment necessary to this organization as I had many other oligations to attend to at the time. This organization is a great way for those who are new to the school to meet many new and welcoming people and I hope that FSA continues to stay that way.",
    image: "/images/UTDFSA.png"
  }, 

  {
    title: "Vietnamese Student Association (VSA)",
    date: "August 2023 - May 2024",
    position: "Member",
    description: "I joined VSA during my junior year as many of my other friends also joined this organization at that time. VSA aims to teach people about Vietnamese culture and their dialect, Vietnamese while dividing members up into small communities which were named after 'Avatar: The Last Airbender' during my time, this organization renewed yearly. Each community was called a 'family' and the family 'heads' would be responsible for taking care of all of the 'kids' in their respective families. I was a kid in this one school year and I did not renew my membership with VSA my senior year as most of my friends and I decided to rejoin FSA instead. This organization is a great way for those who are new to the school to meet many new and welcoming people and I hope that VSA continues to stay that way.",
    image: "/images/UTDVSA.jpg"
  },

  {
    title: "Student Game Design Association (SGDA)",
    date: "August 2023 - December 2023",
    position: "Member",
    description: "I joined SGDA during my junior year as I initially enrolled at UTD with a major in Computer Science to become a Video Game Designer. SGDA aims to teach people about the process of creating video games and the many different roles that are needed to create a video game. This organization ran semesterly and I was a participant during my time in this organization. I did not renew my membership with SGDA my senior year as I wanted to spend my time towards Software that uses Machine Learning.",
    image: "/images/UTDSGDA.jpg"
  },

  {
    title: "First Generation STEM Students Association (FGSSA)",
    date: "August 2023 - December 2023",
    position: "Member",
    description: "I joined FGSSA during my junior year as I was the first person in my nuclear family to attend a university and will soon become the first person in my family to have a degree. FGSSA aims to provide resources to those who are the first in their family to attend a university and are majoring in a STEM field. This organization ran semesterly and I was a participant during my time in this organization. Unfortunately, this organization disbanded shortly after the Fall 2023 semester ended.",
    image: "/images/UTDLogo.png"
  },

  {
    title: "UTD Powerlifting Club",
    date: "January 2022 - December 2023",
    position: "Member",
    description: "I joined the UTD Powerlifting Club during my second semester of university as some of my friends who ran this organization recommended that I join it. At the time, I was training in a way that was strength-building focused, like powerlifting and I wanted to meet others who were training in this way. Since this club was considered a 'Athletic Student Organization', we were given access to Student Athlete resources such as the Athlete gym and the UTD clinic. I did not renew my membership with the UTD Powerlifting Club as limitations were placed on the organization and I wasn't able to use the club's benefits because of my personal schedule at the time. I hope that the UTD Powerlifting Club continues to grow and that they are able to provide resources to those who are interested in powerlifting and they are a very welcoming community.",
    image: "/images/UTDPL.jpg"
  },

  {
    title: "Chinese Student Association (CSA)",
    date: "August 2021 - December 2022",
    position: "Member",
    description: "CSA was the first organization I have ever joined at UTD and this organization aims to teach people about Chinese culture and about their dialect, Chinese while dividing members up into small communities which were referred to as 'Families'. Each one of these Families would have a couple of 'Family Heads' who would be responsible for taking care of the 'Kids'. Unlike most other organizations, this organization ran yearly instead of semesterly and I was a kid / member for my first and second years. I did not renew my membership with CSA my junior year as I lost interest in the organization. However, this organization is a great way for those who are new to the school to meet many new and welcoming people and I hope that CSA continues to stay that way.",
    image: "/images/UTDCSA.jpg"
  }

]

  // Tracks which organization is currently being displayed.

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
      setActiveIndex((prev) => (prev + 1) % organizations.length)
  }

    const handlePrev = () => {
      setActiveIndex((prev) => (prev - 1 + organizations.length) % organizations.length)
  }

    const activeOrganization = organizations[activeIndex]

    return (
        <div>
          { /* Navbar */ }
        <Navbar />  

        { /* Background */ }

      <main className="bg-gray-300 min-h-screen py-12">
      <FadeIn>
      <div className="max-w-screen-xl mx-auto px-2">

        { /* Title & Date */ }

      <h1 className="text-5xl font-extrabold text-center text-offblack">
        {activeOrganization.title}
      </h1>
      <h2 className="text-xl font-bold text-center inter-800 text-red-600">
        {activeOrganization.date}
      </h2>

        { /* Position Held & Description */ }

      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <div className="md:w-1/2">
        <div className="text-2xl font-extrabold py-4 poppins-regular text-slate-700">
          Position Held: {activeOrganization.position}
        </div>
        <div className="text-lg font-semibold inter-400 text-slate-700">
          {activeOrganization.description}
          </div>
        </div>

        { /* Image */ }

      <div className="w-full md:w-1/2 flex flex-col items-center">
      <img
        src={activeOrganization.image}
        alt={activeOrganization.title}
        className="w-full h-auto object-cover rounded-md"
        />
      </div>
      </div>
      </div>
     </FadeIn>

      { /* Next & Previous Buttons */ }

      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Next
        </button>
      </div>
      </main>

        { /* Footer */ }
      <Footer />
    </div>
    )
}