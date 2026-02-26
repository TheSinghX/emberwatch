import { useSensorData } from "@/hooks/use-sensor-data";
import { FadeIn } from "@/lib/framer";
import { Activity, AlertTriangle, Radio, ShieldCheck, MapPin } from "lucide-react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Check if token exists
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

// Cinematic Fallback if Mapbox token is missing
function MapFallback({ nodes }: { nodes: any[] }) {
  return (
    <div className="absolute inset-0 bg-[#0B0F14] overflow-hidden flex items-center justify-center">
      {/* Abstract Map Grid Lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWNDBIMHptMzkuNS0zOS41VjQwaC41VjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')]"></div>
      
      {/* Radar Sweep */}
      <div className="absolute w-[800px] h-[800px] border border-primary/20 rounded-full flex items-center justify-center">
        <div className="absolute inset-0 radar-sweep opacity-30"></div>
        <div className="w-[600px] h-[600px] border border-primary/10 rounded-full"></div>
        <div className="w-[400px] h-[400px] border border-primary/10 rounded-full"></div>
        <div className="w-[200px] h-[200px] border border-white/5 rounded-full"></div>
      </div>
      
      {/* Render Nodes Relatively */}
      <div className="relative w-[600px] h-[600px]">
        {nodes.map((node) => {
          // Map lat/lng roughly to coordinates
          const x = (node.lng - -120.0) * 1500 + 300;
          const y = (node.lat - 39.0) * -1500 + 300;
          
          let color = "bg-emerald-500";
          let glow = "shadow-[0_0_15px_rgba(16,185,129,0.5)]";
          if (node.status === "WARNING") {
            color = "bg-amber-500";
            glow = "shadow-[0_0_20px_rgba(245,158,11,0.6)]";
          } else if (node.status === "DANGER") {
            color = "bg-red-500 animate-pulse";
            glow = "shadow-[0_0_30px_rgba(239,68,68,0.8)]";
          }
          
          return (
            <div 
              key={node.id} 
              className="absolute"
              style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
            >
              <div className={`w-3 h-3 rounded-full ${color} ${glow}`}></div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/80 backdrop-blur border border-white/10 rounded-full text-xs text-muted-foreground flex items-center gap-2">
        <Activity className="w-3 h-3" /> Tactical Simulation Mode (Mapbox Key Required for Live Map)
      </div>
    </div>
  );
}

export default function Intelligence() {
  const { nodes, activeAlerts, dangerCount, avgRisk, isLoading } = useSensorData();

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <p className="text-primary font-display tracking-widest text-sm uppercase">Establishing Uplink...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full relative overflow-hidden bg-background">
      
      {/* Background Map Layer */}
      <div className="absolute inset-0 z-0">
        {MAPBOX_TOKEN ? (
          <Map
            initialViewState={{
              longitude: -120.0,
              latitude: 39.0,
              zoom: 10,
              pitch: 45,
            }}
            mapStyle="mapbox://styles/mapbox/dark-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            {nodes.map(node => {
              let color = "#10B981"; // Normal
              if (node.status === "WARNING") color = "#F59E0B";
              if (node.status === "DANGER") color = "#EF4444";
              
              return (
                <Marker key={node.id} longitude={node.lng} latitude={node.lat}>
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${node.status === 'DANGER' ? 'animate-pulse' : ''}`}>
                     <div className="absolute inset-0 rounded-full opacity-50" style={{ backgroundColor: color, filter: 'blur(8px)' }}></div>
                     <div className="relative w-2.5 h-2.5 rounded-full border border-black" style={{ backgroundColor: color }}></div>
                  </div>
                </Marker>
              )
            })}
          </Map>
        ) : (
          <MapFallback nodes={nodes} />
        )}
      </div>

      {/* UI Overlay - Left Panel */}
      <div className="absolute top-24 left-6 z-10 w-80 max-h-[calc(100vh-8rem)] flex flex-col gap-4 pointer-events-none">
        
        <FadeIn x={-30} className="pointer-events-auto">
          <div className="bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
            <h2 className="text-white font-display font-bold text-lg mb-4 flex items-center gap-2">
              <Radio className="w-5 h-5 text-primary" /> Sector Alpha Status
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Active Nodes</span>
                <span className="text-2xl font-bold text-white">{nodes.length}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">System Risk</span>
                <span className={`text-2xl font-bold ${avgRisk > 60 ? 'text-red-500' : avgRisk > 40 ? 'text-amber-500' : 'text-emerald-500'}`}>
                  {avgRisk.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn x={-30} delay={0.1} className="flex-1 pointer-events-auto overflow-hidden flex flex-col">
          <div className="bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <AlertTriangle className={`w-4 h-4 ${dangerCount > 0 ? 'text-red-500' : 'text-muted-foreground'}`} />
                Live Alerts
              </h3>
              <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white">{activeAlerts.length}</span>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
              {activeAlerts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <ShieldCheck className="w-8 h-8 text-emerald-500 mb-2" />
                  <p className="text-sm text-emerald-500 font-medium">All parameters nominal.</p>
                  <p className="text-xs text-muted-foreground mt-1">No anomalous chemical signatures detected.</p>
                </div>
              ) : (
                activeAlerts.sort((a,b) => b.riskScore - a.riskScore).map(node => (
                  <div 
                    key={node.id} 
                    className={`p-3 rounded-xl border ${
                      node.status === 'DANGER' 
                        ? 'bg-red-500/10 border-red-500/30' 
                        : 'bg-amber-500/10 border-amber-500/30'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold font-mono text-white flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {node.id}
                      </span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        node.status === 'DANGER' ? 'bg-red-500 text-white' : 'bg-amber-500 text-black'
                      }`}>
                        {node.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white/50 uppercase">Risk Score</span>
                        <span className={`text-sm font-bold ${node.status === 'DANGER' ? 'text-red-400' : 'text-amber-400'}`}>
                          {node.riskScore.toFixed(1)}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white/50 uppercase">VOCs (ppb)</span>
                        <span className="text-sm font-bold text-white">
                          {node.voc.toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </FadeIn>

      </div>

      {/* UI Overlay - Right Panel (Risk Gauge) */}
      <div className="absolute bottom-8 right-8 z-10 pointer-events-none">
        <FadeIn y={30} delay={0.2} className="pointer-events-auto">
          <div className="w-48 h-48 rounded-full bg-background/90 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle 
                cx="96" cy="96" r="88" 
                className="stroke-white/5" 
                strokeWidth="4" fill="none" 
              />
              <circle 
                cx="96" cy="96" r="88" 
                className={`stroke-current transition-all duration-1000 ease-out ${
                  avgRisk > 60 ? 'text-red-500' : avgRisk > 40 ? 'text-amber-500' : 'text-emerald-500'
                }`} 
                strokeWidth="4" fill="none" 
                strokeDasharray="553" 
                strokeDashoffset={553 - (553 * avgRisk) / 100}
                strokeLinecap="round"
              />
            </svg>
            <span className="text-4xl font-display font-black text-white">{avgRisk.toFixed(0)}</span>
            <span className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Aggregate Risk</span>
          </div>
        </FadeIn>
      </div>

    </div>
  );
}
