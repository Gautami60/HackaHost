import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" data-testid="landing-page">
      {/* Navigation */}
      <nav className="glass backdrop-blur-lg border-b border-white/20 sticky top-0 z-50" data-testid="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center animate-fade-in-up">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <i className="fas fa-code text-primary text-2xl hover-scale" data-testid="icon-logo"></i>
                  <div className="absolute -inset-2 bg-primary/10 rounded-full animate-pulse-slow"></div>
                </div>
                <span className="text-xl font-bold text-gradient">HackFlow</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 animate-slide-in-right">
              <a href="#features" className="text-muted hover:text-foreground transition-all duration-300 hover:scale-105" data-testid="link-features">
                Features
              </a>
              <a href="#pricing" className="text-muted hover:text-foreground transition-all duration-300 hover:scale-105" data-testid="link-pricing">
                Pricing
              </a>
              <Link href="/login" data-testid="link-login">
                <Button variant="outline" className="hover-lift">Login</Button>
              </Link>
              <Link href="/register" data-testid="link-register">
                <Button className="btn-primary-enhanced text-white border-0">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" data-testid="hero-section">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6" data-testid="text-hero-title">
              Next-Generation Hackathons with 
              <span className="text-gradient block mt-2">Intelligent AI Features</span>
            </h1>
            <p className="text-xl text-muted mb-12 max-w-4xl mx-auto leading-relaxed" data-testid="text-hero-description">
              Experience the future of hackathon management with AI-powered team formation, multi-round submissions, 
              intelligent judging, real-time analytics, and seamless integrations that transform how innovation happens.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-right">
            <Link href="/register" data-testid="button-start-event">
              <Button size="lg" className="btn-primary-enhanced text-white border-0 px-8 py-4 text-lg font-semibold">
                <i className="fas fa-rocket mr-2"></i>
                Start Your Event
              </Button>
            </Link>
            <Link href="/register" data-testid="button-join-participant">
              <Button size="lg" variant="outline" className="hover-lift px-8 py-4 text-lg font-semibold gradient-border">
                <i className="fas fa-users mr-2"></i>
                Join as Participant
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">10K+</div>
              <div className="text-sm text-muted">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">500+</div>
              <div className="text-sm text-muted">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">15K+</div>
              <div className="text-sm text-muted">Projects Submitted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">98%</div>
              <div className="text-sm text-muted">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm" data-testid="features-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6" data-testid="text-features-title">
              AI-Powered Features That Revolutionize Hackathons
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to optimize every aspect of your hackathon experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group card-enhanced bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover-lift" data-testid="card-feature-team-formation">
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">🤖 AI-Powered Team Formation</h3>
              <p className="text-muted leading-relaxed">Advanced machine learning algorithms analyze skills, experience, work styles, and compatibility to create optimal teams. Get real-time recommendations and compatibility scores.</p>
            </div>
            
            <div className="group card-enhanced bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover-lift" data-testid="card-feature-submissions">
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-layer-group text-white text-2xl"></i>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-secondary transition-colors">📋 Multi-Round Submissions</h3>
              <p className="text-muted leading-relaxed">Progressive submission system with AI-powered code analysis, automated quality checks, and intelligent feedback loops across multiple rounds.</p>
            </div>
            
            <div className="group card-enhanced bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover-lift" data-testid="card-feature-judging">
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-gavel text-white text-2xl"></i>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">⚖️ Intelligent Judging</h3>
              <p className="text-muted leading-relaxed">AI-powered evaluation system with bias detection, consistency scoring, automated rubric generation, and intelligent ranking algorithms.</p>
            </div>
            
            <div className="group card-enhanced bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover-lift" data-testid="card-feature-communication">
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-comments text-white text-2xl"></i>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">💬 Real-Time Communication</h3>
              <p className="text-muted leading-relaxed">Smart messaging with AI moderators, automated translations, sentiment analysis, and intelligent conversation threading for seamless collaboration.</p>
            </div>
            
            <div className="group card-enhanced bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover-lift" data-testid="card-feature-analytics">
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-chart-bar text-white text-2xl"></i>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-secondary transition-colors">📊 Advanced Analytics</h3>
              <p className="text-muted leading-relaxed">Machine learning insights with predictive modeling, performance forecasting, engagement analytics, and automated trend detection for data-driven decisions.</p>
            </div>
            
            <div className="group card-enhanced bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover-lift" data-testid="card-feature-integrations">
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-puzzle-piece text-white text-2xl"></i>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">🔗 Seamless Integrations</h3>
              <p className="text-muted leading-relaxed">AI-powered integration hub with smart webhook processing, automated data sync, intelligent notification routing, and unified workflow management.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
