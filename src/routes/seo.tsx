import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import { Search, Share2, Target, FileText, BarChart3, TrendingUp } from "lucide-react";
import seoImg from "@/assets/seo.png";

export const Route = createFileRoute("/seo")({
  head: () => ({
    meta: [
      { title: "SEO Services in Lucknow — SkillLogic Technologies" },
      { name: "description", content: "Professional SEO and digital marketing services — keyword research, on-page, off-page, technical SEO and analytics." },
      { property: "og:title", content: "SEO Services — SkillLogic" },
      { property: "og:description", content: "Digital Marketing & SEO Company in Lucknow." },
    ],
  }),
  component: SEO,
});

const items = [
  { I: Search, t: "Keyword Research", d: "Identifying high-intent keywords your customers search for and mapping them to the right pages." },
  { I: FileText, t: "On-Page Optimization", d: "Optimizing titles, meta descriptions, headings, content, images and internal linking for maximum relevance." },
  { I: Share2, t: "Off-Page Optimization", d: "Quality backlinks, brand mentions and authority building from trustworthy domains in your niche." },
  { I: Target, t: "Technical SEO", d: "Crawlability, site speed, structured data, mobile-friendliness, canonicals and Core Web Vitals." },
  { I: BarChart3, t: "Analytics & Reporting", d: "Transparent monthly reports with traffic, rankings, conversions and clear next-step recommendations." },
  { I: TrendingUp, t: "Conversion Optimization", d: "A/B tests, landing page tweaks and funnel improvements to turn traffic into customers." },
];

const packages = [
  { n: "Starter", p: "₹9,999/mo", f: ["10 Keywords", "On-Page (5 pages)", "2 Blog Posts", "Monthly Report"] },
  { n: "Growth", p: "₹24,999/mo", f: ["30 Keywords", "On-Page (15 pages)", "8 Blog Posts", "Backlinks", "Bi-weekly Report"], pop: true },
  { n: "Pro", p: "₹49,999/mo", f: ["60+ Keywords", "Full On-Page", "16 Blog Posts", "PR & Outreach", "Weekly Report"] },
];

function SEO() {
  return (
    <Layout>
      <PageBanner title="SEO" />

      <section className="mx-auto max-w-7xl px-4 py-14 grid lg:grid-cols-2 gap-10">
        <div>
          <span className="text-cyan-600 font-bold tracking-widest text-sm">DIGITAL MARKETING</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-3">Rank higher. Convert better.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Search Engine Optimization (SEO) is the art and science of getting your website to rank higher on
            Google for keywords that matter to your business. SkillLogic Technologies is a leading{" "}
            <span className="bg-cyan-100 text-cyan-700 font-semibold px-1">Digital Marketing & SEO Company in Lucknow</span>{" "}
            offering measurable, white-hat results.
          </p>

          <h3 id="services" className="text-xl font-bold mb-4">Our SEO services include:</h3>
          <ul className="space-y-3">
            {items.map(({ I, t, d }) => (
              <li key={t} className="flex gap-3">
                <div className="h-9 w-9 rounded-lg bg-brand-blue/10 text-brand-blue grid place-items-center shrink-0">
                  <I className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <img src={seoImg} alt="SEO workspace" loading="lazy" width={900} height={700} className="w-full rounded-xl shadow-md" />
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              { n: "120+", l: "Sites Ranked" },
              { n: "5M+", l: "Organic Visits" },
              { n: "98%", l: "Retention" },
            ].map((s) => (
              <div key={s.l} className="bg-white border rounded-xl p-4 text-center">
                <p className="text-xl font-extrabold text-brand-blue">{s.n}</p>
                <p className="text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">SEO Packages</h2>
            <p className="text-muted-foreground mt-2">Transparent pricing. No long-term lock-in.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pl) => (
              <div key={pl.n} className={`relative rounded-2xl bg-white p-6 transition-all hover:shadow-xl ${pl.pop ? "border-2 border-brand-blue shadow-lg" : "border"}`}>
                {pl.pop && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</span>}
                <h3 className="text-xl font-bold text-center">{pl.n}</h3>
                <p className="text-3xl font-extrabold text-brand-blue text-center my-3">{pl.p}</p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-5">
                  {pl.f.map((f) => <li key={f}>✓ {f}</li>)}
                </ul>
                <Link to="/contact" className="block text-center bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2.5 rounded-full transition-colors">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 flex items-center gap-4">
          <div className="flex-1 border-t-2 border-dotted border-brand-blue/40" />
          <h2 className="text-6xl md:text-8xl font-extrabold text-brand-blue/70 tracking-widest">SEO</h2>
          <div className="flex-1 border-t-2 border-dotted border-brand-blue/40" />
        </div>
      </section>
    </Layout>
  );
}
