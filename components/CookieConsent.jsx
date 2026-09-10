"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "balmoral_cookie_consent";
export const CONSENT_EVENT = "balmoral-cookie-consent-changed";

function subscribe(callback) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

// During SSR/hydration we don't know the visitor's choice yet — reporting
// "granted" here keeps the banner out of the first paint instead of
// flashing it, then useSyncExternalStore re-reads the real value right
// after hydration without triggering a hydration mismatch.
function getServerSnapshot() {
  return "granted";
}

export function useCookieConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function setConsent(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage blocked (private mode, etc.) — the banner just won't persist.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}

export default function CookieConsent() {
  const consent = useCookieConsent();
  const visible = consent === null;

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[100] flex flex-col gap-3 border-t border-black/10 bg-white px-4 py-4 text-sm text-black shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:flex-row md:items-center md:justify-between md:px-6"
    >
      <p className="max-w-2xl">
        We use essential cookies to run this site, and — only with your
        consent — analytics cookies to understand how it&apos;s used. See our{" "}
        <a href="/cookies" className="underline">
          Cookie Policy
        </a>
        .
      </p>
      <div className="flex shrink-0 gap-3">
        <button
          onClick={() => setConsent("denied")}
          className="rounded-full border border-black px-5 py-2 font-semibold transition-colors hover:bg-black hover:text-white"
        >
          Reject
        </button>
        <button
          onClick={() => setConsent("granted")}
          className="rounded-full bg-black px-5 py-2 font-semibold text-white transition-opacity hover:opacity-80"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
