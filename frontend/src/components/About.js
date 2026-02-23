import React from 'react';

function About() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>
        Environmental Sustainability professional with 7+ years of experience in EHS, 
        EMS, Higg FEM, ZDHC, ISO 14001:2015, GOTS, GRS, and Science Based Targets. 
        Currently serving as Environmental Sustainability Officer at Amigo Bangladesh Ltd., 
        a subsidiary of Crystal International Limited.
      </p>
      <p style={styles.text}>
        MSc. in Environmental Science from Khulna University. Passionate about driving 
        sustainable change in the garment and manufacturing industry across Bangladesh.
      </p>
      <div style={styles.info}>
        <div style={styles.infoItem}><strong>📍 Location:</strong> Amigo Bangladesh Ltd., Kaliganj, Gazipur</div>
        <div style={styles.infoItem}><strong>🎂 Born:</strong> June 15, 1994</div>
        <div style={styles.infoItem}><strong>🌍 Nationality:</strong> Bangladeshi</div>
        <div style={styles.infoItem}><strong>🌐 Languages:</strong> Bengali (Native), English (Proficient)</div>
      </div>
    </section>
  );
}

const styles = {
  section: { maxWidth: '900px', margin: '0 auto', padding: '60px 20px' },
  heading: { fontSize: '2rem', fontWeight: 700, color: '#1a365d', marginBottom: '20px', borderBottom: '3px solid #2b6cb0', paddingBottom: '10px' },
  text: { fontSize: '1rem', lineHeight: 1.8, color: '#4a5568', marginBottom: '16px' },
  info: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '24px', background: '#ebf8ff', padding: '20px', borderRadius: '10px' },
  infoItem: { fontSize: '0.9rem', color: '#2c5282' }
};

export default About;