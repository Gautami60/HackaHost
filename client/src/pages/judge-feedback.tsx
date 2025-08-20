import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { authService } from "@/lib/auth";
import { User } from "@shared/schema";

export default function JudgeFeedback() {
  const [user, setUser] = useState<User | null>(null);
  const [selectedProject, setSelectedProject] = useState("ecotrack");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const currentUser = authService.getUser();
    if (!currentUser || currentUser.role !== "judge") {
      window.location.href = "/login";
      return;
    }
    setUser(currentUser);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const projects = [
    {
      id: "ecotrack",
      name: "EcoTrack",
      team: "Green Warriors",
      feedback: "Excellent implementation of carbon tracking with innovative gamification. The mobile interface is intuitive and the data visualization is impressive. Consider adding more detailed analytics for power users.",
      score: 8.5,
      categories: {
        innovation: 9,
        technical: 8,
        impact: 9,
        presentation: 8
      }
    },
    {
      id: "studybuddy",
      name: "AI Study Buddy",
      team: "Learn Masters",
      feedback: "Creative approach to personalized learning with AI. The adaptive quiz system shows promise, but the UI could be more polished. Strong technical foundation with room for design improvements.",
      score: 7.8,
      categories: {
        innovation: 8,
        technical: 8,
        impact: 7,
        presentation: 7
      }
    },
    {
      id: "smartcity",
      name: "Smart City Dashboard",
      team: "Urban Innovators",
      feedback: "Outstanding data integration from multiple city services. Real-time analytics are impressive and the dashboard design is professional. This solution has immediate practical applications.",
      score: 9.1,
      categories: {
        innovation: 9,
        technical: 10,
        impact: 9,
        presentation: 9
      }
    }
  ];

  const currentProject = projects.find(p => p.id === selectedProject);

  return (
    <div className="min-h-screen bg-background" data-testid="judge-feedback-page">
      <header className="bg-surface border-b border-border" data-testid="judge-header">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-code text-primary text-xl" data-testid="icon-logo"></i>
              <span className="text-lg font-bold">HackFlow</span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <h1 className="text-lg font-semibold" data-testid="text-header-title">Feedback Center</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted" data-testid="text-feedback-count">8 feedbacks submitted</span>
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

        <main className="flex-1 p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project List */}
            <Card className="lg:col-span-1" data-testid="card-project-list">
              <CardHeader>
                <CardTitle data-testid="text-projects-title">Reviewed Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      className={`w-full p-3 rounded-lg text-left transition-colors ${
                        selectedProject === project.id 
                          ? "bg-primary bg-opacity-10 border border-primary border-opacity-20" 
                          : "hover:bg-background border border-transparent"
                      }`}
                      data-testid={`project-${project.id}`}
                    >
                      <h3 className="font-medium" data-testid={`text-project-name-${project.id}`}>{project.name}</h3>
                      <p className="text-sm text-muted" data-testid={`text-team-name-${project.id}`}>{project.team}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-medium" data-testid={`text-score-${project.id}`}>Score: {project.score}/10</span>
                        <span className="bg-secondary bg-opacity-10 text-secondary px-2 py-1 rounded text-xs" data-testid={`status-reviewed-${project.id}`}>
                          Reviewed
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Feedback Details */}
            <div className="lg:col-span-2 space-y-6">
              {currentProject && (
                <>
                  {/* Project Header */}
                  <Card data-testid="card-project-header">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle data-testid="text-current-project-name">{currentProject.name}</CardTitle>
                          <p className="text-muted" data-testid="text-current-team-name">by {currentProject.team}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary" data-testid="text-current-score">{currentProject.score}/10</p>
                          <p className="text-sm text-muted" data-testid="text-overall-label">Overall Score</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  {/* Scoring Breakdown */}
                  <Card data-testid="card-scoring-breakdown">
                    <CardHeader>
                      <CardTitle data-testid="text-breakdown-title">Scoring Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between" data-testid="score-innovation">
                            <span>Innovation</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-background rounded-full h-2">
                                <div 
                                  className="bg-primary h-2 rounded-full" 
                                  style={{ width: `${currentProject.categories.innovation * 10}%` }}
                                ></div>
                              </div>
                              <span className="font-medium w-8" data-testid="text-innovation-score">{currentProject.categories.innovation}/10</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between" data-testid="score-technical">
                            <span>Technical</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-background rounded-full h-2">
                                <div 
                                  className="bg-secondary h-2 rounded-full" 
                                  style={{ width: `${currentProject.categories.technical * 10}%` }}
                                ></div>
                              </div>
                              <span className="font-medium w-8" data-testid="text-technical-score">{currentProject.categories.technical}/10</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between" data-testid="score-impact">
                            <span>Impact</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-background rounded-full h-2">
                                <div 
                                  className="bg-accent h-2 rounded-full" 
                                  style={{ width: `${currentProject.categories.impact * 10}%` }}
                                ></div>
                              </div>
                              <span className="font-medium w-8" data-testid="text-impact-score">{currentProject.categories.impact}/10</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between" data-testid="score-presentation">
                            <span>Presentation</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-background rounded-full h-2">
                                <div 
                                  className="bg-orange-500 h-2 rounded-full" 
                                  style={{ width: `${currentProject.categories.presentation * 10}%` }}
                                ></div>
                              </div>
                              <span className="font-medium w-8" data-testid="text-presentation-score">{currentProject.categories.presentation}/10</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Feedback */}
                  <Card data-testid="card-feedback">
                    <CardHeader>
                      <CardTitle data-testid="text-feedback-title">Detailed Feedback</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        value={currentProject.feedback}
                        readOnly
                        rows={6}
                        className="mb-4"
                        data-testid="textarea-feedback"
                      />
                      <div className="flex space-x-4">
                        <Button variant="outline" data-testid="button-edit-feedback">
                          <i className="fas fa-edit mr-2"></i>Edit Feedback
                        </Button>
                        <Button variant="outline" data-testid="button-send-to-team">
                          <i className="fas fa-paper-plane mr-2"></i>Send to Team
                        </Button>
                        <Button variant="outline" data-testid="button-export-feedback">
                          <i className="fas fa-download mr-2"></i>Export
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* AI Feedback Assistant */}
                  <Card data-testid="card-ai-assistant">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2" data-testid="text-ai-title">
                        <i className="fas fa-robot text-accent"></i>
                        <span>AI Feedback Assistant</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-accent bg-opacity-5 border border-accent border-opacity-20 rounded-lg p-4">
                        <p className="text-sm text-gray-700 mb-3" data-testid="text-ai-suggestion">
                          <strong>💡 Suggestion:</strong> Your feedback is comprehensive and constructive. Consider adding specific technical recommendations for the next iteration of this project.
                        </p>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" data-testid="button-enhance-feedback">
                            Enhance Feedback
                          </Button>
                          <Button size="sm" variant="outline" data-testid="button-generate-questions">
                            Generate Follow-up Questions
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}