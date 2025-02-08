import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import karthikImage from "../assets/portfolioImage.png"
function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  // Path to the resume file in the public folder
  const resumeUrl = process.env.PUBLIC_URL + '/Karthik_Resume.pdf';

  return (
    <section className="section" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '5rem'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>
                Karthik Mangineni
              </h1>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--secondary-text)', marginBottom: '2rem' }}>
                Full Stack Developer | Angular | React | Flutter | Spring Boot |
              </h2>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--secondary-text)', marginBottom: '2rem' }}>
                 Java | Spring Boot 
              </h2>
              <div style={{ display: 'flex', gap: '1rem' }}>
               <a href={resumeUrl} download="Karthik_Mangineni_Resume.pdf">
               <button className="btn btn-primary">
                  <Download size={20} />
                  Download Resume
                </button>
               </a>
                <button className="btn btn-outline" onClick={scrollToContact}>
                  <Mail size={20} />
                  Contact Me
                </button>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <img 
                src={karthikImage}
                alt="Karthik Mangineni"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  borderRadius: '2rem',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero