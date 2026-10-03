import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import WorkspaceBar from "./components/Navbar/WorkspaceBar";
import Process from "./components/Process";
import ScrollProgress from "./components/ScrollProgress";
import SelectedWork from "./components/SelectedWork";
import Skills from "./components/Skills";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <header className="fixed left-0 top-0 z-50 w-full">
          <WorkspaceBar />
          <Navbar />
        </header>

        <ScrollProgress />
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
