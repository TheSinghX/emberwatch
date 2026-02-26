import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/framer";
import { Link } from "wouter";
import { ArrowRight, Activity, Shield, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center min-h-[80vh] px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
           <div className="w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] absolute mix-blend-screen animate-pulse-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <FadeIn delay={0.1} y={30}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              System Live
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} y={40}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[0.9] tracking-tighter mb-6">
              PRE-<span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-400">IGNITION</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3} y={40}>
            <p className="text-xl md:text-3xl font-light text-muted-foreground max-w-3xl mb-12">
              The world's first predictive climate intelligence platform. Detecting the invisible before it becomes unstoppable.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} y={30}>
            <Link 
              href="/intelligence"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white text-background font-bold text-lg overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-orange-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Launch Live Intelligence</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-t border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divider-x-white">
            <StaggerItem>
              <div className="flex flex-col gap-2">
                <span className="text-5xl font-display font-bold text-white">500k<span className="text-primary">+</span></span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Hectares Monitored</span>
                <p className="text-muted-foreground mt-2 text-sm">Continuous coverage across high-risk global zones.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col gap-2">
                <span className="text-5xl font-display font-bold text-white">1.7B</span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Tons CO₂ Prevented</span>
                <p className="text-muted-foreground mt-2 text-sm">Cumulative emissions stopped at the source.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col gap-2">
                <span className="text-5xl font-display font-bold text-white">$16B</span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Economic Loss Saved</span>
                <p className="text-muted-foreground mt-2 text-sm">Protecting infrastructure, homes, and industry.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Sequence Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
                THE EMBERWATCH <span className="text-primary text-glow">PROTOCOL</span>
              </h2>
            </FadeIn>
          </div>

          <div className="space-y-24">
            <FadeIn className="flex flex-col md:flex-row gap-8 items-center" y={50}>
              <div className="w-24 h-24 shrink-0 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Activity className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">01. Detect</h3>
                <p className="text-xl text-muted-foreground font-light">Sub-surface sensors analyze VOCs, particulate matter, and soil moisture anomalies in real-time, catching chemical signatures days before combustion.</p>
              </div>
            </FadeIn>

            <FadeIn className="flex flex-col md:flex-row gap-8 items-center" y={50} delay={0.1}>
              <div className="w-24 h-24 shrink-0 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">02. Predict</h3>
                <p className="text-xl text-muted-foreground font-light">Our neural engine processes geospatial topography, wind vectors, and hyper-local thermodynamics to map probability vectors with 98.4% accuracy.</p>
              </div>
            </FadeIn>

            <FadeIn className="flex flex-col md:flex-row gap-8 items-center" y={50} delay={0.2}>
              <div className="w-24 h-24 shrink-0 rounded-3xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <Shield className="w-10 h-10 text-green-400" />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">03. Prevent</h3>
                <p className="text-xl text-muted-foreground font-light">Automated dispatch vectors coordinate rapid-response suppression units before thermal runaway occurs. We extinguish the threat, not the fire.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
