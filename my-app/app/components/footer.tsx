"use client";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/monica-radhakrishnanr",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Monica101401",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:monicaradhakrishnanr@gmail.com",
      color: "hover:text-indigo-600 dark:hover:text-indigo-400"
    }
  ];

  return (
    <footer className="py-12 px-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Big Eyes Emoji */}
          <div className="text-6xl">
            👀
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className={`p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Monica. Built with passion and lots of debugging.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}