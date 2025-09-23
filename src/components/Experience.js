import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'UCSF LIN Lab (Remote)',
      period: 'Jan 2025 – Present',
      responsibilities: [
        'Developed SoundWell mobile app for patients with congestive heart disease and cleft palate to record audio of target sentences for AI analysis',
        'Used React Native, Firebase backend, Zustand state management, and Figma for UI/UX design'
      ]
    },
    {
      title: 'Founder & Full Stack Developer',
      company: 'ShipMyPack (Proprietorship) – India',
      period: 'May 2025 – Present',
      responsibilities: [
        'Built a peer-to-peer logistics platform using React Native, NestJS, Firebase, and PostgreSQL',
        'Implemented real-time notifications, OTP authentication, secure payments, and smooth UI across devices'
      ]
    },
    {
      title: 'Graduate Student Worker',
      company: 'Saint Louis University – St. Louis, MO',
      period: 'Aug 2024 – Aug 2025',
      responsibilities: [
        'Redesigned and developed Where’s Religion mobile app (Expo, iOS/Android) from Figma designs',
        'Fixed authentication and theme flow using Redux + Context API',
        'Improved video playback by fixing Vimeo delays and implementing state-based auto-play in InnerPeace app',
        'Contributed to UI/UX improvements, feature enhancements, and bug fixes for multiple React Native apps'
      ]
    },
    {
      title: 'Trainee Software Engineer (Intern)',
      company: 'TechEFolks – Madhapur, India',
      period: 'Dec 2022 – Jun 2023',
      responsibilities: [
        'Assisted in full-stack development, debugging, and feature implementation',
        'Collaborated with an agile team for project deliverables'
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
