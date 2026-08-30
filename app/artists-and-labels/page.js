import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Artists & Labels | Balmoral",
};

export default function ArtistsAndLabelsPage() {
  return (
    <PageHero
      eyebrow="Artists & Labels"
      title="Built for the people making the music"
      bg="#ffffff"
      color="#000000"
      paragraphs={[
        "Whether you're a solo artist self-releasing your first single or a label managing a full roster, Balmoral gives you the distribution, catalog tools and support to move fast without losing control.",
        "You keep 100% ownership of your masters and rights, always — we're a service you plug into, not a deal you sign away.",
        "Join a global community of artists, experts, inventors and engineers whose technology and expertise you can lean on from anywhere in the world.",
      ]}
    />
  );
}
