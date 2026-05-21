"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const specs = [
    { label: "Core Stack", value: "Next.js / Java / Python" },
    { label: "Data Architecture", value: "PostgreSQL / Supabase / MySQL" },
    { label: "Methodology", value: "Clean Code / Modular Design" },
    { label: "Focus", value: "Scalable Full-Stack Solutions" },
  ];

  return (
    <div
      id="about"
      className=" bg-[#2e2e33] text-[#E4E4E4] selection:bg-yellow-400 selection:text-black"
    >
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-6 pt-24 md:pt-40">
        {/* HEADER SECTION: LARGE TYPE */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow-400 font-mono text-sm md:text-sm tracking-widest uppercase mb-4 block">
              // Professional Profile 2026
            </span>
            <h1 className="text-3xl md:text-5xl  font-bold mb-12">
              ENGINEERING <br />
              <span className="text-yellow-400 ">DIGITAL REALITIES.</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                Biography
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                I am a Full-Stack Engineer who specializes in bridging the gap
                between complex backend logic and intuitive frontend
                experiences. My approach is rooted in{" "}
                <span className="text-white">mathematical precision</span> and
                <span className="text-white">architectural integrity</span>.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT SPLIT: THE MINDSET */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end mb-40">
          <div className="space-y-12">
            <h3 className="text-3xl font-bold tracking-tight">
              Systematic Growth
            </h3>
            <div className="space-y-8">
              <p className="text-gray-400 leading-relaxed">
                Evolution is constant. I transitioned from mastering the syntax
                of Java and Python to architecting distributed systems. My goal
                is to build software that isn't just functional, but resilient.
              </p>
              <div className="inline-block border-b-2 border-yellow-400 pb-1 text-sm font-bold tracking-widest uppercase cursor-pointer hover:text-yellow-400 transition-colors">
                Curriculum Vitae
              </div>
            </div>
          </div>

          <div className="bg-[#252529] rounded-lg p-6 font-mono text-sm shadow-2xl border border-white/5">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
            </div>
            <div className="space-y-2">
              <p className="text-gray-500"># Current Environment</p>
              <p>
                <span className="text-yellow-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = &#123;
              </p>
              <p className="pl-4">
                name: <span className="text-green-400">'Your Name'</span>,
              </p>
              <p className="pl-4">
                status:{" "}
                <span className="text-green-400">'Ready for Impact'</span>,
              </p>
              <p className="pl-4 text-gray-400">
                stack: ['React', 'Next.js', 'Spring', 'FastAPI'],
              </p>
              <p className="pl-4 text-gray-400">
                database: ['PostgreSQL', 'Redis']
              </p>
              <p>&#125;;</p>
              <p className="animate-pulse">_</p>
            </div>
          </div>
        </section>

        {/* OVERLAPPING SPECIFICATIONS BOXES */}
        <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-[-80px]">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#44444E] p-8 border border-white/10 shadow-lg rounded-4xl hover:border-yellow-400/50 transition-all group"
            >
              <p className="text-[10px] font-mono text-yellow-400 uppercase tracking-[0.2em] mb-4 group-hover:translate-x-1 transition-transform">
                {spec.label}
              </p>
              <p className="text-lg font-medium text-white">{spec.value}</p>
            </motion.div>
          ))}
        </section>
      </main>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px #3b3a3f;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
