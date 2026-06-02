import React from 'react';
import { Hero } from '../components/home/Hero';
import { InvestmentModels } from '../components/home/InvestmentModels';
import { RegulatoryAR } from '../components/home/RegulatoryAR';
import { RiskDashboard } from '../components/home/RiskDashboard';
import { NexusAtlantis } from '../components/home/NexusAtlantis';
import { CourseProgram } from '../components/home/CourseProgram';
import { NexusTok } from '../components/home/NexusTok';
import { SmartContractTech } from '../components/home/SmartContractTech';

export function Home() {
  return (
    <main>
      <Hero />
      <InvestmentModels />
      <SmartContractTech />
      <CourseProgram />
      <NexusTok />
      <NexusAtlantis />
      <RegulatoryAR />
      <RiskDashboard />
    </main>
  );
}
