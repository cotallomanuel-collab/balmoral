import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About | Balmoral",
};

export default function AboutPage() {
  return (
    <PageHero
      eyebrow="About Balmoral"
      title="Independence, since day one"
      bg="#ffffff"
      color="#000000"
      paragraphs={[
        "Balmoral started as a handful of people who believed independent artists and labels deserved the same tools, reach and craft as the majors — without giving up ownership of their work.",
        "Today we're a global label services company supporting artists and labels across every genre, working out of our own studios and remotely with partners on every continent.",
        "We're not a major, and we don't want to be one. High standards, agility and freedom of choice shape everything we do — that's what independence means to us.",
      ]}
    />
  );
}
