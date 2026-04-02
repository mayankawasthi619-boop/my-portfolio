import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={styles.section} className="section-padding">
      <div className="container" style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.content}
        >
          <p style={styles.greeting}>Hi, I am</p>
          <h1 style={styles.name} className="text-gradient">Mayank Awasthi</h1>
          <h2 style={styles.title}>Full-Stack Developer | Data & Business Analyst</h2>
          
          <p style={styles.tagline}>
            Engineering robust scalable web applications and delivering data-driven business insights 
            through advanced analytics, machine learning, and comprehensive dashboards.
          </p>
          
          <div style={styles.actions}>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
            <div style={styles.socials}>
              <a href="https://github.com/mayankawasthi619-boop" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
              <a href="https://linkedin.com/in/mayank-awasthi-1a1771167" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
              <a href="mailto:mayankawasthi619@gmail.com"><Mail size={24} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '100px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    maxWidth: '800px',
  },
  greeting: {
    color: 'var(--accent-color)',
    fontFamily: 'var(--font-heading)',
    fontSize: '1.2rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  name: {
    fontSize: '5vw',
    minFontSize: '3rem',
    margin: 0,
    lineHeight: 1.1,
    letterSpacing: '-1px',
    color: '#fff',
  },
  title: {
    fontSize: '2vw',
    minFontSize: '1.5rem',
    color: 'var(--text-secondary)',
    marginTop: '0.5rem',
    marginBottom: '1.5rem',
  },
  tagline: {
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
    maxWidth: '600px',
    marginBottom: '3rem',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  socials: {
    display: 'flex',
    gap: '1.5rem',
  }
};

export default Hero;
