import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { authService } from "@/lib/auth";
import { useState, useEffect } from "react";
import { User } from "@shared/schema";

export function Navbar() {
  const [location] = useLocation();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(authService.getUser());
  }, []);

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    window.location.href = "/";
  };

  if (!user) {
    return (
      <nav className="bg-surface border-b border-border sticky top-0 z-50" data-testid="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
                <i className="fas fa-code text-primary text-2xl"></i>
                <span className="text-xl font-bold text-foreground">HackFlow</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-muted hover:text-foreground transition-colors" data-testid="link-features">
                Features
              </a>
              <a href="#pricing" className="text-muted hover:text-foreground transition-colors" data-testid="link-pricing">
                Pricing
              </a>
              <Link href="/login" data-testid="link-login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register" data-testid="link-register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <header className="bg-surface border-b border-border" data-testid="header-authenticated">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <i className="fas fa-code text-primary text-xl"></i>
            <span className="text-lg font-bold">HackFlow</span>
          </Link>
          <div className="h-6 w-px bg-border"></div>
          <h1 className="text-lg font-semibold" data-testid="text-current-event">Spring 2024 Innovation Challenge</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-muted hover:text-foreground" data-testid="button-notifications">
            <i className="fas fa-bell text-lg"></i>
          </button>
          <div className="flex items-center space-x-2">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32" 
              alt="User avatar" 
              className="w-8 h-8 rounded-full"
              data-testid="img-avatar"
            />
            <span className="text-sm font-medium" data-testid="text-username">{user.fullName}</span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              data-testid="button-logout"
            >
              <i className="fas fa-chevron-down text-xs text-muted"></i>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
