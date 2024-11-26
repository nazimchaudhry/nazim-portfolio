import React from 'react';

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundImage: "url('/images/beautiful-1.jpg')",
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
            color: '#ff6f61',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8), 3px 3px 10px rgba(255, 255, 255, 0.4)', 
            fontFamily: "'Raleway', sans-serif", 
          }}
        >
          About Me
        </h2>
        <p
          style={{
            fontSize: '1.3rem',
            marginTop: '20px',
            maxWidth: '900px',
            margin: 'auto',
            lineHeight: '1.8',
            fontFamily: "'Roboto', sans-serif", 
          }}
        >
          <div>
      <p className="bold-text">Hi! I'm Mohd Asad, a Software Developer with expertise in JavaScript, TypeScript, Nest.js, and specializing in building scalable backend systems and REST APIs.</p>
      <p className="bold-text">I have experience in backend development for Microservice, Monolithic architectures, improving API performance, and ensuring seamless integration with frontend teams.</p>
      <p className="bold-text">I love creating efficient and scalable applications that solve real-world problems.</p>
    </div>
        </p>
      </div>
    </section>
  );
}

export default About;
