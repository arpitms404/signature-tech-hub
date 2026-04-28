import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import director from "@/assets/director.png";

export const Route = createFileRoute("/director")({
  head: () => ({
    meta: [
      { title: "Director — SkillLogic Technologies" },
      { name: "description", content: "A message from the Director & CEO of SkillLogic Technologies Pvt. Ltd." },
      { property: "og:title", content: "Director's Message — SkillLogic" },
      { property: "og:description", content: "Message from the Director & CEO of SkillLogic Technologies." },
    ],
  }),
  component: Director,
});

function Director() {
  return (
    <Layout>
      <PageBanner title="Director" />
      <section className="mx-auto max-w-7xl px-4 py-14 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 order-2 lg:order-1">
          <p className="font-semibold text-foreground mb-4">Dear Team and Clients,</p>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>As the director of SkillLogic Technologies Pvt. Ltd., I want to take a moment to express my appreciation for the hard work and dedication of our team and our clients who trust us with their cutting-edge technology solutions.</p>
            <p>Our company's mission has always been to provide exceptional products and services that exceed our client's expectations. We believe that our success is directly tied to the success of our clients, and we are committed to developing strong partnerships with each and every one of you, and we look forward to continuing to work together to achieve great things.</p>
            <p>To our clients, I want to extend my sincere gratitude for your continued trust and support. We understand that your needs are unique, and we are committed to providing personalized solutions that are tailored to your specific requirements.</p>
            <p>To our team, I want to say how proud I am of the work we have accomplished together. Your commitment to excellence and your passion for innovation is truly inspiring, and I am grateful for each one of you.</p>
            <p>As we move forward, let us continue to work together towards our shared goal of achieving success through collaboration, innovation, and a strong commitment to customer satisfaction. I am confident that with our collective talent and expertise, we can continue to make a positive impact on society and achieve great things & make a mark in the IT industry.</p>
            <p>Thank you for being a part of our journey.<br/>Best regards,<br/><strong className="text-foreground">Satyam Trivedi</strong><br/>Director & CEO, SkillLogic Technologies Pvt. Ltd.</p>
          </div>
        </div>
        <div className="lg:col-span-4 order-1 lg:order-2">
          <div className="border-4 border-brand-blue rounded-lg p-2 bg-white shadow-lg">
            <img src={director} alt="Satyam Trivedi" loading="lazy" width={600} height={700} className="w-full rounded" />
          </div>
          <p className="text-center mt-4 font-bold">[Satyam Trivedi]</p>
          <p className="text-center text-sm text-muted-foreground">Director & CEO, SkillLogic Technologies Pvt. Ltd.</p>
        </div>
      </section>
    </Layout>
  );
}
