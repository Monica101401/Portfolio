"use client";
import { motion } from "framer-motion";

const photos = [
  "/dance1.jpg",
  "/dance2.jpg",
  "/dance3.jpg",
  "/dance4.jpg",
  "/dance5.jpg",
];

export default function DanceGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {photos.map((src, i) => (
        <motion.div
          key={i}
          className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={src}
            alt={`Dance ${i + 1}`}
            className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
}