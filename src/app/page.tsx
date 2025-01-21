import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

    {/* this component struggles on narrow resize */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experiences */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  );
}
