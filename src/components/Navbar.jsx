import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
        <div style={styles.logo}>
          <span>&lt;Mayank /&gt;</span>
        </div>
        <ul style={styles.links}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    padding: '1.5rem 0',
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(5, 5, 5, 0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    borderBottom: '1px solid var(--border-color)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--accent-color)',
    letterSpacing: '1px',
  },
  links: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0,
    fontFamily: 'var(--font-heading)',
  }
};

export default Navbar;
