"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.img
        src="/your-photo.jpg"
        alt="Your Photo"
        className="w-40 h-40 rounded-full mb-6 object-cover"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-4xl font-bold mb-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hi, I&apos;m Monica
      </motion.h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Developer • Dancer • Storyteller
      </p>
      <a>
        
        href="#projects"
        className="border px-6 py-2 rounded-full hover:bg-gray-900 hover:text-white transition"
      
        View Projects
      </a>
    </section>
  );
}