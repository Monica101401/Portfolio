"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useRef } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

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
            Master's student who fell in love with coding from the moment I started getting 
            hands-on. I've been learning and growing throughout my journey through teamwork 
            and collaboration, and I'm excited to dive into new and challenging environments 
            where I can continue to learn and contribute.
          </motion.p>

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

        {/* Right - Circular Video */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-lg mx-auto">
            {/* Video container - Perfect Circle */}
            <div className="relative rounded-full overflow-hidden shadow-2xl aspect-square border-8 border-white dark:border-gray-800 bg-white dark:bg-gray-900">
              <video
                ref={videoRef}
                src="/Video.mp4"
                playsInline
                controls={isPlaying}
                className="w-full h-full object-cover"
              />
              
              {/* Custom Play Button Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity duration-300 hover:bg-black/40"
                  onClick={handlePlayVideo}
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <svg 
                      className="w-10 h-10 text-indigo-600 ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}