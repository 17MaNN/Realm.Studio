interface DoodleProps {
  className?: string;
}

/** Hand-drawn marker stroke, sized by the element it sits under. */
export function Underline({ className }: DoodleProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 14"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 9.4C40 4.9 79 3.5 118 5.1c31 1.3 62 3.1 99 6.1"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Loose arrow for pointing at a call to action. */
export function Arrow({ className }: DoodleProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 90"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8 12c26 2 48 16 60 40 5 10 7 19 7 28"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="1 0"
      />
      <path
        d="M62 68c6 6 11 10 13 12 2-3 6-9 10-14"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
