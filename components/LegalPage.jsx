export default function LegalPage({ title, updated, children }) {
  return (
    <section className="w-full bg-white px-4 pt-32 pb-24 text-black md:px-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <div>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            {title}
          </h1>
          {updated && (
            <p className="mt-2 text-sm text-neutral-500">
              Last updated: {updated}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-6 text-base leading-relaxed text-neutral-800 [&_h2]:mt-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-black [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1">
          {children}
        </div>
      </div>
    </section>
  );
}
