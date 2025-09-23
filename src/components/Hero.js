import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import karthikImage from "../assets/portfolioImage.png";

function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  // Path to the resume file in the public folder
  const resumeUrl = process.env.PUBLIC_URL + '/Karthik_Resume.pdf';

  return (
    <section
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '5rem'
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* ===== Profile Section ===== */}
          <div
            className="hero-container"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4rem',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '4rem'
            }}
          >
            {/* Text Block */}
            <div style={{ flex: 1, minWidth: '300px', maxWidth: '600px' }}>
              <h1
                style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem'
                }}
              >
                Karthik Mangineni
              </h1>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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

            {/* Profile Image */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                minWidth: '300px'
              }}
            >
              <img
                src={karthikImage}
                alt="Karthik Mangineni"
                style={{
                  width: '100%',
                  maxWidth: '550px',
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

export default Hero;
