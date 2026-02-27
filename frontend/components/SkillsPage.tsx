"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Infinity,
  Cpu,
  MessageSquare,
  Layers,
  Terminal,
} from "lucide-react";

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layers className="text-yellow-400" size={20} />,
      skills: ["React.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Server className="text-yellow-400" size={20} />,
      skills: ["Node.js", "Express.js", "Django", "FastAPI"],
    },
    {
      title: "Database",
      icon: <Database className="text-yellow-400" size={20} />,
      skills: ["MongoDB", "SQL", "PostgreSQL"],
    },
    {
      title: "DevOps",
      icon: <Infinity className="text-yellow-400" size={20} />,
      skills: ["Git", "GitHub", "Firebase"],
    },
    {
      title: "Languages",
      icon: <Terminal className="text-yellow-400" size={20} />,
      skills: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    {
      title: "Technologies",
      icon: <Cpu className="text-yellow-400" size={20} />,
      skills: ["Redux", "JWT", "Firebase Auth"],
    },
  ];

  const softSkills = [
    "Project leadership",
    "Technical communication",
    "Collaborative problem-solving",
    "Agile methodologies",
  ];

  return (
    <div className="min-h-screen bg-[#2e2e33] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-yellow-400 font-mono text-sm tracking-widest uppercase mb-2">
            Expertise
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold">
            Technical <span className="text-gray-400">Proficiency.</span>
          </h1>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className=" p-6 rounded-2xl border border-white/5 hover:border-yellow-400/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-yellow-400/10 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[#313035] text-gray-300 text-xs rounded-lg border border-white/5 group-hover:border-white/10 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills & Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 bg-gradient-to-br from-[#3b3a3f] to-[#313035] p-8 rounded-2xl border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-yellow-400" size={22} />
              <h3 className="text-xl font-bold">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <span className="text-sm md:text-base">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 bg-yellow-400 p-8 rounded-2xl flex flex-col justify-center"
          >
            <h3 className="text-black text-2xl font-bold mb-2">Work with me</h3>
            <p className="text-black/70 text-sm mb-6">
              Combining deep technical knowledge with a focus on communication
              and leadership.
            </p>
            <button className="bg-black text-white py-3 px-6 rounded-xl font-bold text-sm hover:bg-black/80 transition-all">
              Download CV
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
