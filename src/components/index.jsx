import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import Certification from "./Certification";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="Hero">
        <Hero />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Education">
        <Education />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <section id="Project">
        <Project />
      </section>
      <section id="Certification">
        <Certification />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
