import ComponentOne from "@/components/ComponentOne";
import ComponentTwo from "@/components/ComponentTwo";
import ComponentThree from "@/components/ComponentThree";
import ComponentFour from "@/components/ComponentFour";
import ComponentFive from "@/components/ComponentFive";

export default function Home() {
  return (
    <div>
      <section id="home">
      <ComponentOne />
      </section>
      <section id="about">
      <ComponentTwo />
      </section>
      <section id="skills">
      <ComponentThree />
      </section>
      <section id="experience">
      <ComponentFour />
      </section>
      <section id="contact">
      <ComponentFive />
      </section>
    </div>
  );
}
