//Projects Page

"use client"

import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function Projects() {

// Array of projects, used to display only one project at a time.

  const projects = [
    {
      title: "Tomorrow's Weather",
      date: "February - May 2025",
      tech: "Python, Scikit-Learn, Flask, React.js, HTML, CSS, AWS S3, AWS DynamoDB, Pandas, NumPy, XGBoost, Matplot-Lib, Tomorrow.io API, & OpenAI API",
      description: "Tomorrow's Weather, a simple yet powerful web application that allows users to predict the climate anywhere, any time. This was my senior project during my undergraduate studies where we were tasked with using Machine Learning to solve a real-world problem where there's difficulty in determining weather predictions past a couple of days. I constructed a Random Forest and Linear Regression to work together in an ensemble method as a Linear Regression model is widely known to excel at calculating trends or patterns while the Random Forest would be able to account for the Linear Regression model's weakness when encountering outliers. My teammates worked on the frontend that displays the data calculated from these models and communicates with users. They also created the AWS S3 Bucket and DynamoDB and my reasoning for using these technologies was because S3 is where we uploaded all of the media that was generated after each prediction while the DynamoDB housed all of the data that was necessary for our models. (Our dataset spanned several centuries of monthly averages all across the world and using cloud storage was my solution for mitigating the amount of resources needed to run this project.) I'm incredibly proud of the work that my team and I put in for this project and I am excited to see how I can top myself next.",
      image: "/images/tomorrowsweather.png",
      repo: "https://github.com/caleb-j-kim/climate-change-forecast"
    },

    {
      title: "BrainBeats",
      date: "January 2025",
      tech: "Swift, Swift UI, Python, AWS S3, suno AI, Figma, Fast API, Next.js, Pydantic, Uvicorn, boto3, & Adobe After Effects.",
      description: "Introducing BrainBeats, an award-winning iOS application developed for Hack TAMU 2025, where it was honored with the Best Design award. BrainBeats revolutionizes on-the-go learning by leveraging a Generative AI model from Suno AI, combined with our custom Swift frontend, Python backend, and AWS S3 storage. This innovative app allows you to stream personalized songs lasting between 1 to 1.5 minutes in just seconds based on your unique prompts. Whether you’re commuting, exercising, or taking a quick break, BrainBeats enables you to acquire valuable skills in subjects such as Finance, Biology, and more—all without disrupting your daily routines. Experience seamless integration of education and music, making learning both effective and enjoyable anytime, anywhere.",
      image: "/images/brainbeats.png",
      repo: "https://github.com/ahadjawaid/tamu-hack-2025"
    },

    {
      title: "Portfolio Website",
      date: "December 2024 - January 2025",
      tech: "Next.js, Tailwind CSS, & Vercel.",
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
      date: "October - November 2024",
      tech: "Python, React.js, Scikit-Learn, FastAPI, Pandas, NetworkX, Pydantic, Uvicorn, HTML, CSS, & Numpy.",
      description: "This was a solo project that I created for ACM UTD as I was collaborating with a fellow Officer in the organization to create a workshop that explored a Machine Learning topic known as Wrapper Methods. They are a specific class of feature selection algorithm that picks out the most important features from a larger set of data, reducing dimensionality of the total amount of features in a given space. As a result, Machine Learning models that use this type of algorithm are able to improve their comprehensibility of learning results and increase their predictive accuracy as the more different each feature is from one another, the better a Machine Learning model can perform. In order to make this workshop entertaining and useful for our intended audience, underclassmen who are new to concepts inside of Machine Learning / AI, I created this chatbot that's designed to make registering for classes easier than the current methods that are provided by our university. The class recommendation sorting algorithm is custom made and is insipred from a Topological Sorting Algorithm which I have learned from my Data Structures & Algorithms class.",
      image: "/images/acm-chatbot.jpg",
      repo: "https://github.com/caleb-j-kim/wrappers-chat-bot"
    },

    {
      title: "Feelings Behind Words",
      date: "February - May 2024",
      tech: "Python, PyTorch, Tensorflow, Scikit-Learn, Pandas, Numpy, BERT, ResNet-18, Keras, Pillow, Matplot-Lib, & Jupyter Notebooks.",
      description:"During my spring semester of 2024, I was selected to join a team of 4 other students comprising of one team lead and four participants to create a multi-model architecture Artificial Neural Network to determine which form of media would be best fit for a given persuasive technique inside of ACM UTD Research. The dataset we used to test our model contains one folder for specifically text data and another for image data, obtained from the 15th International Workshop on Semantic Evaluation (SemEval 2021). Specifically, there are two models that have been constructed, Model 1 is a Sentiment Analysis model that determines the emotional tone is textual data with the help of Google's language model, BERT. Model 2 is Image Classification model that distinguishes objects in images to perform pattern recognition for sorting / classification and uses a popular Convolutional Neural Network, ResNet-18 to help with feature extraction (determining which data the model should learn from). Our combined model had the overall accuracy of 89.2% and a precision of 87.9% which shows that our multi-model architecture is able to classify data to a specific persuasive technique well. This project was my first time ever working on Machine Learning technology and I was extremely grateful to have this experience as it has opened my eyes to the world of AI and how it can be used to solve real-world problems.",
      image: "/images/FBW.jpg",
      repo: "https://github.com/ThejasKumar100/FBW"
    },

    {
      title: "Fintasy",
      date: "February - May 2024",
      tech: "Vue.js, Python, HTML, CSS, Vite.js, PostgreSQL, Docker, Alpaca API, Fast API, Nginx, Pydantic, & Uvicorn.",
      description:"This was a group project that I helped create and lead between 6 other students inside of my Software Engineering class where we were assigned to create a Full-Stack application that followed industry methods of developing Software such as Agile Methodology as well as Software testing methods such as Black Box testing. Fintasy is a paper trading website that is aimed to educate those who are new to the world of trading money for stocks with knowledge to develop their own trading strategies without the risk of using real money. For those who already have an idea of what they're doing with trading, Fintasy may be of use to them still as this platform could be used to create better trading strategies or provide a playground to improve on the strategies that are currently employed. The frontend was built using Vue.js, Vite.js, HTML, & CSS while the backend was built using Python as we were planning on adding Machine Learning or AI tools if we had additional time. Fast API was crucial as it allowed us to connect the backend to the frontend with ease and we implemented a custom database with the use of PostGreSQL. The stock data that's used is real world, up-to-date stock data according to our source, Alpaca API and fetch calls to this API are made frequently to ensure that users don't paper trade with outdated information. Fintasy was a great learning experience as I was able to understand how the industry developed Software methods differed from the academic methods that I have been taught in my classes.",
      image: "/images/fintasy.jpg",
      repo: "https://github.com/adibarra/fintasy"
    },

    {
      title: "Discord Bot",
      date: "August - September 2023",
      tech: "Python, Discord API, & Wordnik API.",
      description:"This was my first offical project that I have ever created as a Software Developer and this was also my first time using an API before. The bot (who I named Scribe) was created using Python and the Discord API, I was inspired to create Scribe because I wanted there to be a way to automate moderation inside of text channels as there may be certain language that people may find unpleasant. Another reason why I wanted to create Scribe was to automatically archieve specific messages that users pinned as the max number of pinned messages that are permitted per text channel in Discord's application is 50 (hence the name). Aside from this purpose, I also decided to create some commands that would fit with Scribe's name such as a 'Word of the Day' which pulls a special word along with its defintiion from Wordnik API, 'Message of the Day' which sends users a message that I have personally encoded inside of Scribe's code, along with commands for moderation such as banning and kicking troublesome members. Working on Scribe opened my eyes to what I could create as a Software Developer and see how it was different from the coding assignments I was required to complete for academia.",
      image: "/images/discordbot.jpg",
      repo: "https://github.com/caleb-j-kim/DiscordBot"
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
        <Navbar />

        { /* Background */ }

      <main className="bg-gray-300 min-h-screen py-12">
      <FadeIn>
      <div className="max-w-screen-xl mx-auto px-2">

        { /* Title & Date */ }

      <h1 className="text-5xl font-extrabold text-center text-offblack">
        {activeProject.title}
      </h1>
      <h2 className="text-xl font-bold text-center inter-800 text-red-600">
        {activeProject.date}
      </h2>

        { /* Technologies Used & Description */ }

      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <div className="md:w-1/2">
        <div className="text-2xl font-extrabold py-4 poppins-regular text-slate-700">
          Technologies Used: {activeProject.tech}
        </div>
        <div className="text-lg font-semibold inter-400 text-slate-700">
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
      <Footer />
    </div>
    )
}