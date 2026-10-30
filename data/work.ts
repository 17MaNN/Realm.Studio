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
  /** Optional handwritten caption under the hero image */
  imageNote?: string;
  challenge: string;
  solution: string;
  impact: string;
  impactHighlight?: string;
  deliverables: string[];
  year: string;
}

// TODO: Replace case study records with your studio's client work
const caseStudies: WorkItem[] = [
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
    image: '/images/work-instagram-analytics.svg',
    imageFit: 'contain',
    imageBg: '#E9EEF2',
    imageAlt:
      'Seven-day analytics dashboard showing 1M post views, 4,054 profile views, 237K likes, 114K comments, 13K shares and a reach chart peaking mid-week',
    challenge:
      'The account was posting without a system: no content rhythm, no tested hooks, and a feed that looked nothing like the room. Follower growth had stalled short of the first 10k milestone while DMs, comments and story tags went unanswered through peak service hours.',
    solution:
      'We built a repeatable growth engine — a reel and carousel cadence with tested hooks and visual templates — wired to a Meta webhook layer that answers DMs and comments in seconds, sends menus and books tables. Weekly data reviews decided what to post next.',
    impact:
      'Reached the first 10,000 followers in five months (up from 2,100), grew reach 4.2x, and converted 38% of social inbound messages into direct reservations with zero manual triage.',
    imageNote: 'The week a single reel crossed a million views.',
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
  {
    id: '4',
    slug: 'amrithya-restaurant-website',
    title: 'Amrithya — The Eternal Dining',
    client: 'Amrithya, Jakhan · Dehradun',
    summary:
      'A fine-dining room in Dehradun that needed a site as unhurried as the evening it sells. Warm serif type, one gold reservation prompt, and nothing on the page competing with the food.',
    tags: ['Fine Dining', 'Editorial Design', 'Reservation Flow'],
    image: '/images/workamrithya.webp',
    imageFit: 'cover',
    imageAlt:
      'Amrithya homepage: a server carrying a salad bowl and bruschetta through a warm dining room, behind the serif headline A moment that stays. and a gold Reserve a Table button',
    imageNote: 'the whole idea in two words — a moment',
    challenge:
      'The restaurant was new to Dehradun and had to explain an unfamiliar idea — dining as an occasion rather than a meal — before guests had tasted anything. The usual template approach would have put a logo, a menu grid and a phone number in a row and left the personality out entirely.',
    solution:
      'We built the site around a single line, “A moment that stays,” set in a slow editorial serif and paced across full-height screens. Photography carries the room, a restrained gold accent carries the reservation prompt, and every other element is held back so the location, the menu and the booking sit exactly where a guest looks for them.',
    impact:
      'Guests now arrive having already read the room and the menu, so the first conversation at the table is about the evening rather than logistics. Reservations, private-dining and press enquiries all land in one place instead of three phone lines.',
    impactHighlight:
      'A restaurant site only works if it sells the evening before the guest sits down. This one does it in one sentence.',
    deliverables: ['Art Direction', 'Editorial Layout System', 'Reservation Flow', 'Menu & Events Templates'],
    year: '2026',
  },
  {
    id: '5',
    slug: 'sosoru-restaurant-bar-website',
    title: 'Sosoru — Pan-Asian Restaurant & Bar',
    client: 'Sosoru, Rajpur Road · Dehradun',
    summary:
      'Timber beams, kumiko screens and low warm light on Rajpur Road. The site keeps the room’s hush — a cream panel over the interior, a menu that reads slowly, and one clear way to reserve.',
    tags: ['Restaurant & Bar', 'Visual Direction', 'Booking Links'],
    image: '/images/worksosoru.webp',
    imageFit: 'cover',
    imageAlt:
      'Sosoru homepage: a cream panel with the headline A quieter kind of feast over a timber dining room with kumiko screens',
    imageNote: 'warm light, slow menu, one obvious button',
    challenge:
      'The room is quiet and considered, but the old web presence was a grid of dishes with no sense of the space. Guests were arriving expecting a takeaway counter, and the phone rang all evening with the same four questions about timing, parking and the bar.',
    solution:
      'We led with the interior rather than the food, then floated a plain cream panel over it holding the name, the address, a short description and two buttons: reserve a table, or read the menu. Sushi, robata, ramen and sake are introduced in a single line, so the menu stays a menu and not a brochure.',
    impact:
      'The site now answers the timing, location and bar questions before guests pick up the phone, and reservations arrive through the same booking link the floor staff already use — no second dashboard to check.',
    impactHighlight:
      'The first fold does the work of the host: it sets the tone, gives the address and takes the booking.',
    deliverables: ['Visual Direction', 'Menu System', 'Reservation Integration', 'Gallery & Press Kit'],
    year: '2026',
  },
];

// The newest reference builds lead the list; the rest keep their original order
const leadSlugs = ['sosoru-restaurant-bar-website', 'amrithya-restaurant-website'];

const leadIndex = (item: WorkItem) => {
  const index = leadSlugs.indexOf(item.slug);
  return index === -1 ? leadSlugs.length : index;
};

export const workList: WorkItem[] = [...caseStudies].sort((a, b) => leadIndex(a) - leadIndex(b));
