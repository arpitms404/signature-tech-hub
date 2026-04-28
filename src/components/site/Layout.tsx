import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 animate-fade-in">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export function PageBanner({ title, crumb }: { title: string; crumb?: string }) {
  return (
    <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 border-y">
      <div className="mx-auto max-w-7xl px-4 py-10 flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-orange">{title}</h1>
        <p className="text-sm text-muted-foreground">
          Home <span className="mx-2">›</span> <span className="text-foreground">{crumb ?? title}</span>
        </p>
      </div>
    </div>
  );
}
