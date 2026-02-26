"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Globe, Layout, Smartphone, HelpCircle } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface HeroData {
  name: string;
  greeting: string;
  subtitle: string;
  services_description: string;
  socials?: { platform: string; url: string }[];
}

interface ExpertiseItem {
  id: string | number;
  name: string;
  icon_name: string;
}

// Pulse animation keyframes injected once
const pulseStyle = `
@keyframes shimmer {
  0%   { opacity: 0.4; }
  50%  { opacity: 0.75; }
  100% { opacity: 0.4; }
}
.skeleton {
  animation: shimmer 1.8s ease-in-out infinite;
  background: rgba(255,255,255,0.08);
  border-radius: 8px;
}
`;

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`skeleton ${className}`} />;
}

const IconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} className="text-blue-400" />,
  Globe: <Globe size={20} className="text-white" />,
  Layout: <Layout size={20} className="text-yellow-400" />,
  Smartphone: <Smartphone size={20} className="text-green-400" />,
};

// Placeholder expertise so the branding bar has the same shape while loading
const PLACEHOLDER_EXPERTISE: ExpertiseItem[] = [
  { id: 1, name: "Web Development", icon_name: "" },
  { id: 2, name: "Frontend Design", icon_name: "" },
  { id: 3, name: "Mobile Apps", icon_name: "" },
  { id: 4, name: "UI / UX", icon_name: "" },
];

export default function HeroSection() {
  const [data, setData] = useState<HeroData | null>(null);
  const [expertise, setExpertise] = useState<ExpertiseItem[]>(
    PLACEHOLDER_EXPERTISE,
  );
  const [loaded, setLoaded] = useState(false);

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://192.168.0.105:5000";

  useEffect(() => {
    // Inject shimmer keyframes once
    if (!document.getElementById("skeleton-styles")) {
      const style = document.createElement("style");
      style.id = "skeleton-styles";
      style.textContent = pulseStyle;
      document.head.appendChild(style);
    }

    const fetchData = async () => {
      try {
        // Since you merged everything into /api/hero, we only need ONE fetch
        const response = await fetch(`${API_URL}/api/hero`);

        if (!response.ok) throw new Error("Failed to fetch hero data");

        const json = await response.json();

        // Update both states from the single JSON object
        setData(json);
        if (json.expertise) {
          setExpertise(json.expertise);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoaded(true);
      }
    };

    fetchData();
  }, [API_URL]);
  

  console.log("Hero data:", data);

  // Same outer shell is always rendered — only inner text/icons swap
  return (
    <div className="bg-gradient-to-b from-[#1A1A1E] to-[#44444E] flex flex-col items-center relative overflow-visible pt-10 md:pt-0">
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-6 md:pt-20 pb-20 flex flex-col md:grid grid-cols-1 md:grid-cols-3 items-center relative w-full md:gap-0 min-h-">
        {/* LEFT SIDE */}
        <div className="relative z-10 order-1 md:order-1 md:mb-20 md:-mr-24 lg:-mr-32 transition-all duration-500">
          {/* Greeting */}
          <div className="h-4 flex items-center">
            <AnimatePresence mode="wait">
              {!loaded ? (
                <Skeleton key="greet-skel" className="h-3 w-20" />
              ) : (
                <motion.p
                  key="greet-real"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-400 text-4xl"
                >
                  {data?.greeting}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Name */}
          <div className="mt-2 min-h-[4.5rem] flex items-center">
            <AnimatePresence mode="wait">
              {!loaded ? (
                <Skeleton key="name-skel" className="h-14 w-64" />
              ) : (
                <motion.h1
                  key="name-real"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold"
                >
                  <span className="text-yellow-400">{data?.name}</span>
                </motion.h1>
              )}
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <div className="mt-6 min-h-[3rem]">
            <AnimatePresence mode="wait">
              {!loaded ? (
                <div key="sub-skel" className="space-y-2">
                  <Skeleton className="h-3 w-full max-w-[320px]" />
                  <Skeleton className="h-3 w-4/5 max-w-[260px]" />
                </div>
              ) : (
                <motion.p
                  key="sub-real"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-gray-300 max-w-sm"
                >
                  {data?.subtitle}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <motion.button
              initial={false}
              animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 4 }}
              transition={{ duration: 0.4 }}
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20"
            >
              Hire Me
            </motion.button>
          </div>
        </div>

        {/* CENTER — Profile image (always visible, no jump) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center order-2 md:order-2 mt-12 md:mt-0 pointer-events-none"
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

        {/* RIGHT SIDE — Services */}
        <div className="relative z-10 order-4 md:order-3 md:-ml-10 lg:-ml-8 md:-mt-36 transition-all duration-500 mt-24">
          <div className="h-4 flex items-center">
            <p className="text-gray-400 text-xl">Services</p>
          </div>

          {/* Description */}
          <div className="mt-6 min-h-[4.5rem]">
            <AnimatePresence mode="wait">
              {!loaded ? (
                <div key="svc-skel" className="space-y-2">
                  <Skeleton className="h-3 w-full max-w-[280px]" />
                  <Skeleton className="h-3 w-5/6 max-w-[240px]" />
                  <Skeleton className="h-3 w-3/4 max-w-[200px]" />
                </div>
              ) : (
                <motion.p
                  key="svc-real"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-300"
                >
                  {data?.services_description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8">
            <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all">
              Explore more
            </button>
          </div>

          {/* Socials Section */}
          <div className="flex gap-4 mt-6">
            {data?.socials?.map((social, index) => {
              // Dynamically get the icon component based on the string name from DB
              const IconComponent =
                {
                  Facebook: Facebook,
                  Twitter: Twitter,
                  Instagram: Instagram,
                  Linkedin: Linkedin,
                }[social.platform] || HelpCircle;

              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  className="group p-2 bg-white/5 rounded-full border border-white/10"
                >
                  <IconComponent
                    size={20}
                    className="text-yellow-400 group-hover:text-yellow-500 transition-colors"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* BRANDING BAR — always rendered with same structure; content fades in */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-100 md:relative md:bottom-35 lg:bottom-20 z-50 w-105 md:w-165 lg:w-full max-w-4xl px-6 md:px-0"
      >
        <div className="backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-full px-6 py-5 md:px-10 flex justify-around items-center md:gap-4 shadow-lg">
          {expertise.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 group md:min-w-0"
            >
              {/* Icon slot — skeleton circle while loading */}
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
                {!loaded || !item.icon_name ? (
                  <div className="w-5 h-5 rounded-full skeleton" />
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {IconMap[item.icon_name] ?? <HelpCircle size={20} />}
                  </motion.span>
                )}
              </div>

              {/* Text — hidden on mobile, skeleton → real on desktop */}
              <div className="flex-col text-left hidden md:flex">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
                  Expertise
                </span>
                <div className="min-h-[1.25rem] flex items-center">
                  {!loaded ? (
                    <Skeleton className="h-3 w-24" />
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="text-xs md:text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
