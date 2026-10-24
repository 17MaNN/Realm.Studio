export interface ServiceItem {
  id: string;
  title: string;
  /** Short sub-heading that names what the service actually delivers */
  subtitle: string;
  description: string;
  /** Starting price in INR */
  price: number;
}

// TODO: Adjust starting prices to match your studio's real quotes
export const servicesList: ServiceItem[] = [
  {
    id: 'frontend',
    title: 'Front-end development',
    subtitle: 'website',
    description:
      'Clean, semantically structured HTML, modern CSS and lean JavaScript or React. Built for raw speed, cross-device precision and long-term maintainability.',
    price: 35000,
  },
  {
    id: 'design',
    title: 'Interface and visual design',
    subtitle: 'website without version control',
    description:
      'Clear, systematic layouts that guide visitors toward action without decorative noise or confusing interaction patterns.',
    price: 30000,
  },
  {
    id: 'accessibility',
    title: 'Accessibility audits',
    subtitle: 'version control pack',
    description:
      'Thorough WCAG evaluation and code remediation to ensure your web properties are fully functional for assistive technologies and keyboard users.',
    price: 15000,
  },
  {
    id: 'systems',
    title: 'Design systems',
    subtitle: 'complete application',
    description:
      'Modular component libraries, tokens and typographic standards that keep your brand coherent and accelerate engineering across viewports.',
    price: 45000,
  },
];

// TODO: Update the deadline if you extend the offer
export const diwaliOffer = {
  label: 'Diwali offer',
  discount: 2000,
  deadline: '15 November 2026',
};
