import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";

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

function ERP() {
  return (
    <Layout>
      <PageBanner title="Software / ERP" />
      <section className="bg-amber-50/60 py-14">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-orange mb-5">Smart Contract Software</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Smart contract software automates execution of agreements between parties on a blockchain. SkillLogic
              Technologies designs secure, audited and gas-efficient smart contracts for token sales, MLM payouts,
              escrow, royalty distribution and more.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team has deep experience with Solidity, Rust and EVM-compatible chains, ensuring your business
              logic runs trustlessly with full transparency.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 grid place-items-center p-10 shadow-2xl">
              <div className="text-center">
                <div className="text-white text-3xl md:text-5xl font-extrabold leading-tight">SMART<br/>CONTRACT<br/>SOFTWARE</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-2xl bg-yellow-400 rotate-12 -z-0" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-pink-400 -z-0" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h3 className="text-2xl font-bold mb-6">Industry Solutions We Build</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Accounting & Billing","ERP Software","CRM Software","Nidhi Software",
            "Microfinance Software","Real Estate Software","News Portal","Salon Software",
            "Hotel Software","Property Management Software","Restaurant Management Software",
            "School & College Management Software","Hospital Management","Project Management Software",
          ].map((s) => (
            <div key={s} className="border rounded-lg p-4 hover:border-brand-orange hover:shadow-md transition-all bg-white">
              <p className="font-semibold">{s}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
