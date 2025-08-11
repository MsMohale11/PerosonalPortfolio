import ArcSidebar from "../sidebar/svgsidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "../particlesbg";
import profile from "../1page/profile.jpeg";

const DecorativeSVGs = () => {
  const colors = ["#E9D5FF", "#C084FC", "#A855F7", "#D8B4FE"]; // light to deep purples
  const size = [20, 30, 40, 50];
  const positions = Array.from({ length: 12 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    rotate: Math.random() * 360,
    delay: Math.random() * 4,
  }));

  return (
    <>
      {positions.map((pos, i) => (
        <motion.svg
          key={i}
          className="absolute z-0 pointer-events-none"
          width={size[i % size.length]}
          height={size[i % size.length]}
          viewBox="0 0 24 24"
          fill={colors[i % colors.length]}
          style={{ top: pos.top, left: pos.left, opacity: 0.4 }}
          animate={{
            y: [0, -10, 10, 0],
            rotate: [pos.rotate, pos.rotate + 360],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: pos.delay,
          }}
        >
          <path d="M12 2L15 8H21L16.5 12L18 18L12 14.5L6 18L7.5 12L3 8H9L12 2Z" />
        </motion.svg>
      ))}
    </>
  );
};

export default function ProfilePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tiltStyle, setTiltStyle] = useState({});
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.6 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key="content"
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)] tracking-wide"
              variants={itemVariants}
            >
              HEY THERE! 
            </motion.h2>

            <motion.h1
              className="text-5xl sm:text-6xl font-extrabold mt-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] leading-tight"
              variants={itemVariants}
            >
              <span className="text-white">I'M </span>
              <span className="text-purple-400">KHUSHBOO</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-200 mt-6 max-w-xl font-medium"
              variants={itemVariants}
            >
              A creative mind with a love for clean UI, smooth UX, and interactive frontend magic.  
              Let’s make something amazing together.
            </motion.p>

            <motion.div className="mt-6 space-y-3" variants={itemVariants}>
              <motion.div
                className="inline-block text-white font-semibold px-4 py-2 rounded-full bg-purple-500 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                FRONTEND DEVELOPER ⚡ UI/UX ENTHUSIAST
              </motion.div>
              <motion.div
                className="inline-block text-purple-500 font-semibold px-4 py-2 rounded-full bg-white shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                READY TO DESIGN YOUR NEXT EXPERIENCE ✨
              </motion.div>
            </motion.div>

            <motion.button
              className="mt-8 px-6 py-3 bg-purple-500 text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
            >
              MORE ABOUT ME
            </motion.button>
          </motion.div>
        );
      default:
        const paths = ["/about", "/resume", "/portfolio", "/social", "/contact"];
        navigate(paths[activeIndex - 1]);
        return null;
    }
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    const rotateX = (-y / 20).toFixed(2);
    const rotateY = (x / 20).toFixed(2);
    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const resetTilt = () => setTiltStyle({ transform: "rotateX(0deg) rotateY(0deg)" });

  return (
    <div className="w-screen min-h-screen bg-purple-900 text-white relative overflow-x-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <DecorativeSVGs />

      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row max-w-[1200px] w-full items-center justify-between gap-10">
          {/* Left Section */}
          <div className="flex-1 max-w-full md:max-w-[550px] mb-8 md:mb-0 px-4 sm:px-0">
            <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
          </div>

          {/* Right Section */}
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center">
            <motion.div
              className="w-[250px] h-[250px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden z-10 border-4 border-purple-400 shadow-md shadow-purple-300"
              style={tiltStyle}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: [0.9, 1.05, 1], opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={profile}
                alt="khushboo"
                className="w-full h-full mb-[-2%] object-cover object-top rounded-full"
              />
            </motion.div>

            <ArcSidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          </div>
        </div>
      </div>
    </div>
  );
}
