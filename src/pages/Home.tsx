// src/pages/Home.tsx
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import SkillsOverview from '../components/SkillsOverview';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsOverview />
      <CTA />
    </>
  );
}