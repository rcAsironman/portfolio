import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '', // Match the template variable
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Form Data:', formData); // Debugging: Check the form data

    // Add the recipient's name (to_name) to the form data
    const emailData = {
      ...formData,
      to_name: 'Karthik' // Replace with your name or recipient's name
    };

    // Send email using EmailJS
    emailjs
      .send(
        'service_aw3gwn9', // Service ID
        'template_1880vmo', // Template ID
        emailData, // Form data
        'zFYIy93O5Wy_Ln-Fg' // Public Key
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          setSubmitStatus({
            success: true,
            message: 'Your message has been sent successfully!'
          });
          setFormData({ from_name: '', email: '', message: '' }); // Clear form
        },
        (error) => {
          console.error('Failed to send email:', error);
          setSubmitStatus({
            success: false,
            message: 'Failed to send your message. Please try again later.'
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Contact Me</h2>
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Get in Touch</h3>
                <p style={{ marginBottom: '2rem' }}>
                  I'm always interested in hearing about new projects and opportunities.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a href="mailto:kmangineni@slu.edu" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Mail size={20} />
                    kmangineni@slu.edu
                  </a>
                  <a href="tel:+13148146677" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={20} />
                    +1 314-814-6677
                  </a>
                  <a href="https://github.com/rcAsironman" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Github size={20} />
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/karthikfullstackdeveloper/" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="card">
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="from_name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name" // Match the template variable
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--background)',
                      color: 'var(--text)'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--background)',
                      color: 'var(--text)'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--background)',
                      color: 'var(--text)',
                      resize: 'vertical'
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus.message && (
                  <p style={{ marginTop: '1rem', color: submitStatus.success ? 'green' : 'red' }}>
                    {submitStatus.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;