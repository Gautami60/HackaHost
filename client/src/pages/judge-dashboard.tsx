import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { authService } from "@/lib/auth";
import { User } from "@shared/schema";

export default function JudgeDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [scores, setScores] = useState({
    innovation: [8],
    technical: [9],
    impact: [8],
    presentation: [7],
  });
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const currentUser = authService.getUser();
    if (!currentUser || currentUser.role !== "judge") {
      window.location.href = "/login";
      return;
    }
    setUser(currentUser);
  }, []);

  const overallScore = (scores.innovation[0] + scores.technical[0] + scores.impact[0] + scores.presentation[0]) / 4;

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background" data-testid="judge-dashboard-page">
      {/* Judge Header */}
      <header className="bg-surface border-b border-border" data-testid="judge-header">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-code text-primary text-xl" data-testid="icon-logo"></i>
              <span className="text-lg font-bold">HackFlow</span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <h1 className="text-lg font-semibold" data-testid="text-header-title">Judging Portal</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted" data-testid="text-projects-count">12 projects to review</span>
            <div className="flex items-center space-x-2">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32" 
                alt="Judge avatar" 
                className="w-8 h-8 rounded-full"
                data-testid="img-judge-avatar"
              />
              <span className="text-sm font-medium" data-testid="text-judge-name">Dr. James Wilson</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <Sidebar userRole="judge" />

        {/* Judge Main Content */}
        <main className="flex-1 p-8">
          {/* Judging Progress */}
          <Card className="mb-8" data-testid="card-judging-progress">
            <CardHeader>
              <CardTitle data-testid="text-progress-title">Judging Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="flex-1 bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }} data-testid="progress-bar"></div>
                </div>
                <span className="text-sm font-medium" data-testid="text-progress-count">8/12 Projects Reviewed</span>
              </div>
            </CardContent>
          </Card>

          {/* Current Project Review */}
          <Card className="mb-8" data-testid="card-project-review">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle data-testid="text-project-title">Project: EcoTrack - Carbon Footprint Monitor</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" data-testid="button-previous">
                    Previous
                  </Button>
                  <Button data-testid="button-next">
                    Next
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* AI Summary */}
              <div className="bg-accent bg-opacity-5 border border-accent border-opacity-20 rounded-lg p-4 mb-6" data-testid="ai-summary">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-robot text-accent mt-1" data-testid="icon-ai"></i>
                  <div>
                    <h3 className="font-medium text-accent mb-2" data-testid="text-ai-title">AI Analysis Summary</h3>
                    <p className="text-sm text-gray-700" data-testid="text-ai-description">
                      This project presents a mobile application for tracking personal carbon footprints with innovative gamification elements. 
                      Strong technical implementation using React Native and Node.js. Creative approach to environmental awareness with social features.
                    </p>
                    <p className="text-sm text-accent font-medium mt-2" data-testid="text-ai-score">Suggested Score: 8.5/10</p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div data-testid="section-team-info">
                  <h3 className="font-semibold mb-3">Team Information</h3>
                  <div className="space-y-2">
                    <p className="text-sm" data-testid="text-team-name">
                      <span className="text-muted">Team:</span> Green Warriors
                    </p>
                    <p className="text-sm" data-testid="text-team-members">
                      <span className="text-muted">Members:</span> 4 developers
                    </p>
                    <p className="text-sm" data-testid="text-team-category">
                      <span className="text-muted">Category:</span> Environmental Impact
                    </p>
                  </div>
                </div>
                <div data-testid="section-submissions">
                  <h3 className="font-semibold mb-3">Submissions</h3>
                  <div className="space-y-2">
                    <a href="#" className="flex items-center space-x-2 text-primary hover:underline text-sm" data-testid="link-github">
                      <i className="fab fa-github"></i>
                      <span>GitHub Repository</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-primary hover:underline text-sm" data-testid="link-demo-video">
                      <i className="fas fa-video"></i>
                      <span>Demo Video (3:45)</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-primary hover:underline text-sm" data-testid="link-documentation">
                      <i className="fas fa-file-pdf"></i>
                      <span>Project Documentation</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Scoring Form */}
              <div className="border-t border-border pt-6" data-testid="section-scoring">
                <h3 className="font-semibold mb-4" data-testid="text-evaluation-title">Evaluation Criteria</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div data-testid="criterion-innovation">
                      <label className="block text-sm font-medium mb-2">Innovation (25%)</label>
                      <div className="flex space-x-2">
                        <Slider
                          value={scores.innovation}
                          onValueChange={(value) => setScores(prev => ({ ...prev, innovation: value }))}
                          max={10}
                          min={1}
                          step={1}
                          className="flex-1"
                          data-testid="slider-innovation"
                        />
                        <span className="text-sm font-medium w-8" data-testid="text-score-innovation">{scores.innovation[0]}/10</span>
                      </div>
                    </div>
                    <div data-testid="criterion-technical">
                      <label className="block text-sm font-medium mb-2">Technical Implementation (25%)</label>
                      <div className="flex space-x-2">
                        <Slider
                          value={scores.technical}
                          onValueChange={(value) => setScores(prev => ({ ...prev, technical: value }))}
                          max={10}
                          min={1}
                          step={1}
                          className="flex-1"
                          data-testid="slider-technical"
                        />
                        <span className="text-sm font-medium w-8" data-testid="text-score-technical">{scores.technical[0]}/10</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div data-testid="criterion-impact">
                      <label className="block text-sm font-medium mb-2">Impact Potential (25%)</label>
                      <div className="flex space-x-2">
                        <Slider
                          value={scores.impact}
                          onValueChange={(value) => setScores(prev => ({ ...prev, impact: value }))}
                          max={10}
                          min={1}
                          step={1}
                          className="flex-1"
                          data-testid="slider-impact"
                        />
                        <span className="text-sm font-medium w-8" data-testid="text-score-impact">{scores.impact[0]}/10</span>
                      </div>
                    </div>
                    <div data-testid="criterion-presentation">
                      <label className="block text-sm font-medium mb-2">Presentation (25%)</label>
                      <div className="flex space-x-2">
                        <Slider
                          value={scores.presentation}
                          onValueChange={(value) => setScores(prev => ({ ...prev, presentation: value }))}
                          max={10}
                          min={1}
                          step={1}
                          className="flex-1"
                          data-testid="slider-presentation"
                        />
                        <span className="text-sm font-medium w-8" data-testid="text-score-presentation">{scores.presentation[0]}/10</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium mb-2">Written Feedback</label>
                  <Textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={4}
                    placeholder="Provide detailed feedback for the team..."
                    data-testid="textarea-feedback"
                  />
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="text-xl font-bold">
                    Overall Score: <span className="text-primary" data-testid="text-overall-score">{overallScore.toFixed(1)}/10</span>
                  </div>
                  <Button 
                    className="bg-secondary text-white hover:bg-green-600"
                    data-testid="button-submit-review"
                  >
                    Submit Review
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
