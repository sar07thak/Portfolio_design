import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Wrench
} from "lucide-react";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel
} from "react-icons/si";

const skills = {
  frontend: [
    { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  ],
  backend: [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-gray-800" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-red-500" /> },
  ],
  tools: [
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-black" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-black" /> },
  ],
};

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories = [
    { label: "frontend", icon: <Code2 size={24} /> },
    { label: "backend", icon: <Server size={24} /> },
    { label: "tools", icon: <Wrench size={24} /> },
  ];

  return (
    <div className="bg-white text-black py-12 px-4 sm:px-8 md:px-16">
      <h2 className="text-2xl sm:text-4xl font-bold mb-8">Skills</h2>

      {/* Category Filter Buttons */}
      <div className="flex gap-4 mb-10">
        {categories.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setActiveCategory(label)}
            className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 transition-all duration-300 ${
              activeCategory === label
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {icon}
          </button>
        ))}
      </div>

      {/* Skills Grid with Icons */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {skills[activeCategory].map(({ name, icon }) => (
          <motion.div
            key={name}
            className="flex flex-col items-center justify-center bg-gray-100 rounded-xl py-4 hover:scale-105 transition-transform shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl mb-2">{icon}</div>
            <span className="text-sm font-medium">{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
