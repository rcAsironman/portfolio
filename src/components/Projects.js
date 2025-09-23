import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

function Projects() {
  const projects = [
    // Resume projects (no GitHub links)
    {
      title: 'Just a Second Connector',
      description: 'Social good project giving people a second chance in life. Served as Tech Lead, UX Designer, and Developer.',
      tech: ['React', 'Express']
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat platform using socket programming. Users can register, select regions, and chat instantly.',
      tech: ['Socket Programming', 'Java']
    },
    {
      title: 'Multi-Messaging App',
      description: 'Multi-account messaging application built with React Native (Expo) enabling smooth messaging across WhatsApp accounts.',
      tech: ['React Native', 'Expo']
    },
    {
      title: 'Reminder App',
      description: 'Reminder and scheduling app built with React Native, enabling notifications and task management with a clean UI.',
      tech: ['React Native']
    },
    // Other projects
    {
      title: 'Weather App',
      description: 'Real-time weather application built with Angular and Weather API integration.',
      tech: ['Angular', 'TypeScript', 'Weather API'],
      github: 'https://github.com/rcAsironman/weather'
    },
    {
      title: 'News App',
      description: 'News aggregator application with category filtering and search functionality.',
      tech: ['Angular', 'RxJS', 'News API'],
      github: 'https://github.com/rcAsironman/News'
    },
    {
      title: 'ID Card Generator',
      description: 'Web application for generating digital ID cards with database integration.',
      tech: ['React', 'PostgreSQL', 'Node.js'],
      github: 'https://github.com/rcAsironman/id-card-generator'
    },
    {
      title: 'LiveShoper Admin Panel',
      description: 'Administrative dashboard for managing e-commerce operations.',
      tech: ['React', 'Redux', 'Material-UI'],
      github: 'https://github.com/rcAsironman/liveshoper-admin'
    },
    {
      title: 'Grocer App',
      description: 'Mobile application for online grocery shopping with real-time tracking.',
      tech: ['React Native', 'Spring Boot', 'Google Maps API'],
      github: 'https://github.com/rcAsironman/grocer-app'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Projects</h2>
          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <p style={{ marginBottom: '1rem', color: 'var(--secondary-text)' }}>
                  {project.description}
                </p>
                <div style={{ marginBottom: '1rem' }}>
                  {project.tech.map(tech => (
                    <span key={tech} className="skill-tag">{tech}</span>
                  ))}
                </div>
                {project.github && (
                  <div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      <Github size={20} />
                      View Code
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;