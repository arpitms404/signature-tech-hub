import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CtaStrip } from "@/components/site/CtaStrip";
import {
  CheckCircle2, Users, Award, Briefcase, Globe2, Code2, Smartphone,
  TrendingUp, ShieldCheck, Headphones, Star, Quote, ArrowRight,
  GraduationCap as GraduationCapIcon, Network as NetworkIcon,
  HeartPulse as HeartPulseIcon, Receipt as ReceiptIcon,
  Building2 as Building2Icon, Coins as CoinsIcon,
} from "lucide-react";
import logo from "@/assets/logo-skilllogic.jpg";
import hero from "@/assets/hero-illustration.png";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkillLogic Technologies — Software, MLM & Digital Solutions" },
      { name: "description", content: "SkillLogic Technologies builds MLM software, school management, ERP, CRM, billing, websites and digital marketing solutions trusted by 500+ clients." },
      { property: "og:title", content: "SkillLogic Technologies" },
      { property: "og:description", content: "Smart software & digital solutions for modern businesses." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden isolate">
        {/* Video background */}
        <video
          src={heroVideo.url}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover -z-10"
        />
        {/* Color overlay for legibility */}
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(135deg, oklch(0.32 0.08 255 / 0.88) 0%, oklch(0.45 0.16 240 / 0.78) 60%, oklch(0.55 0.14 220 / 0.72) 100%)" }}
        />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 animate-slide-in-left">
            <img
              src={hero}
              alt="Software development team"
              width={1024}
              height={1024}
              className="w-full max-w-md mx-auto animate-float drop-shadow-2xl"
            />
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 text-white animate-slide-in-right">
            <div className="flex justify-end mb-6">
              <div className="bg-white rounded-xl px-4 py-2 shadow-xl card-hover">
                <img src={logo} alt="SkillLogic" className="h-12 w-auto" />
              </div>
            </div>

            <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4 reveal">
              Trusted by 500+ businesses worldwide
            </span>

            <ul className="space-y-3 mb-8">
              {[
                "School Management Software",
                "MLM Software",
                "ERP & CRM Solutions",
              ].map((line, i) => (
                <li
                  key={line}
                  className="flex items-start gap-3 reveal"
                  style={{ animationDelay: `${150 + i * 120}ms` }}
                >
                  <span className="mt-3 h-2.5 w-2.5 rounded-full bg-cyan-300 shrink-0 animate-pulse" />
                  <span className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow">
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-stretch gap-4 reveal reveal-delay-4">
              <div className="inline-flex items-stretch rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-400 to-orange-500 card-hover">
                <div className="px-5 py-4 flex items-center text-white font-bold text-lg leading-tight">
                  Call for<br />Demo
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 px-6 py-3 text-white font-mono text-base md:text-lg font-bold tracking-wider">
                  <a href="tel:7500766615" className="block hover:opacity-90">750 076 6615</a>
                  <a href="tel:8957804051" className="block hover:opacity-90">895 780 4051</a>
                  <a href="tel:8668210745" className="block hover:opacity-90">866 821 0745</a>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition-all hover:scale-105 text-white font-bold px-6 rounded-2xl shadow-xl group"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "500+", l: "Happy Clients", I: Users },
            { n: "350+", l: "Projects Delivered", I: Briefcase },
            { n: "25+", l: "Industry Awards", I: Award },
            { n: "15+", l: "Countries Served", I: Globe2 },
          ].map(({ n, l, I }, i) => (
            <div key={l} className="flex flex-col items-center group reveal" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="h-14 w-14 rounded-full bg-brand-blue/10 grid place-items-center text-brand-blue mb-2 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <I className="h-7 w-7 icon-anim" />
              </div>
              <p className="text-3xl font-extrabold text-brand-blue group-hover:scale-110 transition-transform">{n}</p>
              <p className="text-sm text-muted-foreground font-medium">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-cyan-600 font-bold tracking-widest text-sm">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              We Build Software That <span className="text-gradient-brand">Drives Growth</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SkillLogic Technologies Pvt. Ltd. was founded in 2021 with the mission of providing sophisticated
              business solutions to companies of every size. From MLM platforms to school ERP, web design to digital
              marketing — we handle the full stack of modern business technology.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 mb-6">
              {[
                "Custom software development",
                "Dedicated project managers",
                "On-time delivery commitment",
                "Lifetime technical support",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-blue-dark transition-colors"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { I: Code2, t: "Web & App Dev", c: "from-blue-500 to-indigo-600" },
              { I: Smartphone, t: "Mobile First", c: "from-cyan-500 to-blue-500" },
              { I: TrendingUp, t: "Marketing", c: "from-amber-500 to-orange-500" },
              { I: ShieldCheck, t: "Secure & Audited", c: "from-indigo-500 to-purple-600" },
            ].map(({ I, t, c }, i) => (
              <div
                key={t}
                style={{ animationDelay: `${i * 90}ms` }}
                className={`bg-gradient-to-br ${c} text-white rounded-2xl p-6 shadow-lg card-tilt reveal group`}
              >
                <I className="h-10 w-10 mb-3 opacity-90 group-hover:animate-icon-wiggle" />
                <p className="font-bold text-lg">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* MLM PLANS HIGHLIGHT */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <span className="text-cyan-300 font-bold tracking-widest text-sm">MLM SOFTWARE</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Complete MLM Plans We Develop</h2>
            <p className="text-white/70 mt-2">Robust, scalable and fully customizable MLM platforms.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: "Binary Plan", d: "Two-leg structure with pair matching, capping & carry-forward bonuses." },
              { t: "Unilevel Plan", d: "Unlimited width, level-based commissions and fast-start incentives." },
              { t: "Matrix Plan", d: "Forced matrix (3x3, 5x5, etc.) with spillover and re-entry support." },
              { t: "Generation Plan", d: "Generation depth bonuses ideal for product-driven MLM businesses." },
              { t: "Spillover Binary", d: "Auto-fill binary structure that motivates upline sponsors." },
              { t: "Crypto MLM", d: "Token-based payouts, wallet integration and on-chain transparency." },
              { t: "Smart Contract", d: "Trustless commission distribution via audited smart contracts." },
              { t: "Hybrid Plan", d: "Custom-blended compensation logic tailored to your business model." },
            ].map((p, i) => (
              <Link
                key={p.t}
                to="/mlm"
                style={{ animationDelay: `${i * 60}ms` }}
                className="reveal bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/10 transition-all hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_15px_40px_-10px_rgba(34,211,238,0.35)] group"
              >
                <h3 className="text-lg font-bold text-cyan-300 group-hover:tracking-wide transition-all">{p.t}</h3>
                <p className="text-sm text-white/75 mt-2">{p.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <span className="text-cyan-600 font-bold tracking-widest text-sm">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Businesses Trust SkillLogic</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { I: ShieldCheck, t: "Secure & Reliable", d: "Audited code, encrypted data and regular security patches keep your business safe." },
              { I: Headphones, t: "24/7 Support", d: "Dedicated support team available round the clock via call, chat and email." },
              { I: TrendingUp, t: "Scalable Architecture", d: "Solutions designed to grow with your business — from startup to enterprise." },
              { I: Award, t: "Industry Experts", d: "Decades of combined experience across software, marketing and finance." },
              { I: Users, t: "Client First Approach", d: "We listen, advise and customize. Your success is the only KPI we measure." },
              { I: CheckCircle2, t: "On-Time Delivery", d: "Agile sprints with weekly demos so you always know what's shipping when." },
            ].map(({ I, t, d }, i) => (
              <div
                key={t}
                style={{ animationDelay: `${i * 70}ms` }}
                className="reveal border rounded-xl p-6 hover:border-brand-blue card-hover bg-white group"
              >
                <div className="h-12 w-12 rounded-lg bg-brand-blue/10 text-brand-blue grid place-items-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <I className="h-6 w-6 icon-anim" />
                </div>
                <h3 className="font-bold text-lg mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <span className="text-cyan-600 font-bold tracking-widest text-sm">OUR WORK</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Recent <span className="text-gradient-brand">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-2">A glimpse of products we shipped for clients across industries.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "EduPro School ERP", c: "Education", g: "from-blue-500 to-cyan-500", I: GraduationCapIcon, tags: ["React", "Node", "Postgres"], d: "Admissions, fees, attendance & parent portal." },
              { t: "VertexMLM Platform", c: "Network Marketing", g: "from-indigo-500 to-purple-600", I: NetworkIcon, tags: ["Binary", "Wallet", "API"], d: "Binary plan with real-time payouts." },
              { t: "MediCare Hospital Suite", c: "Healthcare", g: "from-emerald-500 to-teal-600", I: HeartPulseIcon, tags: ["HMS", "EMR", "Billing"], d: "OPD, IPD, pharmacy & lab modules." },
              { t: "RetailX Billing", c: "Retail / POS", g: "from-amber-500 to-orange-500", I: ReceiptIcon, tags: ["GST", "Inventory", "POS"], d: "Multi-store POS with GST & inventory." },
              { t: "RealEstate CRM", c: "Property", g: "from-rose-500 to-pink-600", I: Building2Icon, tags: ["Leads", "CRM", "Mobile"], d: "Lead pipeline, site visits & follow-ups." },
              { t: "TokenChain Wallet", c: "Blockchain", g: "from-slate-700 to-blue-700", I: CoinsIcon, tags: ["Web3", "EVM", "Smart Contracts"], d: "Custodial wallet with on-chain payouts." },
            ].map((p, i) => (
              <article
                key={p.t}
                style={{ animationDelay: `${i * 80}ms` }}
                className="reveal group relative rounded-2xl overflow-hidden bg-white shadow-md card-hover"
              >
                {/* Animated thumbnail */}
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.g} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px),radial-gradient(circle_at_80%_60%,white_1px,transparent_1px)] [background-size:24px_24px,32px_32px]" />
                  <div className="absolute -inset-1 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.35)_50%,transparent_70%)] bg-[length:200%_100%] opacity-0 group-hover:opacity-100 animate-shimmer" />
                  <div className="absolute inset-0 grid place-items-center text-white">
                    <p.I className="h-16 w-16 drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" strokeWidth={1.4} />
                  </div>
                  {/* Overlay (slides up on hover) */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/85 via-black/55 to-transparent p-4 text-white">
                    <p className="text-xs font-semibold tracking-wider uppercase text-cyan-300">{p.c}</p>
                    <p className="text-sm mt-1">{p.d}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {p.tags.map((tg) => (
                        <span key={tg} className="text-[10px] uppercase tracking-wider bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded-full">{tg}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold group-hover:text-brand-blue transition-colors">{p.t}</h3>
                    <p className="text-sm text-muted-foreground">{p.c}</p>
                  </div>
                  <span className="h-9 w-9 rounded-full bg-brand-blue/10 text-brand-blue grid place-items-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <span className="text-cyan-600 font-bold tracking-widest text-sm">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Rohan Mehta", r: "CEO, VertexMLM", q: "SkillLogic delivered our binary MLM platform in record time. Calculations are flawless and support is fantastic." },
              { n: "Priya Sharma", r: "Principal, EduPro", q: "Our school ERP transformed admissions, fees and attendance. Parents and teachers love the mobile app." },
              { n: "Arjun Singh", r: "Founder, RetailX", q: "The team understood our retail workflow perfectly. The POS system handles GST and inventory effortlessly." },
            ].map((t, i) => (
              <div
                key={t.n}
                style={{ animationDelay: `${i * 100}ms` }}
                className="reveal bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 relative border card-hover"
              >
                <Quote className="h-8 w-8 text-brand-blue/20 absolute top-4 right-4 group-hover:rotate-12 transition-transform" />
                <div className="flex gap-1 mb-3 text-amber-500">
                  {[0, 1, 2, 3, 4].map((i2) => <Star key={i2} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm text-muted-foreground italic mb-5 leading-relaxed">"{t.q}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-brand-blue text-white grid place-items-center font-bold ring-2 ring-cyan-200">
                    {t.n.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{t.n}</p>
                    <p className="text-xs text-muted-foreground">{t.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS LOGO STRIP */}
      <section className="bg-secondary py-12 border-y">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-center text-sm font-bold tracking-widest text-muted-foreground mb-6">TRUSTED BY LEADING BRANDS</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {["Vertex", "EduPro", "MediCare", "RetailX", "TokenChain", "RealtyHub"].map((b) => (
              <div key={b} className="text-center text-2xl font-extrabold text-muted-foreground/60 hover:text-brand-blue transition-colors">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </Layout>
  );
}
