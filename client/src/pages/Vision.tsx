import { FadeIn } from "@/lib/framer";
import { ArrowRight, Crosshair, Map, Cpu } from "lucide-react";

export default function Vision() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            THE PLANETARY <span className="text-primary">ROADMAP</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light mb-16">
            Climate change is accelerating. Our deployment must outpace it. EmberWatch is scaling hardware and software simultaneously to create a global nervous system for planetary health.
          </p>
        </FadeIn>

        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          
          <FadeIn className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" y={30}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
              <div className="w-3 h-3 bg-primary rounded-full box-glow"></div>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-white/5 border border-white/10 group-hover:bg-white/[0.07] transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Crosshair className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold tracking-widest text-primary uppercase">Phase 01: Core</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">High-Risk Coverage</h3>
              <p className="text-muted-foreground">Deployment of 10,000 Gen-1 sensor nodes across the California Sierra Nevada and Australian bushland. Establishing the foundational dataset.</p>
            </div>
          </FadeIn>

          <FadeIn className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" y={30}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
              <div className="w-3 h-3 bg-white/30 rounded-full"></div>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-white/5 border border-white/10 group-hover:bg-white/[0.07] transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="w-5 h-5 text-white/50" />
                <span className="text-sm font-bold tracking-widest text-white/50 uppercase">Phase 02: Scale</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Hardware Democratization</h3>
              <p className="text-muted-foreground">Reducing node production costs to $52/unit. Open-sourcing hardware blueprints for vulnerable communities worldwide to deploy their own grids connected to our neural engine.</p>
            </div>
          </FadeIn>

          <FadeIn className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" y={30}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
              <div className="w-3 h-3 bg-white/30 rounded-full"></div>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-white/5 border border-white/10 group-hover:bg-white/[0.07] transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Map className="w-5 h-5 text-white/50" />
                <span className="text-sm font-bold tracking-widest text-white/50 uppercase">Phase 03: Global</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Planetary Defense</h3>
              <p className="text-muted-foreground">Integration with low-earth orbit satellite constellations for continuous planetary coverage. Predictive models acting globally to prevent mega-fires before ignition.</p>
            </div>
          </FadeIn>

        </div>
        
        <FadeIn y={40} className="mt-24 p-10 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 text-center">
          <h3 className="text-3xl font-display font-bold text-white mb-4">Join the Mission</h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">We are looking for engineers, data scientists, and deployment partners to accelerate our timeline.</p>
          <button className="px-8 py-4 rounded-xl bg-white text-background font-bold inline-flex items-center gap-2 hover:bg-primary hover:text-white transition-all">
            View Opportunities <ArrowRight className="w-4 h-4" />
          </button>
        </FadeIn>
      </div>
    </div>
  );
}
