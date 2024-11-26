import React from 'react';

function Projects() {
  const projectList = [
    { name: 'DMW', description: 'DMW is a Healthcare App to various stakeholders including manufacturers, medical companies, innovators, HR personnel, doctors and patients.', link: 'https://github.com/mdasad8080' },
    { name: 'Team Sofyrus', description: 'Team Sofyrus (teams.sofyrus.com), a hiring platform designed to provide teams for various projects, similar to a freelance platform.', link: 'https://github.com/mdasad8080' },
    { name: 'Food Recipe App', description: 'Discover a world of flavors with our Food Recipe App, featuring endless dishes for every taste and occasion a variety of meals, all in one app.', link: 'https://github.com/mdasad8080' },
  ];

  return (
    <section
      id="projects"
      style={{
        backgroundImage: "url('/images/black_background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',  
        padding: '50px',
        maxWidth: '2800px',
        textAlign: 'center',
        borderRadius: '0', 
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 1,
        }}
      ></div>

      {/* Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
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
          My Projects
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          {projectList.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
                borderRadius: '15px',
                textAlign: 'center',
                maxWidth: '320px',
                boxShadow: '0 8px 15px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                backdropFilter: 'blur(5px)',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.4)';
              }}
            >
              <h3
                style={{
                  fontSize: '1.7rem',
                  marginBottom: '10px',
                  color: '#608BC1',
                }}
              >
                {project.name}
              </h3>
              <p style={{ marginBottom: '15px', fontSize: '1rem', color: '#ddd' }}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  
            color: '#608BC1',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  border: '2px solid #608BC1',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#608BC1';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#608BC1';
                }}
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
