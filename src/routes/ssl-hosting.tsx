import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import { ShieldCheck, Server, Globe, Mail, HardDrive, Clock } from "lucide-react";

export const Route = createFileRoute("/ssl-hosting")({
  head: () => ({
    meta: [
      { title: "SSL & Hosting — SkillLogic Technologies" },
      { name: "description", content: "Reliable hosting and SSL certificate services with free migration, daily backups and 99.9% uptime guarantee." },
      { property: "og:title", content: "SSL & Hosting" },
      { property: "og:description", content: "Fast, secure hosting and SSL certificates." },
    ],
  }),
  component: SSL,
});

function SSL() {
  const plans = [
    { n: "Starter", p: "₹999", per: "/yr", f: ["10GB SSD Storage", "100GB Bandwidth", "Free SSL Certificate", "5 Email Accounts", "1 Domain", "99.9% Uptime"], pop: false },
    { n: "Business", p: "₹2,499", per: "/yr", f: ["50GB SSD Storage", "500GB Bandwidth", "Free Wildcard SSL", "Unlimited Emails", "5 Domains", "Daily Backups", "Free Migration"], pop: true },
    { n: "Enterprise", p: "₹5,999", per: "/yr", f: ["200GB SSD Storage", "Unlimited Bandwidth", "Premium SSL EV", "Unlimited Emails", "Unlimited Domains", "Hourly Backups", "Priority Support"], pop: false },
  ];
  return (
    <Layout>
      <PageBanner title="SSL & Hosting" />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="text-center mb-10">
          <span className="text-cyan-600 font-bold tracking-widest text-sm">PRICING</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Choose Your Hosting Plan</h2>
          <p className="text-muted-foreground mt-2">All plans include free SSL, daily backups and 24/7 support.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((pl) => (
            <div
              key={pl.n}
              className={`relative rounded-2xl p-6 bg-white transition-all hover:-translate-y-1 hover:shadow-2xl ${
                pl.pop ? "border-2 border-brand-blue shadow-xl" : "border"
              }`}
            >
              {pl.pop && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-xl font-bold text-center">{pl.n}</h3>
              <p className="text-center my-4">
                <span className="text-4xl font-extrabold text-brand-blue">{pl.p}</span>
                <span className="text-muted-foreground">{pl.per}</span>
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {pl.f.map((f) => <li key={f} className="flex items-center gap-2"><span className="text-cyan-600">✓</span> {f}</li>)}
              </ul>
              <Link
                to="/contact"
                className={`block text-center font-bold px-6 py-2.5 rounded-full transition-colors ${
                  pl.pop ? "bg-brand-blue text-white hover:bg-brand-blue-dark" : "bg-cyan-500 text-white hover:bg-cyan-400"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Why our hosting?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { I: ShieldCheck, t: "Free SSL", d: "Every site secured with HTTPS by default." },
              { I: Server, t: "NVMe SSD", d: "Lightning fast disk I/O for sub-second loads." },
              { I: Globe, t: "Global CDN", d: "Edge caching across 200+ locations." },
              { I: Mail, t: "Business Email", d: "Webmail, IMAP, SMTP and anti-spam included." },
              { I: HardDrive, t: "Daily Backups", d: "30 days of restore points kept off-server." },
              { I: Clock, t: "99.9% Uptime", d: "Backed by SLA — credits for every minute we miss." },
            ].map(({ I, t, d }) => (
              <div key={t} className="bg-white border rounded-xl p-5">
                <I className="h-8 w-8 text-brand-blue mb-2" />
                <h3 className="font-bold">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
