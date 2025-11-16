"use client";
import Hero from "@/app/components/Hero";
import TechStack from "@/app/components/TechStack";
import Projects from "@/app/components/Projects";
import DanceGallery from "@/app/components/Dance";
import Contact from "@/app/components/Contact";


export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Projects />
      <DanceGallery />
      <Contact />
    </main>
  );
}