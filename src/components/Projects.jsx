import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Layers } from 'lucide-react';

const projectsData = [
  {
    title: 'Personal AI Platform 🤖',
    badge: 'Flagship AI Platform',
    featured: true,
    description: 'A private, modular, extensible Personal AI Assistant platform capable of running 100% locally on your computer or deployed securely to a private server. Built with Java 21 LTS, Spring Boot 3.4+, Spring AI, PostgreSQL + pgvector, Redis, and React 18 + TypeScript + Vite + Tailwind CSS.',
    tech: ['Java 21 LTS', 'Spring Boot 3.4+', 'Spring AI', 'PostgreSQL + pgvector', 'Redis', 'React 18', 'TypeScript', 'Tailwind CSS', 'Docker', 'Ollama'],
    features: [
      'Real-time SSE token streaming, multi-turn chat management, editing, retry, and context window pruning',
      'Multi-Tier Memory Architecture: Short-term conversation context, pgvector semantic memory, episodic memory & dynamic scoring',
      'Retrieval-Augmented Generation (RAG): Multi-format parser (PDF, DOCX, TXT, CSV), recursive chunking & source citations',
      'Smart Model Router: Dynamic routing between local LLMs (Ollama, llama.cpp, vLLM) and cloud APIs (OpenAI, Anthropic, Gemini)',
      'Sandboxed Tool Engine: Docker containerized code execution, web search, document reader, calculator & unit converter',
      'Autonomous Multi-Step Agents: Task planning and execution loops with human-in-the-loop safety approvals',
      'Zero-Downtime Cloud Deployment: Native Render Blueprint (render.yaml) & automated GitHub Actions CI/CD'
    ],
    github: 'https://github.com/mayankawasthi619-boop/personal-ai-system',
    demo: 'https://github.com/mayankawasthi619-boop/personal-ai-system/blob/main/render.yaml'
  },
  {
    title: 'ResumeParser Dashboard 🚀',
    badge: 'Intelligent Document Processing',
    featured: true,
    description: 'An intelligence-driven resume parsing system built with Spring Boot and React. It extracts key structural parameters from PDF resumes in real-time using custom heuristics, presenting them through a premium glassmorphic dashboard interface and a formatted JSON structure.',
    tech: ['Java 17', 'Spring Boot 3.2', 'Apache PDFBox', 'React 18', 'Vite', 'REST API', 'Vanilla CSS Glassmorphism', 'In-Memory Cache'],
    features: [
      'Dynamic Drag & Drop Upload: Sleek dash-bordered dropzone supporting direct PDF uploads in real-time',
      'Intelligent Extraction Heuristics: High-accuracy regex patterns for Email/Phone and layout-based candidate name detection',
      'Core Technical Skills Scanner: Scans for 70+ technical skill strings (Java, React, Docker, AWS, etc.) with augmented heuristics',
      'Section-Parsing Filters: Maps Education, Work Experience, Projects, and Certifications into clean timeline elements',
      'Dual-View Presentation: Modern profile dashboard with cards and badges + dark-terminal syntax JSON display with copy/export',
      'In-Memory Session History: Toggle instantly between recently parsed CVs during an active browser session'
    ],
    github: 'https://github.com/mayankawasthi619-boop/ResumeParser-Dashboard',
    demo: 'https://github.com/mayankawasthi619-boop/ResumeParser-Dashboard'
  },
  {
    title: 'FactoryAI: AI-Powered Worker Productivity Dashboard',
    badge: 'Telemetry & Ingestion',
    featured: false,
    description: 'A production-style full-stack telemetry ingestion and analysis platform processing real-time worker activity and workstation utilization from AI-powered shop floor cameras.',
    tech: ['Node.js', 'Express.js', 'SQLite', 'Vanilla JS (ES6+)', 'Docker', 'Custom SVG Charts'],
    features: [
      'Telemetry Ingestion API for real-time cameras',
      'Zero-dependency custom SVG donut & bar charts',
      'Idempotent ingestion (INSERT OR IGNORE deduplication)',
      'Kafka / TimescaleDB scalability architecture plan'
    ],
    github: 'https://github.com/mayankawasthi619-boop/ai-powered-worker-productivity-dashboard',
    demo: 'https://github.com/mayankawasthi619-boop/ai-powered-worker-productivity-dashboard'
  },
  {
    title: 'E-Commerce Shopping Cart System',
    badge: 'Enterprise Backend',
    featured: false,
    description: 'A robust full-stack e-commerce platform featuring dynamic cart management, secure checkout, and Admin Dashboard. Achieved sub-200ms API response via optimized JPA/Hibernate queries.',
    tech: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'MySQL', 'Docker'],
    features: [
      'Role-based access control (Admin/User)',
      'Stateless auth with JWT & BCrypt',
      'Token-based Forgot Password workflow',
      'Full CRUD for inventory and orders'
    ],
    github: 'https://github.com/mayankawasthi619',
    demo: 'https://github.com/mayankawasthi619'
  },
  {
    title: 'End-to-End E-Commerce Sales Analysis',
    badge: 'Data Analytics & SQL',
    featured: false,
    description: 'Developed an automated data cleaning pipeline and calculated Month-over-Month growth and repeat-buyer cohort analysis using advanced SQL. Delivered an interactive Power BI dashboard tracking KPIs.',
    tech: ['Python', 'PostgreSQL', 'Pandas', 'Power BI', 'Seaborn'],
    features: [
      'Data cleaning (10,000+ rows)',
      'SQL Window Functions & CTEs',
      'Exploratory Data Analysis (EDA)',
      'Actionable pricing strategy reports'
    ],
    github: 'https://github.com/mayankawasthi619-boop/End-to-End-Ecommerce-Analysis',
    demo: 'https://github.com/mayankawasthi619-boop/End-to-End-Ecommerce-Analysis'
  },
  {
    title: 'Customer Segmentation using RFM & K-Means',
    badge: 'Machine Learning',
    featured: false,
    description: 'Built a rule-based RFM scoring model and implemented unsupervised Machine Learning via Scikit-Learn K-Means algorithm to discover hidden behavioural shopping personas across 500k+ records.',
    tech: ['Python', 'Scikit-Learn', 'NumPy', 'Plotly', 'Matplotlib'],
    features: [
      'Unsupervised ML (K-Means Clustering)',
      'RFM Modeling & Scoring',
      'Handled missing data & outliers',
      'Interactive 3D Scatter plots'
    ],
    github: 'https://github.com/mayankawasthi619-boop/customer-segmentation-rfm',
    demo: 'https://github.com/mayankawasthi619-boop/customer-segmentation-rfm'
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="tech-card"
              style={{
                ...styles.card,
                ...(project.featured ? styles.featuredCard : {})
              }}
            >
              {project.badge && (
                <div style={styles.badgeWrapper}>
                  <span style={project.featured ? styles.featuredBadge : styles.regularBadge}>
                    {project.featured && <Sparkles size={12} style={{ marginRight: '4px' }} />}
                    {project.badge}
                  </span>
                </div>
              )}

              <div style={styles.cardHeader}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <div style={styles.links}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.iconLink}
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  {project.demo && project.demo !== '#' && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={styles.iconLink}
                      aria-label="Live Demo or Architecture"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p style={styles.description}>{project.description}</p>
              
              <div style={styles.features}>
                <h4 style={styles.featureTitle}>Key Capabilities & Engineering:</h4>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
    gap: '2.5rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
  },
  featuredCard: {
    borderColor: 'var(--accent-glow)',
    boxShadow: '0 8px 32px rgba(0, 240, 255, 0.08)',
  },
  badgeWrapper: {
    marginBottom: '0.85rem',
  },
  featuredBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.75rem',
    backgroundColor: 'var(--accent-transparent)',
    color: 'var(--accent-color)',
    border: '1px solid var(--accent-glow)',
    borderRadius: '16px',
    fontSize: '0.75rem',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  regularBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.65rem',
    backgroundColor: '#1a1a1a',
    color: 'var(--text-secondary)',
    border: '1px solid #333',
    borderRadius: '16px',
    fontSize: '0.75rem',
    fontFamily: 'var(--font-mono)',
    letterSpacing: '0.5px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
    gap: '1rem',
  },
  projectTitle: {
    fontSize: '1.4rem',
    color: '#fff',
    margin: 0,
    flex: 1,
    lineHeight: 1.3,
  },
  links: {
    display: 'flex',
    gap: '0.85rem',
    flexShrink: 0,
  },
  iconLink: {
    color: 'var(--text-secondary)',
    transition: 'color var(--transition-speed) ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
  },
  description: {
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
    fontSize: '0.95rem',
    lineHeight: 1.6,
  },
  features: {
    flexGrow: 1,
    marginBottom: '1.5rem',
  },
  featureTitle: {
    fontSize: '0.95rem',
    color: 'var(--accent-color)',
    marginBottom: '0.5rem',
    fontFamily: 'var(--font-heading)',
  },
  featureList: {
    margin: 0,
    paddingLeft: '1.2rem',
    color: 'var(--text-secondary)',
    fontSize: '0.88rem',
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
