import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJira, SiFigma, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills =()=> {
  const skills = [
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#007ACC' },
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'React Native', icon: <FaReact />, color: '#61DAFB' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38BDF8' },
    { name: 'Jira', icon: <SiJira />, color: '#0052CC' },
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
  ];

  return (
    <section
      id="skills"
      className="relative bg-cover bg-center text-white py-12 px-4 lg:px-20 max-w-full"
      style={{ backgroundImage: "url('/images/black_background.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Content Wrapper */}
      <div className="relative text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 drop-shadow-lg">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg text-center shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl w-28 sm:w-32 md:w-40 lg:w-48"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex justify-center items-center rounded-md mx-auto mb-3" style={{ backgroundColor: skill.color }}>
                <div className="text-3xl sm:text-4xl">{skill.icon}</div>
              </div>
              <p className="text-lg font-medium text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

