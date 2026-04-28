import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageBanner } from "@/components/site/Layout";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

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
  name: z.string().trim().min(2, "Name required").max(80),
  email: z.string().trim().email("Valid email required"),
  phone: z.string().trim().min(7, "Phone required").max(20),
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
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
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
    setStatus("Thanks! We'll get back to you within 24 hours.");
    e.currentTarget.reset();
  }

  return (
    <Layout>
      <PageBanner title="Contact Us" />

      <section className="mx-auto max-w-7xl px-4 py-14 grid lg:grid-cols-3 gap-6">
        {[
          { I: Mail, t: "Email Us", l1: "info@skilllogic.in", l2: "support@skilllogic.in", href: "mailto:info@skilllogic.in" },
          { I: Phone, t: "Call Us", l1: "+91-7500766615", l2: "+91-8957804051", href: "tel:+917500766615" },
          { I: MapPin, t: "Visit Us", l1: "Sikka House D 2/50, Vibhuti Khand", l2: "Gomti Nagar, Lucknow — 226010", href: "#" },
        ].map(({ I, t, l1, l2, href }) => (
          <a key={t} href={href} className="bg-white border rounded-xl p-6 hover:shadow-lg hover:border-brand-blue hover:-translate-y-1 transition-all text-center">
            <div className="h-14 w-14 mx-auto rounded-full bg-brand-blue/10 text-brand-blue grid place-items-center mb-3">
              <I className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-lg">{t}</h3>
            <p className="text-sm text-muted-foreground mt-1">{l1}</p>
            <p className="text-sm text-muted-foreground">{l2}</p>
          </a>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 grid lg:grid-cols-2 gap-10">
        <form onSubmit={onSubmit} className="bg-white border rounded-xl p-6 md:p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold mb-1">Send us a message</h2>
          <p className="text-sm text-muted-foreground mb-3">Fill the form and our team will reach out shortly.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input name="name" required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input type="email" name="email" required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input name="phone" required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Subject</label>
              <input name="subject" maxLength={120} required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue" />
              {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Your message</label>
            <textarea name="message" rows={5} maxLength={1000} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue" />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Type the captcha: <span className="bg-secondary px-2 py-1 rounded font-mono tracking-widest">8 C T S</span></label>
            <input name="captcha" required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue" />
            {errors.captcha && <p className="text-xs text-destructive mt-1">{errors.captcha}</p>}
          </div>
          <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold tracking-wider px-8 py-3 rounded-full transition-colors">
            SUBMIT
          </button>
          {status && <p className="text-green-600 text-sm font-semibold">{status}</p>}
        </form>

        <div className="space-y-5">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-brand-blue p-5 rounded">
            <div className="flex items-center gap-3 mb-2"><Clock className="h-5 w-5 text-brand-blue" /><h3 className="font-bold">Office Hours</h3></div>
            <p className="text-sm text-muted-foreground">Mon – Fri: 9:00 AM – 6:00 PM</p>
            <p className="text-sm text-muted-foreground">Saturday: 10:00 AM – 4:00 PM</p>
            <p className="text-sm text-muted-foreground">Sunday: Closed</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-5 rounded">
            <div className="flex items-center gap-3 mb-2"><MessageSquare className="h-5 w-5 text-cyan-600" /><h3 className="font-bold">Sales</h3></div>
            <ul className="space-y-1 text-sm">
              <li><a href="tel:+918668210745" className="hover:text-brand-blue">+91-8668210745</a></li>
              <li><a href="tel:+917500766615" className="hover:text-brand-blue">+91-7500766615</a></li>
              <li><a href="tel:+918957804051" className="hover:text-brand-blue">+91-8957804051</a></li>
            </ul>
          </div>
          <div className="bg-secondary p-5 rounded border">
            <h3 className="font-bold mb-2">Branch Office (UAE)</h3>
            <p className="text-sm text-muted-foreground">304, Abdul Aziz Building, Al-Rigga, Near Union Metro Station, Dubai — UAE</p>
          </div>
          <div className="aspect-video w-full rounded-xl overflow-hidden border bg-secondary grid place-items-center">
            <p className="text-muted-foreground text-sm">📍 Map preview — Lucknow Office</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
