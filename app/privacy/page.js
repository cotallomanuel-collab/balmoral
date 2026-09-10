import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="10 September 2026">
      <p className="rounded-lg border border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Draft — not legal advice.</strong> This page is a starting
        template so the site has a working Privacy Policy link. The
        bracketed placeholders below (company name, address, tax ID, data
        protection contact) must be filled in, and the whole document should
        be reviewed by a lawyer for the jurisdictions where Balmoral
        operates before this is treated as compliant.
      </p>

      <p>
        This Privacy Policy explains how [BALMORAL LEGAL ENTITY NAME], with
        registered address at [REGISTERED ADDRESS] and tax/company ID
        [TAX/COMPANY ID] (&ldquo;Balmoral&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;), collects, uses and protects personal data when you
        visit this website.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Newsletter sign-up:</strong> the email address you submit
          through the newsletter form.
        </li>
        <li>
          <strong>Analytics:</strong> if you accept analytics cookies, usage
          data such as pages visited, device type and approximate location,
          collected via Google Analytics.
        </li>
        <li>
          No account creation, payments or sensitive data categories are
          processed on this site.
        </li>
      </ul>

      <h2>Why we process it</h2>
      <ul>
        <li>To send newsletter updates you&apos;ve opted into (consent).</li>
        <li>
          To understand how the site is used and improve it (consent, for
          analytics cookies).
        </li>
        <li>To respond to enquiries sent to our contact address.</li>
      </ul>

      <h2>Who we share it with</h2>
      <p>
        We use third-party processors to run parts of this site — for
        example Google Analytics for traffic analytics, and Vercel for
        hosting. [ADD ANY EMAIL/NEWSLETTER PROVIDER ONCE CHOSEN.] We do not
        sell personal data.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Newsletter emails are kept until you unsubscribe. Analytics data
        retention follows Google Analytics&apos; default retention settings
        unless configured otherwise. [CONFIRM/ADJUST RETENTION PERIODS.]
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access,
        correct, delete or export your data, and to withdraw consent at any
        time. To exercise these rights, contact us at
        [PRIVACY/DPO EMAIL ADDRESS].
      </p>

      <h2>Cookies</h2>
      <p>
        See our <a href="/cookies" className="underline">Cookie Policy</a>{" "}
        for details on what cookies this site uses and how to control them.
      </p>
    </LegalPage>
  );
}
