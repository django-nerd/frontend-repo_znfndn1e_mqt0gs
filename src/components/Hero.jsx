import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden" id="hero">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
          >
            Explore the cosmos with a new kind of space app
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-white/80"
          >
            Real-time celestial data, immersive visualizations, and AI-guided discoveries in a beautiful, modern interface.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#cta"
              className="inline-flex items-center rounded-xl bg-violet-600 px-6 py-3 text-base font-medium text-white shadow-[0_10px_40px_-10px_rgba(168,85,247,0.9)] hover:bg-violet-500 transition-colors"
            >
              Start Exploring
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-base font-medium text-white/90 hover:bg-white/15 transition-colors backdrop-blur"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 grid grid-cols-2 gap-6 text-left md:grid-cols-4"
          >
            {["Galaxies", "Planets", "Nebulae", "Missions"].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-black/20 p-4 text-white/80">
                <div className="text-2xl font-bold text-white">{Math.floor(Math.random() * 900) + 100}+</div>
                <div className="text-xs uppercase tracking-widest text-white/60">{item}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
