import Cursor      from "@/components/Cursor";
import Navbar      from "@/components/Navbar";
import Hero        from "@/components/sections/Hero";
import Ticker      from "@/components/sections/Ticker";
import About       from "@/components/sections/About";
import Experience  from "@/components/sections/Experience";
import Projects    from "@/components/sections/Projects";
import Skills      from "@/components/sections/Skills";
import Contact     from "@/components/sections/Contact";
import Footer      from "@/components/sections/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Services    from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <div id="noise" aria-hidden />
      <Cursor />
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
