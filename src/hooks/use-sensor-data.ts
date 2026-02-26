import { useState, useEffect, useCallback } from "react";
import { type SensorNode } from "@shared/schema";

// Base coordinates roughly in a fire-prone region (e.g., California)
const BASE_LAT = 39.0;
const BASE_LNG = -120.0;

function generateInitialNodes(): SensorNode[] {
  return Array.from({ length: 20 }).map((_, i) => {
    // Distribute nodes in a roughly 50km radius
    const latOffset = (Math.random() - 0.5) * 0.5;
    const lngOffset = (Math.random() - 0.5) * 0.5;
    
    // Create an initial distribution with mostly normal, some warning, rarely danger
    const rand = Math.random();
    let riskScore = Math.floor(Math.random() * 40); // 0-40 NORMAL
    if (rand > 0.8) riskScore = 40 + Math.floor(Math.random() * 35); // 40-75 WARNING
    if (rand > 0.95) riskScore = 80 + Math.floor(Math.random() * 20); // 80-100 DANGER

    let status: "NORMAL" | "WARNING" | "DANGER" = "NORMAL";
    if (riskScore >= 80) status = "DANGER";
    else if (riskScore >= 50) status = "WARNING";

    return {
      id: `node-${1000 + i}`,
      temperature: 20 + Math.random() * 15 + (riskScore > 70 ? 10 : 0),
      voc: 10 + Math.random() * 50 + (riskScore > 80 ? 200 : 0),
      pm25: 5 + Math.random() * 20 + (riskScore > 80 ? 100 : 0),
      soilMoisture: 40 - Math.random() * 20 - (riskScore > 70 ? 15 : 0),
      riskScore,
      status,
      lat: BASE_LAT + latOffset,
      lng: BASE_LNG + lngOffset,
      updatedAt: Date.now(),
    };
  });
}

export function useSensorData() {
  const [nodes, setNodes] = useState<SensorNode[]>([]);
  const [isInitializing, setIsInitializing] = useState(true);

  // Initialize data
  useEffect(() => {
    setNodes(generateInitialNodes());
    setIsInitializing(false);
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    if (isInitializing) return;

    const interval = setInterval(() => {
      setNodes((currentNodes) => 
        currentNodes.map(node => {
          // Add slight random noise to readings
          const tempChange = (Math.random() - 0.5) * 2;
          const vocChange = (Math.random() - 0.5) * 5;
          const newRiskBase = node.riskScore + (Math.random() - 0.4) * 5; // Slight upward trend occasionally
          
          let riskScore = Math.max(0, Math.min(100, newRiskBase));
          
          let status: "NORMAL" | "WARNING" | "DANGER" = "NORMAL";
          if (riskScore >= 80) status = "DANGER";
          else if (riskScore >= 50) status = "WARNING";

          return {
            ...node,
            temperature: Math.max(0, node.temperature + tempChange),
            voc: Math.max(0, node.voc + vocChange),
            riskScore,
            status,
            updatedAt: Date.now(),
          };
        })
      );
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [isInitializing]);

  // Derived stats
  const activeAlerts = nodes.filter(n => n.status !== "NORMAL");
  const dangerCount = nodes.filter(n => n.status === "DANGER").length;
  const warningCount = nodes.filter(n => n.status === "WARNING").length;
  
  const avgRisk = nodes.length > 0 
    ? nodes.reduce((acc, n) => acc + n.riskScore, 0) / nodes.length 
    : 0;

  return {
    nodes,
    activeAlerts,
    dangerCount,
    warningCount,
    avgRisk,
    isLoading: isInitializing
  };
}
