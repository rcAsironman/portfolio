import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skills = {
    'Programming Languages': [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' }
    ],
    'Front-End': [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'NativeWind', logo: 'data:image/png;base64,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' },
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
    ],
    'Back-End': [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'NestJS', logo: 'https://image.pngaaa.com/971/3729971-middle.png' },
      { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' }
    ],
    'Databases': [
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
    ],
    'Tools & Platforms': [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'IntelliJ', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' }
    ]
  };
  

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Skills</h2>
          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="card">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>{category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {skillList.map(skill => (
                    <div
                      key={skill.name}
                      className="skill-tag"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 0.75rem'
                      }}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        style={{
                          width: '20px',
                          height: '20px',
                          objectFit: 'contain'
                        }}
                      />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills