export interface WorkItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  summary: string;
  tags: [string, string, string];
  image: string;
  imageFit?: 'cover' | 'contain';
  imageBg?: string;
  imageAlt: string;
  challenge: string;
  solution: string;
  impact: string;
  deliverables: string[];
  year: string;
}

// TODO: Replace case study records with your studio's client work
export const workList: WorkItem[] = [
  {
    id: '1',
    slug: 'hakkasan-mumbai-website',
    title: 'Hakkasan Mumbai Website',
    // TODO: Replace [Client Name] if necessary
    client: 'Hakkasan Mumbai',
    summary:
      'Designed and engineered an ultra-fast, high-end digital flagship for Hakkasan Mumbai, pairing immersive Cantonese culinary storytelling with instant private event inquiries and zero layout shift.',
    tags: ['Luxury Hospitality', 'Next.js App Router', 'Performance'],
    image: '/images/work-hakkasan.png',
    imageFit: 'contain',
    imageBg: '#060a12',
    imageAlt: 'Dark luxury dining interface for Hakkasan Mumbai featuring Cantonese menu typography, cocktail highlights, and private dining reservation flow',
    challenge:
      'Hakkasan required an online presence that matched the dark, immersive ambiance of their Bandra flagship while loading instantaneously across variable mobile networks in Mumbai without bloated third-party plugins.',
    solution:
      'We engineered a static-first Next.js web application utilizing tailored dark-mode tokens, fluid layout scaling, and optimized asset delivery, reducing initial payload weight by 82%.',
    impact:
      'Page load time dropped from 6.4s to 0.45s, mobile private-event inquiries increased by 65%, and the platform achieved a 99/100 Lighthouse performance rating.',
    deliverables: ['Brand Experience Design', 'Next.js Static Architecture', 'Multilingual Menu System', 'Private Dining Lead Engine'],
    year: '2025',
  },
  {
    id: '2',
    slug: 'instagram-automation',
    title: 'Instagram Automation',
    // TODO: Replace [Client Name] if necessary
    client: 'Hospitality & Consumer Brands',
    summary:
      'Architected an intelligent webhook routing and conversational direct-message engine that converts Instagram story tags, comments, and DMs into confirmed guest reservations and leads in under 3 seconds.',
    tags: ['Meta Graph API', 'Webhook Engine', 'Conversion Flow'],
    image: '/images/work-automation.png',
    imageFit: 'contain',
    imageBg: '#07040b',
    imageAlt: 'Visual architecture and dashboard flow for Instagram DM automation showing automated conversation trees and reservation triggers',
    challenge:
      'High-volume hospitality venues miss dozens of booking opportunities daily due to slow manual responses to Instagram DMs, comment inquiries, and story mentions during peak service hours.',
    solution:
      'We developed an automated conversation funnel integrated with the Meta Webhooks and Messenger API, providing instant guest triage, menu delivery, and reservation linking with conversational tone and sub-second response times.',
    impact:
      'Average response time dropped from 4 hours to 3 seconds, converting 38% of social inbound queries into direct reservations with zero manual staff intervention.',
    deliverables: ['Meta Webhook Infrastructure', 'Natural Language Routing', 'Booking Engine Integration', 'Analytics & Attribution Pipeline'],
    year: '2025',
  },
  {
    id: '3',
    slug: 'hakkasan-booking-management',
    title: 'Hakkasan Booking Management System',
    // TODO: Replace [Client Name] if necessary
    client: 'Hakkasan Hospitality Group',
    summary:
      'Built a custom real-time table allocation and guest concierge dashboard, eliminating third-party aggregator commissions with live floor plan visualization, shift-based capacity controls, and SMS confirmations.',
    tags: ['Custom CRM', 'Real-Time Sync', 'Front-End Architecture'],
    image: '/images/work-booking.png',
    imageAlt:
      'Live Table View interface of the Hakkasan Booking Management System displaying real-time floor plans, table statuses (A1–A15), and floor selector controls',
    challenge:
      'Off-the-shelf booking platforms charged heavy per-cover fees, suffered frequent downtime during peak holiday rushes, and locked guest dining history away from front-of-house staff.',
    solution:
      'We built a bespoke internal management suite featuring real-time floor plan visualization, shift-based capacity allocation, automated WhatsApp and SMS confirmations, and high-security customer data retention.',
    impact:
      'Eliminated third-party booking commissions, reduced no-show rates by 44% via automated confirmation prompts, and streamlined table turnover during peak weekend services.',
    deliverables: ['Concierge Dashboard UI', 'Floor Plan Visualizer', 'SMS / WhatsApp Notification Dispatch', 'VIP Guest Profile Index'],
    year: '2026',
  },
];
