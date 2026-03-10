import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const certificationsData = [
  {
    title: 'Certified in PHP',
    issuer: 'e-Soft Technologies Ltd',
    year: '2018'
  },
  {
    title: 'Technical Training Certificate',
    issuer: 'Hindustan Aeronautics Limited (HAL)',
    year: '2017'
  },
  {
    title: 'Certified in Creating a Spark for AI',
    issuer: 'Mindspark',
    year: '2020'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div style={styles.grid}>
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="tech-card"
              style={styles.card}
            >
              <div style={styles.iconWrapper}>
                <ShieldCheck size={28} color="var(--bg-color)" />
              </div>
              <h3 style={styles.certTitle}>{cert.title}</h3>
              <p style={styles.issuer}>{cert.issuer}</p>
              <div style={styles.year}>{cert.year}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--bg-card)',
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '3rem 2rem',
  },
  iconWrapper: {
    width: '60px',
    height: '60px',
    backgroundColor: 'var(--accent-color)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    boxShadow: '0 0 15px var(--accent-glow)',
  },
  certTitle: {
    fontSize: '1.25rem',
    color: '#fff',
    marginBottom: '0.75rem',
  },
  issuer: {
    color: 'var(--text-secondary)',
    fontSize: '1rem',
    marginBottom: '1.5rem',
  },
  year: {
    display: 'inline-block',
    padding: '0.25rem 1rem',
    backgroundColor: 'var(--accent-transparent)',
    color: 'var(--accent-color)',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginTop: 'auto',
  }
};

export default Certifications;
