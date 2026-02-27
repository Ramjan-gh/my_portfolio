"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    /* Added relative and z-[110] to ensure the menu stays on top */
    <nav className="bg-[#37353E] md:bg-[#1A1A1E] relative w-full z-[110] px-6 py-4">
      <div className="md:px-6 max-w-7xl mx-auto flex items-center justify-between py-3 rounded-2xl transition-all">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 p-1.5 rounded-lg">
            <Code2 size={20} className="text-black" />
          </div>
          <span className="text-white font-bold text-xl tracking-tighter">
            RAMJAN.
          </span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all border border-white/10">
            Let's Talk
          </button>
        </div>

        {/* MOBILE MENU BUTTON - Higher z-index to stay above dropdown */}
        <button
          className="md:hidden text-white z-[120] relative p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop: Closes menu when clicking outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-[101] md:hidden"
            />

            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-24 left-6 right-6 bg-[#2A2A30] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl z-[105] md:hidden"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-yellow-400 border-b border-white/5 pb-2 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <button className="bg-yellow-400 text-black w-full py-4 rounded-xl font-bold mt-2 shadow-lg shadow-yellow-400/10">
                Let's Talk
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
