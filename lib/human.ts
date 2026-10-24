/**
 * Deterministic pseudo-random helpers.
 *
 * The same seed always produces the same value on the server and in the
 * browser, so hand-placed tilts and offsets never cause a hydration mismatch.
 */
const noise = (seed: number) => {
  const value = Math.sin(seed * 12.9898 + 4.1414) * 43758.5453;
  return value - Math.floor(value);
};

/** A small, stable rotation in degrees for the item at `seed`. */
export const tilt = (seed: number, max = 1.2) =>
  Number(((noise(seed) * 2 - 1) * max).toFixed(2));

/** A small, stable pixel offset for the item at `seed`. */
export const nudge = (seed: number, max = 5) =>
  Math.round((noise(seed + 17.3) * 2 - 1) * max);
