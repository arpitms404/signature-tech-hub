import { Mail, Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function TopBar() {
  return (
    <div className="bg-brand-blue-dark text-white text-xs">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2 flex-wrap gap-2">
        <a href="mailto:support@skilllogic.in" className="flex items-center gap-2 hover:underline">
          <Mail className="h-3.5 w-3.5" />
          support@skilllogic.in
        </a>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {[Facebook, Twitter, Youtube, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="hover:opacity-80">
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
          <span className="opacity-60">|</span>
          <Link to="/career" className="hover:underline">Career</Link>
          <Link to="/ssl-hosting" className="hover:underline">SSL & Hosting</Link>
          <Link to="/contact" className="hover:underline">Enquiry</Link>
        </div>
      </div>
    </div>
  );
}
