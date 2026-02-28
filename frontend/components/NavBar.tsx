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
  const [scrolled, setScrolled] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[110] transition-all duration-300 px-6 py-3 ${
        scrolled
          ? "bg-[#1A1A1E]/80 backdrop-blur-lg shadow-xl border-b border-white/5"
          : "bg-[#1A1A1E] md:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 p-1.5 rounded-lg shadow-lg shadow-yellow-400/20">
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
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-xl text-sm font-bold transition-all transform hover:scale-105 active:scale-95">
            Let's Talk
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[101] md:hidden"
            />

            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="absolute top-20 left-6 right-6 bg-[#2A2A30] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl z-[105] md:hidden"
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
              <button className="bg-yellow-400 text-black w-full py-4 rounded-xl font-bold mt-2 shadow-lg shadow-yellow-400/20">
                Let's Talk
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
