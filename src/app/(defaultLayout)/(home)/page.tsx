import About from "@/components/HomePage/About";
import Contact from "@/components/HomePage/Contact";
import Education from "@/components/HomePage/Education";
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
      <Skills></Skills>
      <Projects></Projects>
      <Education />
      <Contact></Contact>
    </div>
  );
};

export default page;
