import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import ScrollProgress from "./components/ScrollProgress";
import SelectedWork from "./components/SelectedWork";
import Skills from "./components/Skills";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <Navbar />
        <ScrollProgress/>
        <main>
          <Hero />
          <SelectedWork />
          <Experience />
          <About />
          <Skills />
          <Process />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
