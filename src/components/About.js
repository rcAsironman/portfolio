import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>About Me</h2>
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            <div>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                I am a passionate Full Stack Developer with expertise in building modern web and mobile applications.
                Currently pursuing my Master's in Computer Science at Saint Louis University, I combine academic
                excellence with practical experience in developing robust applications using React, Java Spring Boot,
                and various other technologies.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Education</h3>
              <div className="card" style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: 600 }}>Master of Science in Computer Science</h4>
                <p style={{ color: 'var(--secondary-text)' }}>Saint Louis University</p>
                <p>Expected Dec 2025</p>
              </div>
              <div className="card">
                <h4 style={{ fontWeight: 600 }}>Bachelor of Technology in Computer Science</h4>
                <p style={{ color: 'var(--secondary-text)' }}>Swarnandhra College of Engineering and Technology</p>
                <p>May 2023</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;