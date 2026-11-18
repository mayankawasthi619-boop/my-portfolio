import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/Profile.jpg';

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
              I'm a Computer Science Engineer holding both <strong>M.Tech</strong> and <strong>B.Tech</strong> degrees in Computer Science, currently completing <strong>PG-DAC at CDAC, Noida</strong>. I combine deep computer science fundamentals and academic rigor with hands-on software craftsmanship.
            </p>
            <p style={styles.text}>
              I specialize in architecting modern <strong>AI Platforms</strong> and enterprise-grade backends using <strong>Java 21, Spring Boot 3.4+, and Spring AI</strong>. My recent work focuses on <strong>Retrieval-Augmented Generation (RAG)</strong> with PostgreSQL and pgvector, dynamic model routing (local Ollama & cloud LLMs), sandboxed container execution, and <strong>real-time document parsing heuristics</strong> using Apache PDFBox.
            </p>
            <p style={styles.text}>
              Whether engineering autonomous multi-step agentic workflows, building low-latency REST APIs, or crafting sleek React/TypeScript interfaces, I build production-ready systems designed for privacy, performance, and scale.
            </p>
            <ul style={styles.traits}>
              <li>🤖 GenAI & Spring AI</li>
              <li>☕ Java 21 & Spring Boot</li>
              <li>🧠 RAG & pgvector Vector DB</li>
              <li>🚀 Full-Stack AI Architecture</li>
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
                <img src={profileImg} alt="Mayank Awasthi" style={styles.profileImage} className="float-animation" />
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
    fontSize: '1.05rem',
    lineHeight: 1.8,
  },
  traits: {
    listStyle: 'none',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginTop: '2rem',
    fontFamily: 'var(--font-heading)',
    color: 'var(--accent-color)',
    fontWeight: '600',
  },
  imageContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    width: '320px',
    height: '400px',
    border: '2px solid var(--accent-color)',
    borderRadius: '16px',
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 25px var(--accent-transparent)',
    transition: 'transform 0.3s ease',
  },
  imageInner: {
    width: '100%',
    height: '100%',
    backgroundColor: 'var(--bg-card)',
    borderRadius: '14px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translate(-12px, -12px)',
    border: '1px solid var(--border-color)',
    transition: 'transform 0.3s ease',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    borderRadius: '14px',
  }
};

export default About;
