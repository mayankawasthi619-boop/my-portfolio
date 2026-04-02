import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="section-padding" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Industry Experience</h2>
        
        <div style={styles.timeline}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="tech-card"
            style={{...styles.card, marginBottom: '2rem'}}
          >
            <div style={styles.date}>2017–2020 & 2023–2025</div>
            <h3 style={styles.role}>Private Academic Tutor</h3>
            <h4 style={styles.company}>Self-Employed, Lucknow</h4>
            
            <p style={styles.description}>
              Delivered personalised tutoring sessions to 20+ students; managed scheduling and tracked academic progress. 
              Independently upskilled in data analytics and software engineering.
            </p>
            
            <div style={styles.techStack}>
              <span className="tag">Mentorship</span>
              <span className="tag">Communication</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="tech-card"
            style={styles.card}
          >
            <div style={styles.date}>Jan 2018 – Jul 2018</div>
            <h3 style={styles.role}>Software Developer Intern</h3>
            <h4 style={styles.company}>e-Soft Technologies Ltd., Lucknow</h4>
            
            <p style={styles.description}>
              Developed the Online Clinical Trial Application and Management System. 
              Implemented RBAC and secure login module with zero unauthorized access incidents.
            </p>
            
            <div style={styles.techStack}>
              <span className="tag">PHP 5.3</span>
              <span className="tag">MySQL 5.5</span>
              <span className="tag">RBAC</span>
              <span className="tag">Web Dev</span>
            </div>
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
  timeline: {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
    paddingLeft: '2rem',
    borderLeft: '2px solid var(--border-color)',
  },
  card: {
    position: 'relative',
  },
  date: {
    color: 'var(--accent-color)',
    fontFamily: 'var(--font-heading)',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  role: {
    fontSize: '1.5rem',
    margin: '0 0 0.5rem 0',
    color: '#fff',
  },
  company: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    margin: '0 0 1rem 0',
  },
  description: {
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
  },
};

export default Experience;
