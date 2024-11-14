'use client';

import dynamic from 'next/dynamic';

const CleaningHero = dynamic(() => import('@/components/Cleaning/CleaningHero/CleaningHero').then(mod => mod.CleaningHero));
const CleaningServices = dynamic(() => import('@/components/Cleaning/CleaningServices/CleaningServices').then(mod => mod.CleaningServices));
const BuildingMaintenance = dynamic(() => import('@/components/Cleaning/BuildingMaintenance/BuildingMaintenance').then(mod => mod.BuildingMaintenance));
const CompanyInfo = dynamic(() => import('@/components/Cleaning/CompanyInfo/CompanyInfo').then(mod => mod.CompanyInfo));
const CleaningProcess = dynamic(() => import('@/components/Cleaning/CleaningProcess/CleaningProcess').then(mod => mod.CleaningProcess));

export default function CleaningPage() {
  return (
    <>
      <CleaningHero />
      <CompanyInfo />
      <CleaningServices />
      <BuildingMaintenance />
      <CleaningProcess />
    </>
  );
} 