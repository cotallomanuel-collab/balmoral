import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Studios | Balmoral",
};

export default function StudiosPage() {
  return (
    <PageHero
      eyebrow="Studios"
      title="Spaces built to make records"
      bg="var(--purple)"
      color="#ffffff"
      paragraphs={[
        "From 100-piece orchestras to solo artists working alone at 3am, our studios are built to hold whatever the session needs — live rooms, writing spaces and full production suites, all under one roof.",
        "Can't make it in? Our team, technology and expertise travel just as well — record, mix and master remotely with the same standard of care, from anywhere in the world.",
        "Every space is run by engineers who've shipped records across every genre, so whatever you're chasing, someone here has chased it too.",
      ]}
    />
  );
}
