"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Master of Information Technology",
      institution: "Royal Melbourne Institute of Technology",
      location: "Melbourne, Australia",
      date: "Dec 2025",
      gpa: "3.5",
      color: "from-indigo-500 to-purple-500",
      dotColor: "bg-indigo-500"
    },
    {
      degree: "Bachelor's in Computer Science Engineering",
      institution: "Anna University",
      location: "Chennai, India",
      date: "Apr 2023",
      gpa: "8.72",
      distinction: "First Class with Distinction",
      color: "from-blue-500 to-cyan-500",
      dotColor: "bg-blue-500"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Education Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic roadmap in computer science and technology
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 hidden lg:block"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-8`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  } relative`}
                >
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      {/* Date Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${edu.color} text-white font-semibold text-sm mb-4`}>
                        <GraduationCap className="w-4 h-4" />
                        {edu.date}
                      </div>

                      {/* Degree */}
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-4">
                        {edu.institution}
                      </p>

                      {/* Details */}
                      <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-400 shadow-sm">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-400 shadow-sm">
                          <Award className="w-4 h-4" />
                          GPA: {edu.gpa}
                        </span>
                      </div>

                      {/* Distinction Badge */}
                      {edu.distinction && (
                        <div className={`mt-3 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-bold shadow-md">
                            ⭐ {edu.distinction}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className={`w-6 h-6 ${edu.dotColor} rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10`}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                      className={`w-full h-full ${edu.dotColor} rounded-full`}
                    ></motion.div>
                  </motion.div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>

          {/* Starting Point */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 hidden lg:block"
          >
            <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}