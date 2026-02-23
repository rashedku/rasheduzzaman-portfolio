import React from 'react';

function Hero() {
  return (
    <section style={styles.hero}>
      {/* Moved the image inside the return statement */}
      <img 
        src="/Rasheduzzaman_801606.jpg" 
        alt="Rasheduzzaman"
        style={styles.profileImg} 
      />
      
      <h1 style={styles.name}>Rasheduzzaman</h1>
      <p style={styles.title}>Environmental Sustainability Officer</p>
      <p style={styles.subtitle}>MSc. Environmental Science | 7+ Years Experience</p>
      <p style={styles.contact}>
        📱 +8801745872364  |   
        ✉️ rasheduzzamanr5@yahoo.com
      </p>
      <p style={styles.award}>🏆 PUMA Sustainability Award 2023</p>
    </section>
  );
}

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #1a365d, #2b6cb0)',
    color: 'white',
    textAlign: 'center',
    padding: '80px 20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // Added the image style here for cleaner code
  profileImg: { 
    width: '150px', 
    height: '150px', 
    borderRadius: '50%', 
    border: '4px solid white', 
    marginBottom: '20px',
    objectFit: 'cover' // Ensures your photo doesn't look stretched
  },
  name: { fontSize: '3rem', fontWeight: 800, marginBottom: '12px' },
  title: { fontSize: '1.5rem', opacity: 0.9, marginBottom: '8px' },
  subtitle: { fontSize: '1.1rem', opacity: 0.75, marginBottom: '16px' },
  contact: { fontSize: '0.95rem', opacity: 0.8, marginBottom: '12px' },
  award: { background: 'rgba(255,255,255,0.15)', padding: '8px 20px', borderRadius: '20px', fontSize: '1rem' }
};

export default Hero;