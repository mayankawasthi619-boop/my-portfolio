import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles, ArrowRight } from 'lucide-react';

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
          <div style={styles.badgeWrapper}>
            <span style={styles.badge}>
              <Sparkles size={14} color="var(--accent-color)" /> Java 21 • Spring AI • GenAI Platforms
            </span>
          </div>

          <p style={styles.greeting}>Hi, I am</p>
          <h1 style={styles.name} className="text-gradient">Mayank Awasthi</h1>
          <h2 style={styles.title}>Full-Stack AI & Backend Engineer | Java / Spring Boot & GenAI</h2>
          
          <p style={styles.tagline}>
            Engineering production-grade AI platforms, intelligent document processing systems, and 
            high-throughput Spring Boot backends. Specializing in <strong>Spring AI</strong>, <strong>RAG with pgvector</strong>, 
            <strong>local LLM routing (Ollama)</strong>, and autonomous multi-agent architectures.
          </p>
          
          <div style={styles.actions}>
            <a href="#projects" className="btn btn-primary" style={styles.primaryBtn}>
              Explore Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">Let's Talk</a>
            <div style={styles.socials}>
              <a href="https://github.com/mayankawasthi619-boop" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={24} /></a>
              <a href="https://linkedin.com/in/mayank-awasthi-1a1771167" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24} /></a>
              <a href="mailto:mayankawasthi619@gmail.com" aria-label="Email"><Mail size={24} /></a>
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
    paddingTop: '110px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    maxWidth: '850px',
  },
  badgeWrapper: {
    marginBottom: '1.25rem',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.4rem 1rem',
    backgroundColor: 'var(--accent-transparent)',
    border: '1px solid var(--accent-glow)',
    borderRadius: '30px',
    color: 'var(--accent-color)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
  },
  greeting: {
    color: 'var(--accent-color)',
    fontFamily: 'var(--font-heading)',
    fontSize: '1.2rem',
    marginBottom: '0.75rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  name: {
    fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
    margin: 0,
    lineHeight: 1.1,
    letterSpacing: '-1px',
    color: '#fff',
  },
  title: {
    fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
    color: 'var(--text-secondary)',
    marginTop: '0.75rem',
    marginBottom: '1.5rem',
    fontWeight: '500',
  },
  tagline: {
    fontSize: '1.05rem',
    color: 'var(--text-primary)',
    maxWidth: '720px',
    lineHeight: 1.7,
    marginBottom: '2.5rem',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  socials: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
    marginLeft: '0.5rem',
  }
};

export default Hero;
