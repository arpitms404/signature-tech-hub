import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function CtaStrip() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-800 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 flex items-center justify-between gap-6 flex-wrap">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">LET'S GET YOUR PROJECT STARTED!</h2>
          <p className="text-white/70 mt-1 text-sm">Free consultation · Custom proposal in 24 hours</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href="tel:+917500766615" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full font-semibold transition-colors">
            <Phone className="h-4 w-4" /> +91-7500766615
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-6 py-3 rounded-full transition-colors shadow-lg"
          >
            CONTACT US <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
