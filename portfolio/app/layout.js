import { Space_Grotesk, Archivo } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Caleb Kim — Software Engineer",
  description: "Caleb Kim's portfolio — software engineer and Georgia Tech graduate student building across ML, full-stack, and product.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08080a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${archivo.variable} font-sans antialiased bg-base text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
