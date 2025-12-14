"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techStack = [
    { name: "JavaScript", category: "Language", level: 80, color: "#f7df1e" },
    { name: "HTML5", category: "Language", level: 95, color: "#e34f26" },
    { name: "CSS3", category: "Language", level: 90, color: "#1572b6" },
    { name: "React", category: "Frontend", level: 75, color: "#61dafb" },
    { name: "Node.js", category: "Backend", level: 60, color: "#339933" },
    { name: "MySQL", category: "Database", level: 85, color: "#4479a1" },
    { name: "MongoDB", category: "Database", level: 60, color: "#47a248" },
    { name: "Git", category: "DevOps", level: 88, color: "#f05032" },
    { name: "GraphQL", category: "API", level: 60, color: "#e10098" },
    { name: "REST API", category: "API", level: 60, color: "#009688" },
  ];

  const categories = Array.from(new Set(techStack.map(t => t.category)));

  return (
    <section id="techstack" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hover over each technology to see my proficiency level
          </p>
        </motion.div>

        {/* Interactive Tech Circles */}
        <div className="relative min-h-[600px] flex items-center justify-center mb-16">
          {/* Central Hub */}
          <motion.div
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-white font-bold text-lg">Full Stack</div>
              <div className="text-white/80 text-sm">Developer</div>
            </div>
          </motion.div>

          {/* Orbiting Technologies */}
          {techStack.map((tech, index) => {
            const angle = (index / techStack.length) * 2 * Math.PI;
            const radius = 250;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={tech.name}
                className="absolute cursor-pointer"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200 
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.3, zIndex: 100 }}
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
              >
                {/* Tech Circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xl relative group"
                  style={{
                    background: `linear-gradient(135deg, ${tech.color}, ${tech.color}dd)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
                    style={{ background: tech.color }}
                  ></div>
                  
                  <span className="relative z-10 text-center px-2 leading-tight" style={{
                    color: tech.color === '#000000' ? '#ffffff' : undefined,
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }}>
                    {tech.name}
                  </span>
                </div>

                {/* Proficiency Bar (appears on hover) */}
                {hoveredTech === tech.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-2xl whitespace-nowrap border-2 border-gray-200 dark:border-gray-700"
                  >
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{tech.category}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: tech.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 0.5 }}
                        ></motion.div>
                      </div>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{tech.level}%</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <div
              key={category}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {category}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
              10
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">
              Technologies
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
              10+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">
              Projects Built
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-2">
              85%
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">
              Avg Proficiency
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">
              Committed
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}