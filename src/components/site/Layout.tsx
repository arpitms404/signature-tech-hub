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
    <div
      className="relative overflow-hidden border-b text-white"
      style={{ background: "linear-gradient(135deg, oklch(0.32 0.08 255) 0%, oklch(0.55 0.16 240) 100%)" }}
    >
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute -bottom-16 -left-10 w-72 h-72 rounded-full bg-blue-300/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow">{title}</h1>
        <p className="text-sm text-white/80">
          <span className="hover:text-cyan-300">Home</span> <span className="mx-2">›</span> <span className="text-cyan-300 font-semibold">{crumb ?? title}</span>
        </p>
      </div>
    </div>
  );
}
