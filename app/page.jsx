import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SelfSelection from '@/components/SelfSelection';
import WhySection from '@/components/WhySection';
import ChooseSystem from '@/components/ChooseSystem';
import JourneyAndInterview from '@/components/Curriculm';
import TrainingSection from '@/components/ScrollStack';
import RealWorkConveyor from '@/components/RealWorkConveyor';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        {/* Section 01: Hero with Floating Marketing Universe */}
        <HeroSection />

        {/* Section 02: Self-Selection Filter (TREQO Is Not For Everyone) */}
        <SelfSelection />

        {/* Section 03: Why Choose TREQO (5 Core Pillars) */}
        <WhySection />

        {/* Section 04: Choose Your Learning System (Curated Tracks Carousel) */}
        <ChooseSystem />

        {/* Section 05: 16-Term Curriculum, Extra Proof & Interview Dashboard */}
        <JourneyAndInterview />

        {/* Section 06: Training Model (The Art of Building & Marketing) */}
        <TrainingSection />

        {/* Section 07: Real Work > Homework Horizontal Conveyor */}
        <RealWorkConveyor />

        {/* Section 08: Final CTA Climax */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
