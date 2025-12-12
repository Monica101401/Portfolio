"use client";
import Hero from "@/app/components/Hero";
import TechStack from "@/app/components/TechStack";
import Projects from "@/app/components/Projects";
import DanceGallery from "@/app/components/Dance";
import Contact from "@/app/components/Contact";
import Education from "@/app/components/Edu"
import Navbar from "@/app/components/Nav"

export default function Home() {
  return (
    <>
      <Navbar />
    <main>
      <Hero />
      <TechStack />
      <Education />
      <Projects />
      <DanceGallery />
      <Contact />
    </main>
    </>
  );
}