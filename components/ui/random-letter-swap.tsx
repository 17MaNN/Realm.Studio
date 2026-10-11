'use client';

import React from 'react';
import { motion, type Transition } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface RandomLetterSwapProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  className?: string;
  staggerDuration?: number;
  transition?: Transition;
  reverse?: boolean;
}

export function RandomLetterSwap({
  label,
  className,
  staggerDuration = 0.025,
  transition = { duration: 0.6, type: 'spring' },
  reverse = false,
  ...props
}: RandomLetterSwapProps) {
  const characters = label.split('');

  return (
    <motion.span
      className={cn('inline-flex relative cursor-pointer select-none', className)}
      initial="initial"
      whileHover="hover"
      whileFocus="hover"
      aria-label={label}
      tabIndex={0}
      {...(props as any)}
    >
      <span className="inline-flex" aria-hidden="true">
        {characters.map((char, index) => {
          if (char === ' ') {
            return (
              <span key={`space-${index}`} className="inline-block w-[0.25em]">
                &nbsp;
              </span>
            );
          }

          const delay = index * staggerDuration;
          const letterTransition = {
            ...transition,
            delay: reverse ? (characters.length - 1 - index) * staggerDuration : delay,
          };

          return (
            <span
              key={`${char}-${index}`}
              className="relative inline-block overflow-hidden leading-tight"
            >
              <motion.span
                className="inline-block"
                variants={{
                  initial: { y: 0, opacity: 1 },
                  hover: { y: '-100%', opacity: 0.4 },
                }}
                transition={letterTransition}
              >
                {char}
              </motion.span>
              <motion.span
                className="absolute inset-0 inline-block"
                variants={{
                  initial: { y: '100%', opacity: 0.4 },
                  hover: { y: 0, opacity: 1 },
                }}
                transition={letterTransition}
              >
                {char}
              </motion.span>
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}

export default RandomLetterSwap;
