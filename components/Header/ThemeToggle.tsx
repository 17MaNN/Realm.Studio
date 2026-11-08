'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function readStoredTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

function readSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const transitionTimer = useRef<number | null>(null);

  // Sync with whatever the no-flash script / OS preference resolved to
  useEffect(() => {
    setTheme(readStoredTheme() ?? readSystemTheme());
  }, []);

  // Follow the OS until the visitor makes a choice of their own
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const onChange = (event: MediaQueryListEvent) => {
      if (readStoredTheme()) return;
      setTheme(event.matches ? 'dark' : 'light');
      document.documentElement.removeAttribute('data-theme');
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(
    () => () => {
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    },
    []
  );

  const isDark = theme === 'dark';

  const toggle = () => {
    const next: Theme = isDark ? 'light' : 'dark';
    const root = document.documentElement;

    root.classList.add('theme-transition');
    root.setAttribute('data-theme', next);
    setTheme(next);
    setAnnouncement(next === 'dark' ? 'Dark theme enabled' : 'Light theme enabled');

    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be blocked; the theme still applies for this visit
    }

    if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    transitionTimer.current = window.setTimeout(() => {
      root.classList.remove('theme-transition');
      transitionTimer.current = null;
    }, 360);
  };

  return (
    <>
      <button
        type="button"
        className={styles.themeToggle}
        onClick={toggle}
        role="switch"
        aria-checked={isDark}
        aria-label="Dark theme"
        title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        {isDark ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        )}
      </button>

      <span className="sr-only" role="status">
        {announcement}
      </span>
    </>
  );
}
