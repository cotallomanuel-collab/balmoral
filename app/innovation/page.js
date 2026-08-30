import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Innovation | Balmoral",
};

export default function InnovationPage() {
  return (
    <PageHero
      eyebrow="Innovation"
      title="Blending the past with what's next"
      bg="var(--pink)"
      color="var(--purple)"
      paragraphs={[
        "Our startup incubator backs the tools we wish existed — from royalty analytics to release-day workflows — built by people who make and release music themselves.",
        "We keep an extensive range of audio products in active rotation, testing everything from vintage outboard gear to the newest plugins so our artists never have to choose between character and precision.",
        "Innovation, to us, isn't chasing every trend — it's blending the best of the past with the latest advancements in music technology, deliberately.",
      ]}
    />
  );
}
