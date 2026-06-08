import HomePage from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <section id="home">
      <HomePage />
      </section>
      <section id="about">
      <About />
      </section>
      <section id="skills">
      <Skills />
      </section>
      <section id="experience">
      <Experience />
      </section>
      <section id="contact">
      <Contact />
      </section>
    </div>
  );
}
