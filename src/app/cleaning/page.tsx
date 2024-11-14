'use client';

import dynamic from 'next/dynamic';

const CleaningHero = dynamic(() => import('@/components/Cleaning/CleaningHero/CleaningHero').then(mod => mod.CleaningHero));
const CleaningServices = dynamic(() => import('@/components/Cleaning/CleaningServices/CleaningServices').then(mod => mod.CleaningServices));
const BuildingMaintenance = dynamic(() => import('@/components/Cleaning/BuildingMaintenance/BuildingMaintenance').then(mod => mod.BuildingMaintenance));
const CompanyInfo = dynamic(() => import('@/components/Cleaning/CompanyInfo/CompanyInfo').then(mod => mod.CompanyInfo));
const CompanyAdvantages = dynamic(() => import('@/components/Cleaning/CompanyAdvantages/CompanyAdvantages').then(mod => mod.CompanyAdvantages));
const ClientTypes = dynamic(() => import('@/components/Cleaning/ClientTypes/ClientTypes').then(mod => mod.ClientTypes));

export default function CleaningPage() {
  return (
    <>
      <CleaningHero />
      <CompanyInfo />
      <CleaningServices />
      <BuildingMaintenance />
      <CompanyAdvantages />
      <ClientTypes />
    </>
  );
} 