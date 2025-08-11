import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaProjectDiagram,
  FaCheckCircle,
} from "react-icons/fa";

const ResumeSection = () => {
  const objective =
    "Aspiring Full Stack Web Developer (MERN) with a strong foundation in web technologies and creative design tools. Currently pursuing graduation and seeking an internship to apply and enhance skills in a real-world environment.";

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  const skills = [
    "HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js",
    "Node.js", "Express.js", "MongoDB",
    "REST API", "Git & GitHub",
    "Responsive Design & Web Accessibility"
  ];

  const softSkills = [
    "Strong Problem-Solving Ability",
    "Communication & Teamwork",
    "Quick Learner and Highly Adaptable",
    "Organized & Project Management Skills",
  ];

  const education = [
    { year: "2025", title: "Senior Secondary (12th Grade) – NIOS" },
    { year: "2023", title: "Secondary (10th Grade) – Rawal International School" },
  ];

  const experience = [
    { year: "Jun 2025", title: "Frontend Developer (Intern) – Adhana Innovations, Faridabad" },
  ];

  const certifications = [
    "Full Stack MERN Development – Encrobytes Technologies (Faridabad), 2025",
  ];

  const projects = [
    "To-Do List Web App",
    "Portfolio Website",
    "Login & Signup System with Token Authentication",
    "Weather App",
    "Tic-Tac-Toe Game (JavaScript)",
    "E-Commerce Website (MERN Stack)",
    "OTP Generator (Frontend + Logic)",
  ];

  const Card = ({ children, custom }) => (
    <motion.div
      className="bg-gradient-to-br from-purple-50 via-white to-purple-100 p-5 rounded-xl shadow-md hover:shadow-purple-300 transition-all duration-300 hover:-translate-y-1"
      custom={custom}
      variants={fadeUp}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 rounded-xl py-12 px-4 sm:px-6 lg:px-10 text-black font-sans">
      <motion.div
        className="max-w-5xl mx-auto space-y-8"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-purple-700 border-b-4 border-purple-300 pb-2 inline-block"
          custom={1}
          variants={fadeUp}
        >
          RESUME
        </motion.h2>

        {/* Objective Section */}
        <Card custom={2}>
          <h3 className="text-lg font-semibold text-purple-600 mb-3 flex items-center gap-2">
            🎯 Profile
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">{objective}</p>
        </Card>

        {/* Skills + Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card custom={3}>
            <h3 className="text-lg font-semibold text-purple-600 mb-3 flex items-center gap-2">
              <FaCode className="animate-pulse" /> Technical Skills
            </h3>
            <ul className="text-sm text-gray-700 grid grid-cols-2 gap-x-6 list-disc pl-5">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </Card>

          <Card custom={4}>
            <h3 className="text-lg font-semibold text-purple-600 mb-3">Soft Skills</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {softSkills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-purple-500 animate-pulse" /> {skill}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Education + Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card custom={5}>
            <h3 className="text-lg font-semibold text-purple-600 mb-3 flex items-center gap-2">
              <FaGraduationCap className="animate-bounce" /> Education
            </h3>
            {education.map((edu, i) => (
              <div key={i} className="text-sm mb-2">
                <p className="font-medium text-purple-700">{edu.year}</p>
                <p className="text-gray-700">{edu.title}</p>
              </div>
            ))}
          </Card>

          <Card custom={6}>
            <h3 className="text-lg font-semibold text-purple-600 mb-3 flex items-center gap-2">
              <FaBriefcase className="animate-bounce" /> Experience
            </h3>
            {experience.map((exp, i) => (
              <div key={i} className="text-sm mb-2">
                <p className="font-medium text-purple-700">{exp.year}</p>
                <p className="text-gray-700">{exp.title}</p>
              </div>
            ))}
          </Card>
        </div>

        {/* Certifications + Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card custom={7}>
            <h3 className="text-lg font-semibold text-purple-600 mb-3 flex items-center gap-2">
              <FaCertificate className="animate-spin-slow" /> Training & Certifications
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </Card>

          <Card custom={8}>
            <h3 className="text-lg font-semibold text-purple-600 mb-3 flex items-center gap-2">
              <FaProjectDiagram className="animate-spin-slow" /> Projects
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {projects.map((proj, i) => (
                <li key={i}>{proj}</li>
              ))}
            </ul>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
