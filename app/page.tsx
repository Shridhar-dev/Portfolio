import About from "@/components/About";
import Achievements from "@/components/Achievements";
import CSSArtGallery from "@/components/CSSArtGallery";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Kairo from "@/components/Kairo";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Skill2 from "@/components/Skills2";
import Testimonials from "@/components/Testimonials";
import { Asterisk } from "lucide-react";

export default function Home() {
  return (
    <div className=" bg-white">
      <Hero />
      <About />
      <Testimonials />
      <Achievements />
      <Experience />
      <Projects />
      <Footer />
      <div className="metal cursor-pointer gradient-cta hover:bg-right-bottom hover:brightness-150 duration-300 w-40 h-40 p-5 rounded-b-full  fixed top-0 right-10 z-[11]">
          <div className=" border border-dashed flex items-center justify-center  border-black w-full h-full rounded-full">
            <Asterisk className="h-1/2 w-1/2 text-black" />
          </div>
      </div>
    </div>
  );
}
 