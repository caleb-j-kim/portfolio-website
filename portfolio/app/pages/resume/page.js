//Resume Page

import { FileDown } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Resume() {
    return (
        <div>
            <Navbar />

          <main className="relative overflow-hidden">
            <div className="ambient-glow left-1/2 top-[-10%] h-96 w-96 -translate-x-1/2 bg-accent/15" />
            <div className="ambient-glow bottom-[-15%] right-[-10%] h-72 w-72 bg-accentRed/10 animate-float-slow" />

            <div className="mx-auto max-w-content px-6 py-16 text-center sm:py-20">
              <FadeIn>
                <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
                  Resume
                </span>
                <h1 className="font-display mt-4 text-3xl font-bold text-foreground sm:text-5xl">
                  Here&apos;s my most up-to-date resume
                </h1>
                <p className="mt-3 text-sm text-muted">As of July, 2026</p>

                <a
                  href="/images/Resume.pdf"
                  download
                  className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-glow transition-colors duration-200 hover:bg-accent-hover"
                >
                  Download PDF
                  <FileDown size={16} />
                </a>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border-strong bg-elevated shadow-2xl shadow-black/50">
                  <iframe
                    src="/images/Resume.pdf"
                    title="Caleb Kim's Resume"
                    className="h-[70vh] w-full sm:h-[80vh]"
                  />
                </div>
              </FadeIn>
            </div>
          </main>

          <Footer />
        </div>
    )
}
