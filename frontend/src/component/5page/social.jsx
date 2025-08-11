import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6"; // Internshala
import { SiNetlify } from "react-icons/si"; // Netlify

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/MsMohale11",
    bg: "bg-purple-700",
    glow: "shadow-[0_0_20px_rgba(126,34,206,0.6)]",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/khushboo-mohale-2b47a1373/",
    bg: "bg-purple-600",
    glow: "shadow-[0_0_20px_rgba(147,51,234,0.6)]",
  },
  {
    name: "Internshala",
    icon: <FaGraduationCap />,
    link: "https://internshala.com/student/resume",
    bg: "bg-purple-500",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.6)]",
  },
  {
    name: "Netlify",
    icon: <SiNetlify />,
    link: "https://app.netlify.com/teams/msmohale11/projects",
    bg: "bg-purple-400",
    glow: "shadow-[0_0_20px_rgba(192,132,252,0.6)]",
  },
];

// Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

export default function SocialMedia() {
  return (
    <div className="flex min-h-screen font-sans bg-gradient-to-br from-purple-100 via-white to-purple-50">
      <main className="w-full p-10 flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-5xl font-extrabold text-purple-900 mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SOCIAL MEDIA
        </motion.h1>

        <motion.p
          className="text-purple-700 text-lg mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Connect with me on your favorite platforms! 💬
        </motion.p>

        <motion.p
          className="text-sm text-purple-500 max-w-xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Whether it’s code, projects, or portfolio hosting — I’m just one click away 😉
        </motion.p>

        {/* Social Media Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center transition-transform duration-300 ${social.glow} rounded-xl backdrop-blur-md bg-white/30 p-6 hover:shadow-lg`}
              variants={itemVariants}
              whileHover={{
                scale: 1.12,
                y: -5,
                boxShadow: "0 0 25px rgba(147,51,234,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`p-5 rounded-full text-white text-3xl shadow-xl ${social.bg}`}
              >
                {social.icon}
              </div>
              <p className="text-sm text-purple-900 mt-3 font-semibold">
                {social.name}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.h2
          className="text-md text-purple-700 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Catch you there! 😄
        </motion.h2>
      </main>
    </div>
  );
}
