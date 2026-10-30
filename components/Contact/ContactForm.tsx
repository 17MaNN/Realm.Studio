'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './Contact.module.css';

interface ContactFormProps {
  /** WhatsApp number, international format, digits only */
  whatsapp: string;
}

const projectTypes = [
  'A new website',
  'A booking system',
  'Instagram growth or automation',
  'Something else',
];

export default function ContactForm({ whatsapp }: ContactFormProps) {
  const [name, setName] = useState('');
  const [reach, setReach] = useState('');
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [brief, setBrief] = useState('');

  const sendEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const note = [
      `Hi Realm.Studio, I'm ${name.trim()}.`,
      `Project: ${projectType}`,
      `Reach me at: ${reach.trim()}`,
      brief.trim() ? `\n${brief.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(note)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <form className={styles.form} onSubmit={sendEnquiry}>
      <p className={styles.formTitle}>Tell us what you are building</p>

      <div className={styles.formGrid}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Your name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>Email or phone</span>
          <input
            type="text"
            name="reach"
            autoComplete="email"
            required
            value={reach}
            onChange={(event) => setReach(event.target.value)}
          />
        </label>

        <label className={`${styles.field} ${styles.fieldWide}`}>
          <span className={styles.fieldLabel}>What do you need?</span>
          <select
            name="project-type"
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className={`${styles.field} ${styles.fieldWide}`}>
          <span className={styles.fieldLabel}>A line or two about it</span>
          <textarea
            name="brief"
            rows={4}
            required
            value={brief}
            onChange={(event) => setBrief(event.target.value)}
          />
        </label>
      </div>

      <div className={styles.formActions}>
        <button type="submit" className={styles.formSubmit}>
          Send enquiry
        </button>
      </div>
    </form>
  );
}
