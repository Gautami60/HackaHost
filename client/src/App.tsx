import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { authService } from "@/lib/auth";

// Pages
import Landing from "@/pages/landing";
import Login from "@/pages/login";
import Register from "@/pages/register";
import Dashboard from "@/pages/dashboard";
import JudgeDashboard from "@/pages/judge-dashboard";
import OrganizerDashboard from "@/pages/organizer-dashboard";
import NotFound from "@/pages/not-found";

function ProtectedRoute({ component: Component, allowedRoles }: { component: React.ComponentType, allowedRoles?: string[] }) {
  const user = authService.getUser();
  
  if (!user) {
    window.location.href = "/login";
    return null;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    window.location.href = "/dashboard";
    return null;
  }

  return <Component />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard">
        <ProtectedRoute component={Dashboard} allowedRoles={["participant"]} />
      </Route>
      <Route path="/judge-dashboard">
        <ProtectedRoute component={JudgeDashboard} allowedRoles={["judge"]} />
      </Route>
      <Route path="/organizer-dashboard">
        <ProtectedRoute component={OrganizerDashboard} allowedRoles={["organizer"]} />
      </Route>
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
