import ArcSidebar from "../sidebar/svgsidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "../particlesbg";
import profile from "../1page/profile.png";

const DecorativeSVGs = () => {
  const colors = ["#FDE68A", "#FACC15", "#EAB308", "#FEF08A"];
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
            <motion.h2 className="text-2xl font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]" variants={itemVariants}>
              HI THERE!
            </motion.h2>
            <motion.h1 className="text-5xl font-extrabold mt-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" variants={itemVariants}>
              <span className="text-black">I'M</span>{" "}
              <span className="text-yellow-400">MODUDE</span>
            </motion.h1>
            <motion.div className="mt-6 space-y-3" variants={itemVariants}>
              <div className="inline-block text-black font-semibold px-4 py-2 rounded bg-yellow-400">
                FRONTEND DEVELOPER / UI/UX
              </div>
              <div className="block bg-black text-white font-semibold px-4 py-2 rounded w-fit">
                READY TO HANDLE YOUR NEW PROJECT
              </div>
            </motion.div>
            <motion.p className="text-gray-400 mt-6 leading-relaxed max-w-md" variants={itemVariants}>
              Versatile lorem ipsum. Eu posuere morbi non eros ac ante eu vehicula.
            </motion.p>
            <motion.button
              className="mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
    <div className="w-screen min-h-screen bg-white text-white relative overflow-x-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <DecorativeSVGs />

      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row max-w-[1200px] w-full items-center justify-between gap-10">
          {/* Left */}
          <div className="flex-1 max-w-full md:max-w-[550px] mb-8 md:mb-0 px-4 sm:px-0">
            <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
          </div>

          {/* Right */}
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center">
            <motion.div
              className="w-[250px] h-[250px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden z-10 border-4 border-yellow-400 shadow-xl shadow-yellow-200"
              style={tiltStyle}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={profile}
                alt="Modude"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </motion.div>

            <ArcSidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          </div>
        </div>
      </div>
    </div>
  );
}
