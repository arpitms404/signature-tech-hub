import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";

export const Route = createFileRoute("/ssl-hosting")({
  head: () => ({
    meta: [
      { title: "SSL & Hosting — SkillLogic Technologies" },
      { name: "description", content: "Reliable hosting and SSL certificate services for your business website." },
      { property: "og:title", content: "SSL & Hosting" },
      { property: "og:description", content: "Fast, secure hosting and SSL certificates." },
    ],
  }),
  component: SSL,
});

function SSL() {
  const plans = [
    { n: "Starter", p: "₹999/yr", f: ["10GB SSD","Free SSL","5 Email Accounts","99.9% uptime"] },
    { n: "Business", p: "₹2499/yr", f: ["50GB SSD","Free SSL Wildcard","Unlimited Email","Daily Backups"] },
    { n: "Enterprise", p: "₹5999/yr", f: ["200GB SSD","Premium SSL","Unlimited Email","Priority Support"] },
  ];
  return (
    <Layout>
      <PageBanner title="SSL & Hosting" />
      <section className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-3 gap-6">
        {plans.map((pl) => (
          <div key={pl.n} className="border-2 border-brand-orange/50 rounded-xl p-6 text-center bg-white hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold">{pl.n}</h3>
            <p className="text-3xl font-extrabold text-brand-orange my-3">{pl.p}</p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-5">
              {pl.f.map((f) => <li key={f}>✓ {f}</li>)}
            </ul>
            <button className="bg-brand-teal text-white font-bold px-6 py-2 rounded-full hover:opacity-90">Get Started</button>
          </div>
        ))}
      </section>
    </Layout>
  );
}
