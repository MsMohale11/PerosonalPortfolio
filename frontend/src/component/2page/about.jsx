import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const funFactVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-purple-900 font-sans text-white rounded-xl">
      <motion.main
        className="flex-1 p-6 md:p-16 bg-purple-800 rounded-xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 text-white "
          variants={itemVariants}
        >
          ABOUT ME
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-200 mb-4"
          variants={itemVariants}
        >
          I'm <span className="font-bold text-white">Khushboo</span>, a passionate{" "}
          <span className="text-purple-300 font-semibold">Frontend Developer</span> with hands-on experience in building responsive, beautiful UIs using{" "}
          HTML, CSS, JavaScript, and React.js.
        </motion.p>

       <motion.p
  className="text-sm md:text-base text-white mb-10 max-w-full md:max-w-2xl"
  variants={itemVariants}
>
  I’m currently in my 1st year of BCA (non-attending) and have completed Full Stack MERN training at Encrobytes, 
  where I built several websites during my training period.  
  I recently worked as a <span className="font-semibold text-purple-300">Frontend Developer (Intern)</span> at 
  <span className="font-semibold"> Adhana Innovations</span>, Faridabad (Jun 2025), where I contributed to real-world projects, 
  enhanced UI/UX quality, and collaborated effectively in a team setup.
</motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* What I Do Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-lg font-bold text-purple-300 mb-4">What I Do?</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <FaLaptopCode />,
                  title: "Frontend Development",
                  desc: "Building responsive UIs with React.js, HTML5, Tailwind CSS, and clean component-based architecture.",
                },
                {
                  icon: <FaCode />,
                  title: "MERN Stack Projects",
                  desc: "Worked on full stack projects during course training, handling both frontend and backend development.",
                },
                {
                  icon: <FaProjectDiagram />,
                  title: "Live Project Contribution",
                  desc: "Developed and maintained pages for real-time projects during internship at Adhana Innovations.",
                },
              ].map(({ icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-purple-800 p-3 rounded-full bg-white text-xl">{icon}</div>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-sm text-gray-300">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-lg font-bold text-purple-300 mb-4">Fun Facts</h2>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 justify-center">
              {[
                { value: "6M", label: "MERN COURSE\nCOMPLETED" },
                { value: "5+", label: "PROJECTS\nDELIVERED" },
                { value: "1", label: "INTERNSHIP\nEXPERIENCE" },
                { value: "70%", label: "NIOS CLASS 12\nSCORE" },
                { value: "1st", label: "YEAR BCA\nRUNNING" },
                { value: "∞", label: "LOVE FOR\nLEARNING" },
              ].map((fact, i) => (
                <motion.div
                  key={i}
                  className="bg-purple-700 border-2 text-white w-20 h-20 sm:w-24 sm:h-24 flex flex-col justify-center items-center rounded-full text-center px-2 cursor-default"
                  variants={funFactVariants}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#a855f7",
                    color: "#fff",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="text-lg sm:text-xl font-bold">{fact.value}</div>
                  <div className="text-[9px] sm:text-[10px] whitespace-pre-line ">{fact.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
