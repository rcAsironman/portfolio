import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      title: 'Technical Lead',
      company: 'Open Source with SLU',
      period: 'Aug 2024 - Present',
      responsibilities: [
        'Led the development of "Where\'s Religion" using React Native & Expo',
        'Managed a team and optimized backend APIs using Spring Boot',
        'Implemented CI/CD pipelines and code review processes'
      ]
    },
    {
      title: 'Trainee Software Engineer',
      company: 'TecheFolks',
      period: 'Dec 2022 - Jun 2023',
      responsibilities: [
        'Built and deployed Unaga Mobile App using Flutter',
        'Assisted in Spring Boot API development',
        'Collaborated with cross-functional teams for feature implementation'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Work Experience</h2>
          <div className="grid grid-1" style={{ gap: '2rem' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{exp.title}</h3>
                <p style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{exp.company}</p>
                <p style={{ color: 'var(--secondary-text)', marginBottom: '1rem' }}>{exp.period}</p>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;