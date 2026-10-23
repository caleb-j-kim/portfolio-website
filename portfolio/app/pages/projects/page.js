//Projects Page

"use client"

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DetailCarousel from "../../components/DetailCarousel";
import { useState } from "react";

export default function Projects() {

// Array of projects, used to display only one project at a time.

  const projects = [
    {
      title: "ApplyIQ",
      date: "July - October 2026",
      details: [{ label: "Technologies Used", value: "Java 21, Spring Boot 4.1 (Web MVC, Data JPA / Hibernate, Security, Validation), Maven, JJWT, Jackson, Lombok, Apache PDFBox, Apache POI, React 19, TypeScript, Vite, React Router, Tailwind CSS, shadcn, Base UI, Recharts, Three.js, React Three Fiber, Anthropic Claude API, Python, Scikit-Learn, NumPy, Gmail API, Google OAuth 2.0, PostgreSQL, AWS S3, Docker, Docker Compose, Render, Vercel, GitHub Actions, JUnit, & Postman" }],
      summary: "A full-stack Spring Boot/React job-search app with Claude-powered resume matching and interview prep, plus Gmail automation that updates your tracker and tells you when to follow up.",
      description: "I built ApplyIQ, a full-stack web application, to help people run their entire job search in one place while giving myself real, hands-on experience with Java and Spring Boot. Every application lives in one tracker, from applied through interviewing, offer, rejection, or ghosted, and the dashboard and analytics pages turn that history into charts and stats. Users can upload their resumes as PDF, DOCX, or DOC files, which the Spring Boot backend parses with Apache PDFBox and Apache POI before storing them in AWS S3. After pasting in a job description, they get back a match score along with the keywords and skill gaps that were found, and the interview prep page builds a study guide for a specific role and company. Both of these features are powered by the Anthropic Claude API. The newest feature I added is Gmail automation: once a user connects their Gmail through Google OAuth 2.0, the backend checks their inbox on a schedule, detects application confirmations, rejections, and interview invites, and updates the tracker on its own. To decide when a user should follow up, I trained a small decision-tree model offline in Python with Scikit-Learn and exported it as JSON so it could run directly in Java, where it also estimates how likely it is that the user is being ghosted. From there, follow-up emails can be drafted and sent without ever leaving the app. Security was a big concern since this app touches people's inboxes, which is why I used JWT authentication, BCrypt-hashed passwords, optional TOTP two-factor authentication with recovery codes, AES-GCM encryption for stored Gmail tokens, a password check before a Gmail account can be connected, and rate limits on login and email sending. The React 19 and TypeScript frontend is hosted on Vercel, while the Dockerized backend and PostgreSQL database run on Render, and GitHub Actions lints and builds the frontend and runs mvn verify on the backend. ApplyIQ is the most complete application I have built so far, and I'm excited to keep improving it.",
      image: "/images/ApplyIQ.png",
      link: { href: "https://applyiq-pied.vercel.app", label: "Open Live Website" }
    },
    {
      title: "Market Regime Forecasting",
      date: "May - July 2026",
      details: [{ label: "Technologies Used", value: "Python, PyTorch, Pandas, NumPy, Scikit-Learn, Matplotlib, Hidden Markov Models, LSTM, GRU, Recurrent Neural Networks, Cross-Entropy Loss, Adam Optimizer, ETF Market Data, VIX Data, Rolling Window Time-Series Preprocessing, Confusion Matrices, Macro-F1, Weighted-F1, & Chronological Train / Validation / Test Splitting" }],
      summary: "Used HMM-labeled market regimes and LSTM/GRU sequence models to forecast bull, calm, high-volatility, and bear market states from ETF and VIX data.",
      description: "Market Regime Forecasting is a deep learning project where my team and I used weekly ETF and VIX market data to forecast financial market regimes such as bull trends, calm ranges, high-volatility chop, and bear risk-off periods. Since these regimes aren't directly labeled in normal financial datasets, we used a Hidden Markov Model to create the regime labels and then converted the data into rolling time windows for our LSTM and GRU sequence models. My main contribution was implementing and analyzing the baseline machine learning models, which we used to determine whether our deep learning models were actually improving on simpler approaches. Although the recurrent models outperformed the majority-class baseline, they were not able to beat the previous-week regime baseline, which showed us that the HMM-generated regimes were highly persistent from week to week. I'm proud of this project because it taught me that deep learning isn't always about beating every baseline, but about understanding what structure exists in the data and being honest about what a model can and cannot learn.",
      image: "/images/MarketRegimeForecasting.png",
      link: ""
    },
    {
      title: "Tomorrow's Weather",
      date: "February - May 2025",
      details: [{ label: "Technologies Used", value: "Python, Scikit-Learn, Flask, React.js, HTML, CSS, AWS S3, AWS DynamoDB, Pandas, NumPy, XGBoost, Matplot-Lib, Tomorrow.io API, & OpenAI API" }],
      summary: "A senior capstone web app using an ensemble of Random Forest and Linear Regression models, backed by AWS, to forecast climate anywhere, any time.",
      description: "Tomorrow's Weather is a simple yet powerful web application that allows users to predict the climate anywhere, any time. This was my senior project during my undergraduate studies, where we were tasked with using Machine Learning to solve a real-world problem, and the problem we chose was how difficult it is to predict the weather more than a couple of days out. I built a Random Forest and a Linear Regression model that work together as an ensemble, since Linear Regression is known for being great at picking up trends and patterns, while the Random Forest is able to cover for Linear Regression's weakness when it runs into outliers. My teammates worked on the frontend that displays the data calculated from these models and communicates with users. They also set up the AWS S3 bucket and DynamoDB table, and my reasoning for using these technologies was that S3 would hold all of the media generated after each prediction while DynamoDB would house all of the data our models needed. (Our dataset spanned several centuries of monthly averages from all across the world, so cloud storage was my solution for cutting down the resources needed to run this project.) I'm incredibly proud of the work my team and I put into this project, and I'm excited to see how I can top myself next.",
      image: "/images/tomorrowsweather.png",
      link: { href: "https://github.com/caleb-j-kim/climate-change-forecast", label: "Open in GitHub" }
    },

    {
      title: "BrainBeats",
      date: "January 2025",
      details: [{ label: "Technologies Used", value: "Swift, Swift UI, Python, AWS S3, suno AI, Figma, Fast API, Next.js, Pydantic, Uvicorn, boto3, & Adobe After Effects." }],
      summary: "An award-winning iOS app (Best Design, Hack TAMU 2025) that generates short, personalized learning songs on demand using Suno AI.",
      description: "BrainBeats is an iOS application that my team and I developed for Hack TAMU 2025, where it won the Best Design award. The idea behind it was to make on-the-go learning easier by using a Generative AI model from Suno AI alongside our custom Swift frontend, Python backend, and AWS S3 storage. Users give BrainBeats a prompt, and within seconds they can stream a personalized song between 1 and 1.5 minutes long that teaches them about subjects like Finance, Biology, and more. That means whether you're commuting, exercising, or taking a quick break, you can pick up valuable skills without disrupting your daily routine. Our goal was to blend education and music so that learning feels both effective and enjoyable, anytime and anywhere.",
      image: "/images/brainbeats.png",
      link: { href: "https://github.com/ahadjawaid/tamu-hack-2025", label: "Open in GitHub" }
    },

    {
      title: "Portfolio Website",
      date: "December 2024 - January 2025",
      details: [{ label: "Technologies Used", value: "Next.js, Tailwind CSS, & Vercel." }],
      summary: "This personal portfolio site, built with Next.js and Tailwind CSS to document and showcase my growth as a software developer.",
      description: "I created this website as a way to document and display everything I have done during my time in university and beyond. Since I first learned how to code in 2021, I have grown tremendously, and with this website I aim to showcase the journey I've gone through as a Software Developer. I spent December planning out this project and brainstorming how I wanted the overall structure and feel of my portfolio to be, and the first two weeks of January were dedicated to bringing it to life. I chose Next.js as the backbone of my frontend because I had gotten comfortable with it from a group project, and I chose Tailwind CSS because it works well with UI frameworks like React.js and Next.js and is known for simplifying design systems. As I continue to grow, I aim to keep this website updated whenever I can.",
      image: "/images/portfoliowebsite.jpg",
      link: { href: "https://github.com/caleb-j-kim/portfolio-website", label: "Open in GitHub" }
    },
    {
      title: "Stock Prediction Machine Learning Model",
      date: "October - November 2024",
      details: [{ label: "Technologies Used", value: "Python, Scikit-Learn, Matplot-Lib, Numpy, Pandas, & Itertools." }],
      summary: "A group project using an LSTM model trained on decades of Apple stock data, predicting prices with 94.74% accuracy.",
      description: "This was a group project that I worked on with three other classmates in our Intro to Machine Learning class. We built a Long Short-Term Memory (LSTM) model, since LSTMs have been shown to be one of the best models for making predictions on sequential data. To test whether our LSTM model worked correctly, we needed to feed it a dataset, and the one we chose was Apple's stock data from 1980 to 2024, which we retrieved from Kaggle. We found that a 90% training and 10% testing split gave us the best performance. The model was able to predict Apple's stock price with an accuracy of 94.74%, a Mean Squared Error of 0.0003, and an R^2 value of 0.0176 (metrics that show the quality of a Machine Learning model). This project was a great learning experience, as I learned a lot about LSTM models and how they can be used to predict stock prices and other kinds of sequential data.",
      image: "/images/stockprediction.jpg",
      link: { href: "https://github.com/caleb-j-kim/Stock-Predictions-LSTM", label: "Open in GitHub" }
    },

    {
      title: "ACM Class Registration Chatbot",
      date: "October - November 2024",
      details: [{ label: "Technologies Used", value: "Python, React.js, Scikit-Learn, FastAPI, Pandas, NetworkX, Pydantic, Uvicorn, HTML, CSS, & Numpy." }],
      summary: "A Python/React chatbot built for an ACM UTD workshop that recommends class registration order using a custom topological-sorting-inspired algorithm.",
      description: "This was a solo project I created for ACM UTD while collaborating with a fellow officer on a workshop that explored a Machine Learning topic known as Wrapper Methods. Wrapper Methods are a class of feature selection algorithms that pick out the most important features from a larger set of data, reducing the number of features a model has to work with. Because of this, Machine Learning models that use these algorithms can be easier to interpret and more accurate, since the more distinct each feature is from the others, the better a model tends to perform. To make the workshop entertaining and useful for our intended audience, underclassmen who were new to Machine Learning and AI, I created this chatbot to make registering for classes easier than the methods our university currently provides. The class recommendation sorting algorithm is custom-made and inspired by the Topological Sorting algorithm I learned in my Data Structures & Algorithms class.",
      image: "/images/acm-chatbot.jpg",
      link: { href: "https://github.com/caleb-j-kim/wrappers-chat-bot", label: "Open in GitHub" }
    },

    {
      title: "Feelings Behind Words",
      date: "February - May 2024",
      details: [{ label: "Technologies Used", value: "Python, PyTorch, Tensorflow, Scikit-Learn, Pandas, Numpy, BERT, ResNet-18, Keras, Pillow, Matplot-Lib, & Jupyter Notebooks." }],
      summary: "A multi-model neural network combining BERT sentiment analysis and ResNet-18 image classification to match persuasive techniques to the best-fit media format, reaching 89.2% accuracy.",
      description: "During the spring semester of 2024, I was selected to join a team of five students in ACM UTD Research, made up of one team lead and four participants including myself, to build a multi-model Artificial Neural Network that determines which form of media best fits a given persuasive technique. The dataset we used came from the 15th International Workshop on Semantic Evaluation (SemEval 2021) and had one folder for text data and another for image data. We built two models: Model 1 is a Sentiment Analysis model that determines the emotional tone of text with the help of Google's language model, BERT, and Model 2 is an Image Classification model that recognizes objects in images to sort them into categories, using ResNet-18, a popular Convolutional Neural Network, to help with feature extraction (deciding which parts of the data the model should learn from). Our combined model reached an overall accuracy of 89.2% and a precision of 87.9%, which shows that our multi-model architecture does a good job of classifying data into specific persuasive techniques. This was my first time ever working with Machine Learning, and I'm extremely grateful for the experience because it opened my eyes to the world of AI and how it can be used to solve real-world problems.",
      image: "/images/FBW.jpg",
      link: { href: "https://github.com/ThejasKumar100/FBW", label: "Open in GitHub" }
    },

    {
      title: "Fintasy",
      date: "February - May 2024",
      details: [{ label: "Technologies Used", value: "Vue.js, Python, HTML, CSS, Vite.js, PostgreSQL, Docker, Alpaca API, Fast API, Nginx, Pydantic, & Uvicorn." }],
      summary: "A full-stack paper trading platform built with Vue.js and FastAPI, using live Alpaca API data to teach trading strategies risk-free.",
      description: "This was a group project that I helped create and lead alongside six other students in my Software Engineering class, where we were assigned to build a full-stack application while following industry methods for developing software, such as Agile Methodology, and software testing methods like Black Box testing. Fintasy is a paper trading website aimed at teaching people who are new to trading stocks how to develop their own trading strategies without risking real money. For people who already have trading experience, Fintasy can still be useful as a playground for building better strategies or improving the ones they already use. The frontend was built with Vue.js, Vite.js, HTML, and CSS, while we built the backend in Python because we were planning to add Machine Learning or AI tools if we had extra time. FastAPI was crucial because it let us connect the backend to the frontend with ease, and we set up our own database using PostgreSQL. The stock data we used is real-world, up-to-date data from Alpaca API, and we made frequent fetch calls to the API so that users never paper trade with outdated information. Fintasy was a great learning experience because it showed me how the way the industry develops software differs from the academic methods I had been taught in my classes.",
      image: "/images/fintasy.png",
      link: { href: "https://github.com/adibarra/fintasy", label: "Open in GitHub" }
    },

    {
      title: "Discord Bot",
      date: "August - September 2023",
      details: [{ label: "Technologies Used", value: "Python, Discord API, & Wordnik API." }],
      summary: "My first project and first API integration: a Python Discord moderation bot (Scribe) with word-of-the-day, pin archiving, and moderation commands.",
      description: "This was the first official project I ever created as a Software Developer, and it was also my first time using an API. I built the bot, which I named Scribe, using Python and the Discord API. I was inspired to create Scribe because I wanted a way to automate moderation in text channels, since some language can be unpleasant for people to see. Another reason was to automatically archive messages that users pinned, since Discord only allows 50 pinned messages per text channel (hence the name). Beyond that, I also created some commands that fit Scribe's name, such as 'Word of the Day,' which pulls a word and its definition from the Wordnik API, and 'Message of the Day,' which sends users a message I personally wrote into Scribe's code, along with moderation commands for banning and kicking troublesome members. Working on Scribe opened my eyes to what I could create as a Software Developer and showed me how different it was from the coding assignments I had to complete in school.",
      image: "/images/discordbot.jpg",
      link: { href: "https://github.com/caleb-j-kim/DiscordBot", label: "Open in GitHub" }
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % projects.length)
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <div>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="ambient-glow left-[-10%] top-[5%] h-80 w-80 bg-accent/15" />
        <div className="ambient-glow bottom-[-15%] right-[-10%] h-80 w-80 bg-accentRed/10 animate-float-slow" />
        <DetailCarousel
          eyebrow="Projects"
          items={projects}
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
