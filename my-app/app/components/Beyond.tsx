"use client";
import { motion } from "framer-motion";

export default function BeyondCode() {
  return (
    <section id="beyond-code" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Beyond Code
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
            
            {/* Main Content */}
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                I <span className="font-bold text-indigo-600 dark:text-indigo-400">make errors in code</span>, 
                debug them, and <span className="font-bold text-purple-600 dark:text-purple-400">learn</span>. 
                That's exactly how I live my life—embracing <span className="font-bold text-pink-600 dark:text-pink-400">flaws</span>
                {" "}and <span className="font-bold text-orange-600 dark:text-orange-400">correcting</span> them along the way.
              </p>

              <p>
                Beyond screens and syntax, I love <span className="font-bold text-indigo-600 dark:text-indigo-400">chatting with new people</span>
                {" "}and discovering how they see the world. Every <span className="font-bold text-purple-600 dark:text-purple-400">conversation</span> is 
                a chance to <span className="font-bold text-pink-600 dark:text-pink-400">learn something new</span> from their unique 
                <span className="font-bold text-orange-600 dark:text-orange-400"> perspective</span>.
              </p>

              <p>
                You'll find me at <span className="font-bold text-green-600 dark:text-green-400">Woolworths</span>, where I'm not just working—I'm 
                <span className="font-bold text-indigo-600 dark:text-indigo-400"> connecting with people</span>, 
                sharpening my <span className="font-bold text-purple-600 dark:text-purple-400">communication skills</span>, and 
                understanding diverse <span className="font-bold text-pink-600 dark:text-pink-400">perspectives</span>, 
                all <span className="font-bold text-orange-600 dark:text-orange-400">with purpose</span>.
              </p>
            </div>

            {/* Decorative Quote */}
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-sm md:text-base italic text-gray-500 dark:text-gray-400 font-medium">
                Debugging code and life, one conversation at a time
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}