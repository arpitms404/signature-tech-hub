import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import { CheckCircle2, GraduationCap, Briefcase, Calendar } from "lucide-react";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "100% Placement Training Courses — SkillLogic" },
      { name: "description", content: "Industry-ready training programs with 100% placement assistance — Web Development, Digital Marketing, Full Stack and more." },
      { property: "og:title", content: "Training & Placement Courses" },
      { property: "og:description", content: "Learn skills, get placed." },
    ],
  }),
  component: Training,
});

const courses = [
  { t: "Full Stack Web Development", d: "MERN, REST APIs, Databases, Deployment", dur: "6 months", fee: "₹49,950" },
  { t: "Digital Marketing", d: "SEO, SMO, PPC, Analytics, Content Strategy", dur: "4 months", fee: "₹29,950" },
  { t: "MLM Software Engineering", d: "Binary, Unilevel, Smart Contracts", dur: "5 months", fee: "₹39,950" },
  { t: "UI/UX Design", d: "Figma, Wireframes, Design Systems, Prototyping", dur: "3 months", fee: "₹24,950" },
  { t: "Mobile App Development", d: "React Native, Flutter, Firebase", dur: "5 months", fee: "₹39,950" },
  { t: "Data Analytics", d: "Excel, SQL, Power BI, Python basics", dur: "4 months", fee: "₹29,950" },
];

function Training() {
  return (
    <Layout>
      <PageBanner title="100% Placement Courses" />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { I: GraduationCap, t: "Industry Curriculum", d: "Curriculum designed by working engineers, updated every quarter." },
            { I: Briefcase, t: "100% Placement", d: "Dedicated placement cell connecting you with 200+ hiring partners." },
            { I: Calendar, t: "Flexible Batches", d: "Weekday, weekend and online batches to match your schedule." },
          ].map(({ I, t, d }) => (
            <div key={t} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border">
              <I className="h-10 w-10 text-brand-blue mb-3" />
              <h3 className="font-bold text-lg">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">Available Courses</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c) => (
            <div key={c.t} className="border rounded-xl p-5 hover:shadow-lg hover:border-brand-blue transition-all bg-white">
              <h3 className="font-bold text-lg text-brand-blue">{c.t}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">{c.d}</p>
              <div className="flex items-center justify-between text-sm border-t pt-3">
                <span className="text-muted-foreground">⏱ {c.dur}</span>
                <span className="font-bold text-foreground">{c.fee}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-14">
        <div className="mx-auto max-w-5xl px-4 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Eligibility & Fees Structure</h2>
          <p><strong>Eligibility:</strong> B.Tech / M.Tech / BCA / MCA / BSc IT / MSc IT</p>
          <p><strong>Time Duration:</strong> 3 to 6 Months</p>

          <table className="w-full border rounded-lg overflow-hidden bg-white">
            <thead className="bg-brand-blue text-white">
              <tr><th className="p-3 text-left">FEES STRUCTURE</th><th className="p-3 text-left">FEES</th></tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="p-3">1. 6 Months Installment</td><td className="p-3">₹9,950 / month</td></tr>
              <tr><td className="p-3">2. One Time Pay (with 20% discount)</td><td className="p-3">₹49,950</td></tr>
              <tr><td className="p-3">3. EMI (3 / 6 / 12 months)</td><td className="p-3">Available</td></tr>
            </tbody>
          </table>
          <p className="text-sm text-muted-foreground">Note: If you pay fees on time, then we will give a 50% discount on the last installment.</p>

          <h3 className="text-xl font-bold pt-4">Office Timings</h3>
          <table className="w-full border rounded-lg overflow-hidden bg-white">
            <thead className="bg-brand-blue text-white">
              <tr><th className="p-3 text-left">DURATION</th><th className="p-3 text-left">TIMINGS</th></tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="p-3">Monday – Friday</td><td className="p-3">9:00 AM to 6:00 PM</td></tr>
              <tr><td className="p-3">Saturday</td><td className="p-3">10:00 AM to 4:00 PM</td></tr>
              <tr><td className="p-3">Sunday</td><td className="p-3">Closed</td></tr>
            </tbody>
          </table>

          <h3 className="text-xl font-bold pt-4">What you get</h3>
          <ul className="grid sm:grid-cols-2 gap-2">
            {[
              "Live & recorded sessions",
              "Real-world project portfolio",
              "Mock interviews & resume review",
              "Industry-recognized certificate",
              "1:1 mentorship",
              "Placement guarantee",
            ].map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-cyan-600" /> {p}
              </li>
            ))}
          </ul>

          <Link to="/contact" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-3 rounded-full transition-colors mt-4">
            Register Now
          </Link>
        </div>
      </section>
    </Layout>
  );
}
