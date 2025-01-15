//Home Page (cd portfolio -> npm run dev)

import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      { /* Navbar */ }
      <Navbar />

      { /* Background (add image)*/ }
      <main className="flex flex-col items-center justify-center h-screen bg-red-900 px-12 py-8">
        <FadeIn>
        <div className="flex gap-4">
        <img
          src="/images/temp.jpg"
          alt="Caleb Kim"
          className="max-h-[80vh]
          w-6/12
          object-contain
          mb-8 rounded-lg"
        />
        <br />
        <h1 className="mt-24 inter-800 text-4xl font-bold text-slate-400 text-left py-2"> <span className="text-white">Hello,</span> 
        <br /> My name is Caleb Kim.
        </h1>
        </ div>
        <div className="text-2xl font-bold text-center poppins-regular text-offblack">Please interact with the task bar to learn more about me!</div>
        </FadeIn>
      </main>

      { /* Footer */ }
      <Footer />
    </div>
  )
}