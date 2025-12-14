"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left - Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg mb-2">
              Hello, I'm
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Monica Radhakrishnan
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light">
              Developer 
            </h2>
          </motion.div>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Building the web, one elegant solution at a time. Master's student at RMIT 
            with hands-on experience creating applications that perform 90% better and 
            serve real users. Nine years of Bharatanatyam taught me that excellence is in 
            the details—whether in code or choreography.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/extracurricular"
              className="px-8 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-full font-semibold transition-all hover:scale-105"
            >
              Beyond Code 🎭
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://github.com/Monica101401"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-full transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/monica-radhakrishnanr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-full transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:monicaradhakrishnanr@gmail.com"
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-full transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-lg mx-auto">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-3xl transform rotate-6"></div>
            
            {/* Image container */}
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/your-photo.jpg"
                alt="Monica"
                className="w-full h-auto object-cover"
              />
              {/* If image doesn't exist, show placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900">
                <div className="text-center p-8">
                  <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Photo
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Add: public/your-photo.jpg
                  </p>
                </div>
              </div>
            </div>

            {/* Floating animation blobs */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}