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
    details: [{ label: "Technologies Used", value: "Python, FastAPI, PostgreSQL, Pandas, Plotly, HTML, CSS, Figma, Jira, Linux, Ubuntu, RHEL, Unix, Git, SQL, Agile Methodology, Unit Testing, Regression Testing, Integration Testing, & Application Architecture Design" }],
    summary: "Contracted at AMD's Server-Side data center, resolving Jira tickets to restore servers while independently designing and building a full-stack internal inventory tracking tool for real-time hardware visibility.",
    description: "I was selected to work as a contractor in AMD's Server-Side department, where I worked in a data center completing Jira tickets of varying priority, which involved restoring servers back to working condition. Alongside these responsibilities, I developed a full-stack internal inventory tracking tool that tracked in real time what hardware we had available to fulfill requests and where specialty hardware was located. I had free rein over the design of the project, including creating the documentation such as the roadmap, a wireframe showing a high-level overview of each component, and a model of the application's architecture. The technologies used were also up to me, and I decided to challenge myself by building the frontend with HTML and CSS instead of JavaScript or React.js, since I had already used those on several previous projects. In the end, I delivered a live build of the application that met all of the requirements and was used by my team for the rest of my contract. This project taught me a lot, as it was my first real experience building something with strict deadlines in a corporate environment, and I will take the lessons I learned here with me into future projects in corporate.",
    image: "/images/amd.png"
  },

  {
    title: "Software Development Intern",
    subtitle: "TLT - Tomorrow's Leaders Today",
    date: "January - May 2025",
    details: [{ label: "Technologies Used", value: "Next.js, Node.js, Tailwind CSS, SQLite, Prisma, Figma, & Oauth 2.0" }],
    summary: "Led a team of four interns to build a Next.js web app that automatically finds and tracks grant opportunities for TLT, cutting the manual research workload while keeping login access restricted via OAuth 2.0.",
    description: "I led a team of four other interns to build a web application that automatically searches for reputable grant opportunities for TLT to apply to. The application's purpose is to increase TLT's funding opportunities while reducing the amount of manual work needed to find them. The original designs and wireframes for the user interface were made in Figma and later brought to life with Next.js and Tailwind CSS. Our backend was built with Node.js and served multiple purposes. The first was acting as the communication layer between the frontend and our database management software of choice, Prisma, which then interacted with our SQLite database. The others were running a web scraper that populated the database with new funding opportunities daily, along with all of the scripts needed for automation. We also incorporated Microsoft's Azure AI model to speed up the application process for TLT employees. Security was a big concern for this application, which is why we used OAuth 2.0 for all logins, making sure that only users with TLT Google Workspace accounts could access it. I'm confident that with the benefits this application offers, TLT will be able to grow and focus on what it does best: nurturing gifted individuals into strong pillars of the society of the future.",
    image: "/images/TLTLogo.png",
  },

  {
    title: "Undergraduate Research Assistant",
    subtitle: "University of Texas at Dallas",
    date: "May - August 2024",
    details: [{ label: "Technologies Used", value: "Python, PyTorch, Pillow, & Beautiful Soup." }],
    summary: "Built a Python web scraper and the foundation of a neural network to help recreate the 'Hafez Effort,' an effort to bring free AI translation to underserved language dialects.",
    description: "I was given the opportunity to work under one of my university's professors on recreating the 'Hafez Effort,' a project meant to provide free translations for people whose dialects are undersupported when they want to consume digital media. Our minimum threshold for considering a dialect was at least 100k official speakers, and during my time on the project I created a web scraper using Python and Beautiful Soup, along with the foundation of an Artificial Neural Network for automated AI translation. The web scraper converted websites' HTML into data that computers can understand, which was necessary because we needed to prepare a dataset for the AI to train on. This had to be done in languages with lots of speakers and support so that we could see how well the AI was able to translate text on its own. I spent the rest of my time compiling data for the dataset and building the foundation of the neural network. Although I'm no longer working on this project, I hope to one day see it come to fruition and help the people who need these translations.",
    image: "/images/UTDResearch.jpg",
  },

  {
    title: "Machine Learning Intern",
    subtitle: "Association of Computing Machinery (ACM) UTD",
    date: "February - May 2024",
    details: [{ label: "Technologies Used", value: "Python, PyTorch, Tensorflow, Scikit-Learn, Pandas, Numpy, BERT, ResNet-18, Keras, Pillow, Matplot-Lib, & Jupyter Notebooks." }],
    summary: "Helped build a multi-model neural network (BERT sentiment analysis + ResNet-18 image classification) that matched persuasive techniques to the best-fit media format, reaching 89.2% accuracy.",
    description: "During the spring semester of 2024, I was selected to join a team of five students in ACM UTD Research, made up of one team lead and four participants including myself, to build a multi-model Artificial Neural Network that determines which form of media best fits a given persuasive technique. The dataset we used came from the 15th International Workshop on Semantic Evaluation (SemEval 2021) and had one folder for text data and another for image data. We built two models: Model 1 is a Sentiment Analysis model that determines the emotional tone of text with the help of Google's language model, BERT, and Model 2 is an Image Classification model that recognizes objects in images to sort them into categories, using ResNet-18, a popular Convolutional Neural Network, to help with feature extraction (deciding which parts of the data the model should learn from). Our combined model reached an overall accuracy of 89.2% and a precision of 87.9%, which shows that our multi-model architecture does a good job of classifying data into specific persuasive techniques. This was my first time ever working with Machine Learning, and I'm extremely grateful for the experience because it opened my eyes to the world of AI and how it can be used to solve real-world problems."
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
