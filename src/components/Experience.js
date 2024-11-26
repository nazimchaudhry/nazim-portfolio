import React from 'react';

function Experience() {
  const experiences = [
    {
      company: "Sofyrus Technologies Pvt Ltd",
      role: "Software Developer",
      period: "May 2023 – Present",
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
      style={{
        backgroundImage: "url('/images/abstract.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px',
        color: 'white',
        position: 'relative',
        maxWidth: '2800px',
        textAlign: 'center',
        borderRadius: '0',
        margin: 'auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Overlay for darkening the background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      ></div>

      {/* Content Wrapper */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '40px',
            color: '#608BC1',
            textShadow:
              '2px 2px 5px rgba(0, 0, 0, 0.8), 3px 3px 10px rgba(255, 255, 255, 0.4)',
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          Professional Experience
        </h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '30px',
              maxWidth: '900px',
              margin: 'auto',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#608BC1', // Golden color for the role
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              {exp.role}
            </h3>
            <p
              style={{
                fontSize: '1.2rem',
                marginBottom: '15px',
                color: '#ffffff',
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              {exp.company} | {exp.period}
            </p>
            <ul
              style={{
                textAlign: 'left',
                marginTop: '10px',
                paddingLeft: '20px',
                lineHeight: '1.8',
              }}
            >
              {exp.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: '1rem',
                    marginBottom: '10px',
                    color: '#e6e6e6',
                  }}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
