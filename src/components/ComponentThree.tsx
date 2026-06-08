const ComponentThree = () => {
  return (
<div className="bg-white dark:bg-[#121212] text-zinc-900 dark:text-white py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <h2 className="text-3xl font-bold border-b-2 border-purple-600 inline-block pb-2 tracking-wide">
            Skills & Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Frontend */}
          <div className="bg-zinc-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              Frontend Development
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
              React, Next.js (App Router, SSR, CSR), TypeScript
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-zinc-100 dark:bg-zinc-900 text-xs px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-700">
                State Management
              </span>

              <span className="bg-zinc-100 dark:bg-zinc-900 text-xs px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-700">
                Tailwind CSS
              </span>

              <span className="bg-zinc-100 dark:bg-zinc-900 text-xs px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-700">
                ShadCN UI
              </span>
            </div>
          </div>

          {/* Architecture */}
          <div className="bg-zinc-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              Architecture & Engineering
            </h3>

            <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-2 list-disc list-inside">
              <li>Clean Code & SOLID principles</li>
              <li>Feature-based scalable folder structure</li>
              <li>Custom hook patterns & Form validation</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-zinc-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              Backend & API Integration
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
              Node.js, RESTful API design & Auth flows (JWT, Session)
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-zinc-100 dark:bg-zinc-900 text-[10px] uppercase tracking-wider font-bold text-zinc-600 dark:text-zinc-500 px-2 py-1 rounded border border-zinc-300 dark:border-zinc-800">
                API Testing (Postman)
              </span>

              <span className="bg-zinc-100 dark:bg-zinc-900 text-[10px] uppercase tracking-wider font-bold text-zinc-600 dark:text-zinc-500 px-2 py-1 rounded border border-zinc-300 dark:border-zinc-800">
                Microservice Mindset
              </span>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-zinc-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              Tools & Workflow
            </h3>

            <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                Git & GitHub Workflow
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                Figma to Code Conversion
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                Terminal-based Development
              </li>
            </ul>
          </div>

          {/* Currently Learning */}
          <div className="md:col-span-2 bg-transparent p-6 rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-800 hover:border-purple-500/30 transition-all duration-500 group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

              <div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-300 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  Currently Learning
                </h3>

                <p className="text-zinc-500 text-sm mt-1">
                  Technologies I'm exploring for future projects
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900/50 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-800 group-hover:border-purple-400/50 dark:group-hover:border-purple-900/50">
                  Advanced Next.js Patterns
                </span>

                <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900/50 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-800 group-hover:border-purple-400/50 dark:group-hover:border-purple-900/50">
                  Performance Optimization
                </span>

                <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900/50 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-800 group-hover:border-purple-400/50 dark:group-hover:border-purple-900/50">
                  Mobile Fundamentals
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ComponentThree;