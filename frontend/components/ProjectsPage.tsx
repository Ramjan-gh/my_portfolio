"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Github, ExternalLink, Code2, FolderRoot } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "NexFlow AI Dashboard",
      category: "Full-Stack / AI",
      desc: "A real-time analytics platform integrating OpenAI to predict user churn rates with 92% accuracy.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
      live: "#",
      github: "#",
      image: "bg-gradient-to-br from-blue-600 to-purple-700", // Replace with <img> in production
    },
    {
      title: "Quantum ERP System",
      category: "Enterprise Solution",
      desc: "Architected a modular ERP for manufacturing, handling inventory logic and automated invoicing.",
      tech: ["Java", "Spring Boot", "MySQL", "Docker"],
      live: "#",
      github: "#",
      image: "bg-gradient-to-br from-emerald-600 to-teal-700",
    },
    {
      title: "CryptoVault Mobile",
      category: "Mobile App",
      desc: "Secure cryptocurrency wallet with biometric authentication and real-time market tracking.",
      tech: ["React Native", "Firebase", "Node.js"],
      live: "#",
      github: "#",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
    },
  ];

  // Animation Variants
  const containerVariants: Variants = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#3d3c42] text-[#E4E4E4] selection:bg-yellow-400 selection:text-black">
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-6 pt-24 md:pt-40 pb-32">
        {/* --- HEADER --- */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow-400 font-mono text-sm tracking-widest uppercase mb-4 block">
              // Selected Works
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              PROVEN <br />
              <span className="text-gray-400">SOLUTIONS.</span>
            </h1>
          </motion.div>
        </header>

        {/* --- PROJECTS GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative bg-[#3b3a3f] rounded-2xl overflow-hidden border border-white/5 hover:border-yellow-400/30 transition-all duration-500"
            >
              {/* Project Image/Visual Placeholder */}
              <div
                className={`h-64 md:h-80 w-full ${project.image} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                {/* Floating Category Tag */}
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                  {project.desc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-mono px-3 py-1 bg-[#2e2e33] border border-white/5 rounded-md text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* --- VIEW ARCHIVE BOX --- */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col justify-center items-center p-12 border-2 border-dashed border-white/10 rounded-2xl hover:border-yellow-400/50 transition-colors group cursor-pointer"
          >
            <div className="p-4 bg-white/5 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <FolderRoot
                size={32}
                className="text-gray-500 group-hover:text-yellow-400"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">View Full Archive</h3>
            <p className="text-gray-500 text-sm text-center max-w-[200px]">
              Explore experiments, utility scripts, and legacy codebases.
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default ProjectsPage;
