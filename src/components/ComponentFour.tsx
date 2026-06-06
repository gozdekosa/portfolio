const ComponentFour = () => {
  return (
    <div className="bg-[#121212] text-white py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold border-b-2 border-purple-600 inline-block pb-2 tracking-wide">
            Work Experience
          </h2>
        </div>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 pl-6 md:pl-8 space-y-12">
          
          <div className="relative">
            
            <span className="absolute -left-[31px] md:-left-[39px] top-1.5 bg-purple-600 w-4 h-4 rounded-full border-4 border-[#121212] ring-4 ring-purple-600/20"></span>
            
            {/* İş Detayları Üst Alanı */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-xl font-bold text-zinc-100 tracking-wide">
                  Software Developer
                </h3>
                <p className="text-purple-400 font-medium text-sm mt-1">
                  Bilginet Akademi • <span className="text-zinc-500 font-normal">Bursa</span>
                </p>
              </div>
              
              <div className="inline-block self-start md:self-center px-3 py-1 bg-zinc-950 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30">
                2020 — Present
              </div>
            </div>

            <ul className="space-y-3 text-zinc-400 text-sm max-w-4xl">
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1 flex-shrink-0">→</span>
                <span>Building and maintaining enterprise CRM and management systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1 flex-shrink-0">→</span>
                <span>Developing modern, responsive user interfaces with React, Next.js, TypeScript, and Tailwind CSS.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1 flex-shrink-0">→</span>
                <span>Designing reusable components and scalable frontend architectures.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1 flex-shrink-0">→</span>
                <span>Integrating REST APIs and third-party services.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1 flex-shrink-0">→</span>
                <span>Improving application performance, maintainability, and user experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1 flex-shrink-0">→</span>
                <span>Contributing to full-stack development using Laravel and modern frontend technologies.</span>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ComponentFour;