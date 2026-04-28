import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import {
  Calculator, BarChart3, Building2, Coins, Banknote, Home as HomeIcon,
  Newspaper, Scissors, Hotel, Building, UtensilsCrossed, GraduationCap,
  Stethoscope, ListChecks,
} from "lucide-react";

export const Route = createFileRoute("/erp")({
  head: () => ({
    meta: [
      { title: "Smart Contract & ERP Software — SkillLogic Technologies" },
      { name: "description", content: "Smart Contract software, ERP, CRM, Hospital, Hotel, Salon and Real Estate management software development." },
      { property: "og:title", content: "ERP & Smart Contract Software" },
      { property: "og:description", content: "End-to-end software solutions for every industry." },
    ],
  }),
  component: ERP,
});

const industries = [
  { I: Calculator, t: "Accounting & Billing", d: "GST-ready invoicing, ledgers, P&L and balance sheet." },
  { I: BarChart3, t: "ERP Software", d: "Inventory, HR, payroll, purchase, sales — one system." },
  { I: Building2, t: "CRM Software", d: "Lead capture, pipeline, follow-ups and sales analytics." },
  { I: Coins, t: "Nidhi Software", d: "Member management, deposits, loans, RD/FD and reports." },
  { I: Banknote, t: "Microfinance", d: "Loan origination, EMI, collection routing and dues." },
  { I: HomeIcon, t: "Real Estate", d: "Project listings, leads, bookings, payments and CRM." },
  { I: Newspaper, t: "News Portal", d: "Multi-author CMS with categories, ads and SEO." },
  { I: Scissors, t: "Salon Software", d: "Appointments, packages, staff payouts and inventory." },
  { I: Hotel, t: "Hotel Software", d: "Rooms, rates, reservations, POS and channel manager." },
  { I: Building, t: "Property Management", d: "Tenants, agreements, dues, maintenance & visitors." },
  { I: UtensilsCrossed, t: "Restaurant", d: "KOT, billing, table layout, online orders and analytics." },
  { I: GraduationCap, t: "School & College", d: "Admissions, fees, attendance, exams and parent portal." },
  { I: Stethoscope, t: "Hospital Management", d: "OPD, IPD, pharmacy, lab, billing and HMIS." },
  { I: ListChecks, t: "Project Management", d: "Tasks, timesheets, gantt, billing and team chat." },
];

function ERP() {
  return (
    <Layout>
      <PageBanner title="Software / ERP" />

      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-14">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-cyan-600 font-bold tracking-widest text-sm">FEATURED</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-5 mt-1">Smart Contract Software</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Smart contract software automates execution of agreements between parties on a blockchain. SkillLogic
              Technologies designs secure, audited and gas-efficient smart contracts for token sales, MLM payouts,
              escrow, royalty distribution and more.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our team has deep experience with Solidity, Rust and EVM-compatible chains, ensuring your business
              logic runs trustlessly with full transparency.
            </p>
            <Link to="/contact" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-6 py-3 rounded-full transition-colors">
              Get a Free Quote
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 grid place-items-center p-10 shadow-2xl">
              <div className="text-center">
                <div className="text-white text-3xl md:text-5xl font-extrabold leading-tight">SMART<br/>CONTRACT<br/>SOFTWARE</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-2xl bg-cyan-400 rotate-12 -z-0" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-amber-400 -z-0" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="text-center mb-10">
          <span className="text-cyan-600 font-bold tracking-widest text-sm">INDUSTRY SOLUTIONS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Software For Every Industry</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map(({ I, t, d }) => (
            <div key={t} className="border rounded-xl p-5 hover:border-brand-blue hover:shadow-lg hover:-translate-y-1 transition-all bg-white group">
              <div className="h-11 w-11 rounded-lg bg-brand-blue/10 text-brand-blue grid place-items-center mb-3 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <I className="h-5 w-5" />
              </div>
              <p className="font-bold text-sm">{t}</p>
              <p className="text-xs text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-14">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Our Implementation Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { n: "01", t: "Discovery", d: "Understanding your processes, users and goals." },
              { n: "02", t: "Design", d: "Wireframes, prototypes and approved UI." },
              { n: "03", t: "Development", d: "Agile sprints with weekly demos." },
              { n: "04", t: "Go Live", d: "Training, deployment and ongoing support." },
            ].map((s) => (
              <div key={s.n} className="bg-white p-5 rounded-xl border text-center">
                <div className="text-3xl font-extrabold text-brand-blue/30">{s.n}</div>
                <h3 className="font-bold mt-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
