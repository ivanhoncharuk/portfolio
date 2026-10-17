import { LazyMotion } from "motion/react";

import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero, { Marquee } from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const loadFeatures = () => import("./motion-features").then((mod) => mod.default);

export default function App() {
  return (
    <LazyMotion features={loadFeatures} strict>
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
    </LazyMotion>
  );
}
