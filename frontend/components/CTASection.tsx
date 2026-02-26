"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 text-center">
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          href="/projects"
          className="bg-purple-600 px-8 py-4 rounded-xl text-white font-semibold shadow-lg"
        >
          View My Projects →
        </Link>
      </motion.div>
    </section>
  );
}
