import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { fetchAllData } from "../../utils/utils";

export default async function Home() {
  const { pageInfo, experiences, skills, socials, projects } = await fetchAllData();

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

    {/* this component struggles on narrow resize flex-shrink-0 */}
      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experiences />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
};