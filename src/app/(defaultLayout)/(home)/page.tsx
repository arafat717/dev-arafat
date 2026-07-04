import About from "@/components/HomePage/About";
import Contact from "@/components/HomePage/Contact";
import Experience from "@/components/HomePage/Experience";
import Hero from "@/components/HomePage/Hero";
import Projects from "@/components/HomePage/Projects";
import Skills from "@/components/HomePage/Skills";

const page = () => {
  return (
    <div className="">
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default page;
