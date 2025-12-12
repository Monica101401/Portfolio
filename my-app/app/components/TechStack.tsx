"use client";
import { motion } from "framer-motion";
import { Code2, Database, TestTube, Palette, GitBranch, Wrench } from "lucide-react";

export default function TechStack() {
  const techCategories = [
    {
      category: "Languages",
      icon: Code2,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      items: ["JavaScript", "SQL", "HTML5", "CSS3"]
    },
    {
      category: "Frontend",
      icon: Palette,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      items: ["React.js", "Tailwind", "Bootstrap"]
    },
    {
      category: "Databases",
      icon: Database,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950",
      items: ["MySQL", "MongoDB", "TypeORM"]
    },
    {
      category: "Testing",
      icon: TestTube,
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-950",
      items: ["Unit Testing", "Automated Testing"]
    },
    {
      category: "DevOps & CI/CD",
      icon: GitBranch,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950",
      items: ["Git", "GitHub", "Vercel", "GitHub Actions", "Agile"]
    },
    {
      category: "Tools",
      icon: Wrench,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950",
      items: ["Jira", "AI-Assisted Development"]
    }
  ];

  return (
    <section id="techstack" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
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
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Icon and Category */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${category.bgColor} p-3 rounded-xl`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Tech Items */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Technologies
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-2">
              20+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Projects
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Passionate
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-2">
              ∞
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Coffee Cups
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}