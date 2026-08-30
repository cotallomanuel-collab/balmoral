"use client";

import Hero from "@/components/Hero";
import StudiosSection from "@/components/StudiosSection";
import DistributionSection from "@/components/DistributionSection";
import TechnoSection from "@/components/TechnoSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StudiosSection />
      <DistributionSection />
      <TechnoSection />
      <NewsletterSection />
    </>
  );
}
