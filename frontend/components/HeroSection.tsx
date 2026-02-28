"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Layout,
  Smartphone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const HERO_DATA = {
  name: "Ramjan Ali",
  greeting: "I'm",
  subtitle:
    "A frontend developer building modern web applications with React, Next.js and TypeScript.",
  services_description:
    "I specialize in crafting high-performance user interfaces and robust web experiences that prioritize speed and accessibility.",
  socials: [
    { platform: "Facebook", url: "#", icon: Facebook },
    { platform: "Twitter", url: "#", icon: Twitter },
    { platform: "Instagram", url: "#", icon: Instagram },
    { platform: "Linkedin", url: "#", icon: Linkedin },
  ],
  expertise: [
    {
      id: 1,
      name: "Web Dev",
      icon: <Code2 size={20} className="text-blue-400" />,
    },
    {
      id: 2,
      name: "Solution",
      icon: <Globe size={20} className="text-white" />,
    },
    {
      id: 3,
      name: "Mobile Apps",
      icon: <Smartphone size={20} className="text-green-400" />,
    },
    {
      id: 4,
      name: "UI / UX",
      icon: <Layout size={20} className="text-yellow-400" />,
    },
  ],
};

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-[#1A1A1E] to-[#44444E] flex flex-col items-center relative overflow-visible pt-30 md:min-h-screen md:justify-center">
      <section className="max-w-7xl px-6 md:px-12 lg:px-6 md:pt-20 pb-20 flex flex-col md:grid grid-cols-1 md:grid-cols-3 items-center relative w-full md:gap-0 ">
        {/* LEFT SIDE */}
        <div className="relative z-10 order-1 md:order-1 md:-mt-10 lg:mt-0 md:mb-20 md:-mr-24 lg:-mr-32">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-4xl"
          >
            {HERO_DATA.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-2 text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            <span className="text-yellow-400">{HERO_DATA.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-300 max-w-sm"
          >
            {HERO_DATA.subtitle}
          </motion.p>

          <div className="mt-8">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20">
              Hire Me
            </button>
          </div>
        </div>

        {/* CENTER — Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center order-2 md:order-2 mt-12 md:mt-0 pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 lg:w-105 lg:h-105 bg-[#37353E] rounded-full z-0 shadow-inner" />
          <div className="relative z-20 w-88 md:w-105 lg:w-125">
            <Image
              src="/profile3.png"
              alt={HERO_DATA.name}
              width={700}
              height={700}
              className="object-contain drop-shadow-2xl pl-6 md:pl-0"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE — Services */}
        <div className="relative z-10 order-4 md:order-3 md:-ml-10 lg:-ml-8 md:-mt-36 mt-24">
          <p className="text-gray-400 text-xl">Services</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-gray-300"
          >
            {HERO_DATA.services_description}
          </motion.p>

          <div className="mt-8">
            <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all">
              Explore more
            </button>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            {HERO_DATA.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="group p-2 bg-white/5 rounded-full border border-white/10"
              >
                <social.icon
                  size={20}
                  className="text-yellow-400 group-hover:text-yellow-500 transition-colors"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDING BAR */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-100 md:relative md:bottom-35 lg:bottom-20 z-50 w-105 md:w-165 lg:w-full max-w-4xl px-6 md:px-0"
      >
        <div className="backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-full px-6 py-5 md:px-10 flex justify-around items-center md:gap-4 shadow-lg">
          {HERO_DATA.expertise.map((item) => (
            <div key={item.id} className="flex items-center gap-3 group">
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
                {item.icon}
              </div>
              <div className="flex-col text-left hidden md:flex">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
                  Expertise
                </span>
                <span className="text-xs md:text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
