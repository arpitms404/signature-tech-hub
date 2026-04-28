import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import aboutImg from "@/assets/about-illustration.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Our Company — SkillLogic Technologies" },
      { name: "description", content: "Learn about SkillLogic Technologies — a Lucknow based IT company providing software, web and digital marketing services." },
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
          <h2 className="text-2xl md:text-3xl font-bold mb-5">SkillLogic Technologies Pvt. Ltd.</h2>
          <p className="text-muted-foreground leading-relaxed text-justify mb-4">
            SkillLogic Technologies Pvt. Ltd. was founded in 2021; we are a Lucknow India based Information
            Technology Company with prime objective of providing sophisticated business solutions to small and
            big companies worldwide. We believe in long term relations and hence client satisfaction is our priority.
            Through responsiveness and outstanding performance we always try our best to meet the client expectations.
          </p>
          <p className="text-muted-foreground leading-relaxed text-justify mb-4">
            We are well equipped to deliver an array of services such as Domain Registration and Hosting, Graphic
            Design for the Web and Print, Branding and Logo Development, Website Designing and Maintenance,
            Customized Software Development, CRM and ERP Development and Implementation, Ecommerce Solutions,
            Attendance & Payroll Management Systems, Biometric & Access Control Systems, Mobile App Development,
            Desktop Applications Development, Search Engine Optimization, Social Media Optimization, Pay Per Click,
            Content Marketing, Online Reputation Management etc.
          </p>
          <p className="text-muted-foreground leading-relaxed text-justify">
            Our innovative idea of advance technology by integrating methodical expertise and creative acumen allows
            us to feel as a quality "One Stop Shop IT Services Provider in India". We are an emerging Mid-Sized IT
            Company providing IT solutions all over the world.
          </p>
        </div>
        <div className="relative">
          <img src={aboutImg} alt="Business team analytics" loading="lazy" width={900} height={900} className="w-full max-w-lg mx-auto rounded-full" />
        </div>
      </section>
    </Layout>
  );
}
