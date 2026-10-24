'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { MotionValue } from 'framer-motion';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import type { PointerEvent, ReactNode } from 'react';
import styles from './Hero.module.css';

const ease = [0.22, 1, 0.36, 1] as const;

interface LayerProps {
  mx: MotionValue<number>;
  my: MotionValue<number>;
  depth: number;
  delay: number;
  className: string;
  children: ReactNode;
}

/* One floating card: entrance (outer) + cursor parallax (middle) + idle drift (inner CSS) */
function Layer({ mx, my, depth, delay, className, children }: LayerProps) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      <motion.div style={{ x, y }}>
        <div className={styles.drift} style={{ animationDelay: `${delay * -4}s` }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

interface CardProps {
  href: string;
  title: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
  tilt: string;
}

function BrowserCard({ href, title, src, width, height, alt, priority, tilt }: CardProps) {
  return (
    <Link
      href={href}
      className={styles.card}
      style={{ ['--tilt' as string]: tilt }}
      aria-label={`Open case study: ${title}`}
    >
      <span className={styles.chrome} aria-hidden="true">
        <i />
        <i />
        <i />
        <span className={styles.chromeTitle}>{title}</span>
      </span>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 900px) 90vw, 46vw"
        className={styles.shot}
      />
    </Link>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 80, damping: 18, mass: 0.6 });
  const my = useSpring(rawY, { stiffness: 80, damping: 18, mass: 0.6 });
  const rotateY = useTransform(mx, (v) => v * 14);
  const rotateX = useTransform(my, (v) => v * -12);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section
      id="hero"
      className={styles.section}
      aria-labelledby="hero-title"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.headline}>
            <span className={styles.mask}>
              <motion.span
                className={styles.line}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease }}
              >
                Websites
              </motion.span>
            </span>
            <span className={styles.mask}>
              <motion.span
                className={styles.line}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.24, ease }}
              >
                <span className={styles.highlight}>
                  <motion.span
                    className={styles.mark}
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.65, delay: 1, ease }}
                  />
                  <span className={styles.markText}>worth</span>
                </span>{' '}
                the visit.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className={styles.subtext}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
          >
            An independent design and development studio in Dehradun. We design and build fast,
            characterful websites for restaurants, hospitality brands and teams who care how their
            product feels.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
          >
            <Link href="#work" className={styles.ctaButton}>
              See selected work
            </Link>
            <Link href="#contact" className={styles.ctaGhost}>
              Start a project
            </Link>
          </motion.div>
        </div>

        {/* Live stack of real work: Hakkasan site, Instagram automation, booking system */}
        <div className={styles.stage} aria-label="Selected projects">
          <motion.div className={styles.stack} style={{ rotateX, rotateY }}>
            <Layer mx={mx} my={my} depth={26} delay={0.5} className={`${styles.layer} ${styles.layerBack}`}>
              <BrowserCard
                href="/work/hakkasan-booking-management/"
                title="Booking Management System"
                src="/images/work-booking.png"
                width={876}
                height={497}
                alt="Live table view of the Hakkasan booking dashboard"
                tilt="3deg"
              />
            </Layer>

            <Layer mx={mx} my={my} depth={44} delay={0.35} className={`${styles.layer} ${styles.layerMain}`}>
              <BrowserCard
                href="/work/hakkasan-mumbai-website/"
                title="Hakkasan Mumbai Website"
                src="/images/work-hakkasan.png"
                width={1801}
                height={888}
                alt="Hakkasan Mumbai website hero in a dark dining room"
                priority
                tilt="-2deg"
              />
            </Layer>

            <Layer mx={mx} my={my} depth={70} delay={0.65} className={`${styles.layer} ${styles.layerFront}`}>
              <BrowserCard
                href="/work/instagram-automation/"
                title="Instagram Growth"
                src="/images/work-instagram-analytics.svg"
                width={1200}
                height={750}
                alt="Seven-day analytics dashboard for the Instagram growth engine"
                tilt="2.5deg"
              />
            </Layer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
