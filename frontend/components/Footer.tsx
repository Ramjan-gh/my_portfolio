"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-white/5 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* BRAND SECTION */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 tracking-tighter">
              YOURNAME<span className="text-yellow-400">.DEV</span>
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
              Building scalable digital products with a focus on performance,
              clean architecture, and user-centric design.
            </p>
            <div className="flex gap-5">
              {[
                { icon: <Github size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Mail size={20} />, href: "mailto:hello@example.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, color: "#facc15" }}
                  className="text-gray-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div>
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* STATUS SECTION */}
          <div className="relative">
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-6">
              Status
            </h4>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-sm text-gray-300">
                Available for new projects
              </p>
            </div>

            {/* BACK TO TOP BUTTON */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-0 right-0 p-4 bg-[#3b3a3f] rounded-full border border-white/10 hover:border-yellow-400/50 transition-colors shadow-2xl"
            >
              <ArrowUp size={20} className="text-yellow-400" />
            </motion.button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-mono text-gray-600 tracking-wider">
            © {currentYear} ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              Built with <span className="text-gray-400">Next.js & Framer</span>
            </p>
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              Design by{" "}
              <span className="text-gray-400 text-yellow-400/50 italic">
                Engineering Mind
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
