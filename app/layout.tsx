import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  weight: ['800'],
  variable: '--font-bricolage',
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-instrument',
});

// TODO: Update description with your studio details
export const metadata: Metadata = {
  title: 'Realm.Studio · Websites worth the visit',
  description:
    'An independent design and development studio in Gurugram. Fast, characterful websites for restaurants, hospitality brands and growing teams.',
  openGraph: {
    title: 'Realm.Studio · Websites worth the visit',
    description:
      'An independent design and development studio in Gurugram. Fast, characterful websites for restaurants, hospitality brands and growing teams.',
    type: 'website',
  },
};

// Runs before paint so a saved theme never flashes the wrong colours
const themeInit = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E9EEF2' },
    { media: '(prefers-color-scheme: dark)', color: '#0B141C' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        {/* Accessible skip link for keyboard & assistive technology users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Global sticky header with responsive navigation */}
        <Header />

        {/* Main landmark */}
        <main id="main-content">{children}</main>

        {/* Global semantic footer */}
        <Footer />
      </body>
    </html>
  );
}
