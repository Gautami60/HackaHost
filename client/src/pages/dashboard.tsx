import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { authService } from "@/lib/auth";
import { useEffect, useState } from "react";
import { User } from "@shared/schema";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = authService.getUser();
    if (!currentUser) {
      window.location.href = "/login";
      return;
    }
    setUser(currentUser);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background" data-testid="dashboard-page">
      <Navbar />
      <div className="flex">
        <Sidebar userRole={user.role} />
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card data-testid="card-time-remaining">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-time-label">Time Remaining</p>
                    <p className="text-2xl font-bold text-foreground" data-testid="text-time-value">2d 14h 32m</p>
                  </div>
                  <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                    <i className="fas fa-clock text-primary text-xl"></i>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card data-testid="card-team-size">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-team-label">Team Size</p>
                    <p className="text-2xl font-bold text-foreground" data-testid="text-team-value">4 Members</p>
                  </div>
                  <div className="bg-secondary bg-opacity-10 p-3 rounded-lg">
                    <i className="fas fa-users text-secondary text-xl"></i>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card data-testid="card-submissions">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-submissions-label">Submissions</p>
                    <p className="text-2xl font-bold text-foreground" data-testid="text-submissions-value">2 / 3</p>
                  </div>
                  <div className="bg-accent bg-opacity-10 p-3 rounded-lg">
                    <i className="fas fa-upload text-accent text-xl"></i>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <Card className="mb-8" data-testid="card-team-section">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle data-testid="text-team-name">Team: AI Innovators</CardTitle>
                <Button data-testid="button-invite-member">
                  <i className="fas fa-plus mr-2"></i>Invite Member
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-4 p-4 bg-background rounded-lg" data-testid="member-alex">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                    alt="Alex Johnson profile" 
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium" data-testid="text-member-name-alex">Alex Johnson</h3>
                    <p className="text-sm text-muted" data-testid="text-member-role-alex">Team Lead • Full Stack Developer</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-xs text-muted" data-testid="status-online-alex">Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background rounded-lg" data-testid="member-sarah">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                    alt="Sarah Chen profile" 
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium" data-testid="text-member-name-sarah">Sarah Chen</h3>
                    <p className="text-sm text-muted" data-testid="text-member-role-sarah">UI/UX Designer</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-xs text-muted" data-testid="status-online-sarah">Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background rounded-lg" data-testid="member-mike">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                    alt="Mike Rodriguez profile" 
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium" data-testid="text-member-name-mike">Mike Rodriguez</h3>
                    <p className="text-sm text-muted" data-testid="text-member-role-mike">Backend Developer</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-xs text-muted" data-testid="status-away-mike">Away</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background rounded-lg" data-testid="member-emma">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                    alt="Emma Wilson profile" 
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium" data-testid="text-member-name-emma">Emma Wilson</h3>
                    <p className="text-sm text-muted" data-testid="text-member-role-emma">Data Scientist</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-xs text-muted" data-testid="status-online-emma">Online</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Submission Section */}
          <Card className="mb-8" data-testid="card-submissions-section">
            <CardHeader>
              <CardTitle data-testid="text-submissions-title">Project Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg" data-testid="submission-proposal">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary bg-opacity-10 p-2 rounded">
                      <i className="fas fa-file-alt text-secondary"></i>
                    </div>
                    <div>
                      <h3 className="font-medium" data-testid="text-submission-title-proposal">Project Proposal</h3>
                      <p className="text-sm text-muted" data-testid="text-submission-date-proposal">Submitted 2 days ago • PDF Document</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-secondary bg-opacity-10 text-secondary px-2 py-1 rounded text-xs font-medium" data-testid="status-approved">
                      Approved
                    </span>
                    <button className="text-muted hover:text-foreground" data-testid="button-view-proposal">
                      <i className="fas fa-external-link-alt"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg" data-testid="submission-code">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary bg-opacity-10 p-2 rounded">
                      <i className="fab fa-github text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-medium" data-testid="text-submission-title-code">Source Code Repository</h3>
                      <p className="text-sm text-muted" data-testid="text-submission-date-code">Last updated 3 hours ago • GitHub Link</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-primary bg-opacity-10 text-primary px-2 py-1 rounded text-xs font-medium" data-testid="status-active">
                      Active
                    </span>
                    <button className="text-muted hover:text-foreground" data-testid="button-view-code">
                      <i className="fas fa-external-link-alt"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border-2 border-dashed border-border rounded-lg bg-background" data-testid="submission-video">
                  <div className="flex items-center space-x-4">
                    <div className="bg-muted bg-opacity-10 p-2 rounded">
                      <i className="fas fa-video text-muted"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-muted" data-testid="text-submission-title-video">Final Demo Video</h3>
                      <p className="text-sm text-muted" data-testid="text-submission-due-video">Due in 2 days • MP4 Video</p>
                    </div>
                  </div>
                  <Button data-testid="button-upload-video">
                    <i className="fas fa-plus mr-2"></i>Upload
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card data-testid="card-activity">
            <CardHeader>
              <CardTitle data-testid="text-activity-title">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4" data-testid="activity-commit">
                  <div className="bg-secondary bg-opacity-10 p-2 rounded-full">
                    <i className="fas fa-check text-secondary text-sm"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm" data-testid="text-activity-commit">
                      <span className="font-medium">Mike Rodriguez</span> committed changes to the backend API
                    </p>
                    <p className="text-xs text-muted" data-testid="text-activity-time-commit">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-testid="activity-design">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-full">
                    <i className="fas fa-comment text-primary text-sm"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm" data-testid="text-activity-design">
                      <span className="font-medium">Sarah Chen</span> posted an update on the design system
                    </p>
                    <p className="text-xs text-muted" data-testid="text-activity-time-design">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-testid="activity-upload">
                  <div className="bg-accent bg-opacity-10 p-2 rounded-full">
                    <i className="fas fa-upload text-accent text-sm"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm" data-testid="text-activity-upload">
                      <span className="font-medium">Alex Johnson</span> uploaded the project proposal document
                    </p>
                    <p className="text-xs text-muted" data-testid="text-activity-time-upload">2 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
