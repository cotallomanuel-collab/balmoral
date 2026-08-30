import PageHero from "@/components/PageHero";

export const metadata = {
  title: "What We Do | Balmoral",
};

export default function WhatWeDoPage() {
  return (
    <PageHero
      eyebrow="What We Do"
      title="Distribution and beyond"
      bg="var(--pink)"
      color="var(--purple)"
      paragraphs={[
        "Digital distribution to every major platform is the floor, not the ceiling — we pair it with PR and marketing, digital strategy, project funding, and personalized label management.",
        "Our global strategy and channel management teams make sure every release lands in the right playlists, markets and inboxes, while physical distribution and online marketing carry it the rest of the way.",
        "One team, every channel — so you can focus on the music while we handle everything else it takes to move it around the world.",
      ]}
    />
  );
}
