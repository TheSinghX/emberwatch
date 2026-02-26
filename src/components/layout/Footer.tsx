import { Flame } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-12 lg:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <Flame className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-xl tracking-widest text-white">
              EMBER<span className="text-primary">WATCH</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            Pre-Ignition Climate Intelligence. Defining the future of global wildfire prevention.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm">
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-white">Platform</span>
            <Link href="/platform" className="text-muted-foreground hover:text-primary transition-colors">Technology</Link>
            <Link href="/intelligence" className="text-muted-foreground hover:text-primary transition-colors">Live Dashboard</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-white">Company</span>
            <Link href="/impact" className="text-muted-foreground hover:text-primary transition-colors">Impact</Link>
            <Link href="/vision" className="text-muted-foreground hover:text-primary transition-colors">Vision</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} EmberWatch Systems. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
