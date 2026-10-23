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
  impactHighlight?: string;
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
    title: 'Instagram Growth Engine',
    // TODO: Replace [Client Name] if necessary
    client: 'Hospitality & Consumer Brands',
    summary:
      'Built the content and automation engine that took a hospitality brand to its first milestone of 10,000 followers — then turned that audience into reservations, event enquiries and repeat guests.',
    tags: ['Instagram Growth', 'Content System', 'Meta Graph API'],
    image: '/images/work-automation.png',
    imageFit: 'contain',
    imageBg: '#07040b',
    imageAlt: 'Dashboard view of the Instagram growth engine showing reach, the 10,000 follower milestone and automated conversation flows',
    challenge:
      'The account was posting without a system: no content rhythm, no tested hooks, and a feed that looked nothing like the room. Follower growth had stalled short of the first 10k milestone while DMs, comments and story tags went unanswered through peak service hours.',
    solution:
      'We built a repeatable growth engine — a reel and carousel cadence with tested hooks and visual templates — wired to a Meta webhook layer that answers DMs and comments in seconds, sends menus and books tables. Weekly data reviews decided what to post next.',
    impact:
      'Reached the first 10,000 followers in five months (up from 2,100), grew reach 4.2x, and converted 38% of social inbound messages into direct reservations with zero manual triage.',
    impactHighlight:
      'A follower milestone is only worth chasing when it turns into bookings. This one did — 10k followers and a reservation pipeline that runs itself.',
    deliverables: ['Instagram Content System', 'Hook & Reel Framework', 'Meta Webhook Infrastructure', 'Booking & DM Automation'],
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
