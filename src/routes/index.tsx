import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CtaStrip } from "@/components/site/CtaStrip";
import logo from "@/assets/logo-skilllogic.png";
import hero from "@/assets/hero-illustration.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkillLogic Technologies — School Management & MLM Software" },
      { name: "description", content: "SkillLogic Technologies builds MLM software, school management, ERP, CRM, billing, websites and digital marketing solutions." },
      { property: "og:title", content: "SkillLogic Technologies" },
      { property: "og:description", content: "Smart software & digital solutions for modern businesses." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #FF8B94 0%, #FFB6A3 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <img
              src={hero}
              alt="Working on laptop with social media icons"
              width={1024}
              height={1024}
              className="w-full max-w-md mx-auto animate-float drop-shadow-xl"
            />
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 text-white">
            <div className="flex justify-end mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <img src={logo} alt="SkillLogic" className="h-14 w-auto" />
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-white shrink-0" />
                <span className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow">School Management Software</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-white shrink-0" />
                <span className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow">MLM Software</span>
              </li>
            </ul>

            <div className="inline-flex items-stretch rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-400 to-red-500">
              <div className="px-5 py-4 flex items-center text-white font-bold text-lg leading-tight">
                Call for<br />Demo
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-600 px-6 py-3 text-white font-mono text-lg md:text-xl font-bold tracking-wider">
                <a href="tel:7500766615" className="block hover:opacity-90">750 076 6615</a>
                <a href="tel:8957804051" className="block hover:opacity-90">895 780 4051</a>
                <a href="tel:8668210745" className="block hover:opacity-90">866 821 0745</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <CtaStrip />
    </Layout>
  );
}
