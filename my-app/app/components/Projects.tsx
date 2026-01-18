"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle, Zap, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Theory of Change Visualisation",
    tagline: "Healthcare Data Visualisation Platform",
    tech: ["React", "TypeScript", "CSS", "Node.js", "Supabase", "Vercel"],
    description:
      "Interactive data visualisation platform designed for health practitioners at Quality for Outcomes (RMIT) to map and analyze their program logic. Enables users to visualize relationships between objectives, goals, and activities through customizable, dynamic charts with premium export capabilities.",
    highlights: [
      "Built customizable card system allowing practitioners to add, edit, and organize program elements",
      "Implemented color customization feature for visual categorization and clarity",
      "Developed premium subscription tier with export functionality (PDF/PNG) and dedicated support",
      "Integrated REST APIs with Supabase for real-time data persistence and secure user management"
    ],
    impact: {
      icon: <Users className="w-4 h-4" />,
      text: "Empowering healthcare practitioners with exportable visual insights"
    },
    images: ["/projects/toc-1.png", "/projects/toc2.png", "/projects/toc3.png"],
    linkLive: "https://toc-userfrontend.vercel.app",
    linkCode: "https://github.com/Monica101401/theory-of-change",
    status: "Completed",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "TeachTeam - Tutor Hiring System",
    tagline: "Full-Stack Management Platform",
    tech: ["React", "TypeScript", "Node.js", "Express", "MySQL", "TypeORM", "GraphQL"],
    description: 
      "A comprehensive dual-platform tutor recruitment system where aspiring tutors submit applications through a user-facing website, while lecturers review, evaluate, and rank candidates through a dedicated admin dashboard. The system automatically selects tutors based on the highest rankings, streamlining the entire hiring workflow.",
    highlights: [
      "Built separate user and admin interfaces for tutors and lecturers",
      "Implemented ranking system with real-time application tracking",
      "Developed GraphQL API for efficient data queries and mutations",
      "Created automated selection process based on lecturer rankings"
    ],
    impact: {
      icon: <Zap className="w-4 h-4" />,
      text: "Streamlined hiring workflow"
    },
    images: ["/projects/tt-2.png" , "/projects/tt-1.png", "/projects/tt.png"],
    linkCode: "https://github.com/Monica101401/teachteam",
    status: "Completed",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "Sivam Sarees",
    tagline: "AI-Powered Women's Fashion E-Commerce",
    tech: ["TypeScript", "MySQL", "TypeORM", "REST API", "React", "AI"],
    description:
      "An innovative e-commerce platform exclusively for women's clothing, featuring an AI-powered shopping assistant that helps customers discover the perfect outfits for their needs. From traditional sarees to modern apparel, the platform combines seamless shopping experience with intelligent recommendations to make every day comfortable and stylish.",
    highlights: [
      "Developing AI assistant for personalized clothing recommendations",
      "Building comprehensive catalog for all types of women's apparel",
      "Implementing intuitive shopping flow with secure payment integration",
      "Creating smart filtering and search to help customers find perfect fits"
    ],
    impact: {
      icon: <TrendingUp className="w-4 h-4" />,
      text: "Modernizing saree shopping"
    },
    images: ["/projects/ss.png"],
    linkCode: "https://github.com/Monica101401/sivam-sarees",
    status: "In Progress",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Heartfull Website",
    tagline: "High-Performance Landing Page",
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "SEO"],
   description:
      "A modern dating platform breaking traditional barriers by enabling anyone to make the first move, not just women. Unlike conventional apps where users quickly migrate to WhatsApp, Heartfull keeps conversations on-platform with an engaging chat experience that encourages meaningful connections without external messaging apps.",
    highlights: [
      "Designed gender-neutral approach where anyone can initiate connections",
      "Built engaging in-app chat system to retain user conversations",
      "Achieved 20% improvement in load speed for smooth user experience",
      "Enhanced social media visibility with Open Graph tags and SEO optimization"
    ],
    impact: {
      icon: <CheckCircle className="w-4 h-4" />,
      text: "20% faster load times"
    },
    images: ["/projects/bb.png", "/projects/heart1.png" ],
    linkLive: "https://heartfull.online/",
    linkCode: "https://github.com/Monica101401/beta-builders",
    status: "Completed",
    gradient: "from-orange-500 to-amber-500"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white pb-2">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development, database management, and modern web technologies
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                i % 2 === 0 ? '' : 'lg:grid-flow-dense'
              }`}>
                
                {/* Image Side */}
                <div className={`${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    {/* Status Badge on Image */}
                    {proj.status === "In Progress" && (
                      <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-bold shadow-lg">
                        🚧 In Progress
                      </div>
                    )}
                    
                    {/* Multiple Images Stacked Layout */}
                    {proj.images.length > 1 ? (
                      <div className="relative h-[400px] lg:h-[500px]">
                        {proj.images.map((img, imgIdx) => (
                          <motion.div
                            key={imgIdx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: imgIdx * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`absolute shadow-2xl group-hover:shadow-3xl transition-all duration-500 ${
                              imgIdx === 0 ? 'w-[75%] h-[80%] top-0 left-[5%] z-10' :
                              imgIdx === 1 ? 'w-[65%] h-[70%] bottom-0 right-[2%] z-[5]' :
                              'w-[55%] h-[60%] top-[12%] right-[8%] z-[3]'
                            }`}
                            style={{
                              transform: imgIdx === 0 ? 'rotate(-3deg)' : 
                                        imgIdx === 1 ? 'rotate(4deg)' : 
                                        'rotate(-2deg)'
                            }}
                          >
                            {/* Image */}
                            <div className="relative w-full h-full">
                              <Image
                                src={img}
                                alt={`${proj.title} - ${imgIdx + 1}`}
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      // Single Image Layout
                      <div className="relative shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                        <div className="relative aspect-video">
                          <Image
                            src={proj.images[0]}
                            alt={proj.title}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-4">
                    {/* Title */}
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium">
                        {proj.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {proj.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${proj.gradient} mt-2 flex-shrink-0`}></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                      {proj.impact.icon}
                      <span>{proj.impact.text}</span>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      {proj.linkLive && (
                        <a
                          href={proj.linkLive}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${proj.gradient} hover:opacity-90 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {proj.linkCode && (
                        <a
                          href={proj.linkCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-600 dark:hover:border-indigo-400 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full font-semibold transition-all hover:scale-105"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>

              {/* Divider (except for last project) */}
              {i < projects.length - 1 && (
                <div className="mt-20 border-t border-gray-200 dark:border-gray-700"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}