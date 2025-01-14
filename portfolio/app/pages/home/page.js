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
        <h1 className="text-4xl font-bold text-black text-center py-2">Hello, My name is Caleb Kim.
        </h1>
        <img
          src="/images/temp.jpg"
          alt="Caleb Kim"
          className="max-h-[80vh]
          w-auto
          object-contain
          mb-8"
        />
        <div className="text-2xl font-bold text-center">Please interact with the task bar to learn more about me!</div>
        </FadeIn>
      </main>

      { /* Footer */ }
      <Footer />
    </div>
  )
}