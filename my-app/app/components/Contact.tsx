"use client";

import { motion } from "framer-motion";
import { Code, Database, Zap, Rocket, Layout } from "lucide-react";

export default function WhatIDo() {
  const skills = [
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Building responsive, accessible interfaces with React, Next.js, and TypeScript that deliver seamless user experiences.",
      color: "text-blue-500"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Designing robust APIs and database architectures using Node.js, SQL, and TypeORM for scalable applications.",
      color: "text-purple-500"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhancing application speed and efficiency, achieving measurable improvements in load times and user engagement.",
      color: "text-green-500"
    },
    {
      icon: Code,
      title: "Full-Stack Integration",
      description: "Seamlessly connecting frontend and backend systems for end-to-end solutions that work flawlessly.",
      color: "text-indigo-500"
    },
    {
      icon: Rocket,
      title: "Project Leadership",
      description: "Leading development initiatives with Agile methodology, clear communication, and collaborative problem-solving.",
      color: "text-rose-500"
    }
  ];

  return (
    <section id="what-i-do" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">What I Do</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Transforming ideas into elegant solutions through full-stack development
          </p>
        </motion.div>

        {/* Skills List */}
        <div className="space-y-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start group"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-7 h-7 ${skill.color}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-2xl">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-2xl">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">20+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-2xl">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Committed</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}