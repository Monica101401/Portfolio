"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5 } from "react-icons/fa";

export default function TechStack() {
  const techs = [
    { name: "React.js", icon: <FaReact size={40} />, color: "text-sky-500" },
    { name: "TypeScript", icon: <FaHtml5 size={40} />, color: "text-blue-500" },
    { name: "Node.js", icon: <FaNodeJs size={40} />, color: "text-green-500" },
    { name: "SQL / MySQL", icon: <FaDatabase size={40} />, color: "text-yellow-500" },
  ];

  return (
    <section id="techstack" className="py-20 bg-gray-50 dark:bg-gray-900 text-center">
      <motion.h2
        className="text-3xl font-bold mb-12 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 p-6 rounded-xl w-40 hover:shadow-lg transition duration-300"
          >
            <div className={`${tech.color} mb-3`}>{tech.icon}</div>
            <p className="font-medium text-gray-900 dark:text-white">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}