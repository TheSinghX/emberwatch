import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/framer";
import CountUp from "react-countup";
import { TreePine, Wind, DollarSign, Users } from "lucide-react";

export default function Impact() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn className="text-center max-w-4xl mx-auto mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            BEYOND <span className="text-primary">METRICS</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            Every prevented fire is an ecosystem saved, emissions halted, and communities protected. Our impact is measured in what doesn't happen.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <StaggerItem>
            <div className="bg-card border border-border rounded-3xl p-12 flex flex-col items-center text-center">
              <Wind className="w-12 h-12 text-primary mb-6" />
              <div className="text-6xl md:text-7xl font-display font-bold text-white mb-2">
                <CountUp end={1.7} decimals={1} duration={3} suffix="B" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tons CO₂ Prevented</h3>
              <p className="text-muted-foreground">Equivalent to removing 370 million cars from the road for a year.</p>
            </div>
          </StaggerItem>
          
          <StaggerItem>
            <div className="bg-card border border-border rounded-3xl p-12 flex flex-col items-center text-center">
              <DollarSign className="w-12 h-12 text-green-400 mb-6" />
              <div className="text-6xl md:text-7xl font-display font-bold text-white mb-2">
                $<CountUp end={16.4} decimals={1} duration={3} suffix="B" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Economic Loss Reduced</h3>
              <p className="text-muted-foreground">Saved infrastructure, timber, and massive suppression costs.</p>
            </div>
          </StaggerItem>
          
          <StaggerItem>
            <div className="bg-card border border-border rounded-3xl p-12 flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-blue-400 mb-6" />
              <div className="text-6xl md:text-7xl font-display font-bold text-white mb-2">
                <CountUp end={420} duration={3} suffix="k" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Population Exposure Avoided</h3>
              <p className="text-muted-foreground">Individuals spared from hazardous PM2.5 smoke inhalation.</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-card border border-border rounded-3xl p-12 flex flex-col items-center text-center">
              <TreePine className="w-12 h-12 text-emerald-500 mb-6" />
              <div className="text-6xl md:text-7xl font-display font-bold text-white mb-2">
                <CountUp end={500} duration={3} suffix="k+" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hectares Protected</h3>
              <p className="text-muted-foreground">Old-growth forests and critical biodiversity zones maintained.</p>
            </div>
          </StaggerItem>
        </StaggerContainer>

      </div>
    </div>
  );
}
