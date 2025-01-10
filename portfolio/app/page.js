//Home Page (cd portfolio -> npm run dev)

export default function Home() {
  return (
    <div>
      { /* Navbar */ }
      <div className="bg-gray-800 text-white py-8 px-6 flex items-center justify-between">
        { /* Left side: Logo (WIP) */ }
        <h1 className="text-xl font-bold">CJK</h1>

        { /* Right side: Links */ }
        <div className="flex space-x-6">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Projects</span>
          <span className="cursor-pointer">Organizations</span>
          <span className="cursor-pointer">Experience</span>
          <span className="cursor-pointer">Contact</span>
        </div>
      </div>

      { /* Background */ }
      <main className="flext items-center justify-center h-screen bg-red-900 px-12 py-8">
        <h1 className="text-4xl font-bold text-black text-center">Hello, My name is Caleb Kim.
        </h1>
      </main>

      { /* Footer */ }
      <footer className="bg-gray-800 text-white py-6 px-6 flex items-center justify-between">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">

          { /* Links */ }
          <div className="flex space-x-4 mb-4">
            <a
              href="https://github.com/caleb-j-kim"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/caleb-jiho-kim/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:cc.kim0906@gmail.com" 
              className="hover:underline"
            >
              Email
            </a>
          </div>
          
          <div className="font-bold text-lg mb-1">Caleb Kim</div>

          <div className="text-sm">&copy; 2025 Caleb Kim. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  )
}