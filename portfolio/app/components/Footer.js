export default function Footer() {
  return (
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
          <img
            src="/images/githublogo.png"
            alt="GitHub"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/caleb-jiho-kim/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          <img
            src="/images/linkedinlogo.png"
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </a>
        <a 
          href="mailto:cc.kim0906@gmail.com" 
          className="hover:underline"
        >
          <img
            src="/images/emaillogo.png"
            alt="Email"
            className="w-6 h-6"
          />
        </a>
      </div>
      
      <div className="font-bold text-lg mb-1">Caleb Kim</div>

      <div className="text-sm">&copy; 2025 Caleb Kim. All Rights Reserved.</div>
    </div>
  </footer>
  )
}