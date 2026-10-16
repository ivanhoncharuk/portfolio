import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero, { Marquee } from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grain relative min-h-screen">
      <Background />
      <Nav />

      <main id="main" className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
