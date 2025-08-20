import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { authService } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const user = await authService.login(email, password);
      if (user) {
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
        
        // Redirect based on user role
        if (user.role === "judge") {
          setLocation("/judge-dashboard");
        } else if (user.role === "organizer") {
          setLocation("/organizer-dashboard");
        } else {
          setLocation("/dashboard");
        }
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4" data-testid="login-page">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
      </div>
      
      <Card className="w-full max-w-md card-enhanced hover-lift bg-white/80 backdrop-blur-sm border border-white/20">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="relative">
                <i className="fas fa-code text-primary text-3xl hover-scale" data-testid="icon-logo"></i>
                <div className="absolute -inset-2 bg-primary/10 rounded-full animate-pulse-slow"></div>
              </div>
              <span className="text-2xl font-bold text-gradient">HackFlow</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gradient" data-testid="text-login-title">Welcome Back</CardTitle>
            <CardDescription className="text-lg text-muted" data-testid="text-login-description">
              Sign in to your account to continue your hackathon journey
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="animate-slide-in-right">
          <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-login">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                placeholder="Enter your email address"
                required
                data-testid="input-email"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                placeholder="Enter your password"
                required
                data-testid="input-password"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 btn-primary-enhanced text-white border-0 rounded-xl text-lg font-semibold" 
              disabled={isLoading}
              data-testid="button-login"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <i className="fas fa-sign-in-alt"></i>
                  <span>Sign In</span>
                </div>
              )}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted">
              Don't have an account?{" "}
              <Link href="/register" className="text-primary hover:underline" data-testid="link-register">
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
