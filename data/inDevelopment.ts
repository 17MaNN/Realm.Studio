export interface InDevelopmentItem {
  id: string;
  name: string;
  status: string;
  image: string;
  imageAlt: string;
}

// TODO: Replace preview items with your upcoming studio client pipeline
export const inDevelopmentList: InDevelopmentItem[] = [
  {
    id: 'koto',
    // TODO: Replace [Project Name] with your real upcoming project name
    name: 'Koto Ceramics',
    status: 'Restaurant e-commerce',
    image: '/images/dev-1.svg',
    imageAlt: 'Portrait project mockup for Koto Ceramics bespoke e-commerce store',
  },
  {
    id: 'basics',
    // TODO: Replace [Project Name] with your real upcoming project name
    name: 'Basics Journal',
    status: 'Editorial publication',
    image: '/images/dev-2.svg',
    imageAlt: 'Portrait project mockup for Basics Journal digital publication',
  },
  {
    id: 'helix',
    // TODO: Replace [Project Name] with your real upcoming project name
    name: 'Helix Robotics',
    status: 'Technical marketing site',
    image: '/images/dev-3.svg',
    imageAlt: 'Portrait project mockup for Helix Robotics technical marketing site',
  },
  {
    id: 'tether',
    // TODO: Replace [Project Name] with your real upcoming project name
    name: 'Tether Audio',
    status: 'Product catalogue',
    image: '/images/dev-4.svg',
    imageAlt: 'Portrait project mockup for Tether Audio high-fidelity sound catalog',
  },
  {
    id: 'vanguard',
    // TODO: Replace [Project Name] with your real upcoming project name
    name: 'Vanguard Transit',
    status: 'Route explorer app',
    image: '/images/dev-5.svg',
    imageAlt: 'Portrait project mockup for Vanguard Transit public route explorer',
  },
];
