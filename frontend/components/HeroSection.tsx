"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Globe, Layout, Smartphone, HelpCircle } from "lucide-react";

interface HeroData {
  name: string;
  greeting: string;
  subtitle: string;
  services_description: string;
}

interface ExpertiseItem {
  id: string | number;
  name: string;
  icon_name: string;
}

export default function HeroSection() {
  const [data, setData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);
  const [expertise, setExpertise] = useState<ExpertiseItem[]>([]);

  // Use an Environment Variable for the API URL
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://192.168.0.105:5000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, expRes] = await Promise.all([
          fetch(`${API_URL}/api/hero`),
          fetch(`${API_URL}/api/expertise`),
        ]);

        if (!heroRes.ok || !expRes.ok) throw new Error("Fetch failed");

        const heroJson = await heroRes.json();
        const expJson = await expRes.json();

        setData(heroJson);
        setExpertise(expJson);
      } catch (err) {
        console.error("Build/Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [API_URL]);

  //show a ghost/loading state while fetching data
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0F0F12]">
        {/* The Spinner */}
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute w-10 h-10 bg-[#1A1A1E] rounded-full flex items-center justify-center border border-white/5 shadow-2xl">
            {/* Your Initials or a small icon here */}
            <span className="text-[10px] text-blue-400 font-bold tracking-tighter">
              RG
            </span>
          </div>
        </div>

        {/* Professional Text */}
        <div className="mt-6 text-center">
          <p className="text-white/80 text-sm font-light tracking-[0.2em] uppercase animate-pulse">
            Loading Experience
          </p>
          {/* Subtle progress bar instead of "Fetching..." */}
          <div className="mt-4 w-32 h-[1px] bg-white/10 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full animate-shimmer"></div>
          </div>
        </div>
      </div>
    );
  }

  // This object maps the string from DB to the Actual Component
  const IconMap: Record<string, any> = {
    Code2: <Code2 size={20} className="text-blue-400" />,
    Globe: <Globe size={20} className="text-white" />,
    Layout: <Layout size={20} className="text-yellow-400" />,
    Smartphone: <Smartphone size={20} className="text-green-400" />,
  };

  return (
    /* MAIN WRAPPER - The "Grey" Section */
    <div className="bg-[#44444E] flex flex-col items-center relative overflow-visible">
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-6 md:pt-20 pb-20 flex flex-col md:grid grid-cols-1 md:grid-cols-3 items-center relative w-full md:gap-0 md:h-[310px] lg:h-[420px] xl:h-120">
        {/* LEFT SIDE - Order 1 */}
        <div className="relative z-10 order-1 md:order-1 md:-mr-24 lg:-mr-32 transition-all duration-500">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-sm"
          >
            {data?.greeting}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2"
          >
            <span className="text-yellow-400">{data?.name}</span>
          </motion.h1>
          <p className="text-gray-300 mt-6 max-w-sm">{data?.subtitle}</p>
          <div className="mt-8">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20">
              Hire Me
            </button>
          </div>
        </div>

        {/* CENTER SECTION - Profile - Order 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center order-2 md:order-2 mt-12 md:mt-0"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 lg:w-105 lg:h-105 bg-[#37353E] rounded-full z-0 shadow-inner" />
          <div className="relative z-20 w-88 md:w-105 lg:w-125">
            <Image
              src="/profile3.png"
              alt="Ramjan"
              width={700}
              height={700}
              className="object-contain drop-shadow-2xl pl-6 md:pl-0"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE - Services - Order 4 (Desktop Order 3) */}
        <div className="relative z-10 order-4 md:order-3 md:-ml-12 lg:-ml-24 md:-mt-2 lg:mt-26 transition-all duration-500 mt-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-sm"
          >
            Services
          </motion.p>
          <p className="text-gray-300 mt-6">{data?.services_description}</p>
          <div className="mt-8">
            <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all">
              Explore more
            </button>
          </div>
        </div>
      </section>

      {/* BRANDING BAR - The "Bridge" Component */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        /* -mb-12: This makes the box hang outside the grey background.
       z-50: Ensures it stays above the next section (Skills).
    */
        className="absolute bottom-88 md:relative md:bottom-0 z-50 w-100 md:w-165 lg:w-full max-w-4xl px-6 md:px-0 -mb-12 mt-10"
      >
        <div className="bg-[#2A2A30] backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-full px-6 py-5 md:px-10 flex justify-around items-center md:gap-4 shadow-2xl">
          {expertise.map(
            (item: {
              id: string | number;
              name: string;
              icon_name: string;
            }) => (
              <div
                key={item.id}
                className="flex items-center gap-3 group md:min-w-0"
              >
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
                  {IconMap[item.icon_name] || <HelpCircle />}
                </div>
                <div className="flex-col text-left hidden md:flex">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
                    Expertise
                  </span>
                  <span className="text-xs md:text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {item.name}
                  </span>
                </div>
              </div>
            ),
          )}
        </div>
      </motion.div>
    </div>
  );
}
