import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl space-y-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand-sand text-brand-rust uppercase tracking-wider">
          Dubai &bull; Ethical Teacup Puppies
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-brand-dark tracking-tight">
          TeddyPups U.A.E.
        </h1>
        <p className="text-lg text-brand-dark/80 font-sans">
          Premium teacup puppies in Dubai. Health certified, home-raised, and hand-delivered.
        </p>
        <div className="pt-4 flex flex-wrap gap-4 justify-center">
          <Link
            href="/puppies"
            className="px-6 py-3 rounded-full bg-brand-rust text-white font-medium hover:bg-brand-rustDark transition-colors shadow-sm"
          >
            Meet the Puppies
          </Link>
          <Link
            href="/how-it-works"
            className="px-6 py-3 rounded-full bg-brand-sand text-brand-dark font-medium hover:bg-brand-amber transition-colors"
          >
            How It Works
          </Link>
        </div>
      </div>
    </main>
  );
}
