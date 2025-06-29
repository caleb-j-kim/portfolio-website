//Experience Page

"use client"

import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function Experience() {

// Array of experiences, used to display only one work experience at a time.

const experience = [

  {
    title: "Software Developer Intern",
    company: "TLT - Tomorrow's Leaders Today",
    date: "January - May 2025",
    tech: "Next.js, Node.js, Tailwind CSS, SQLite, Prisma, Figma, & Oauth 2.0",
    description: "I lead a team of four other interns to create a web application that would automatically search reputable grant opportunities for TLT to apply to. This application's purpose is to increase TLT's funding opportunities while reducing the amount of human resources that would be required to perform these actions. Original designs or wireframes for the website's User Interface was created through Figma and later replicated with the use of Next.js and Tailwind CSS. Our backend was created using Node.js for multiple purposes. The first was to serve a medium of communication between the frontend and our database management software of choice, Prisma which then interacted with our database in SQLite. The other purposes were for the implementation of a web scraper that populated the database with new funding opportunities daily and all of the necessary scripts to ensure automation. Microsoft's Azure AI model was incorporated to expedite the application process for TLT employees. Security was also a great concern with the creation of this application which is why OAuth 2.0 was used for all login details, ensuring that only users with the TLT Google Workspace accounts can access this application. I'm confident that with the benefits that this application offers, TLT will be able to expand and focus on what it does best, nurture gifted invdividuals into becoming strong pillars for the society of the future.",
    image: "/images/TLTLogo.png",
  },

  {
    title: "Undergraduate Research Assistant",
    company: "University of Texas at Dallas",
    date: "May - August 2024",
    tech: "Python, PyTorch, Pillow, & Beautiful Soup.",
    description: "I was given the opportunity to work under one of my university's professors in recreating the 'Hafez Effort'. This project was intended on providing free translations to those whose dialects were undersupported when they would desire to consume digital media. Our minimum threshold for considering a dialect's language was at least 100k official users of that dialect and in my time of working on this project, I created a webscraper using Python and Beautiful Soup along with the foundations of a Artificial Neural Network for automated AI translations. The web scraper to converted websites' HTML code and converted into data that computers can understand. This was neccessary as we needed to prepare the dataset for the AI to train on and this needed to be done in languages with lots of speakers and support so we would be able to see how well the AI is able to translate text on its own. The remainder of my time was spent compiling data for the dataset and creating the foundation of the Artificial Neural Network. Although I am no longer working on this project, I hope to one day see it come to fruition and be able to help those who are in need of translations.",
    image: "/images/UTDResearch.jpg",
  },

  {
    title: "Backend Devloper",
    company: "Association of Computing Machinery (ACM) UTD",
    date: "February - May 2024",
    tech: "Python, PyTorch, Tensorflow, Scikit-Learn, Pandas, Numpy, BERT, ResNet-18, Keras, Pillow, Matplot-Lib, & Jupyter Notebooks.",
    description: "During my spring semester of 2024, I was selected to join a team of 4 other students comprising of one team lead and four participants to create a multi-model architecture Artificial Neural Network to determine which form of media would be best fit for a given persuasive technique inside of ACM UTD Research. The dataset we used to test our model contains one folder for specifically text data and another for image data, obtained from the 15th International Workshop on Semantic Evaluation (SemEval 2021). Specifically, there are two models that have been constructed, Model 1 is a Sentiment Analysis model that determines the emotional tone is textual data with the help of Google's language model, BERT. Model 2 is Image Classification model that distinguishes objects in images to perform pattern recognition for sorting / classification and uses a popular Convolutional Neural Network, ResNet-18 to help with feature extraction (determining which data the model should learn from). Our combined model had the overall accuracy of 89.2% and a precision of 87.9% which shows that our multi-model architecture is able to classify data to a specific persuasive technique well. This project was my first time ever working on Machine Learning technology and I was extremely grateful to have this experience as it has opened my eyes to the world of AI and how it can be used to solve real-world problems.",
    image: "/images/SymposiumNight.jpg"
  }
]

  // Tracks which experience is currently being displayed.

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
      setActiveIndex((prev) => (prev + 1) % experience.length)
  }

    const handlePrev = () => {
      setActiveIndex((prev) => (prev - 1 + experience.length) % experience.length)
  }

    const activeExperience = experience[activeIndex]

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
        {activeExperience.title}
      </h1>
      <h1 className="text-3xl font-bold text-center poppins-regular text-slate-700">
        {activeExperience.company}
      </h1>
      <h2 className="text-xl font-bold text-center inter-800 text-red-600">
        {activeExperience.date}
      </h2>

        { /* Technologies Used & Description */ }

      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <div className="md:w-1/2">
        <div className="text-2xl font-extrabold py-4 poppins-regular text-slate-700">
          Technologies Used: {activeExperience.tech}
        </div>
        <div className="text-lg font-semibold inter-400 text-slate-700">
          {activeExperience.description}
          </div>
        </div>

        { /* Image */ }

      <div className="w-full md:w-1/2 flex flex-col items-center">
      <img
        src={activeExperience.image}
        alt={activeExperience.title}
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