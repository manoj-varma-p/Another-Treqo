import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import ChooseSystem from '@/components/ChooseSystem';
import LearningSystem from '@/components/LearningSystem';
import TrainingSection from '@/components/TrainingSection';
import CertificationSection from '@/components/CertificationSection';
import TutorsSection from '@/components/TutorsSection';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Navbar />
      <main id="top">
        <HeroSection />
        <WhySection />
        <ChooseSystem />
        <LearningSystem />
        <TrainingSection />
        <CertificationSection />
        <TutorsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
