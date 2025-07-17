import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { Asterisk } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[400vh] bg-white">
      <Hero />
      <Skills />
      <div className="metal cursor-pointer gradient-cta hover:bg-right-bottom hover:brightness-150 duration-300 w-40 h-40 p-5 rounded-b-full  fixed top-0 right-10 z-[11]">
          <div className=" border border-dashed flex items-center justify-center  border-black w-full h-full rounded-full">
            <Asterisk className="h-1/2 w-1/2 text-black" />
          </div>
      </div>
    </div>
  );
}
 