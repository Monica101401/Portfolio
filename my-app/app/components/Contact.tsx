"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A journey from Chennai to Melbourne, blending technical expertise with cultural creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Currently pursuing a Master of Information Technology at RMIT University (GPA: 3.5), 
              I bring hands-on experience from internships at NLTVC Malaysia and Beta Builders, 
              where I&apos;ve developed scalable applications and improved system efficiency.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              With a Bachelor&apos;s in Computer Science Engineering from Anna University (First Class with Distinction), 
              I specialize in building intuitive user interfaces and robust backend systems using React, TypeScript, 
              Next.js, and modern web technologies.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Beyond code, I trained in Bharatanatyam for 9 years, teaching for 2 years—bringing discipline, 
              creativity, and leadership to everything I do. Fluent in Tamil and English, I thrive in 
              collaborative, multicultural environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <Code className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">Clean Code</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Writing maintainable, scalable code following best practices and modern standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
              <Palette className="w-10 h-10 text-purple-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">UX-Focused</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Creating intuitive, accessible interfaces that users love to interact with.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20">
              <Zap className="w-10 h-10 text-amber-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">Performance</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Optimizing applications for speed, efficiency, and seamless user experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}