import { Hero } from '@/components/Home/Hero/Hero';
import { ServiceCards } from '@/components/Home/ServiceCards/ServiceCards';
import { WhyChooseUs } from '@/components/Home/WhyChooseUs/WhyChooseUs';
import { OurClients } from '@/components/Home/OurClients/OurClients';
import { AboutSummary } from '@/components/Home/AboutSummary/AboutSummary';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <WhyChooseUs />
      <OurClients />
      <AboutSummary />
    </>
  );
} 