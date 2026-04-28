import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-skilllogic.jpg";
import { TopBar } from "./TopBar";

type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    children: [
      { label: "About Our Company", to: "/about" },
      { label: "Vision Mission & Values", to: "/vision" },
      { label: "Director", to: "/director" },
    ],
  },
  {
    label: "MLM SOFTWARE",
    children: [
      { label: "Binary MLM Software", to: "/mlm" },
      { label: "Generation MLM Plan", to: "/mlm" },
      { label: "Matrix MLM Software", to: "/mlm" },
      { label: "Spill over Binary Plan", to: "/mlm" },
      { label: "Unilevel MLM Software", to: "/mlm" },
      { label: "Crypto Based Software", to: "/mlm" },
      { label: "Blockchain Software", to: "/mlm" },
      { label: "Smart Contract Software", to: "/erp" },
      { label: "Token Based Software", to: "/mlm" },
    ],
  },
  {
    label: "Software",
    children: [
      { label: "Accounting & Billing", to: "/erp" },
      { label: "ERP Software", to: "/erp" },
      { label: "CRM Software", to: "/erp" },
      { label: "Nidhi Software", to: "/erp" },
      { label: "Microfinance Software", to: "/erp" },
      { label: "Real Estate Software", to: "/erp" },
      { label: "News Portal", to: "/erp" },
      { label: "Salon Software", to: "/erp" },
      { label: "Hotel Software", to: "/erp" },
      { label: "Property Management Software", to: "/erp" },
      { label: "Restaurant Management Software", to: "/erp" },
      { label: "School & College Management Software", to: "/erp" },
      { label: "Hospital Management", to: "/erp" },
      { label: "Project Management Software", to: "/erp" },
    ],
  },
  {
    label: "Website Designing",
    children: [
      { label: "Website Development", to: "/website-development" },
      { label: "Static Website", to: "/website-development" },
      { label: "Dynamic Website", to: "/website-development" },
      { label: "E-commerce Website", to: "/website-development" },
    ],
  },
  {
    label: "Digital Marketing",
    children: [
      { label: "SEO", to: "/seo" },
      { label: "SMO", to: "/seo" },
      { label: "PPC", to: "/seo" },
      { label: "Content Marketing", to: "/seo" },
    ],
  },
  {
    label: "Training",
    children: [
      { label: "100% Placement Courses", to: "/training" },
      { label: "Web Development", to: "/training" },
      { label: "Digital Marketing", to: "/training" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <div className={`bg-white border-b transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="SkillLogic Technologies" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <div key={item.label} className="relative group">
                {item.to ? (
                  <Link
                    to={item.to}
                    activeProps={{ className: "text-brand-orange" }}
                    activeOptions={{ exact: true }}
                    className="px-3 py-2 text-sm font-semibold text-foreground hover:text-brand-orange transition-colors relative
                      after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:bg-brand-orange
                      after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left
                      data-[status=active]:after:scale-x-100"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button className="px-3 py-2 text-sm font-semibold text-foreground hover:text-brand-orange transition-colors flex items-center gap-1
                      relative after:content-[''] after:absolute after:left-3 after:right-6 after:-bottom-0.5 after:h-0.5 after:bg-brand-orange
                      after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:origin-left">
                      {item.label}
                      <ChevronDown className="h-3 w-3" />
                    </button>
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200
                      absolute left-0 top-full pt-1 min-w-[230px] z-50">
                      <div className="bg-white border rounded-md shadow-lg py-2">
                        {item.children!.map((c) => (
                          <Link
                            key={c.label}
                            to={c.to}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
            <button aria-label="Cart" className="ml-3 relative bg-brand-orange text-white p-2 rounded">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-brand-blue text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white max-h-[70vh] overflow-y-auto">
            {NAV.map((item) => (
              <div key={item.label} className="border-b">
                {item.to ? (
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 font-semibold"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 font-semibold"
                      onClick={() => setOpenMobileSub(openMobileSub === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${openMobileSub === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {openMobileSub === item.label && (
                      <div className="bg-secondary">
                        {item.children!.map((c) => (
                          <Link
                            key={c.label}
                            to={c.to}
                            onClick={() => setMobileOpen(false)}
                            className="block px-6 py-2 text-sm hover:text-brand-orange"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
