import { Link } from "@tanstack/react-router";
import {
  Network, Receipt, Users, Search, Globe, Film,
  GraduationCap, ShoppingCart, Building2, Smartphone,
} from "lucide-react";

const services = [
  { I: Network, t: "MLM SOFTWARE", d: "Multi-level marketing software with binary, matrix, unilevel and generation plans built for scalable network growth." },
  { I: Receipt, t: "BILLING SOFTWARE", d: "Powerful billing solutions handling transactions, GST, taxes and invoices with ease for any business size." },
  { I: Users, t: "CRM SOFTWARE", d: "Customer relationship management to streamline sales pipelines, leads, and post-sales support workflows." },
  { I: Search, t: "SEO/SMO", d: "Search engine and social media optimization that boosts your visibility, traffic and conversions organically." },
  { I: Globe, t: "WEBSITE DESIGN", d: "Professional, responsive and modern website designs that represent your brand and convert visitors." },
  { I: Film, t: "VIDEO ANIMATION", d: "Engaging 2D/3D animation development services that bring your brand stories and products to life." },
  { I: GraduationCap, t: "SCHOOL ERP", d: "Complete school management with admissions, fees, attendance, exams, transport and parent portal." },
  { I: ShoppingCart, t: "E-COMMERCE", d: "Custom online stores with secure payments, inventory, shipping and modern shopping experiences." },
  { I: Building2, t: "ERP SOLUTIONS", d: "Enterprise resource planning for HR, accounts, inventory, purchase, sales and production teams." },
  { I: Smartphone, t: "MOBILE APPS", d: "Native iOS and Android apps as well as cross-platform Flutter & React Native development." },
];

export function ServicesGrid() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10">
          <span className="text-cyan-600 font-bold tracking-widest text-sm">WHAT WE DO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Core Services</h2>
          <p className="text-muted-foreground mt-2">Smart software & digital solutions for modern businesses</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map(({ I, t, d }, idx) => (
            <div
              key={t}
              style={{ animationDelay: `${idx * 60}ms` }}
              className="group reveal border border-border rounded-xl p-6 text-center bg-white card-hover hover:border-brand-blue relative overflow-hidden"
            >
              <span className="pointer-events-none absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-brand-blue via-cyan-400 to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mx-auto h-16 w-16 rounded-full grid place-items-center bg-brand-blue/10 text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <I className="h-8 w-8 icon-anim" strokeWidth={1.6} />
              </div>
              <h3 className="text-base font-bold text-brand-blue tracking-wide">{t}</h3>
              <p className="text-xs text-muted-foreground mt-2 mb-5 leading-relaxed">{d}</p>
              <Link
                to="/contact"
                className="inline-block bg-cyan-500 text-white text-xs font-bold tracking-wider px-4 py-2 rounded-full hover:bg-cyan-400 hover:scale-105 transition-all"
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
