import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — SkillLogic Technologies" },
      { name: "description", content: "Join SkillLogic Technologies — open positions in software, design and digital marketing." },
      { property: "og:title", content: "Careers at SkillLogic" },
      { property: "og:description", content: "Build the future of business software with us." },
    ],
  }),
  component: Career,
});

function Career() {
  const jobs = [
    { t: "Full Stack Developer", e: "2-4 yrs", l: "Lucknow" },
    { t: "UI/UX Designer", e: "1-3 yrs", l: "Lucknow" },
    { t: "Digital Marketing Executive", e: "0-2 yrs", l: "Lucknow" },
    { t: "MLM Software Engineer", e: "2-5 yrs", l: "Remote" },
  ];
  return (
    <Layout>
      <PageBanner title="Career" />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <p className="text-muted-foreground mb-8 max-w-3xl">
          We're always looking for passionate people who love building software that customers love. Send your CV
          to <a href="mailto:hr@skilllogic.in" className="text-brand-orange font-semibold">hr@skilllogic.in</a>.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {jobs.map((j) => (
            <div key={j.t} className="border rounded-lg p-5 hover:shadow-md hover:border-brand-orange transition-all">
              <h3 className="font-bold text-lg">{j.t}</h3>
              <p className="text-sm text-muted-foreground">Experience: {j.e} · Location: {j.l}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
