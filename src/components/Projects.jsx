// import React from 'react';

// const Projects = () => {
//   const projectList = [
//     { name: 'DMW', description: 'DMW is a Healthcare App to various stakeholders including manufacturers, medical companies, innovators, HR personnel, doctors and patients.', link: 'https://github.com/mdasad8080' },
//     { name: 'Team Sofyrus', description: 'Team Sofyrus (teams.sofyrus.com), a hiring platform designed to provide teams for various projects, similar to a freelance platform.', link: 'https://github.com/mdasad8080' },
//     { name: 'Food Recipe App', description: 'Discover a world of flavors with our Food Recipe App, featuring endless dishes for every taste and occasion a variety of meals, all in one app.', link: 'https://github.com/mdasad8080' },
//   ];

//   return (
//     <section
//       id="projects"
//       className="relative bg-cover bg-center text-white py-12 px-6 max-w-[2800px] mx-auto"
//       style={{ backgroundImage: "url('/images/black_background.jpg')" }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-75"></div>

//       {/* Content Wrapper */}
//       <div className="relative text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#608BC1] drop-shadow-lg font-raleway">
//           My Projects
//         </h2>

//         <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-4">
//           {projectList.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white bg-opacity-10 p-6 rounded-lg max-w-xs md:max-w-sm text-center shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//             >
//               <h3 className="text-xl md:text-2xl mb-3 text-[#608BC1] font-semibold">
//                 {project.name}
//               </h3>
//               <p className="text-sm md:text-base text-gray-300 mb-4">
//                 {project.description}
//               </p>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#608BC1] font-bold text-lg border-2 border-[#608BC1] px-4 py-2 rounded-md transition duration-300 hover:bg-[#608BC1] hover:text-white"
//               >
//                 View on GitHub
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;

// import React from "react";
// import { Github, ExternalLink, Code, Star } from "lucide-react";
// import img1 from "../assets/image/oms.png";
// import img2 from "../assets/image/teamSofyrus.png";

// const Projects = () => {
//   const projectList = [
//     {
//       name: "DMW",
//       description:
//         "DMW is a Healthcare App to various stakeholders including manufacturers, medical companies, innovators, HR personnel, doctors, and patients.",
//       gitHublink: "https://github.com/nazimchaudhry",
//       websiteLink: "https://teams.sofyrus.com/",
//       image: img1,
//       tags: ["Healthcare", "React", "MongoDB"],
//       stars: 28,
//     },
//     {
//       name: "Team Sofyrus",
//       description:
//         "Team Sofyrus (teams.sofyrus.com), a hiring platform designed to provide teams for various projects, similar to a freelance platform.",
//       gitHublink: "https://github.com/nazimchaudhry",
//       websiteLink: "https://teams.sofyrus.com/",
//       image: img2,
//       tags: ["Freelance", "NextJS", "Tailwind"],
//       stars: 42,
//     },
//     {
//       name: "Food Recipe App",
//       description:
//         "Discover a world of flavors with our Food Recipe App, featuring endless dishes for every taste and occasion.",
//       gitHublink: "https://github.com/nazimchaudhry",
//       websiteLink: "https://teams.sofyrus.com/",
//       image: img1,
//       tags: ["Mobile", "React Native", "Firebase"],
//       stars: 35,
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="relative bg-gray-900 text-white py-16 px-6 max-w-[2800px] mx-auto"
//     >
//       <div className="relative max-w-6xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//           Featured Projects
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectList.map((project, index) => (
//             <div
//               key={index}
//               className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
//             >
//               {/* Image Section */}
//               <div className="relative h-60 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.name}
//                   className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               {/* Project Details */}
//               <div className="bg-gray-800 p-6 flex flex-col justify-between h-60">
//                 <h3 className="project-heading text-2xl font-bold mb-3">
//                   {project.name}
//                 </h3>

//                 <p className="text-gray-400 text-sm mb-4">
//                   {project.description}
//                 </p>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="text-xs font-medium py-1 px-3 rounded-full bg-blue-600/20 text-blue-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Footer Section */}
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center text-gray-400">
//                     <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
//                     <span className="text-sm">{project.stars}</span>
//                   </div>
//                   <div className="flex space-x-4">
//                     <a
//                       href={project.gitHublink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-2 rounded-full bg-gray-700 text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
//                       aria-label="GitHub"
//                     >
//                       <Github className="w-5 h-5" />
//                     </a>
//                     <a
//                       href={project.websiteLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-2 rounded-full bg-gray-700 text-gray-400 hover:bg-purple-600 hover:text-white transition-all"
//                       aria-label="Live Demo"
//                     >
//                       <ExternalLink className="w-5 h-5" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-12">
//           <button className="relative overflow-hidden px-8 py-3 rounded-full bg-transparent border border-blue-500 text-blue-400 font-medium group">
//             <span className="relative z-10 group-hover:text-white transition-colors duration-300">
//               View All Projects
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import img1 from "../assets/image/oms.png";
import img2 from "../assets/image/teamSofyrus.png";
import img3 from "../assets/image/CareOCaregiver.jpg";

const Projects = () => {
  const projectList = [
    {
      name: "OMS",
      description:"Developed an ”OMS” for a Riyadh-based client, enhancing operational efficiency and record management.",
      gitHublink: "https://github.com/nazimchaudhry",
      websiteLink: "https://oms.sofyrus.com/login",
      image: img1,
      tags: ["React", "Tailwind", "NestJs"],
      stars: 28,
    },
    {
      name: "Team Sofyrus",
      description:"Team Sofyrus (teams.sofyrus.com), a hiring platform designed to provide teams for various projects, similar to a freelance platform.",
      gitHublink: "https://github.com/nazimchaudhry",
      websiteLink: "https://teams.sofyrus.com/",
      image: img2,
      tags: ["Freelance", "React", "Tailwind"],
      stars: 42,
    },
    {
      name: "CareO Caregiver App",
      description:"CareO healthcare platform for caregivers(doctors) to manage schedules and services,patients can view caregivers and book appointments.",
      gitHublink: "https://github.com/nazimchaudhry",
      // websiteLink: "https://teams.sofyrus.com/",
      image: img3,
      tags: ["Mobile", "React Native", "Firebase"],
      stars: 35,
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-gray-900 text-white py-16 px-6 max-w-[2800px] mx-auto"
    >
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gray-800"
            >
              {/* <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div> */}
              <div className="relative w-full h-60">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-60">
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium py-1 px-3 rounded-full bg-blue-600/20 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-400">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.gitHublink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-700 text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-700 text-gray-400 hover:bg-purple-600 hover:text-white transition-all"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="relative overflow-hidden px-8 py-3 rounded-full bg-transparent border border-blue-500 text-blue-400 font-medium group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              View All Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

