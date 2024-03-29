import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { DiReact } from "react-icons/di";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-[1000px] px-[20px]">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
        <div
          className={`${inter} mt-[100px] mb-[25px] h-[0px] border border-neutral-300`}
        />
        <p className="flex mb-[15rem] text-neutral-700 font-normal">
          Built with Typescript, Tailwind, and Next.js{" "}
          <DiReact className="w-[25px] h-[25px]" />
        </p>
      </div>
    </>
  );
}
