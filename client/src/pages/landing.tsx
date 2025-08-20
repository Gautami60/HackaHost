import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="min-h-screen" data-testid="landing-page">
      {/* Navigation */}
      <nav className="bg-surface border-b border-border sticky top-0 z-50" data-testid="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <i className="fas fa-code text-primary text-2xl" data-testid="icon-logo"></i>
                <span className="text-xl font-bold text-foreground">HackFlow</span>
              </div>
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="hero-section">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6" data-testid="text-hero-title">
            Power Your Hackathons with 
            <span className="text-primary"> AI-Driven</span> Innovation
          </h1>
          <p className="text-xl text-muted mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
            The complete platform for organizing, participating in, and judging hackathons. 
            From team formation to project evaluation, we handle the workflow so you can focus on innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" data-testid="button-start-event">
              <Button size="lg" className="bg-primary text-white hover:bg-blue-600">
                Start Your Event
              </Button>
            </Link>
            <Link href="/register" data-testid="button-join-participant">
              <Button size="lg" variant="outline">
                Join as Participant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface" data-testid="features-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16" data-testid="text-features-title">
            Everything You Need to Run Amazing Hackathons
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow" data-testid="card-feature-team-formation">
              <i className="fas fa-users text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Team Formation</h3>
              <p className="text-muted">Smart matchmaking based on skills, interests, and availability. Let AI help participants find their perfect teammates.</p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow" data-testid="card-feature-submissions">
              <i className="fas fa-upload text-secondary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-4">Multi-Round Submissions</h3>
              <p className="text-muted">Support for documents, GitHub links, videos with version control and automated deadline management.</p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow" data-testid="card-feature-judging">
              <i className="fas fa-gavel text-accent text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-4">Intelligent Judging</h3>
              <p className="text-muted">AI-assisted project reviews with automated scoring suggestions and standardized feedback generation.</p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow" data-testid="card-feature-communication">
              <i className="fas fa-comments text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-4">Real-Time Communication</h3>
              <p className="text-muted">Integrated chatbots, virtual assistants, and live event feeds to keep everyone connected.</p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow" data-testid="card-feature-analytics">
              <i className="fas fa-chart-bar text-secondary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-4">Advanced Analytics</h3>
              <p className="text-muted">Predictive analytics for participation trends and comprehensive reporting for organizers.</p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow" data-testid="card-feature-integrations">
              <i className="fas fa-puzzle-piece text-accent text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-4">Seamless Integrations</h3>
              <p className="text-muted">Connect with Discord, GitHub, Slack, and other tools your teams already use.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
