import { Link, useLocation } from "wouter";
import { Flame, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/platform", label: "Platform" },
    { href: "/impact", label: "Impact" },
    { href: "/vision", label: "Vision" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-white/5 py-3 shadow-lg shadow-black/50" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 group"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <Flame className="w-4 h-4 text-primary relative z-10" />
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-md group-hover:bg-primary/40 transition-all opacity-0 group-hover:opacity-100"></div>
          </div>
          <span className="font-display font-bold text-lg tracking-widest text-white">
            EMBER<span className="text-primary">WATCH</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-white" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/intelligence"
            className="relative px-6 py-2.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 overflow-hidden group box-glow-hover"
          >
            <span className="relative z-10">Live Intelligence</span>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 ${
                    location === link.href ? "text-primary" : "text-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/intelligence"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 text-center rounded-lg font-semibold bg-primary text-white"
              >
                Live Intelligence
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
