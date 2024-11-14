import { Hero } from '@/components/Home/Hero/Hero';
import { ServiceCards } from '@/components/Home/ServiceCards/ServiceCards';
import { AboutSummary } from '@/components/Home/AboutSummary/AboutSummary';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <AboutSummary />
    </>
  );
} 