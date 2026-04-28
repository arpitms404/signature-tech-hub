import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Youtube, Linkedin, Instagram, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-footer text-white mt-16">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">About Us</h3>
          <p className="text-sm leading-relaxed text-white/85 text-justify">
            SkillLogic Technologies Pvt. Ltd. was founded in 2021 with the prime objective of providing
            sophisticated business solutions to small and big companies worldwide. We believe in
            long-term relationships and hence client satisfaction is our priority.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              ["Contact Us", "/contact"],
              ["Enquiry", "/contact"],
              ["Pay Now", "/contact"],
              ["Career", "/career"],
              ["SSL & Hosting", "/ssl-hosting"],
            ].map(([l, t]) => (
              <li key={l}>
                <Link to={t} className="text-white/85 hover:text-brand-orange transition-colors">
                  › {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "MLM Softwares",
              "Real Estate Software",
              "School & College Management Software",
              "Restaurant Management Software",
              "Salon Software",
              "App Development",
            ].map((s) => (
              <li key={s}>
                <Link to="/erp" className="text-white/85 hover:text-brand-orange transition-colors">
                  › {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Contact us</h3>
          <div className="space-y-4 text-sm text-white/85">
            <div className="flex gap-2">
              <span className="text-lg">🇮🇳</span>
              <p>
                <strong className="block text-white">Office Address</strong>
                Sikka House D 2/50, 51, 52 Vibhuti Khand, Gomti Nagar, Lucknow, U.P. — India — 226010
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-lg">🇦🇪</span>
              <p>
                <strong className="block text-white">Branch Address</strong>
                304, Abdul Aziz Building, Al-Rigga, Near Union Metro Station, Dubai — UAE
              </p>
            </div>
            <p className="font-semibold text-white pt-2">MLM Softwares</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/80">
          <p>Copyright © 2021 – 2026 | All Rights Reserved · SkillLogic Technologies</p>
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Youtube, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="hover:text-brand-orange">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
