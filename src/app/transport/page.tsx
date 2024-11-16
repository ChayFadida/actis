'use client';

import { TransportHero } from '@/components/Transport/TransportHero';
import { TransportServices } from '@/components/Transport/TransportServices';
import { TransportInfo } from '@/components/Transport/TransportInfo';
import { TransportProcess } from '@/components/Transport/TransportProcess';
import type { FC } from 'react';

const TransportPage: FC = () => {
  return (
    <>
      <TransportHero />
      <TransportInfo />
      <TransportServices />
      <TransportProcess />
    </>
  );
};

export default TransportPage; 