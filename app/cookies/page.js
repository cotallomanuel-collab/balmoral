import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Cookie Policy",
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" updated="10 September 2026">
      <p className="rounded-lg border border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Draft — not legal advice.</strong> Review with a lawyer
        before treating this as compliant, and keep the table below in sync
        with whatever the cookie banner actually loads.
      </p>

      <p>
        A cookie is a small file stored on your device that helps a website
        remember information about your visit. This page lists the cookies
        this site can set and what each one is for.
      </p>

      <h2>Strictly necessary</h2>
      <ul>
        <li>
          <code>balmoral_cookie_consent</code> — remembers your cookie choice
          (accept/reject) so we don&apos;t ask again on every page. Set by
          this site, expires after 6 months.
        </li>
      </ul>

      <h2>Analytics (only after you accept)</h2>
      <ul>
        <li>
          <code>_ga</code>, <code>_ga_*</code> — Google Analytics 4. Used to
          measure traffic and how visitors use the site. Not loaded unless
          you accept analytics cookies in the banner.
        </li>
      </ul>

      <h2>Your choice</h2>
      <p>
        You can accept or reject analytics cookies from the banner shown on
        your first visit. To change your choice later, clear this site&apos;s
        data in your browser settings and reload the page — the banner will
        appear again.
      </p>
    </LegalPage>
  );
}
