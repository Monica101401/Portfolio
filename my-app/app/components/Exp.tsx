"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    company: "Beta Builders",
    role: "Web Developer",
    period: "July 2025 - Present",
    link: null
  },
  {
    company: "NLTVC, Malaysia",
    role: "Web Developer Intern",
    period: "Feb 2023 - Apr 2023",
    link: null
  },
  {
    company: "Echeveria Education Private Limited",
    role: "Web Developer Intern",
    period: "2 months",
    link: null
  }
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white pb-2">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 border-b border-gray-200 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-500 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {exp.company}
                  </h3>
                  {exp.link && (
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                  )}
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                  {exp.period}
                </p>
              </div>
              
              <div className="text-left md:text-right">
                <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300">
                  {exp.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}