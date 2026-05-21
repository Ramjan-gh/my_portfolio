"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, FolderRoot } from "lucide-react";

const projects = [
  {
    title: "Turf Slot Booking System",
    category: "Full-Stack Application",
    desc: "A full-stack application for booking and managing turf slots with AI-powered recommendations.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    live: "https://turf-booking-site-drab.vercel.app/",
    github: "https://github.com/Ramjan-gh/turf-booking-site",
    image: "/turf-slot-booking-system.png",
  },
  {
    title: "Admin Dashboard for Turf Management",
    category: "Admin Dashboard",
    desc: "An admin dashboard for managing turf bookings, user accounts, and analytics with role-based access control.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://admin-dashboard-113v.vercel.app/",
    github: "https://github.com/Ramjan-gh/admin_dashboard",
    image: "/admin-dashboard.png",
  },
  {
    title: "Legal-Solution",
    category: "Web Page",
    desc: "A web page for a legal solution company showcasing their services, team, and contact information with a modern design.",
    tech: ["React Native", "Firebase", "Node.js"],
    live: "https://ramjan-gh.github.io/Legal-Solution/",
    github: "https://github.com/Ramjan-gh/Legal-Solution",
    image: "/legal-solution.png",
  },
];

const ProjectsPage = () => {
  return (
    <div
      id="projects"
      className="bg-[#3d3c42] text-[#E4E4E4] selection:bg-yellow-400 selection:text-black"
    >
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-6 pt-24 md:pt-40 pb-32">
        {/* HEADER — same as SkillsPage */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-yellow-400 font-mono text-sm tracking-widest uppercase mb-2 block">
            // Selected Works
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            PROVEN <br />
            <span className="text-gray-400">SOLUTIONS.</span>
          </h1>
        </motion.div>

        {/* PROJECTS GRID — same animation as skill cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#3b3a3f] rounded-2xl overflow-hidden border border-white/5 hover:border-yellow-400/20 transition-all"
            >
              {/* Image */}
              <div className="h-64 md:h-80 w-full relative overflow-hidden bg-[#1a191e]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/5 transition-colors duration-500" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest z-10">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 flex-shrink-0 ml-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-3 py-1 bg-[#2e2e33] border border-white/5 rounded-md text-gray-300 group-hover:border-white/10 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* VIEW ARCHIVE BOX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: projects.length * 0.1 }}
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
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
