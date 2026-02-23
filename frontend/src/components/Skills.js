import React from 'react';

const skills = [
  'Higg FEM', 'ZDHC', 'ISO 14001:2015', 'Bhive InCheck', 'GOTS', 
  'Oeko-Tex', 'GRS', 'RCS', 'Environmental Audits', 'Waste Management',
  'Energy Management', 'Chemical Management', 'Circularity', 'Climate Change',
  'Science Based Target', 'GRI Index', 'Social Sustainability',
  'Occupational Health & Safety', 'Better Work', 'RSC', 'Nirapon',
  'Water Resource Management', 'Disaster Management', 'Quality Management',
  'Python', 'Data Analysis', 'GIS / ArcGIS', 'Adobe Illustrator'
];

function Skills() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Skills & Expertise</h2>
      <div style={styles.grid}>
        {skills.map((skill, i) => (
          <span key={i} style={styles.badge}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { background: '#f0f4f8', padding: '60px 20px' },
  heading: { fontSize: '2rem', fontWeight: 700, color: '#1a365d', textAlign: 'center', marginBottom: '32px' },
  grid: { maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' },
  badge: { background: '#2b6cb0', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 500 }
};

export default Skills;