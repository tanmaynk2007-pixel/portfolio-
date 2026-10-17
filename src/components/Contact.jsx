import { useState } from 'react';
import Section from './Section.jsx';

const INITIAL_FORM = { name: '', email: '', message: '' };

// Controlled form: every input is driven by React state, and a
// submitted flag shows the success message.
export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sentName, setSentName] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setSentName(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSentName(form.name.trim() || 'friend');
    setForm(INITIAL_FORM);
  };

  return (
    <Section id="contact" title="Contact Me">
      <div className="contact">
        <form className="contact__form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Say hello..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn">
            Send Message
          </button>

          {sentName && (
            <p className="form-success" role="status">
              ✅ Thanks {sentName}! Your message has been recorded.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}