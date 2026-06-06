const ComponentTwo = () => {
  return (
    <div className="bg-[#121212] text-white py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
          <div className="mb-12">
          <h2 className="text-3xl font-bold border-b-2 border-purple-600 inline-block pb-2 tracking-wide">
              About Me
          </h2>
          </div>
          <div className="flex flex-row">
          <div className="basis-4/6 space-y-4 p-10">
              <p className="text-3xl font-bold text-white">I'm <span className="text-purple-400">Gözde Kösa</span>, a Web Developer</p>
              <p className="text-zinc-400 text-sm">I specialize in React, Next.js and frontend architecture with a focus on clean code, performance and modern UI systems.</p>
              <p className="text-zinc-400 text-sm">
                  I enjoy building smooth user experiences and scalable web applications.
                  Currently improving my full-stack development skills through real projects.</p>
          </div>
          <div className="basis-2/6">
              <ul className="list-outside text-zinc-400 text-sm pt-12 px-5 text-lg space-y-4 font-bold">
              <li>Name:<span className="font-normal"> Gözde Kösa</span></li>
              <li>Email:<span className="font-normal"> GozdeKosaa@hotmail.com</span></li>
              <li>Age:<span className="font-normal"> 28</span></li>
              <li>From:<span className="font-normal"> Bursa</span></li>
              </ul>
              <a
                  href="/cv.pdf"
                  download
                  className="inline-block bg-transparent border-2 border-purple-600 text-lg font-bold text-purple-400 px-5 py-3 mt-6 rounded-full hover:bg-fuchsia-500 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                  Download CV
          </a>
          </div>
          </div>
      </div>
    </div>
  );
}

export default ComponentTwo;