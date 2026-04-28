import { Link } from "@tanstack/react-router";
import { Globe, Search } from "lucide-react";

const services = [
  { t: "MLM SOFTWARE", d: "Multi-level marketing software with binary, matrix, unilevel and generation plans built for scalable network growth." },
  { t: "BILLING SOFTWARE", d: "Powerful billing solutions handling transactions, GST, taxes and invoices with ease for any business size." },
  { t: "CRM SOFTWARE", d: "Customer relationship management to streamline sales pipelines, leads, and post-sales support workflows." },
  { t: "SEO/SMO", d: "Search engine and social media optimization that boosts your visibility, traffic and conversions organically." },
  { t: "WEBSITE DESIGN", d: "Professional, responsive and modern website designs that represent your brand and convert visitors." },
  { t: "VIDEO ANIMATION", d: "Engaging 2D/3D animation development services that bring your brand stories and products to life." },
];

export function ServicesGrid() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Services</h2>
          <p className="text-muted-foreground mt-2">Smart software & digital solutions for modern businesses</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.t}
              className="border-2 border-brand-orange/70 rounded-lg p-6 text-center bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mx-auto h-16 w-16 rounded-full grid place-items-center text-brand-orange relative mb-4">
                <Globe className="h-12 w-12" strokeWidth={1.5} />
                <Search className="h-6 w-6 absolute -bottom-1 -right-1 bg-white rounded-full p-0.5" />
              </div>
              <h3 className="text-lg font-bold text-brand-orange tracking-wide">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-5 leading-relaxed">{s.d}</p>
              <Link
                to="/contact"
                className="inline-block bg-brand-orange text-white text-xs font-bold tracking-wider px-5 py-2 rounded-full hover:bg-brand-orange-dark transition-colors"
              >
                CHECK IT OUT
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
