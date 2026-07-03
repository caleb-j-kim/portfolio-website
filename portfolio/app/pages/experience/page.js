//Experience Page

"use client"

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DetailCarousel from "../../components/DetailCarousel";
import { useState } from "react";

export default function Experience() {

const experience = [

  {
    title: "Software Developer & Datacenter Technician",
    subtitle: "Advanced Micro Devices",
    date: "June 2025 - May 2026",
    details: [{ label: "Technologies Used", value: "Python, HTML, PostgreSQL, Figma, Plotly, CSS, Jira, FastAPI, Linux, Ubuntu, RHEL, & Unix" }],
    description: "I was selected to work as a contractor at AMD's Server-Side department where I worked in a data center to complete tickets of varying priorities that were found on Jira, composing of restoring server computers to be in workable condition. Along side these responsibilities, I was developing a full stack internal inventory tracking tool that allowed for real-time data tracking of what hardware we had available to fulfill requests and where certain specialty hardware was located. I had free reign over the design of the project, along with creating the documentation such as the roadmap, a wire-frame of what each component would look like from a high-level overview, and a model of the application's architecture. Any technologies that were used on this project were also to my discretion and I decided to challenge myself by creating a front-end without using JavaScript or React.js as I have used these technologies with several projects previously and used HTML and CSS. In the end, I was able to deliver a live build of the application that fulfilled all of the requirements, was used by my team throughout the remainder of my contract. This project taught me a lot as this was my first real experience with creating a project with strict deadlines under a corporate environment and I am will take all of the lessons I have learned here to improve myself for when I work on future projects in corporate.",
    image: "/images/amd.png"
  },

  {
    title: "Software Developer Intern",
    subtitle: "TLT - Tomorrow's Leaders Today",
    date: "January - May 2025",
    details: [{ label: "Technologies Used", value: "Next.js, Node.js, Tailwind CSS, SQLite, Prisma, Figma, & Oauth 2.0" }],
    description: "I led a team of four other interns to create a web application that would automatically search reputable grant opportunities for TLT to apply to. This application's purpose is to increase TLT's funding opportunities while reducing the amount of human resources that would be required to perform these actions. Original designs or wireframes for the website's User Interface was created through Figma and later replicated with the use of Next.js and Tailwind CSS. Our backend was created using Node.js for multiple purposes. The first was to serve a medium of communication between the frontend and our database management software of choice, Prisma which then interacted with our database in SQLite. The other purposes were for the implementation of a web scraper that populated the database with new funding opportunities daily and all of the necessary scripts to ensure automation. Microsoft's Azure AI model was incorporated to expedite the application process for TLT employees. Security was also a great concern with the creation of this application which is why OAuth 2.0 was used for all login details, ensuring that only users with the TLT Google Workspace accounts can access this application. I'm confident that with the benefits that this application offers, TLT will be able to expand and focus on what it does best, nurture gifted invdividuals into becoming strong pillars for the society of the future.",
    image: "/images/TLTLogo.png",
  },

  {
    title: "Undergraduate Research Assistant",
    subtitle: "University of Texas at Dallas",
    date: "May - August 2024",
    details: [{ label: "Technologies Used", value: "Python, PyTorch, Pillow, & Beautiful Soup." }],
    description: "I was given the opportunity to work under one of my university's professors in recreating the 'Hafez Effort'. This project was intended on providing free translations to those whose dialects were undersupported when they would desire to consume digital media. Our minimum threshold for considering a dialect's language was at least 100k official users of that dialect and in my time of working on this project, I created a webscraper using Python and Beautiful Soup along with the foundations of a Artificial Neural Network for automated AI translations. The web scraper to converted websites' HTML code and converted into data that computers can understand. This was neccessary as we needed to prepare the dataset for the AI to train on and this needed to be done in languages with lots of speakers and support so we would be able to see how well the AI is able to translate text on its own. The remainder of my time was spent compiling data for the dataset and creating the foundation of the Artificial Neural Network. Although I am no longer working on this project, I hope to one day see it come to fruition and be able to help those who are in need of translations.",
    image: "/images/UTDResearch.jpg",
  },

  {
    title: "Backend Devloper",
    subtitle: "Association of Computing Machinery (ACM) UTD",
    date: "February - May 2024",
    details: [{ label: "Technologies Used", value: "Python, PyTorch, Tensorflow, Scikit-Learn, Pandas, Numpy, BERT, ResNet-18, Keras, Pillow, Matplot-Lib, & Jupyter Notebooks." }],
    description: "During my spring semester of 2024, I was selected to join a team of 4 other students comprising of one team lead and four participants to create a multi-model architecture Artificial Neural Network to determine which form of media would be best fit for a given persuasive technique inside of ACM UTD Research. The dataset we used to test our model contains one folder for specifically text data and another for image data, obtained from the 15th International Workshop on Semantic Evaluation (SemEval 2021). Specifically, there are two models that have been constructed, Model 1 is a Sentiment Analysis model that determines the emotional tone is textual data with the help of Google's language model, BERT. Model 2 is Image Classification model that distinguishes objects in images to perform pattern recognition for sorting / classification and uses a popular Convolutional Neural Network, ResNet-18 to help with feature extraction (determining which data the model should learn from). Our combined model had the overall accuracy of 89.2% and a precision of 87.9% which shows that our multi-model architecture is able to classify data to a specific persuasive technique well. This project was my first time ever working on Machine Learning technology and I was extremely grateful to have this experience as it has opened my eyes to the world of AI and how it can be used to solve real-world problems.",
    image: "/images/SymposiumNight.jpg"
  }
]

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % experience.length)
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + experience.length) % experience.length)

  return (
    <div>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="ambient-glow left-[-10%] top-[5%] h-80 w-80 bg-accent/15" />
        <div className="ambient-glow bottom-[-15%] right-[-10%] h-80 w-80 bg-accentRed/10 animate-float-slow" />
        <DetailCarousel
          eyebrow="Experience"
          items={experience}
          activeIndex={activeIndex}
          onNext={handleNext}
          onPrev={handlePrev}
          onJump={setActiveIndex}
        />
      </main>
      <Footer />
    </div>
  )
}
