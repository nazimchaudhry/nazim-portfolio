// import React from 'react';

// function About() {
//   return (
//     <section
//       id="about"
//       style={{
//         backgroundImage: "url('/images/beautiful-1.jpg')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         padding: '80px',
//         color: 'white',
//         position: 'relative',
//         maxWidth: '2800px',
//         textAlign: 'center',  
//         borderRadius: '0', 
//         margin: 'auto',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//       }}
//     >
//       {/* Overlay for darkening the background */}
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'rgba(0, 0, 0, 0.6)',
//         }}
//       ></div>

//       {/* Content Wrapper */}
//       <div
//         style={{
//           position: 'relative',
//           zIndex: 2,
//           textAlign: 'center',
//         }}
//       >
//         <h2
//          style={{
//             fontSize: '3rem',
//             fontWeight: 'bold',
//             marginBottom: '40px',
//             color: '#608BC1',
//             textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8), 3px 3px 10px rgba(255, 255, 255, 0.4)', 
//             fontFamily: "'Raleway', sans-serif", 
//           }}
//         >
//           About Me
//         </h2>
//         <p
//           style={{
//             fontSize: '1.3rem',
//             marginTop: '20px',
//             maxWidth: '900px',
//             margin: 'auto',
//             lineHeight: '1.8',
//             fontFamily: "'Roboto', sans-serif", 
//           }}
//         >
//           <div>
//       <p className="bold-text">Hi! I'm Nazim Khan, a Software Developer with expertise in JavaScript, TypeScript, React js and React Native, and specializing in building scalable frontend systems and REST APIs.</p>
//       <p className="bold-text">I have experience in frontend development for Web App and Mobile App.</p>
//       <p className="bold-text">I love creating efficient and scalable applications that solve real-world problems.</p>
//     </div>
//         </p>
//       </div>
//     </section>
//   );
// }

// export default About;

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
          backgroundColor: 'rgba(0, 0, 0, .85)',
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
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8), 3px 3px 10px rgba(255, 255, 255, 0.4)',
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          About Me
        </h2>
        <div
          style={{
            fontSize: '1.3rem',
            marginTop: '20px',
            maxWidth: '900px',
            margin: 'auto',
            lineHeight: '1.8',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          <p>
            Hi! I'm Nazim Khan, a Software Developer with expertise in JavaScript, TypeScript, ReactJs and React Native and REST APIs.
          </p>
          <p>
            I have 1.5 years of experience in frontend development.
          </p>
          <p>
            I love creating efficient and scalable applications that solve real-world problems.
          </p>
        </div>

        {/* Download Resume Button */}
        <button
          style={{
            padding: '10px 20px',
            fontSize: '1.2rem',
            backgroundColor: '#608BC1',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.2s ease, background-color 0.3s ease',
            marginTop: '30px',
            whiteSpace: 'nowrap',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#133E87';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#608BC1';
            e.target.style.transform = 'scale(1)';
          }}
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1yiU_e-e2MlsMpCHtVhnoDf9hV7FOtAfZ/view?usp=drivesdk',
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