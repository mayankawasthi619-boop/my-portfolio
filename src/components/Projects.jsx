import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: 'E-Commerce Shopping Cart System',
    description: 'A robust full-stack e-commerce platform featuring dynamic cart management, secure checkout, and Admin Dashboard. Achieved sub-200ms API response via optimized JPA/Hibernate queries.',
    tech: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'MySQL', 'Docker'],
    features: [
      'Role-based access control (Admin/User)',
      'Stateless auth with JWT & BCrypt',
      'Token-based Forgot Password workflow',
      'Full CRUD for inventory and orders'
    ],
    github: 'https://github.com/mayankawasthi619',
    demo: '#'
  },
  {
    title: 'End-to-End E-Commerce Sales Analysis',
    description: 'Developed an automated data cleaning pipeline and calculated Month-over-Month growth and repeat-buyer cohort analysis using advanced SQL. Delivered an interactive Power BI dashboard tracking KPIs.',
    tech: ['Python', 'PostgreSQL', 'Pandas', 'Power BI', 'Seaborn'],
    features: [
      'Data cleaning (10,000+ rows)',
      'SQL Window Functions & CTEs',
      'Exploratory Data Analysis (EDA)',
      'Actionable pricing strategy reports'
    ],
    github: 'https://github.com/mayankawasthi619-boop/End-to-End-Ecommerce-Analysis',
    demo: '#'
  },
  {
    title: 'Hospital Management System',
    description: 'End-to-end healthcare application with patient registration, ward allocation, and automated billing. Containerized the full stack with Docker Compose eliminating environment bugs.',
    tech: ['Java 17', 'Spring Boot 3', 'React.js', 'Vite', 'Docker Compose'],
    features: [
      'Responsive React.js UI with Router',
      'Exposed RESTful APIs tested via Postman',
      'Containerized deployments',
      'Secure login and roles'
    ],
    github: 'https://github.com/mayankawasthi619',
    demo: '#'
  },
  {
    title: 'Customer Segmentation using RFM Analysis',
    description: 'Built a rule-based RFM scoring model and implemented unsupervised Machine Learning via Scikit-Learn K-Means algorithm to discover hidden behavioural shopping personas across 500k+ records.',
    tech: ['Python', 'Scikit-Learn', 'NumPy', 'Plotly', 'Matplotlib'],
    features: [
      'Unsupervised ML (K-Means Clustering)',
      'RFM Modeling & Scoring',
      'Handled missing data & outliers',
      'Interactive 3D Scatter plots'
    ],
    github: 'https://github.com/mayankawasthi619-boop/customer-segmentation-rfm',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div style={styles.grid}>
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="tech-card"
              style={styles.card}
            >
              <div style={styles.cardHeader}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <div style={styles.links}>
                  <a href={project.github} style={styles.iconLink}><Github size={20} /></a>
                  <a href={project.demo} style={styles.iconLink}><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <p style={styles.description}>{project.description}</p>
              
              <div style={styles.features}>
                <h4 style={styles.featureTitle}>Key Features:</h4>
                <ul style={styles.featureList}>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div style={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
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
  section: {
    backgroundColor: 'var(--bg-color)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2.5rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  projectTitle: {
    fontSize: '1.5rem',
    color: '#fff',
    margin: 0,
    flex: 1,
  },
  links: {
    display: 'flex',
    gap: '1rem',
    marginLeft: '1rem',
  },
  iconLink: {
    color: 'var(--text-secondary)',
    transition: 'color var(--transition-speed) ease',
  },
  description: {
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
    fontSize: '0.95rem',
  },
  features: {
    flexGrow: 1,
    marginBottom: '1.5rem',
  },
  featureTitle: {
    fontSize: '1rem',
    color: 'var(--accent-color)',
    marginBottom: '0.5rem',
    fontFamily: 'var(--font-heading)',
  },
  featureList: {
    margin: 0,
    paddingLeft: '1.2rem',
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    lineHeight: 1.6,
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 'auto',
    paddingTop: '1.5rem',
    borderTop: '1px solid var(--border-color)',
  }
};

export default Projects;
