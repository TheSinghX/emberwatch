## Packages
react-map-gl | Mapbox React integration for the intelligence dashboard
mapbox-gl | Core Mapbox library required by react-map-gl
react-countup | Animated number counters for the impact page

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  display: ["var(--font-display)"],
  body: ["var(--font-body)"],
}

Environment Variables:
VITE_MAPBOX_TOKEN | Optional. If provided, renders a real Mapbox map on the Intelligence page. If missing, a cinematic visual fallback map is rendered automatically.
