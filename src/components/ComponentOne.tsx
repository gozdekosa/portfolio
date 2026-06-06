"use client";

import Image from "next/image";
import { useEffect } from "react";

const ComponentOne = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/typed.js@2.0.12";
    script.async = true;

    script.onload = () => {

      new window.Typed(".typed", {
        strings: ["I'm Gözde Kösa", "I'm a Web Developer."],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="z-10 text-white">
        <div className="text-center p-4 space-y-6">
          <h1 className="text-3xl font-bold">Welcome</h1>

          <h2 className="text-6xl font-bold">
            <span className="typed"></span>
          </h2>

          <a
            href="/cv.pdf"
            download
            className="inline-block bg-transparent border-2 border-purple-400 text-lg font-bold text-purple-400 px-5 py-3 mt-6 rounded-full hover:bg-fuchsia-500 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Download CV
          </a>
        </div>
      </div>

      <Image
        src="/images/bg.webp"
        alt="Background"
        fill
        className="object-cover brightness-50 grayscale"
      />
    </div>
  );
};

export default ComponentOne;