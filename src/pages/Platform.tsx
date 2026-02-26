import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/framer";
import { Server, Zap, Globe, Layers } from "lucide-react";

export default function Platform() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            ENGINEERED FOR <span className="text-primary">CERTAINTY</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-20 font-light">
            EmberWatch replaces reactive firefighting with predictive infrastructure. Our proprietary hardware-software ecosystem creates an unbroken chain of planetary defense.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <StaggerItem>
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 h-full hover:bg-white/[0.07] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all duration-500"></div>
              <Server className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">Multi-Parameter Risk Engine</h3>
              <p className="text-muted-foreground leading-relaxed">
                Single-metric sensors trigger false alarms. Our nodes correlate temperature gradients, Volatile Organic Compounds (VOCs), PM2.5 density, and sub-surface moisture in a unified matrix.
              </p>
            </div>
          </StaggerItem>
          
          <StaggerItem>
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 h-full hover:bg-white/[0.07] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500"></div>
              <Globe className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">Fire Spread Simulation</h3>
              <p className="text-muted-foreground leading-relaxed">
                If ignition occurs, our physics engine generates 10,000 propagation permutations per second, analyzing canopy density and wind shear to predict exactly where the fire will be in 2, 6, and 24 hours.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 h-full hover:bg-white/[0.07] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full group-hover:bg-green-500/20 transition-all duration-500"></div>
              <Layers className="w-10 h-10 text-green-400 mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">Economic Impact Estimator</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatically overlays risk vectors with critical infrastructure databases, quantifying potential economic damage to prioritize resource deployment effectively.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 h-full hover:bg-white/[0.07] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full group-hover:bg-purple-500/20 transition-all duration-500"></div>
              <Zap className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">Adaptive Threshold Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed">
                The system learns from its environment. Machine learning models adjust baseline thresholds based on seasonal shifts, eliminating seasonal false-positive fatigue.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

      </div>
    </div>
  );
}
