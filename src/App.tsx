import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { AnimatedGrid } from "./components/layout/AnimatedGrid";

import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Intelligence from "./pages/Intelligence";
import Impact from "./pages/Impact";
import Vision from "./pages/Vision";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/platform" component={Platform} />
      <Route path="/intelligence" component={Intelligence} />
      <Route path="/impact" component={Impact} />
      <Route path="/vision" component={Vision} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen flex flex-col">
          <AnimatedGrid />
          <Navbar />
          <main className="flex-1 relative z-10">
            <Router />
          </main>
          {/* Don't show footer on the dashboard map page */}
          <Route path="/intelligence">
            {() => null}
          </Route>
          <Route path="/(.*)">
            {(params) => params[0] !== 'intelligence' ? <Footer /> : null}
          </Route>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
