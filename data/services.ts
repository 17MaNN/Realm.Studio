export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

// TODO: Customize services and descriptions to reflect your agency offerings
export const servicesList: ServiceItem[] = [
  {
    id: 'frontend',
    title: 'Front-end development',
    description:
      'Clean, semantically structured HTML, modern CSS and lean JavaScript or React. Built for raw speed, cross-device precision and long-term maintainability.',
  },
  {
    id: 'design',
    title: 'Interface and visual design',
    description:
      'Clear, systematic layouts that guide visitors toward action without decorative noise or confusing interaction patterns.',
  },
  {
    id: 'accessibility',
    title: 'Accessibility audits',
    description:
      'Thorough WCAG evaluation and code remediation to ensure your web properties are fully functional for assistive technologies and keyboard users.',
  },
  {
    id: 'systems',
    title: 'Design systems',
    description:
      'Modular component libraries, tokens and typographic standards that keep your brand coherent and accelerate engineering across viewports.',
  },
];
