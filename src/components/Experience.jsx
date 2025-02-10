import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Sofyrus Technologies Pvt Ltd",
      role: "Software Developer",
      highlights: [
        "✧ Developed responsive and high-performance web applications using ReactJS, enhancing user engagement.",
        "✧ Implemented state management with Redux, optimizing app performance and data flow.",
        "✧ Integrated RESTful APIs and WebSocket for real-time data, improving overall app responsiveness.",
        "✧ Built cross-platform mobile applications with React Native, reducing development time by 40%.",
        "✧ Optimized mobile app performance through efficient use of native modules and code splitting.",
        "✧ Delivered seamless user experiences with smooth navigation and consistent UI across iOS and Android.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative max-w-[2800px] mx-auto text-center bg-cover bg-center py-20 px-6 sm:px-12 text-white shadow-lg"
      style={{ backgroundImage: "url('/images/abstract.jpg')" }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-[#608BC1] drop-shadow-md font-raleway">
          Professional Experience
        </h2>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 p-6 sm:p-8 md:p-10 rounded-lg mb-8 max-w-4xl mx-auto shadow-md"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-[#608BC1] font-raleway">
              {exp.role}
            </h3>
            <p className="text-lg sm:text-xl text-white font-roboto mb-4">
              {exp.company} {exp?.period}
            </p>
            <ul className="text-left mt-4 space-y-2 pl-5">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="text-base sm:text-lg text-gray-300">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

