export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-b from-black via-violet-950/40 to-black py-24">
      <div className="absolute inset-0 -z-[1] opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.6),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to launch?</h3>
            <p className="mt-3 text-white/70">
              Join thousands of explorers and get early access to our space platform. No credit card required.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:border-violet-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white shadow-[0_10px_30px_-10px_rgba(168,85,247,0.8)] hover:bg-violet-500 transition-colors"
              >
                Request Access
              </button>
            </div>
            <p className="mt-2 text-xs text-white/60">We respect your privacy. Unsubscribe anytime.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
