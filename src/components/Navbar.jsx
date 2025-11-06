import { Rocket, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl px-4 py-3">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600/80 shadow-[0_0_40px_-10px_rgba(168,85,247,0.9)]">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">Cosmos</span>
          </a>

          <div className="hidden gap-8 md:flex">
            <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-sm text-white/80 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 transition-colors"
            >
              <Star className="h-4 w-4" />
              <span>Early Access</span>
            </a>
            <a
              href="#cta"
              className="inline-flex items-center rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(168,85,247,0.8)] hover:bg-violet-500 transition-colors"
            >
              Launch App
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
