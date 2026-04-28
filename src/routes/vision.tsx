import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision Mission & Values — SkillLogic Technologies" },
      { name: "description", content: "Our vision, mission and values that guide every project at SkillLogic Technologies." },
      { property: "og:title", content: "Vision Mission & Values" },
      { property: "og:description", content: "What drives us at SkillLogic Technologies." },
    ],
  }),
  component: Vision,
});

function Vision() {
  const blocks = [
    { t: "Our Vision", d: "To be the most trusted technology partner for businesses worldwide by delivering reliable, scalable and innovative software solutions." },
    { t: "Our Mission", d: "Empowering organizations with cutting-edge technology that drives growth, efficiency and customer delight." },
    { t: "Our Values", d: "Integrity, innovation, client-first thinking, continuous learning and accountability in everything we build." },
  ];
  return (
    <Layout>
      <PageBanner title="Vision Mission & Values" />
      <section className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-3 gap-6">
        {blocks.map((b) => (
          <div key={b.t} className="border-2 border-brand-orange/60 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-brand-orange mb-3">{b.t}</h3>
            <p className="text-muted-foreground leading-relaxed">{b.d}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
