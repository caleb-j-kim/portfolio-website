//Resume Page

import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Resume() {
    return (
        <div>
          { /* Navbar */ }
            <Navbar />

        { /* Background (add image)*/ }
        
      <main className="flext items-center justify-center h-screen bg-gray-300 px-12 py-8">
        <FadeIn>
        <div className="text-2xl font-extrabold text-center poppins-regular text-offblack">Here's my most up-to-date Resume as of July, 2025!</div>
        <div className="mt-4 text-center">
        <div className="mt-6 flex justify-center">
  <iframe
    src="/images/Resume.pdf"
    width="60%"
    height="650px"
    className="border rounded"
  >
      <a href="/images/Resume.pdf">Download PDF</a>.
    
  </iframe>
</div>

</div>
</FadeIn>
      </main>

        { /* Footer */ }
    <Footer />
    </div>
    )
}