import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/Profile.webp';

const About = () => {
  return (
    <section id="about" className="section-padding" style={styles.section}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div style={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={styles.content}
          >
            <p style={styles.text}>
              I'm a CS Engineering graduate with a strong foundation in software development, 
              currently pursuing a PG-DAC at CDAC, Noida. I hold both M.Tech and B.Tech 
              degrees in Computer Science, bringing academic rigor and practical engineering 
              skills to every project.
            </p>
            <p style={styles.text}>
              With experience in full-stack development, I specialize in building robust 
              backends with Java and Spring Boot, and creating dynamic frontends with modern 
              JavaScript frameworks. I've also contributed to academic research with a 
              publication on Cloud Computing environments.
            </p>
            <ul style={styles.traits}>
              <li>⚡ Fast Learner</li>
              <li>🔍 Detail Oriented</li>
              <li>🤝 Team Player</li>
              <li>🚀 Problem Solver</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={styles.imageContainer}
          >
            <div style={styles.imagePlaceholder}>
              <div style={styles.imageInner}>
                <img src={profileImg} alt="Mayank Awasthi" style={styles.profileImage} />
              </div>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'center',
  },
  content: {
    color: 'var(--text-secondary)',
  },
  text: {
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
    lineHeight: 1.8,
  },
  traits: {
    listStyle: 'none',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginTop: '2rem',
    fontFamily: 'var(--font-heading)',
    color: 'var(--accent-color)',
  },
  imageContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    width: '300px',
    height: '400px',
    border: '2px solid var(--accent-color)',
    borderRadius: '12px',
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 20px var(--accent-transparent)',
    transition: 'transform 0.3s ease',
  },
  imageInner: {
    width: '100%',
    height: '100%',
    backgroundColor: 'var(--bg-card)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-heading)',
    color: 'var(--text-secondary)',
    fontSize: '1.5rem',
    transform: 'translate(-15px, -15px)',
    border: '1px solid var(--border-color)',
    transition: 'transform 0.3s ease',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  }
};

export default About;
