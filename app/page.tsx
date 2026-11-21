import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PurposeSection } from "@/components/home/PurposeSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { CompaniesSection } from "@/components/home/CompaniesSection";
import { GallerySection } from "@/components/home/GallerySection";
import { WorkWithUsSection } from "@/components/home/WorkWithUsSection";
import { navigationData, whatWeDoCardsData, purposeCardsData, galleryData } from "@/data/homeContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-red selection:text-white">
      <Navbar navigation={navigationData} />
      <HeroSection />
      <WhatWeDoSection cards={whatWeDoCardsData} />
      <ServicesSection />
      <PurposeSection cards={purposeCardsData} />
      <ImpactSection />
      <CompaniesSection />
      <GallerySection items={galleryData} />
      <WorkWithUsSection />
      <Footer />
    </div>
  );
}
