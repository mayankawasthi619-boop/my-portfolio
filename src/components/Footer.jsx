import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.brand}>
          <span style={styles.logo}>&lt;Mayank /&gt;</span>
          <p style={styles.tagline}>Building robust and scaleable digital experiences.</p>
        </div>
        
        <div style={styles.socials}>
          <a href="https://github.com/mayankawasthi619-boop" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/mayank-awasthi-1a1771167" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <Linkedin size={20} />
          </a>
          <a href="mailto:mayankawasthi619@gmail.com" style={styles.iconLink}>
            <Mail size={20} />
          </a>
        </div>
        
        <div style={styles.copyright}>
          &copy; {currentYear} Mayank Awasthi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0a0a0a',
    padding: '4rem 0 2rem 0',
    borderTop: '1px solid var(--border-color)',
    color: 'var(--text-secondary)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    textAlign: 'center',
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logo: {
    fontFamily: 'var(--font-heading)',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'var(--accent-color)',
    letterSpacing: '1px',
    marginBottom: '0.5rem',
  },
  tagline: {
    margin: 0,
    fontSize: '0.95rem',
  },
  socials: {
    display: 'flex',
    gap: '1.5rem',
  },
  iconLink: {
    color: 'var(--text-secondary)',
    transition: 'color var(--transition-speed) ease',
  },
  copyright: {
    fontSize: '0.85rem',
    opacity: 0.7,
    marginTop: '2rem',
  }
};

export default Footer;
