import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/Projects';
import SkillsSection from '@/components/SkillsSection';
import React from 'react';

const page = () => {
  return (
    <div className="bg-[#0f172a]">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default page;
