import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Legal Notice",
  robots: { index: false, follow: true },
};

export default function LegalNoticePage() {
  return (
    <LegalPage title="Legal Notice" updated="10 September 2026">
      <p className="rounded-lg border border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Draft — not legal advice.</strong> Fill in the bracketed
        company details and have a lawyer confirm what this jurisdiction
        requires (in Spain this is typically called &ldquo;Aviso
        Legal&rdquo; under the LSSI-CE) before publishing.
      </p>

      <h2>Site owner</h2>
      <ul>
        <li>Legal name: [BALMORAL LEGAL ENTITY NAME]</li>
        <li>Registered address: [REGISTERED ADDRESS]</li>
        <li>Tax/company ID: [TAX/COMPANY ID]</li>
        <li>Contact email: [CONTACT EMAIL]</li>
      </ul>

      <h2>Purpose of this website</h2>
      <p>
        This website presents Balmoral&apos;s label services and lets
        visitors get in touch and sign up for updates.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Unless stated otherwise, the text, images, logos and design on this
        site belong to [BALMORAL LEGAL ENTITY NAME] or are used under
        licence. Reproduction without permission is not allowed.
      </p>

      <h2>Liability</h2>
      <p>
        We aim to keep this site accurate and available, but we don&apos;t
        guarantee it will be error-free or uninterrupted, and we&apos;re not
        liable for damages arising from its use to the extent permitted by
        law.
      </p>
    </LegalPage>
  );
}
