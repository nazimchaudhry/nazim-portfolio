import React from 'react';

const About =()=> {
  return (
    <section
      id="about"
      className="relative max-w-[2800px] mx-auto text-center bg-cover bg-center p-20 text-white shadow-lg"
      style={{
        backgroundImage: "url('/images/beautiful-1.jpg')",
      }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#608BC1] drop-shadow-md font-raleway">
          About Me
        </h2>

        <div className="text-lg md:text-xl mt-5 max-w-3xl mx-auto leading-relaxed font-roboto">
          <p>
            Hi! I'm Nazim Khan, a Front-End Developer with expertise in JavaScript, TypeScript, ReactJs, React Native, and REST APIs.
          </p>
          <p className="mt-3">
            I have 2 years of experience in frontend development.
          </p>
          <p className="mt-3">
            I love creating efficient and scalable applications that solve real-world problems.
          </p>
        </div>

        {/* Download Resume Button */}
        <button
          className="mt-8 px-6 py-3 text-lg bg-[#608BC1] text-white rounded-md shadow-md transition-transform duration-200 hover:bg-[#133E87] hover:scale-105"
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1Sw4cWHf_3wuW4SLvjSnMW41TXPXUJHLF/view?usp=drivesdk',
              '_blank'
            )
          }
        >
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default About;




