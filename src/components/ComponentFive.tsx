const ComponentFive = () => {
  return (
    <div className="bg-[#121212] text-white py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold border-b-2 border-purple-600 inline-block pb-2 tracking-wide">
            Connect With Me
          </h2>
          <p className="text-zinc-500 text-sm mt-3">
            I am currently open to new career opportunities. Feel free to reach out via any of the channels below regarding job openings or technical interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#1a1a1a] p-6 rounded-xl border border-zinc-800 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-4">Direct Contact</h3>
              <div className="space-y-3 text-zinc-300 text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-zinc-500">📍</span> Bursa, Türkiye
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-zinc-500">📞</span> 
                  <a href="tel:+905395443104" className="hover:text-purple-400 transition-colors">
                    0539 544 31 04
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-xl border border-zinc-800 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-4">Social Profiles</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-zinc-500">🔗</span>
                  <a 
                    href="https://www.linkedin.com/in/gozdekosa/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-zinc-300 hover:text-purple-400 transition-colors underline decoration-zinc-700 hover:decoration-purple-500"
                  >
                    LinkedIn
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-zinc-500">💻</span>
                  <a 
                    href="https://github.com/gozdekosa"
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-zinc-300 hover:text-purple-400 transition-colors underline decoration-zinc-700 hover:decoration-purple-500"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-xl border border-zinc-800 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between items-start">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-2">Drop a Line</h3>
              <p className="text-zinc-400 text-xs mb-4">Open a quick draft in your email client.</p>
            </div>
            
            <a 
              href="mailto:gozdekosaa@hotmail.com" 
              className="inline-block w-full text-center px-5 py-2 border border-purple-500 rounded-full text-xs font-semibold tracking-wide text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg shadow-purple-500/5"
            >
              Send an Email
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ComponentFive;