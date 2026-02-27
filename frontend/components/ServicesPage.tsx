"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  CodeXml,
  MoveRight,
  Rocket,
  LayoutDashboard,
  Webhook,
} from "lucide-react";

const ServicesPage = () => {
  const cardServices = [
    {
      title: "Custom Web Apps",
      desc: "Full-stack web apps with React/Next.js, Node.js, and modern databases. Scalable and production-ready.",
      icon: <CodeXml className="text-yellow-400" size={22} />,
    },
    {
      title: "MVP Development",
      desc: "Rapid prototyping and MVP builds for startups. Go from idea to launched product fast.",
      icon: <Rocket className="text-yellow-400" size={22} />,
    },
    {
      title: "Admin Panels",
      desc: "Data-rich internal tools and analytics dashboards with real-time features and intuitive interfaces.",
      icon: <LayoutDashboard className="text-yellow-400" size={22} />,
    },
    {
      title: "API & Integration",
      desc: "RESTful APIs and third-party integrations (payment, CRM, AI) built to scale robustly.",
      icon: <Webhook className="text-yellow-400" size={22} />,
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
    <div className=" bg-[#3d3c42] text-white pt-35 md:pt-50 py-16 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-6 flex flex-col gap-16 ">
        {/* --- TOP SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Let's build your <br />
              <span className="text-gray-400">digital future.</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
              I combine frontend creativity with backend logic to build complete
              digital products.
            </p>
          </motion.div>
        </div>

        {/* --- COMPACT SERVICES GRID --- */}
        {/* Changed to md:grid-cols-3 and lg:grid-cols-4 for a tighter look */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className=" p-6 rounded-xl flex flex-col h-full border border-white/5 hover:border-yellow-400/30 transition-all group"
            >
              <div className="mb-4 bg-white/5 w-fit p-2.5 rounded-lg group-hover:bg-yellow-400/10 transition-colors">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>

              <button className="flex items-center gap-2 text-yellow-400 text-[10px] font-bold tracking-widest uppercase mt-auto">
                Learn More <MoveRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full py-4 bg-yellow-400 text-black font-bold rounded-xl text-lg shadow-lg hover:bg-yellow-300 transition-colors"
        >
          Start a Collaboration
        </motion.button>
      </div>
    </div>
  );
};

export default ServicesPage;
