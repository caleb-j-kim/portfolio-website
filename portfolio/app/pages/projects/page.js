//Projects Page

"use client"

import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import { useState } from "react";

export default function Projects() {

// Array of projects, used to display only one project at a time.

  const projects = [
    {
      title: "Portfolio Website",
      date: "December 2024 - January 2025",
      tech: "Next.js & Tailwind CSS.",
      description: "I created this website as a way to document and display everything I have done within my time in university and beyond. Ever since I first learned how to code in the year 2021, I have grown tremendously and with this website I aim to showcase the journey I have experienced as a Software Developer. December was when I was initially planning out this project, brainstorming on how I wanted the overall structure and feel of my portfolio to be designed and the first two weeks of January have been dedicated to breathing life into this website. Next.js has been chosen as the backbone for my Front End due to personal preference through exposure of the framework because of a group project. TailWind CSS has been chosen as it works well with UI-based frameworks such as React.js and Next.js but also because it also is known for simplifying design systems. As I progress through life, I aim to make consistent updates to this website when possible.",
      image: "/images/portfoliowebsite.jpg",
      repo: "https://github.com/caleb-j-kim/portfolio-website",
    },
    {
      title: "Stock Prediction Machine Learning Model",
      date: "October - November 2024",
      tech: "Python, Scikit-Learn, Matplot-Lib, Numpy, Pandas, & Itertools.",
      description: "This was a group project that I collaborated on with three other classmates in our Intro to Machine Learning class. We constructed a Long Short-Term Memory model as this has been shown to the best model when making predictions on sequential data. In order to test if our LSTM model worked correctly, we needed to feed it a dataset. The dataset that was chosen was Apple's Stock Data from 1980 - 2024 which was retrieved from Kaggle. To achieve the highest performance, we have found that a 90% training and 10% testing split was the most optimal. The model was able to predict the stock price of Apple with an accuracy of 94.74% while having a Mean Squared Error of 0.0003 and a R^2 value of 0.0176 (data metrics to show the quality of a Machine Learning Model), meaning that our LTSM model highly efficent. This project was a great learning experience as I was able to learn a lot about the LSTM model and how it can be used to predict stock prices or other forms of sequential data.",
      image: "/images/stockprediction.jpg",
      repo: "https://github.com/caleb-j-kim/Stock-Predictions-LSTM",
    },

    {
      title: "ACM Class Registration Chatbot",
    },

    {
      title: "Feelings Behind Words",
    },

    {
      title: "Fintasy",
    },

    {
      title: "Discord Bot",
    }
  ]

  // Tracks which project is currently being displayed.

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const activeProject = projects[activeIndex]

    return (
        <div>
          { /* Navbar */ }
          <div className="bg-gray-800 text-white py-8 px-6 flex items-center justify-between">
            { /* Left side: Logo (WIP) */ }
            <h1 className="text-xl font-bold">CJK</h1>
    
            { /* Right side: Links */ }
            <div className="flex space-x-6">
          <Link href="/pages/home" className="cursor-pointer hover:underline">Home</Link>
          <Link href="/pages/about" className="cursor-pointer hover:underline">About</Link>
          <Link href="/pages/projects" className="cursor-pointer hover:underline font-bold">Projects</Link>
          <Link href="/pages/organizations" className="cursor-pointer hover:underline">Organizations</Link>
          <Link href="/pages/experience" className="cursor-pointer hover:underline">Experience</Link>
          <Link href="/pages/resume" className="cursor-pointer hover:underline">Resume</Link>
          <Link href="/pages/contact" className="cursor-pointer hover:underline">Contact</Link>
        </div>
        </div>

        { /* Background */ }

      <main className="bg-gray-300 min-h-screen py-12">
      <FadeIn>
      <div className="max-w-screen-xl mx-auto px-2">

        { /* Title & Date */ }

      <h1 className="text-5xl font-extrabold text-center text-offblack">
        {activeProject.title}
      </h1>
      <h2 className="text-xl font-bold text-center text-red-600">
        {activeProject.date}
      </h2>

        { /* Technologies Used & Description */ }

      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <div className="md:w-1/2">
        <div className="text-2xl font-bold py-4 text-slate-700">
          Technologies Used: {activeProject.tech}
        </div>
        <div className="text-lg font-semibold text-slate-700">
          {activeProject.description}
          </div>
        </div>

        { /* Image */ }

      <div className="w-full md:w-1/2 flex flex-col items-center">
      <img
        src={activeProject.image}
        alt={activeProject.title}
        className="w-full h-auto object-cover rounded-md"
        />

        { /* Open in GitHub Button */ }

      <a
        href={activeProject.repo}
        target="_blank"
        rel="noreferrer"
        className="
          inline-block
          bg-gray-800
          text-white
          px-4
          py-2
          mt-4
          rounded
          hover:bg-gray-700
          transition-colors
          "
        >
          Open in GitHub
        </a>

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
                className="w-6 h-6"
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
                className="w-6 h-6"
              />
            </a>
            <a 
              href="mailto:cc.kim0906@gmail.com" 
              className="hover:underline"
            >
              <img
                src="/images/emaillogo.png"
                alt="Email"
                className="w-6 h-6"
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