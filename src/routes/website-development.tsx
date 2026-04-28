import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import { Settings, Coffee, Laptop, Smartphone, Code2, Layers, Globe, ShoppingCart } from "lucide-react";

export const Route = createFileRoute("/website-development")({
  head: () => ({
    meta: [
      { title: "Website Development Company in Lucknow — SkillLogic" },
      { name: "description", content: "Professional website design and development services in Lucknow — static, dynamic and e-commerce websites." },
      { property: "og:title", content: "Website Development — SkillLogic" },
      { property: "og:description", content: "Top website design & development company in Lucknow." },
    ],
  }),
  component: WebDev,
});

function IconBubble({ Icon }: { Icon: typeof Settings }) {
  return (
    <div className="h-14 w-14 rounded-full bg-white border-2 border-brand-blue/40 grid place-items-center text-brand-blue shadow-sm">
      <Icon className="h-6 w-6" />
    </div>
  );
}

const types = [
  { I: Globe, t: "Static Website", d: "Fast, secure brochure-style sites perfect for portfolios and small businesses.", price: "from ₹7,999" },
  { I: Layers, t: "Dynamic Website", d: "CMS-driven sites with admin panel, blog and dynamic content management.", price: "from ₹19,999" },
  { I: ShoppingCart, t: "E-commerce", d: "Custom shops with products, cart, payments, shipping and inventory.", price: "from ₹39,999" },
  { I: Code2, t: "Web Application", d: "SaaS-grade web apps with auth, dashboards and complex business logic.", price: "Custom" },
];

function WebDev() {
  return (
    <Layout>
      <PageBanner title="Website Development" />

      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="text-center">
              <IconBubble Icon={Settings} />
              <p className="mt-2 text-sm font-semibold">User Experience Design</p>
            </div>
            <div className="flex-1 min-w-[120px] flex items-center justify-center gap-3 px-4">
              <div className="flex-1 border-t-2 border-dashed border-brand-blue" />
              <IconBubble Icon={Coffee} />
              <IconBubble Icon={Laptop} />
              <IconBubble Icon={Smartphone} />
              <div className="flex-1 border-t-2 border-dashed border-brand-blue" />
            </div>
            <div className="text-center">
              <IconBubble Icon={Settings} />
              <p className="mt-2 text-sm font-semibold">Installation & Setup</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="text-center mb-10">
          <span className="text-cyan-600 font-bold tracking-widest text-sm">WHAT WE BUILD</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Types of Websites</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {types.map(({ I, t, d, price }) => (
            <div key={t} className="border rounded-xl p-6 hover:border-brand-blue hover:shadow-lg hover:-translate-y-1 transition-all bg-white">
              <I className="h-10 w-10 text-brand-blue mb-3" />
              <h3 className="font-bold text-lg">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">{d}</p>
              <p className="text-brand-blue font-bold text-sm">{price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-6">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
        <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
          Your website is the digital storefront for your business. A great domain plus a great website
          establishes credibility, reaches new audiences, and drives measurable business growth. SkillLogic
          Technologies has built websites for hundreds of brands across India and abroad — from one-page
          portfolios to full enterprise platforms.
        </p>

        <div className="border rounded-xl overflow-hidden shadow-sm">
          <div className="bg-brand-blue text-white text-center py-3 font-bold tracking-wide">DYNAMIC WEBSITE FEATURES</div>
          <ul className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x text-center">
            {["Domain & Hosting","SSL Certificate","Webmails","10 GB Storage","Unlimited Emails","Responsive Design","Admin Panel","SEO Friendly URLs"].map((f) => (
              <li key={f} className="py-3 px-4">{f}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-secondary p-6 rounded-xl border">
            <h3 className="font-bold text-lg mb-3">Our Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "Laravel", "WordPress", "Shopify", "MySQL", "MongoDB", "Tailwind"].map((t) => (
                <span key={t} className="bg-white px-3 py-1 rounded-full text-sm border">{t}</span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">Ready to start?</h3>
            <p className="text-sm text-white/85 mb-4">Get a custom proposal in 24 hours — completely free.</p>
            <Link to="/contact" className="inline-block bg-white text-brand-blue font-bold px-5 py-2 rounded-full hover:bg-cyan-50 transition-colors">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
