import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Server, Code, Database } from 'lucide-react';

const skillsData = [
  {
    category: 'AI & GenAI Architecture',
    icon: <Bot size={28} color="var(--accent-color)" />,
    skills: [
      'Spring AI',
      'RAG Architectures',
      'pgvector (Vector DB)',
      'Ollama / Local LLMs',
      'Multi-Step Autonomous Agents',
      'Context Pruning & SSE Streaming',
      'Prompt Engineering',
      'LangChain / LLM APIs',
      'Scikit-Learn',
      'Pandas / NumPy'
    ]
  },
  {
    category: 'Backend & Java Ecosystem',
    icon: <Server size={28} color="var(--accent-color)" />,
    skills: [
      'Java 21 LTS / 17',
      'Spring Boot 3.4+',
      'Spring Security',
      'JWT & RBAC Auth',
      'RESTful APIs',
      'Microservices',
      'Hibernate / JPA',
      'Apache PDFBox',
      'Redis Caching',
      'Node.js / Express'
    ]
  },
  {
    category: 'Frontend & UI Engineering',
    icon: <Code size={28} color="var(--accent-color)" />,
    skills: [
      'React 18 / 19',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Vite',
      'Glassmorphic UI / CSS3',
      'Framer Motion',
      'Lucide React',
      'Responsive Web Design',
      'State Management'
    ]
  },
  {
    category: 'Databases, Cloud & DevOps',
    icon: <Database size={28} color="var(--accent-color)" />,
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Docker & Docker Compose',
      'Render Blueprint (render.yaml)',
      'GitHub Actions CI/CD',
      'Git / GitHub',
      'Linux / Bash',
      'Power BI',
      'Agile / Scrum'
    ]
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
              style={styles.card}
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
  card: {
    display: 'flex',
    flexDirection: 'column',
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
