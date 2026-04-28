import { Link } from "@tanstack/react-router";

export function CtaStrip() {
  return (
    <section className="bg-foreground">
      <div className="mx-auto max-w-7xl px-4 py-8 flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-orange">LET'S GET YOUR PROJECT STARTED!</h2>
        <Link
          to="/contact"
          className="text-white font-semibold hover:text-brand-orange transition-colors"
        >
          CONTACT US →
        </Link>
      </div>
    </section>
  );
}
