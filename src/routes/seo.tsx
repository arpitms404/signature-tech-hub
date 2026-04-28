import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
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
  { t: "Keyword research and analysis", d: "Identifying high-intent keywords your customers search for and mapping them to the right pages." },
  { t: "On-Page Optimization", d: "Optimizing titles, meta descriptions, headings, content, images and internal linking for maximum relevance." },
  { t: "Off-Page Optimization", d: "Quality backlinks, brand mentions and authority building from trustworthy domains in your niche." },
  { t: "Technical SEO", d: "Crawlability, site speed, structured data, mobile-friendliness, canonicals and Core Web Vitals." },
  { t: "Analytics and Reporting", d: "Transparent monthly reports with traffic, rankings, conversions and clear next-step recommendations." },
];

function SEO() {
  return (
    <Layout>
      <PageBanner title="SEO" />
      <section className="mx-auto max-w-7xl px-4 py-14 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Search Engine Optimization (SEO) is the art and science of getting your website to rank higher on
            Google for keywords that matter to your business. SkillLogic Technologies is a leading{" "}
            <span className="bg-brand-orange/15 text-brand-orange font-semibold px-1">Digital Marketing & SEO Company in Lucknow</span>{" "}
            offering measurable, white-hat results.
          </p>
          <p className="mb-6">
            <a href="#services" className="text-brand-orange font-semibold underline">SEO services in Lucknow</a>
          </p>

          <h3 id="services" className="text-xl font-bold mb-4">Our SEO services include:</h3>
          <ul className="space-y-4">
            {items.map((it) => (
              <li key={it.t} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-brand-orange shrink-0" />
                <div>
                  <p className="font-semibold">{it.t}</p>
                  <p className="text-sm text-muted-foreground">{it.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <img src={seoImg} alt="SEO workspace" loading="lazy" width={900} height={700} className="w-full rounded-xl shadow-md" />
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 flex items-center gap-4">
          <div className="flex-1 border-t-2 border-dotted border-brand-orange/60" />
          <h2 className="text-6xl md:text-8xl font-extrabold text-brand-orange/80 tracking-widest">SEO</h2>
          <div className="flex-1 border-t-2 border-dotted border-brand-orange/60" />
        </div>
      </section>
    </Layout>
  );
}
