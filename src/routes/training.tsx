import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "100% Placement Training Courses — SkillLogic" },
      { name: "description", content: "Industry-ready training programs with 100% placement assistance — Web Development, Digital Marketing and more." },
      { property: "og:title", content: "Training & Placement Courses" },
      { property: "og:description", content: "Learn skills, get placed." },
    ],
  }),
  component: Training,
});

function Training() {
  return (
    <Layout>
      <PageBanner title="100% Placement Courses For Technical" />
      <section className="mx-auto max-w-5xl px-4 py-14 space-y-6">
        <p><strong>SkillLogic Technologies</strong> has a lot of jobs itself. So SkillLogic is giving a 100% job after training.</p>
        <p><strong>Eligibility:</strong> B.Tech / M.Tech / BCA / MCA / BSc IT / MSc IT</p>
        <p><strong>Time Duration:</strong> 6 Months</p>

        <table className="w-full border rounded-lg overflow-hidden">
          <thead className="bg-brand-orange text-white">
            <tr><th className="p-3 text-left">FEES STRUCTURE</th><th className="p-3 text-left">FEES</th></tr>
          </thead>
          <tbody className="divide-y">
            <tr><td className="p-3">1. 6 Months Installment</td><td className="p-3">₹9,950</td></tr>
            <tr><td className="p-3">2. One Time Pay</td><td className="p-3">₹49,950</td></tr>
          </tbody>
        </table>
        <p className="text-sm text-muted-foreground">Note: If you pay fees on time, then we will give a 50% discount on the last installment.</p>

        <h3 className="text-xl font-bold pt-4">Office Timings</h3>
        <table className="w-full border rounded-lg overflow-hidden">
          <thead className="bg-brand-orange text-white"><tr><th className="p-3 text-left">DURATION</th><th className="p-3 text-left">TIMINGS</th></tr></thead>
          <tbody><tr><td className="p-3">Monday – Saturday</td><td className="p-3">9:00 AM to 6:00 PM</td></tr></tbody>
        </table>

        <button className="bg-brand-orange text-white font-bold px-8 py-3 rounded-full hover:bg-brand-orange-dark transition-colors mt-4">
          Register Now
        </button>
      </section>
    </Layout>
  );
}
