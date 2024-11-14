'use client';

import { TravelHero } from '@/components/Travel/TravelHero';
import { TravelServices } from '@/components/Travel/TravelServices';
import { TravelInfo } from '@/components/Travel/TravelInfo';
import { TravelProcess } from '@/components/Travel/TravelProcess';

export default function TravelPage() {
  return (
    <>
      <TravelHero />
      <TravelInfo />
      <TravelServices />
      <TravelProcess />
    </>
  );
} 