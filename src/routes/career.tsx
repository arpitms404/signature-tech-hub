import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import { MapPin, Briefcase, Clock, Heart, Coffee, Zap, BookOpen, Users } from "lucide-react";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — SkillLogic Technologies" },
      { name: "description", content: "Join SkillLogic Technologies — open positions in software, design and digital marketing across India and remote." },
      { property: "og:title", content: "Careers at SkillLogic" },
      { property: "og:description", content: "Build the future of business software with us." },
    ],
  }),
  component: Career,
});

function Career() {
  const jobs = [
    { t: "Full Stack Developer (MERN)", e: "2-4 yrs", l: "Lucknow", typ: "Full-time", tags: ["React", "Node.js", "MongoDB"] },
    { t: "UI/UX Designer", e: "1-3 yrs", l: "Lucknow", typ: "Full-time", tags: ["Figma", "Design Systems"] },
    { t: "Digital Marketing Executive", e: "0-2 yrs", l: "Lucknow", typ: "Full-time", tags: ["SEO", "Ads", "Analytics"] },
    { t: "MLM Software Engineer", e: "2-5 yrs", l: "Remote", typ: "Full-time", tags: ["PHP", "Laravel", "MySQL"] },
    { t: "Mobile App Developer", e: "2-4 yrs", l: "Lucknow", typ: "Full-time", tags: ["React Native", "Flutter"] },
    { t: "QA / Test Engineer", e: "1-3 yrs", l: "Hybrid", typ: "Full-time", tags: ["Manual", "Automation", "Cypress"] },
    { t: "Sales Executive", e: "0-3 yrs", l: "Lucknow", typ: "Full-time", tags: ["B2B", "SaaS"] },
    { t: "Content Writer", e: "1-3 yrs", l: "Remote", typ: "Part-time", tags: ["SEO", "Tech"] },
  ];
  const perks = [
    { I: Heart, t: "Health Insurance", d: "Family floater coverage from day one." },
    { I: Coffee, t: "Free Snacks", d: "Stocked pantry & weekly team lunches." },
    { I: Zap, t: "Latest Hardware", d: "Choose your own laptop & dual-monitor setup." },
    { I: BookOpen, t: "Learning Budget", d: "₹30k/yr for courses, books & conferences." },
    { I: Users, t: "Flat Hierarchy", d: "Your ideas reach decision-makers in one step." },
    { I: Clock, t: "Flexible Hours", d: "Work when you do your best work." },
  ];
  return (
    <Layout>
      <PageBanner title="Career" />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-600 font-bold tracking-widest text-sm">JOIN OUR TEAM</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Work that matters. Teams you'll love.</h2>
          <p className="text-muted-foreground">
            We're always looking for passionate people who love building software that customers love.
            Send your CV to <a href="mailto:hr@skilllogic.in" className="text-brand-blue font-semibold">hr@skilllogic.in</a>.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-4">Open Positions ({jobs.length})</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {jobs.map((j) => (
            <div key={j.t} className="border rounded-xl p-5 hover:shadow-lg hover:border-brand-blue transition-all bg-white group">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-lg group-hover:text-brand-blue">{j.t}</h3>
                <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full whitespace-nowrap">{j.typ}</span>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {j.e}</span>
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {j.l}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {j.tags.map((t) => <span key={t} className="text-xs bg-secondary px-2 py-0.5 rounded">{t}</span>)}
              </div>
              <Link to="/contact" className="text-brand-blue text-sm font-semibold hover:underline">Apply now →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Perks & Benefits</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map(({ I, t, d }) => (
              <div key={t} className="bg-white p-5 rounded-xl border hover:shadow-md transition-shadow">
                <I className="h-8 w-8 text-cyan-600 mb-2" />
                <h3 className="font-bold">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
