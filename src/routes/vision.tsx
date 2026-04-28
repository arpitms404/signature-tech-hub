import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import { Eye, Rocket, Heart, ShieldCheck, Lightbulb, Users, HandshakeIcon, BookOpen } from "lucide-react";

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
    { I: Eye, t: "Our Vision", d: "To be the most trusted technology partner for businesses worldwide by delivering reliable, scalable and innovative software solutions that empower the next generation of entrepreneurs." },
    { I: Rocket, t: "Our Mission", d: "Empowering organizations with cutting-edge technology that drives growth, efficiency and customer delight while keeping costs predictable and outcomes measurable." },
    { I: Heart, t: "Our Values", d: "Integrity, innovation, client-first thinking, continuous learning and accountability in everything we build, sell and support." },
  ];
  const values = [
    { I: ShieldCheck, t: "Integrity", d: "We do the right thing — even when no one is watching." },
    { I: Lightbulb, t: "Innovation", d: "We embrace new ideas and challenge the status quo." },
    { I: Users, t: "Teamwork", d: "Great products are built by great teams that respect each other." },
    { I: HandshakeIcon, t: "Trust", d: "We earn trust through transparency and reliable delivery." },
    { I: BookOpen, t: "Learning", d: "We grow daily through curiosity and shared knowledge." },
    { I: Heart, t: "Customer Love", d: "Every decision starts with the customer's success in mind." },
  ];
  return (
    <Layout>
      <PageBanner title="Vision Mission & Values" />
      <section className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-3 gap-6">
        {blocks.map(({ I, t, d }) => (
          <div key={t} className="border rounded-xl p-6 bg-white hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white grid place-items-center mb-4 shadow-md">
              <I className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-brand-blue mb-3">{t}</h3>
            <p className="text-muted-foreground leading-relaxed">{d}</p>
          </div>
        ))}
      </section>

      <section className="bg-secondary py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <span className="text-cyan-600 font-bold tracking-widest text-sm">CORE VALUES</span>
            <h2 className="text-3xl font-bold mt-2">Six pillars we live by</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ I, t, d }) => (
              <div key={t} className="flex gap-4 bg-white p-5 rounded-xl border">
                <div className="h-11 w-11 rounded-lg bg-cyan-100 text-cyan-700 grid place-items-center shrink-0">
                  <I className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{t}</h3>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
