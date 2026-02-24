"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
];

export default function SkillsSection() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
