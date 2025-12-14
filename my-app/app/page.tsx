"use client";
import Hero from "@/app/components/Hero";
import TechStack from "@/app/components/TechStack";
import Projects from "@/app/components/Projects";
import DanceGallery from "@/app/components/Dance";
import About from "@/app/components/Contact";
import Education from "@/app/components/Edu"
import Navbar from "@/app/components/Nav"

export default function Home() {
  return (
    <>
      <Navbar />
    <main>
      <Hero />
      <About/>
      <Education />
      <TechStack />
      <Projects />
      <DanceGallery />
    </main>
    </>
  );
}