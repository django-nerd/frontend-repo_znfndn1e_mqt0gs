import { Rocket, Telescope, Satellite, Sparkles } from "lucide-react";

const features = [
  {
    title: "Live Sky Map",
    description: "Navigate constellations and planetary positions in real time with breathtaking clarity.",
    icon: Telescope,
  },
  {
    title: "Mission Control",
    description: "Track ongoing missions, telemetry, and key milestones across agencies.",
    icon: Satellite,
  },
  {
    title: "Launch Window Alerts",
    description: "Never miss a launch. Get personalized alerts and reminders.",
    icon: Rocket,
  },
  {
    title: "AI Insights",
    description: "Discover trends and anomalies in cosmic data with AI-generated highlights.",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.2),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything you need to explore space</h2>
          <p className="mt-3 text-white/70">Built for enthusiasts, educators, and mission planners alike.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-transform hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
