'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import PlatformOverview from '@/components/sections/PlatformOverview';
import FeaturesSection from '@/components/sections/FeaturesSection';
import UserRolesSection from '@/components/sections/UserRolesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

// Dynamic import for Three.js heavy hero section (no SSR)
const HeroSection = dynamic(
  () => import('@/components/sections/HeroSection'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <HeroSection />
      <PlatformOverview />
      <FeaturesSection />
      <UserRolesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  );
}
