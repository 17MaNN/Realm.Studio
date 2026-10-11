import Hero from '@/components/Hero';
import WorkList from '@/components/WorkList';
import Studio from '@/components/Studio';
import Services from '@/components/Services';
import InDevelopment from '@/components/InDevelopment';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkList />
      <Studio />
      <Services />
      <InDevelopment />
      <Contact />
    </>
  );
}
