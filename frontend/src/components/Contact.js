import React, { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('https://rasheduzzaman-portfolio-ymzf-65rvd9pm7.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setStatus('✅ Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Something went wrong. Please try again.');
      }
    } catch {
      setStatus('❌ Network error. Please try again.');
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          placeholder="Your Name"
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
          required
        />
        <input
          style={styles.input}
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
          required
        />
        <textarea
          style={{...styles.input, height: '120px', resize: 'vertical'}}
          placeholder="Your Message"
          value={form.message}
          onChange={e => setForm({...form, message: e.target.value})}
          required
        />
        <button type="submit" style={styles.button}>
          Send Message
        </button>
        {status && <p style={styles.status}>{status}</p>}
      </form>
    </section>
  );
}

const styles = {
  section: { background: '#1a365d', padding: '60px 20px' },
  heading: { fontSize: '2rem', fontWeight: 700, color: 'white', textAlign: 'center', marginBottom: '32px' },
  form: { maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' },
  input: { padding: '12px 16px', borderRadius: '8px', border: 'none', fontSize: '1rem', width: '100%' },
  button: { background: '#48bb78', color: 'white', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' },
  status: { color: 'white', textAlign: 'center', fontWeight: 600 }
};

export default ContactForm;