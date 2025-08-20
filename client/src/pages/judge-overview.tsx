import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authService } from "@/lib/auth";
import { User } from "@shared/schema";

export default function JudgeOverview() {
  const [user, setUser] = useState<User | null>(null);

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
    { name: "EcoTrack", team: "Green Warriors", score: 8.5, status: "Reviewed" },
    { name: "AI Study Buddy", team: "Learn Masters", score: 7.8, status: "Reviewed" },
    { name: "Smart City Dashboard", team: "Urban Innovators", score: 9.1, status: "Reviewed" },
    { name: "Health Monitor", team: "MedTech Solutions", score: 8.2, status: "Reviewed" },
    { name: "Crypto Wallet", team: "Blockchain Bros", score: 0, status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-background" data-testid="judge-overview-page">
      <header className="bg-surface border-b border-border" data-testid="judge-header">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-code text-primary text-xl" data-testid="icon-logo"></i>
              <span className="text-lg font-bold">HackFlow</span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <h1 className="text-lg font-semibold" data-testid="text-header-title">Scoring Overview</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted" data-testid="text-projects-count">8/12 projects reviewed</span>
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
          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card data-testid="card-total-reviewed">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-reviewed-label">Projects Reviewed</p>
                    <p className="text-2xl font-bold text-foreground" data-testid="text-reviewed-value">8</p>
                  </div>
                  <div className="bg-secondary bg-opacity-10 p-3 rounded-lg">
                    <i className="fas fa-check text-secondary text-xl"></i>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card data-testid="card-average-score">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-average-label">Average Score</p>
                    <p className="text-2xl font-bold text-foreground" data-testid="text-average-value">8.4</p>
                  </div>
                  <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                    <i className="fas fa-star text-primary text-xl"></i>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card data-testid="card-highest-score">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-highest-label">Highest Score</p>
                    <p className="text-2xl font-bold text-foreground" data-testid="text-highest-value">9.1</p>
                  </div>
                  <div className="bg-accent bg-opacity-10 p-3 rounded-lg">
                    <i className="fas fa-trophy text-accent text-xl"></i>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card data-testid="card-pending">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-pending-label">Pending Review</p>
                    <p className="text-2xl font-bold text-foreground" data-testid="text-pending-value">4</p>
                  </div>
                  <div className="bg-orange-500 bg-opacity-10 p-3 rounded-lg">
                    <i className="fas fa-clock text-orange-500 text-xl"></i>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Table */}
          <Card data-testid="card-projects-table">
            <CardHeader>
              <CardTitle data-testid="text-table-title">All Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4" data-testid="header-project">Project</th>
                      <th className="text-left py-3 px-4" data-testid="header-team">Team</th>
                      <th className="text-left py-3 px-4" data-testid="header-score">Score</th>
                      <th className="text-left py-3 px-4" data-testid="header-status">Status</th>
                      <th className="text-left py-3 px-4" data-testid="header-actions">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project, index) => (
                      <tr key={index} className="border-b border-border hover:bg-background" data-testid={`row-project-${index}`}>
                        <td className="py-3 px-4">
                          <h3 className="font-medium" data-testid={`text-project-name-${index}`}>{project.name}</h3>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-muted" data-testid={`text-team-name-${index}`}>{project.team}</span>
                        </td>
                        <td className="py-3 px-4">
                          {project.status === "Reviewed" ? (
                            <span className="font-semibold" data-testid={`text-score-${index}`}>{project.score}/10</span>
                          ) : (
                            <span className="text-muted" data-testid={`text-score-pending-${index}`}>-</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <span 
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              project.status === "Reviewed" 
                                ? "bg-secondary bg-opacity-10 text-secondary" 
                                : "bg-orange-500 bg-opacity-10 text-orange-500"
                            }`}
                            data-testid={`status-${project.status.toLowerCase()}-${index}`}
                          >
                            {project.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button 
                              className="text-primary hover:text-blue-600 text-sm"
                              data-testid={`button-view-${index}`}
                            >
                              <i className="fas fa-eye mr-1"></i>View
                            </button>
                            {project.status === "Reviewed" && (
                              <button 
                                className="text-muted hover:text-foreground text-sm"
                                data-testid={`button-edit-${index}`}
                              >
                                <i className="fas fa-edit mr-1"></i>Edit
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}