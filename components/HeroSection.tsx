"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const brands = [
    { name: "Meta", logo: "https://cdn.simpleicons.org/meta/white" },
    { name: "Google", logo: "https://cdn.simpleicons.org/google/white" },
    { name: "LinkedIn", logo: "https://cdn.simpleicons.org/linkedin/white" },
    { name: "Slack", logo: "https://cdn.simpleicons.org/slack/white" },
  ];

  return (
    <div className="bg-[#44444E] flex items-center overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 items-center relative">
        {/* LEFT SIDE - Tucks behind photo */}
        <div className="relative z-10 order-1 md:order-1 md:-mr-24 lg:-mr-32 transition-all duration-500">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400"
          >
            I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2"
          >
            <span className="text-yellow-400">Ramjan Ali</span>
          </motion.h1>
          <p className="text-gray-300 mt-6 max-w-sm md:max-w-xs lg:max-w-md">
            A frontend developer building modern web applications with React,
            Next.js and TypeScript.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all">
              Hire Me
            </button>
          </div>
        </div>

        {/* CENTER SECTION - The "Sandwich" Layer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center order-3 md:order-2 mt-12 md:mt-0"
        >
          {/* 1. Circle background (Lowest layer in this group) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] bg-[#37353E] rounded-full z-0 shadow-inner" />

          {/* 2. Profile image (Highest layer, sits OVER text) */}
          <div className="relative z-20 w-72 md:w-105 md:min-w-80 lg:w-[500px]">
            <Image
              src="/profile.png"
              alt="Ramjan"
              width={700}
              height={700}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* 3. Brand bar (Topmost) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-full max-w-[280px] md:max-w-sm">
            <div className="bg-[#2A2930]/90 backdrop-blur-lg border border-white/10 rounded-2xl px-4 py-3 flex justify-around items-center gap-3 shadow-2xl">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex flex-col items-center gap-1 group"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="text-[10px] text-gray-400 group-hover:text-white transition-colors">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Tucks behind photo */}
        <div className="relative z-10 order-2 md:order-3 md:-ml-12 lg:-ml-24 transition-all duration-500">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400"
          >
            Services
          </motion.p>
          <p className="text-gray-300 mt-6 max-w-sm md:max-w-xs lg:max-w-md">
            I specialize in crafting high-performance user interfaces and
            interactive web experiences that drive results and engage users.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-yellow-400 transition-colors">
              Explore more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
