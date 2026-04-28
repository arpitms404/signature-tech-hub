import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SkillLogic Technologies" },
      { name: "description", content: "Get in touch with SkillLogic Technologies for software, MLM, web design and digital marketing services." },
      { property: "og:title", content: "Contact SkillLogic Technologies" },
      { property: "og:description", content: "Reach our sales and support teams." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  subject: z.string().trim().min(2, "Subject required").max(120),
  message: z.string().trim().max(1000).optional(),
  captcha: z.string().trim().toUpperCase().refine((v) => v === "8 C T S" || v === "8CTS", "Captcha invalid"),
});

function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string,string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
      captcha: String(fd.get("captcha") ?? ""),
    });
    if (!result.success) {
      const errs: Record<string,string> = {};
      result.error.issues.forEach(i => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      setStatus(null);
      return;
    }
    setErrors({});
    setStatus("Thanks! We'll get back to you shortly.");
    e.currentTarget.reset();
  }

  return (
    <Layout>
      <PageBanner title="Contact Us" />
      <section className="mx-auto max-w-7xl px-4 py-14 grid lg:grid-cols-2 gap-10">
        <form onSubmit={onSubmit} className="bg-white border rounded-xl p-6 md:p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <div>
            <label className="block text-sm font-semibold mb-1">Subject</label>
            <input name="subject" maxLength={120} required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
            {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Your message (optional)</label>
            <textarea name="message" rows={5} maxLength={1000} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Type the captcha: <span className="bg-secondary px-2 py-1 rounded font-mono tracking-widest">8 C T S</span></label>
            <input name="captcha" required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
            {errors.captcha && <p className="text-xs text-destructive mt-1">{errors.captcha}</p>}
          </div>
          <button type="submit" className="bg-brand-teal text-white font-bold tracking-wider px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            SUBMIT
          </button>
          {status && <p className="text-green-600 text-sm font-semibold">{status}</p>}
        </form>

        <div className="space-y-6">
          <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-5 rounded">
            <div className="flex items-center gap-3 mb-2"><Mail className="h-5 w-5 text-brand-orange" /><h3 className="font-bold">EMAIL</h3></div>
            <a href="mailto:info@skilllogic.in" className="text-brand-orange hover:underline">info@skilllogic.in</a>
          </div>
          <div className="bg-brand-blue/10 border-l-4 border-brand-blue p-5 rounded">
            <div className="flex items-center gap-3 mb-2"><Phone className="h-5 w-5 text-brand-blue" /><h3 className="font-bold">Sales</h3></div>
            <ul className="space-y-1">
              <li><a href="tel:+918668210745" className="hover:text-brand-blue">+91-8668210745</a></li>
              <li><a href="tel:+917500766615" className="hover:text-brand-blue">+91-7500766615</a></li>
              <li><a href="tel:+918957804051" className="hover:text-brand-blue">+91-8957804051</a></li>
            </ul>
          </div>
          <div className="bg-secondary p-5 rounded border-l-4 border-foreground/30">
            <h3 className="font-bold mb-1">Email Address</h3>
            <a href="mailto:support@skilllogic.in" className="hover:underline">support@skilllogic.in</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
