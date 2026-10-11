/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pre-render every page to static HTML at build time
  output: 'export',
  trailingSlash: true,
  // Required for static HTML export when using next/image
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
