const ComponentTwo = () => {
  return (
    <div className="dark:bg-[#121212] dark:text-white text-zinc-900 bg-white py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold border-b-2 border-purple-600 inline-block pb-2 tracking-wide">
            About Me
          </h2>
        </div>

        {/* MAIN WRAPPER */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LEFT */}
          <div className="lg:basis-4/6 space-y-4 lg:p-10">
            <p className="text-2xl lg:text-3xl font-bold dark:text-white text-zinc-950">
              I'm <span className="text-purple-400">Gözde Kösa</span>, a Web Developer
            </p>

            <p className="dark:text-zinc-400 text-zinc-900 text-sm">
              I specialize in React, Next.js and frontend architecture with a focus on clean code, performance and modern UI systems.
            </p>

            <p className="dark:text-zinc-400 text-zinc-900 text-sm">
              I enjoy building smooth user experiences and scalable web applications. Currently improving my full-stack development skills through real projects.
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:basis-2/6">
            <ul className="dark:text-zinc-400 text-zinc-900 text-sm lg:pt-12 px-0 lg:px-5 space-y-4 font-bold">
              <li>Name: <span className="font-normal">Gözde Kösa</span></li>
              <li>Email: <span className="font-normal">GozdeKosaa@hotmail.com</span></li>
              <li>Age: <span className="font-normal">28</span></li>
              <li>From: <span className="font-normal">Bursa</span></li>
            </ul>

            <a
              href="/cv.pdf"
              download
              className="inline-block mt-6 bg-transparent border-2 border-purple-600 text-lg font-bold text-purple-400 px-5 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300"
            >
              Download CV
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ComponentTwo;