"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Send,
} from "lucide-react";

const ContactPage = () => {
  // Animation Variants
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/ramjan-ali-581b7b341",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/Ramjan-gh",
      color: "hover:text-white",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      url: "https://x.com/Ramjan227",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <div
      id="contact"
      className=" bg-[#2e2e33] text-[#E4E4E4] selection:bg-yellow-400 selection:text-black md:min-h-screen flex items-center"
    >
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-6 pb-32 pt-24 md:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* --- LEFT COLUMN: INFO & SOCIALS --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <span className="text-yellow-400 font-mono text-sm tracking-widest uppercase mb-4 block">
                // Get in touch
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
                LET'S <br />
                <span className="text-gray-500 italic">CONNECT.</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-12">
                Have a project in mind or just want to chat about tech? I'm
                always open to discussing new opportunities and digital
                challenges.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:your.email@example.com"
                  className="group flex items-center gap-4 w-fit"
                >
                  <div className="p-4 bg-[#3b3a3f] rounded-full group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-mono tracking-widest">
                      Email me
                    </p>
                    <p className="text-lg font-medium group-hover:text-yellow-400 transition-colors">
                      ramzanhridoy@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 w-fit">
                  <div className="p-4 bg-[#3b3a3f] rounded-full text-yellow-400">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-mono tracking-widest">
                      Availability
                    </p>
                    <p className="text-lg font-medium">
                      Open for immediate projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-20">
              <p className="text-xs text-gray-500 uppercase font-mono tracking-widest mb-6">
                Follow the journey
              </p>
              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ y: -5 }}
                    className={`flex items-center gap-2 text-gray-400 transition-colors ${social.color}`}
                  >
                    {social.icon}
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {social.name}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: CONTACT FORM --- */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="bg-[#3b3a3f] p-8 md:p-12 rounded-3xl border border-white/5 shadow-lg"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#2e2e33] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-400/50 transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#2e2e33] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-400/50 transition-colors text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">
                  Subject
                </label>
                <select className="w-full bg-[#2e2e33] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-400/50 transition-colors text-white appearance-none">
                  <option>Full-Stack Project</option>
                  <option>MVP Development</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your vision..."
                  className="w-full bg-[#2e2e33] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-400/50 transition-colors text-white resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-400 text-black font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-300 transition-colors shadow-xl shadow-yellow-400/10"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
