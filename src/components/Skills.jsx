import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Settings } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming & DB',
    icon: <Code size={30} color="var(--accent-color)" />,
    skills: ['Java 17', 'Python', 'SQL / PostgreSQL', 'JavaScript', 'PHP', 'C++']
  },
  {
    category: 'Web Dev & Frameworks',
    icon: <Server size={30} color="var(--accent-color)" />,
    skills: ['Spring Boot 3', 'Spring Security', 'Hibernate', 'React.js', 'REST APIs', 'Microservices', 'Bootstrap 5']
  },
  {
    category: 'Data & Machine Learning',
    icon: <Database size={30} color="var(--accent-color)" />,
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib/Seaborn', 'Plotly', 'K-Means', 'EDA']
  },
  {
    category: 'Tools & DevOps',
    icon: <Settings size={30} color="var(--accent-color)" />,
    skills: ['Power BI', 'Tableau', 'Docker', 'Kubernetes', 'Git/GitHub', 'Jupyter', 'Agile/Scrum']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="section-title">Technical Arsenal</h2>
        
        <div style={styles.grid}>
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="tech-card"
            >
              <div style={styles.iconContainer}>
                {category.icon}
                <h3 style={styles.cardTitle}>{category.category}</h3>
              </div>
              <div style={styles.skillTags}>
                {category.skills.map((skill, i) => (
                  <span key={i} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  cardTitle: {
    margin: 0,
    fontSize: '1.25rem',
    color: 'var(--text-primary)',
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};

export default Skills;
