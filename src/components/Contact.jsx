import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div style={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={styles.info}
          >
            <h3 style={styles.infoTitle}>Connect With Me</h3>
            <p style={styles.infoText}>
              I'm always open to discussing new projects, creative ideas or 
              opportunities to be part of your visions.
            </p>
            
            <div style={styles.contactDetails}>
               <div style={styles.detailItem}>
                <div style={styles.iconBox}><MapPin size={24} color="var(--accent-color)" /></div>
                <div>
                  <h4 style={styles.detailTitle}>Location</h4>
                  <p style={styles.detailText}>Lucknow, India</p>
                </div>
              </div>
              
              <div style={styles.detailItem}>
                <div style={styles.iconBox}><Phone size={24} color="var(--accent-color)" /></div>
                <div>
                  <h4 style={styles.detailTitle}>Phone</h4>
                  <p style={styles.detailText}>+91 6393471720 / +91 8756063660</p>
                </div>
              </div>
              
              <div style={styles.detailItem}>
                <div style={styles.iconBox}><Mail size={24} color="var(--accent-color)" /></div>
                <div>
                  <h4 style={styles.detailTitle}>Email</h4>
                  <a href="mailto:mayankawasthi619@gmail.com" style={styles.emailLink}>
                    mayankawasthi619@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="tech-card"
            style={styles.formContainer}
          >
            <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" style={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--bg-color)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoTitle: {
    fontSize: '2rem',
    color: '#fff',
    marginBottom: '1rem',
  },
  infoText: {
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
    fontSize: '1.1rem',
    lineHeight: 1.6,
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  iconBox: {
    width: '50px',
    height: '50px',
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all var(--transition-speed) ease',
  },
  detailTitle: {
    margin: '0 0 0.25rem 0',
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  detailText: {
    margin: 0,
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  emailLink: {
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'color var(--transition-speed) ease',
  },
  formContainer: {
    padding: '2.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '0.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-heading)',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  submitBtn: {
    width: '100%',
    justifyContent: 'center',
    marginTop: '1rem',
  }
};

export default Contact;
