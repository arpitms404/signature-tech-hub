import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/mlm")({
  head: () => ({
    meta: [
      { title: "MLM Software — Binary, Unilevel, Matrix Plans | SkillLogic" },
      { name: "description", content: "Custom MLM software development including Binary, Spillover Binary, Unilevel, Matrix and Generation plans." },
      { property: "og:title", content: "MLM Software Development" },
      { property: "og:description", content: "Binary, Spillover, Unilevel, Matrix & Generation MLM plans." },
    ],
  }),
  component: MLM,
});

function BinarySVG() {
  return (
    <svg viewBox="0 0 400 320" className="w-full h-auto">
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="#2E7BC4" />
        </marker>
      </defs>
      <path d="M120,80 A100,60 0 0,1 280,80" fill="none" stroke="#2E7BC4" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="200" y1="80" x2="100" y2="170" stroke="#2E7BC4" strokeWidth="2" markerEnd="url(#arr)" />
      <line x1="200" y1="80" x2="300" y2="170" stroke="#2E7BC4" strokeWidth="2" markerEnd="url(#arr)" />
      <line x1="100" y1="200" x2="100" y2="260" stroke="#2E7BC4" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="300" y1="200" x2="300" y2="260" stroke="#2E7BC4" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="200" cy="60" r="28" fill="#2E7BC4" />
      <text x="200" y="65" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">USER</text>
      <circle cx="100" cy="190" r="24" fill="#4A90E2" />
      <text x="100" y="194" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">LEFT</text>
      <circle cx="300" cy="190" r="24" fill="#4A90E2" />
      <text x="300" y="194" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">RIGHT</text>
      <circle cx="100" cy="280" r="20" fill="#22D3EE" />
      <text x="100" y="284" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">SPILL</text>
      <circle cx="300" cy="280" r="20" fill="#22D3EE" />
      <text x="300" y="284" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">SPILL</text>
    </svg>
  );
}

function UniNode({ cx, cy, color = "#4A90E2", r = 18 }: { cx: number; cy: number; color?: string; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={color} stroke="white" strokeWidth="2" />
      <circle cx={cx} cy={cy - 3} r={r * 0.35} fill="white" opacity="0.9" />
      <path d={`M${cx - r * 0.55},${cy + r * 0.7} Q${cx},${cy + r * 0.2} ${cx + r * 0.55},${cy + r * 0.7}`} fill="white" opacity="0.9" />
    </g>
  );
}

function UnilevelSVG() {
  const lvl1 = [140, 260];
  const lvl2 = [60, 130, 200, 270, 340];
  const lvl3 = [40, 100, 160, 220, 280, 340, 380];
  return (
    <svg viewBox="0 0 420 360" className="w-full h-auto">
      {lvl1.map((x) => <line key={`a${x}`} x1="200" y1="50" x2={x} y2="130" stroke="#22D3EE" strokeWidth="2" />)}
      {lvl1.map((p) => lvl2.map((x) => (
        <line key={`b${p}-${x}`} x1={p} y1="150" x2={x} y2="220" stroke="#2E7BC4" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />
      )))}
      {lvl2.map((p) => lvl3.map((x) => (
        <line key={`c${p}-${x}`} x1={p} y1="240" x2={x} y2="310" stroke="#4A90E2" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />
      )))}
      <UniNode cx={200} cy={40} color="#1E3A8A" r={22} />
      <text x="200" y="22" textAnchor="middle" fontSize="10" fontWeight="700" fill="#666">SPONSOR</text>
      {lvl1.map((x) => <UniNode key={`n1-${x}`} cx={x} cy={140} color="#2E7BC4" r={18} />)}
      {lvl2.map((x) => <UniNode key={`n2-${x}`} cx={x} cy={230} color="#22D3EE" r={15} />)}
      {lvl3.map((x) => <UniNode key={`n3-${x}`} cx={x} cy={320} color="#4A90E2" r={13} />)}
    </svg>
  );
}

const features = [
  "Genealogy Tree View", "Real-time Commission Calculation", "E-Wallet & Payouts",
  "KYC & Document Upload", "Multi-currency Support", "Tax & TDS Reports",
  "Mobile App for Members", "Replicated Websites", "Bulk Email/SMS",
  "Withdrawal Approval Workflow", "Multi-language", "Bank API Integration",
];

function MLM() {
  return (
    <Layout>
      <PageBanner title="MLM Software" />

      <section className="mx-auto max-w-7xl px-4 py-14 grid lg:grid-cols-2 gap-10 items-center">
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <BinarySVG />
        </div>
        <div>
          <span className="text-cyan-600 font-bold tracking-widest text-sm">BINARY PLAN</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-1">Spill over Binary Plan</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The Spillover Binary plan is the standard MLM networking plan for MLM companies — one of the most
            popular MLM plans where every distributor sponsors only two front-line distributors. If a sponsor has
            more than two front-line distributors, the additional ones spill down to the next available position
            in their downline.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            SkillLogic Technologies builds robust binary plan software that calculates pair matching, capping,
            carry-forward and bonuses with high accuracy and lightning speed.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-14">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-cyan-600 font-bold tracking-widest text-sm">UNILEVEL PLAN</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-1">Unilevel MLM Software</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              In a Unilevel compensation plan you don't build legs, you build levels. Every recruit you sponsor
              will fall on your front line, allowing unlimited width across your first level and structured
              commissions across deeper levels.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our Unilevel software supports configurable level depths, compression, fast-start bonuses and
              detailed performance analytics for each member.
            </p>
          </div>
          <div className="order-1 lg:order-2 bg-white border rounded-xl p-6 shadow-sm">
            <UnilevelSVG />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">All MLM Plans We Build</h2>
          <p className="text-muted-foreground mt-2">Pick a plan or let us design a hybrid model for you.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { t: "Binary Plan", d: "Two-leg structure with pair matching and capping bonuses." },
            { t: "Unilevel Plan", d: "Unlimited width with level-wise commissions." },
            { t: "Matrix Plan (3x3, 5x5)", d: "Forced matrix with spillover and re-entry." },
            { t: "Generation Plan", d: "Generation-depth bonuses for product MLMs." },
            { t: "Board / Cycle Plan", d: "Member rotates across boards on completion." },
            { t: "Australian Binary", d: "Capped binary pairs ideal for stable payouts." },
            { t: "Crypto / Token MLM", d: "Wallet integration & on-chain commissions." },
            { t: "Smart Contract MLM", d: "Trustless payouts via audited contracts." },
            { t: "Hybrid Plan", d: "Custom-blended logic tailored to your model." },
          ].map((p) => (
            <div key={p.t} className="border rounded-xl p-5 hover:border-brand-blue hover:shadow-lg transition-all bg-white">
              <h3 className="font-bold text-brand-blue">{p.t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Built-in Features</h2>
            <p className="text-white/70 mt-2">Everything you need to launch and scale your MLM business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-cyan-300 shrink-0" /> {f}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-3 rounded-full transition-colors">
              Request Free Demo
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
