import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import { CheckCircle2, Target, Lightbulb, Heart, Award, Users } from "lucide-react";
import aboutImg from "@/assets/about-illustration.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Our Company — SkillLogic Technologies" },
      { name: "description", content: "Learn about SkillLogic Technologies — a Lucknow based IT company providing software, web and digital marketing services since 2021." },
      { property: "og:title", content: "About SkillLogic Technologies" },
      { property: "og:description", content: "One Stop Shop IT Services Provider in India." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageBanner title="About Our Company" />
      <section className="mx-auto max-w-7xl px-4 py-14 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <span className="text-cyan-600 font-bold tracking-widest text-sm">WHO WE ARE</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-5 mt-2">SkillLogic Technologies Pvt. Ltd.</h2>
          <p className="text-muted-foreground leading-relaxed text-justify mb-4">
            SkillLogic Technologies Pvt. Ltd. was founded in 2021; we are a Lucknow India based Information
            Technology Company with prime objective of providing sophisticated business solutions to small and
            big companies worldwide. We believe in long term relations and hence client satisfaction is our priority.
          </p>
          <p className="text-muted-foreground leading-relaxed text-justify mb-4">
            We are well equipped to deliver Domain Registration & Hosting, Graphic Design, Branding, Website
            Designing & Maintenance, Custom Software Development, CRM/ERP Implementation, E-commerce Solutions,
            Payroll Management, Biometric Systems, Mobile App Development, Desktop Applications, SEO, SMO, PPC
            and Online Reputation Management.
          </p>
          <p className="text-muted-foreground leading-relaxed text-justify">
            Our innovative idea of advance technology by integrating methodical expertise and creative acumen allows
            us to feel as a quality "One Stop Shop IT Services Provider in India".
          </p>
        </div>
        <div className="relative">
          <img src={aboutImg} alt="Business team analytics" loading="lazy" width={900} height={900} className="w-full max-w-lg mx-auto rounded-3xl shadow-xl" />
        </div>
      </section>

      <section className="bg-secondary py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">What Drives Us</h2>
            <p className="text-muted-foreground mt-2">The principles behind every line of code we ship.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { I: Target, t: "Mission Driven", d: "We solve real business problems, not vanity features." },
              { I: Lightbulb, t: "Innovation", d: "We adopt new tech early so our clients always stay ahead." },
              { I: Heart, t: "Client First", d: "Your goals shape our roadmap. Period." },
              { I: Award, t: "Quality", d: "Every release is QA-tested across devices and browsers." },
            ].map(({ I, t, d }) => (
              <div key={t} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-brand-blue/10 text-brand-blue grid place-items-center mb-3">
                  <I className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-1">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Our Journey</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { y: "2021", t: "Founded", d: "SkillLogic incorporated in Lucknow with 5 founders." },
            { y: "2022", t: "100 Clients", d: "Crossed 100 happy clients across India." },
            { y: "2024", t: "Dubai Office", d: "Opened our first international branch in UAE." },
            { y: "2026", t: "500+ Projects", d: "Delivered 500+ software products globally." },
          ].map((m) => (
            <div key={m.y} className="text-center">
              <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white grid place-items-center text-xl font-extrabold shadow-lg">
                {m.y}
              </div>
              <h3 className="font-bold mt-3">{m.t}</h3>
              <p className="text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-14">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Users className="h-12 w-12 mx-auto text-cyan-300 mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet a 60+ strong team of engineers, designers and marketers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {["Engineers", "Designers", "Marketers", "Support"].map((r, i) => (
              <div key={r} className="bg-white/5 rounded-xl p-5 backdrop-blur-sm border border-white/10">
                <p className="text-3xl font-extrabold text-cyan-300">{[28, 12, 14, 8][i]}+</p>
                <p className="text-sm text-white/70 mt-1">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
