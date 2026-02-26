export function AnimatedGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.05]">
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
    </div>
  );
}
