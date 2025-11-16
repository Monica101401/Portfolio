"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Theory of Change – RMIT",
    tech: ["React", "TypeScript", "CSS", "Node.js", "Supabase"],
    description:
      "Developed a data-visualisation web app integrating REST APIs and Supabase for secure data handling. Deployed on Vercel with CI/CD.",
    linkLive: "https://your-vercel-link.com",
    linkCode: "https://github.com/your-username/theory-of-change",
    status: "Completed",
  },
  {
    title: "Sivam Sarees",
    tech: ["TypeScript", "MySQL", "TypeORM", "REST API"],
    description:
      "Designing a full-stack clothing order system with TypeORM backend and MySQL integration, focusing on UX and transaction security.",
    linkLive: "#",
    linkCode: "https://github.com/your-username/sivam-sarees",
    status: "In Progress",
  },
  {
    title: "Beta Builders Website",
    tech: ["HTML5", "Tailwind CSS"],
    description:
      "Built and deployed a responsive static website improving load speed by 20% and optimizing SEO for social media previews.",
    linkLive: "https://your-live-link.com",
    linkCode: "https://github.com/your-username/beta-builders",
    status: "Completed",
  },
  {
    title: "Certificate Expiry System – NLTVC",
    tech: ["JavaScript", "MySQL", "Node.js"],
    description:
      "Created a notification system managing 150+ student records, improving certificate renewal rates by 90%.",
    linkLive: "#",
    linkCode: "https://github.com/your-username/nltvc-cert-system",
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing full-stack development, database management, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="group relative flex flex-col justify-between p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  proj.status === "In Progress" 
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                }`}>
                  {proj.status}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {proj.title}
                </h3>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={proj.linkLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={proj.linkCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-indigo-600 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                >
                  <Github size={18} />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}