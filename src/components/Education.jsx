import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    period: 'Aug 2025 – Present',
    degree: 'PG-DAC',
    institution: 'CDAC, Noida',
    score: 'In Progress'
  },
  {
    period: '2018 – 2020',
    degree: 'M.Tech (Computer Science)',
    institution: 'Babasaheb Bhimrao Ambedkar University (BBAU)',
    score: '72.08%'
  },
  {
    period: '2014 – 2018',
    degree: 'B.Tech (Computer Engineering)',
    institution: 'Babasaheb Bhimrao Ambedkar University (BBAU)',
    score: '69.46%'
  }
];

const publicationData = {
  title: 'Optimal Virtual Machines Placement in Cloud Computing Environment',
  journal: 'International Journal of Innovative Technology & Exploring Engineering (IJITEE)',
  issn: '2278-3075',
  authors: 'Narender Kumar, Mayank Awasthi, Surendra Kumar',
  date: 'June 2019'
};

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <h2 className="section-title">Academic Background</h2>
        
        <div style={styles.container}>
          <div style={styles.educationSection}>
            <div style={styles.sectionHeader}>
              <GraduationCap size={32} color="var(--accent-color)" />
              <h3 style={styles.headerTitle}>Education</h3>
            </div>
            
            <div style={styles.timeline}>
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="tech-card"
                  style={styles.timelineCard}
                >
                  <div style={styles.date}>{edu.period}</div>
                  <h4 style={styles.degree}>{edu.degree}</h4>
                  <p style={styles.institution}>{edu.institution}</p>
                  <div style={styles.score}>Score: {edu.score}</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div style={styles.publicationSection}>
             <div style={styles.sectionHeader}>
              <Award size={32} color="var(--accent-color)" />
              <h3 style={styles.headerTitle}>Publication</h3>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="tech-card bg-glow"
              style={styles.pubCard}
            >
              <h4 style={styles.pubTitle}>{publicationData.title}</h4>
              <p style={styles.authors}><strong>Authors:</strong> {publicationData.authors}</p>
              <p style={styles.journal}>{publicationData.journal}</p>
              
              <div style={styles.pubMeta}>
                <span><strong>ISSN:</strong> {publicationData.issn}</span>
                <span><strong>Published:</strong> {publicationData.date}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
    gap: '4rem',
  },
  '@media (minWidth: 1024px)': {
    container: {
      gridTemplateColumns: '1fr 1fr',
    }
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  headerTitle: {
    margin: 0,
    fontSize: '1.8rem',
    color: '#fff',
  },
  timeline: {
    position: 'relative',
    paddingLeft: '2rem',
    borderLeft: '2px solid var(--border-color)',
  },
  timelineCard: {
    marginBottom: '2rem',
    position: 'relative',
  },
  date: {
    color: 'var(--accent-color)',
    fontFamily: 'var(--font-heading)',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  degree: {
    fontSize: '1.25rem',
    color: '#fff',
    margin: '0 0 0.5rem 0',
  },
  institution: {
    color: 'var(--text-secondary)',
    margin: '0 0 1rem 0',
  },
  score: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    backgroundColor: 'var(--bg-color)',
    border: '1px solid var(--border-color)',
    borderRadius: '4px',
    fontSize: '0.85rem',
    color: 'var(--accent-color)',
  },
  pubCard: {
    borderLeft: '4px solid var(--accent-color)',
  },
  pubTitle: {
    fontSize: '1.4rem',
    color: '#fff',
    lineHeight: 1.4,
    marginBottom: '1rem',
  },
  authors: {
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
    fontSize: '0.95rem',
  },
  journal: {
    color: 'var(--text-secondary)',
    fontStyle: 'italic',
    marginBottom: '1.5rem',
  },
  pubMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '1rem',
  }
};

export default Education;
