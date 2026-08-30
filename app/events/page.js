import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Events | Balmoral",
};

export default function EventsPage() {
  return (
    <PageHero
      eyebrow="Events"
      title="Where the community shows up"
      bg="var(--olive)"
      color="#ffffff"
      paragraphs={[
        "From album launches to artist showcases, we host the events, sessions and experiences that bring our roster and partners into the same room.",
        "Expect listening parties before a record ever hits streaming, workshops run by our own engineers, and showcases built to put new talent in front of the people who matter.",
        "If you're on our roster, this is where you meet the rest of the community — the people you'll end up making your next record with.",
      ]}
    />
  );
}
