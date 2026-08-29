"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DistributionSection from "@/components/DistributionSection";
import TechnoSection from "@/components/TechnoSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <DistributionSection />
        <TechnoSection />
        <NewsletterSection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
