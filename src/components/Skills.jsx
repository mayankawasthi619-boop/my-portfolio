import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Settings } from 'lucide-react';

const skillsData = [
  {
    category: 'Languages',
    icon: <Code size={30} color="var(--accent-color)" />,
    skills: ['PHP', 'C++', 'Java (Core + Adv)', 'C#', 'JavaScript', 'Python']
  },
  {
    category: 'Frameworks/Tools',
    icon: <Server size={30} color="var(--accent-color)" />,
    skills: ['React', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data', '.NET', 'Bootstrap', 'Microservices', 'JDBC', 'Servlets', 'JSP']
  },
  {
    category: 'Databases',
    icon: <Database size={30} color="var(--accent-color)" />,
    skills: ['MySQL', 'MongoDB']
  },
  {
    category: 'DevOps & Analytics',
    icon: <Settings size={30} color="var(--accent-color)" />,
    skills: ['Git', 'GitHub', 'Git Bash', 'Docker', 'Kubernetes', 'MS Excel', 'Power BI']
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
