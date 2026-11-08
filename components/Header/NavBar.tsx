'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import LogoWordmark from './LogoWordmark';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

type NavItem = {
  id: string;
  label: string;
};

// Split around the centred wordmark
const leftItems: NavItem[] = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
];

const rightItems: NavItem[] = [
  { id: 'studio', label: 'Studio' },
  { id: 'contact', label: 'Contact' },
];

const menuItems: NavItem[] = [...leftItems, ...rightItems];
const sectionIds = menuItems.map((item) => item.id);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });

  if (window.location.hash !== `#${id}`) {
    window.history.replaceState(null, '', `#${id}`);
  }

  // Move focus with the viewport so keyboard and screen-reader users land on
  // the section they picked instead of being left behind in the menu.
  const heading = section.querySelector<HTMLElement>('h1, h2');
  if (heading) {
    if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }
}

export default function NavBar() {
  const pathname = usePathname();
  const onHome = pathname === '/';

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  const panelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pendingSection = useRef<string | null>(null);
  const pendingTop = useRef(false);

  // A route change always starts with the menu closed
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Highlight whichever section has reached the reading line. Nothing is
  // selected while the hero is on screen.
  useEffect(() => {
    if (!onHome) {
      setActive('');
      return;
    }

    let frame = 0;
    // Sections stop at html's scroll-padding-top, so the reading line has to
    // sit below that or a freshly clicked section would still read as "next".
    const scrollPadding =
      parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;

    const sync = () => {
      frame = 0;
      const header = document.querySelector<HTMLElement>('[data-site-header]');
      const readingLine = Math.max(
        (header?.getBoundingClientRect().height ?? 68) + 32,
        scrollPadding + 32
      );

      // Pick the section nearest above the reading line. Nav order (Work,
      // Services, Studio, Contact) differs from page order, so the array
      // order cannot decide which section is current.
      let current = '';
      let nearestTop = Number.NEGATIVE_INFINITY;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const top = section.getBoundingClientRect().top;
        if (top <= readingLine && top > nearestTop) {
          nearestTop = top;
          current = id;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = sectionIds[sectionIds.length - 1];

      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [onHome]);

  // Arriving on the home page with a #hash (e.g. from a case study) needs a
  // manual nudge — client-side routing does not scroll for us.
  useEffect(() => {
    if (!onHome) return;

    const id = window.location.hash.slice(1);
    if (!sectionIds.includes(id)) return;

    const timer = window.setTimeout(() => scrollToSection(id), 120);
    return () => window.clearTimeout(timer);
  }, [onHome]);

  // Lock the page behind the open menu. `scrollbar-gutter: stable` on <html>
  // keeps the bar from shifting when the scrollbar disappears.
  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    root.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    return () => {
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [open]);

  // Scroll once the page is unlocked, not while it is still frozen
  useEffect(() => {
    if (open) return;

    if (pendingTop.current) {
      pendingTop.current = false;
      const frame = window.requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        });
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname);
        }
      });
      return () => window.cancelAnimationFrame(frame);
    }

    if (pendingSection.current) {
      const id = pendingSection.current;
      pendingSection.current = null;
      const frame = window.requestAnimationFrame(() => scrollToSection(id));
      return () => window.cancelAnimationFrame(frame);
    }
  }, [open]);

  // Keyboard users get focus moved into the menu; touch users stay put
  useEffect(() => {
    if (!open) return;

    const timer = window.setTimeout(() => {
      if (!menuButtonRef.current?.matches(':focus-visible')) return;
      panelRef.current?.querySelector<HTMLElement>('a[href]')?.focus({
        preventScroll: true,
      });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [open]);

  // Escape to close, Tab to stay inside, and close on resize to desktop
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const header = panelRef.current.closest('[data-site-header]');
      const focusable = Array.from(
        header?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []
      ).filter((node) => node.getClientRects().length > 0);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement as HTMLElement | null;
      const inside = current ? focusable.includes(current) : false;

      if (event.shiftKey && (current === first || !inside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (current === last || !inside)) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia('(min-width: 900px)');
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [open]);

  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    // The clicked section becomes current straight away instead of waiting
    // for the smooth scroll to settle on it.
    if (onHome) setActive(id);

    if (open) {
      // Close first; the jump happens after the scroll lock is released
      event.preventDefault();
      pendingSection.current = id;
      setOpen(false);
      return;
    }

    // Same hash twice: the browser ignores the second click, so scroll here
    if (onHome && window.location.hash === `#${id}`) {
      event.preventDefault();
      scrollToSection(id);
    }
  };

  const handleLogoNavigate = () => {
    if (onHome) setActive('');
    if (!open) return;
    pendingTop.current = true;
    setOpen(false);
  };

  const renderLink = (item: NavItem) => (
    <li key={item.id}>
      <a
        href={onHome ? `#${item.id}` : `/#${item.id}`}
        className={styles.link}
        aria-current={active === item.id ? 'location' : undefined}
        onClick={(event) => handleNavigate(event, item.id)}
      >
        <span className={styles.linkLabel}>{item.label}</span>
      </a>
    </li>
  );

  return (
    <>
      <nav className={`container ${styles.bar}`} aria-label="Primary">
        <ul className={`${styles.group} ${styles.groupLeft}`}>
          {leftItems.map(renderLink)}
        </ul>

        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuButton}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>

        <LogoWordmark className={styles.logo} onNavigate={handleLogoNavigate} />

        <div className={styles.right}>
          <ul className={`${styles.group} ${styles.groupRight}`}>
            {rightItems.map(renderLink)}
          </ul>
          <span className={styles.divider} aria-hidden="true" />
          <ThemeToggle />
        </div>
      </nav>

      {/* Full-screen menu, only shown below 900px */}
      <div
        id="site-menu"
        ref={panelRef}
        className={styles.panel}
        data-open={open ? 'true' : 'false'}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <nav aria-label="Mobile">
          <ul className={styles.panelList}>
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                className={styles.panelItem}
                style={{ '--i': index } as CSSProperties}
              >
                <a
                  href={onHome ? `#${item.id}` : `/#${item.id}`}
                  className={styles.panelLink}
                  aria-current={active === item.id ? 'location' : undefined}
                  onClick={(event) => handleNavigate(event, item.id)}
                >
                  <span>{item.label}</span>
                  <span className={styles.panelIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
