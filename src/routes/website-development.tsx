import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import { Settings, Coffee, Laptop, Smartphone } from "lucide-react";

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
    <div className="h-14 w-14 rounded-full bg-white border-2 border-brand-orange/50 grid place-items-center text-brand-orange shadow-sm">
      <Icon className="h-6 w-6" />
    </div>
  );
}

function WebDev() {
  return (
    <Layout>
      <PageBanner title="Website Development" />

      <section className="bg-cyan-50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="text-center">
              <IconBubble Icon={Settings} />
              <p className="mt-2 text-sm font-semibold">User Experience Design</p>
            </div>
            <div className="flex-1 min-w-[120px] flex items-center justify-center gap-3 px-4">
              <div className="flex-1 border-t-2 border-dashed border-brand-orange" />
              <IconBubble Icon={Coffee} />
              <IconBubble Icon={Laptop} />
              <IconBubble Icon={Smartphone} />
              <div className="flex-1 border-t-2 border-dashed border-brand-orange" />
            </div>
            <div className="text-center">
              <IconBubble Icon={Settings} />
              <p className="mt-2 text-sm font-semibold">Installation & Setup</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
        <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
          Your website is the digital storefront for your business. A great domain plus a great website
          establishes credibility, reaches new audiences, and drives measurable business growth. SkillLogic
          Technologies has built websites for hundreds of brands across India and abroad — from one-page
          portfolios to full enterprise platforms.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Why SkillLogic Technologies for Website Designing and Development?
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
          <p>SkillLogic Technologies is one of the top website development, software and digital marketing companies known for world-class IT services such as App Building, Software Development, Web Development, Web Hosting, Web Designing, Content Development, SEO, etc.</p>
          <p>Based on coding the web development is another indispensable part of digital marketing service, which the expert IT engineers of SkillLogic Technologies excel in delivering to the great satisfaction of clients.</p>
          <p>SkillLogic software designers give the best web development services in Lucknow to their clients. We can design & develop your business website as your need.</p>
        </div>

        <div className="mt-10 border rounded-xl overflow-hidden shadow-sm">
          <div className="bg-brand-orange text-white text-center py-3 font-bold tracking-wide">DYNAMIC WEBSITE FEATURES</div>
          <ul className="divide-y text-center">
            {["Domain & Hosting","SSL Certificate","Webmails","10 GB Storage Unlimited Email(s)","Responsive Design","Admin Panel","SEO Friendly URLs","Fast Loading Pages"].map((f) => (
              <li key={f} className="py-3">{f}</li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
