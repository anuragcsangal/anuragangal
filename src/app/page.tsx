import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skills";

export default function Home() {
  return (
    // <main className="w-[100vw] h-[100vh] ">
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
    // </main>
  );
}
