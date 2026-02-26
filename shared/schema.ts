import { z } from "zod";

export const nodeSchema = z.object({
  id: z.string(),
  temperature: z.number(),
  voc: z.number(),
  pm25: z.number(),
  soilMoisture: z.number(),
  riskScore: z.number(),
  status: z.enum(["NORMAL", "WARNING", "DANGER"]),
  lat: z.number(),
  lng: z.number(),
  updatedAt: z.number(),
});

export type SensorNode = z.infer<typeof nodeSchema>;
