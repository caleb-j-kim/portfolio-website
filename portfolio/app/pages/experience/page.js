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
    title: "Undergraduate Research Assistant",
    date: "May - August 2024",
    tech: "Python, PyTorch, Pillow, & Beautiful Soup.",
    description: "I was given the opportunity to work under one of my university's professors in recreating the 'Hafez Effort'. This project was intended on providing free translations to those whose dialects were undersupported when they would desire to consume digital media. Our minimum threshold for considering a dialect's language was at least 100k official users of that dialect and in my time of working on this project, I created a webscraper using Python and Beautiful Soup along with the foundations of a Artificial Neural Network for automated AI translations. The web scraper to converted websites' HTML code and converted into data that computers can understand. This was neccessary as we needed to prepare the dataset for the AI to train on and this needed to be done in languages with lots of speakers and support so we would be able to see how well the AI is able to translate text on its own. The remainder of my time was spent compiling data for the dataset and creating the foundation of the Artificial Neural Network. Although I am no longer working on this project, I hope to one day see it come to fruition and be able to help those who are in need of translations.",
    image: "/images/UTDResearch.jpg",
  },

  {
    title: "Backend Devloper",
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
      <h2 className="text-xl font-bold text-center text-red-600">
        {activeExperience.date}
      </h2>

        { /* Technologies Used & Description */ }

      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <div className="md:w-1/2">
        <div className="text-2xl font-bold py-4 text-slate-700">
          Technologies Used: {activeExperience.tech}
        </div>
        <div className="text-lg font-semibold text-slate-700">
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