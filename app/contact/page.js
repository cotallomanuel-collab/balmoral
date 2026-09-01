import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact | Balmoral",
};

export default function ContactPage() {
  return (
    <PageHero
      eyebrow="Contact"
      title="Let's talk"
      bg="#ffffff"
      color="#000000"
      paragraphs={[
        "Artist, label, or just curious what independence looks like from the inside — we'd like to hear from you.",
        "hello@balmoral-labels.com — general enquiries and demos.",
        "partnerships@balmoral-labels.com — labels and existing rosters.",
        "Our studios are based in London, with team and partners working from every timezone in between.",
      ]}
    />
  );
}
