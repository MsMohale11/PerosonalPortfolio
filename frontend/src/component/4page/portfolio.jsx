import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si"; // ✅ Works


// Filters
const filters = ["All", "MERN", "JavaScript", "Frontend"];

// Project data
const projects = [
  // {
  //   src: "https://ewm.swiss/application/files/8216/1597/9679/E-commerce_web_design_EWM_SA_Digital_Agency_Geneva.jpg",
  //   title: "E-Commerce Website (MERN Stack)",
  //   category: "MERN",
  //   github: "#",
  // },
  {
    src: "https://uizard.io/static/79ca1fb620a77474db10d3a318623d48/a8e47/cf95a4a7cdfe0b94043ea65779427a7b1df36ee9-1440x835.png",
    title: "Weather App",
    category: "JavaScript",
    github: "https://github.com/MsMohale11/WEATHERAPP",
    netlify: "https://weathercheck1123.netlify.app/",
  },
  // {
  //   src: "https://i.ytimg.com/vi/IxGRqz-766U/hq720.jpg",
  //   title: "Login Auth System",
  //   category: "MERN",
  //   github: "#",
  //   netlify: "#",
  // },
    {
    src: "https://letsliveandlearn.com/wp-content/uploads/2018/11/IMG_1337-1024x1024.jpg",
    title: "To-Do App (With User Login)",
    category: "MERN",
    github: "https://github.com/MsMohale11/TaskPerformance",
  },
  {
    src: "https://marketplace.canva.com/EAFwckKNjDE/2/0/1600w/canva-black-white-grayscale-portfolio-presentation-vzScEqAI__M.jpg",
    title: "Portfolio Website",
    category: "Frontend",
    github: "#",
    netlify: "#",
  },
  // {
  //   src: "https://letsliveandlearn.com/wp-content/uploads/2018/11/IMG_1337-1024x1024.jpg",
  //   title: "To-Do App",
  //   category: "JavaScript",
  //   github: "#",
  //   netlify: "#",
  // },

  {
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Restaurant UI",
    category: "Frontend",
    github: "https://github.com/yourusername",
    netlify: "https://amanivagatorgoa.netlify.app/",
  },
  {
    src: "https://www.vrlgroup.in/v4_images/VRLLOGO.svg",
    title: "Logistics Dashboard UI",
    category: "Frontend",
    github: "https://github.com/MsMohale11/vrl_group_UI",
    netlify: "https://msmohalesvrllogistics.netlify.app/",
  },
  // {
  //   src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
  //   title: "Beauty Product E-Commerce UI",
  //   category: "Frontend",
  //   github: "#",
  //   netlify: "#",
  // },
  // {
  //   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLmTyRa0Zx9ffvSyBdL-FFkj67-iTdVxOCbw&s",
  //   title: "Zen Hotels UI",
  //   category: "Frontend",
  //   github: "#",
  //   netlify: "#",
  // },
  {
    src: "https://traveldhamaal.com/wp-content/uploads/2019/07/hotel-amani-vagator_traveldhamaal-holidays_1-570x400.jpg",
    title: "Book Your Hotel",
    category: "Frontend",
    github: "#",
    netlify: "#",
  },
];

// Animation Variants
const filterButtonVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const imagesContainerVariants = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const imageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (proj) => activeFilter === "All" || proj.category === activeFilter
  );

  return (
    <section className="min-h-screen flex bg-gray-50 text-black font-sans">
      <div className="flex-1 p-8 font-sans">
        {/* Title */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-6 h-1 bg-purple-600 rounded"></span>
          <h2 className="text-4xl font-bold tracking-wide">Portfolio</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-10 flex-wrap">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              className={`px-5 py-2 rounded-full text-sm font-medium border ${activeFilter === filter
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-purple-50"
                } transition-all`}
              onClick={() => setActiveFilter(filter)}
              variants={filterButtonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              layout
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={imagesContainerVariants}
          initial="initial"
          animate="animate"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                className="relative group rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                layout
              >
                <img
                  src={proj.src}
                  alt={proj.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-lg font-semibold mb-4 text-center px-2">
                    {proj.title}
                  </h3>
                  <div className="flex gap-3">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-200 transition"
                      >
                        <FaGithub className="text-black text-lg" />
                      </a>
                    )}
                    {proj.netlify && (
                      <a
                        href={proj.netlify} // ✅ Now uses project-specific link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-200 transition"
                      >
                        <SiNetlify className="text-xl text-green-500" /> {/* ✅ Proper icon */}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
