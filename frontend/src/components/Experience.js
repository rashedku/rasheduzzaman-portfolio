import React from 'react';

const experiences = [
  {
    role: 'Environmental Sustainability Officer',
    company: 'Amigo Bangladesh Ltd. (Crystal International Limited)',
    duration: '5 Years (Current)',
    highlights: ['Higg FEM assessments', 'ISO 14001:2015 implementation', 'PUMA Sustainability Award 2023']
  },
  {
    role: 'Environmental Sustainability Officer',
    company: 'Ever Smart Bangladesh Ltd.',
    duration: '2 Years',
    highlights: ['Environmental audits', 'Waste and chemical management', 'ZDHC compliance']
  },
  {
    role: 'Research Volunteer & Intern',
    company: 'AOSED, Living Polder Project & Khulna University',
    duration: '2014 – 2018',
    highlights: ['Environmental field research', 'Interpreter & translator roles', 'Water resource management projects']
  }
];

function Experience() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Work Experience</h2>
      {experiences.map((exp, i) => (
        <div key={i} style={styles.card}>
          <h3 style={styles.role}>{exp.role}</h3>
          <p style={styles.company}>🏢 {exp.company}</p>
          <p style={styles.duration}>📅 {exp.duration}</p>
          <ul style={styles.list}>
            {exp.highlights.map((h, j) => <li key={j}>{h}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}

const styles = {
  section: { maxWidth: '900px', margin: '0 auto', padding: '60px 20px' },
  heading: { fontSize: '2rem', fontWeight: 700, color: '#1a365d', marginBottom: '28px', borderBottom: '3px solid #2b6cb0', paddingBottom: '10px' },
  card: { background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '24px', marginBottom: '20px', borderLeft: '5px solid #2b6cb0' },
  role: { fontSize: '1.1rem', fontWeight: 700, color: '#1a365d', marginBottom: '6px' },
  company: { fontSize: '0.95rem', color: '#4a5568', marginBottom: '4px' },
  duration: { fontSize: '0.85rem', color: '#718096', marginBottom: '12px' },
  list: { paddingLeft: '20px', fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.8 }
};

export default Experience;