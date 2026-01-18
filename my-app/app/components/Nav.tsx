"use client";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Me", href: "#hero" },
{ name: "My Work", href: "#projects" },
{ name: "Beyond Code", href: "#beyond-code" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  
  // Handle homepage link (scroll to top)
  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    return;
  }
  
  // Handle section links
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  }
};

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => handleNavClick(e, "#")}
          >
            MR
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group text-lg"
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* View CV Button - Desktop */}
          <motion.a
  href="/Monica_Resume_Developer.pdf"
  download="Monica_Resume_Developer.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-semibold shadow-lg transition-all"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Download className="w-4 h-4" />
  View CV
</motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-3">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors text-lg"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* View CV Button - Mobile */}
            <motion.a
              href="/Monica_Resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Download className="w-4 h-4" />
              View CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}