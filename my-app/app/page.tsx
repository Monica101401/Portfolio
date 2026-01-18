"use client";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Navbar from "@/app/components/Nav"
import Exp from "@/app/components/Exp"
import Beyond from "@/app/components/Beyond"
import Footer from "@/app/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
    <main>
      <Hero />
      <Projects />
      <Exp/>
      <Beyond/>
      <Footer/>
    </main>
    </>
  );
}