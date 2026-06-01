import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { InvestmentModels } from './components/home/InvestmentModels';
import { RegulatoryAR } from './components/home/RegulatoryAR';
import { RiskDashboard } from './components/home/RiskDashboard';
import { NexusAtlantis } from './components/home/NexusAtlantis';
import { CourseProgram } from './components/home/CourseProgram';
import { NexusTok } from './components/home/NexusTok';
import { SmartContractTech } from './components/home/SmartContractTech';
import { Footer } from './components/home/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
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
      <Footer />
    </div>
  );
}
