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
            style={styles.card}
          >
            <div style={styles.date}>Jan 2018 – Jul 2018</div>
            <h3 style={styles.role}>Intern Trainee Software Developer</h3>
            <h4 style={styles.company}>e-Soft Technologies, Lucknow</h4>
            
            <p style={styles.description}>
              Developed the Online Clinical Trial Application and Management System. 
              Worked extensively on backend architecture and database modeling.
            </p>
            
            <div style={styles.techStack}>
              <span className="tag">PHP 5.3</span>
              <span className="tag">MySQL 5.5</span>
              <span className="tag">Frontend</span>
              <span className="tag">Backend</span>
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
