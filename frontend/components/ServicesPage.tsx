"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Layout,
  Database,
  Terminal,
  Palette,
  CodeXml,
  Smartphone,
  MoveRight,
} from "lucide-react";

const ServicesPage = () => {
  // Data for the NEW section (based on your image)
  const cardServices = [
    {
      title: "UI/UX Design",
      desc: "Create a beautiful and useful UI display for ease of use of the application for users.",
      icon: <Palette className="text-yellow-400" size={24} />,
    },
    {
      title: "Web Programming",
      desc: "Build a quality website with the best technology and optimization on search engines.",
      icon: <CodeXml className="text-yellow-400" size={24} />,
    },
    {
      title: "Mobile Development",
      desc: "Create an app from your own business for a more professional business performance.",
      icon: <Smartphone className="text-yellow-400" size={24} />,
    },
  ];

  const mySkills = [
    "React",
    "Next.js",
    "Supabase",
    "JavaScript",
    "Python",
    "Java",
    "Postman",
    "SQL",
  ];

  return (
    <div className="min-h-screen bg-[#313035] text-white py-20 md:pt-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* --- EXISTING TOP SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN: INTRO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Let's build your <br />{" "}
              <span className="text-gray-400">digital future.</span>
            </h1>
            <div className="space-y-8">
              {/* Simplified services list to keep focus on the bottom cards */}
              <p className="text-gray-400 leading-relaxed max-w-md">
                I combine frontend creativity with backend logic to build
                complete digital products that are scalable and user-centric.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: THE STACK */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-12 bg-white/5 rounded-3xl border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-6">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {mySkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#313035] border border-white/10 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="space-y-4 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 size={18} className="text-yellow-400" />
                <span>Full-Stack approach (Frontend + Backend)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 size={18} className="text-yellow-400" />
                <span>API testing and documentation (Postman)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- NEW SECTION (EXACTLY LIKE YOUR PHOTO) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#3b3a3f] p-10 rounded-2xl flex flex-col h-full shadow-2xl group border border-transparent hover:border-yellow-400/20 transition-all"
            >
              {/* Icon Container */}
              <div className="mb-6 bg-white/5 w-fit p-3 rounded-lg group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-10 flex-grow">
                {service.desc}
              </p>

              {/* "Show More" Link */}
              <button className="flex items-center gap-2 text-yellow-400 text-xs font-bold tracking-widest uppercase hover:gap-4 transition-all">
                Show More <MoveRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-5 bg-yellow-400 text-black font-extrabold rounded-2xl text-xl shadow-xl shadow-yellow-400/10"
        >
          Start a Collaboration
        </motion.button>
      </div>
    </div>
  );
};

export default ServicesPage;
