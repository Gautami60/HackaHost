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
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <div className="relative mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto animate-pulse-slow">
              <i className="fas fa-code text-white text-2xl"></i>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 animate-pulse-slow -z-10"></div>
          </div>
          <h2 className="text-2xl font-bold text-gradient mb-2">Loading Dashboard</h2>
          <p className="text-muted">Preparing your hackathon workspace...</p>
          <div className="mt-6">
            <div className="w-32 h-1 bg-gray-200 rounded-full mx-auto">
              <div className="progress-bar h-1 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" data-testid="dashboard-page">
      <Navbar />
      <div className="flex">
        <Sidebar userRole={user.role} />
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Welcome Section */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-3xl font-bold text-gradient mb-2">
              Welcome back, {user.username}! 👋
            </h1>
            <p className="text-muted text-lg">
              Ready to build something amazing? Your hackathon journey continues...
            </p>
          </div>

          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 animate-slide-in-right">
            <Card className="card-enhanced hover-lift bg-white/80 backdrop-blur-sm border border-white/20" data-testid="card-time-remaining">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-time-label">Time Remaining</p>
                    <p className="text-3xl font-bold text-gradient" data-testid="text-time-value">2d 14h 32m</p>
                    <div className="mt-2">
                      <div className="w-full bg-background rounded-full h-2">
                        <div className="progress-bar h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <p className="text-xs text-muted mt-1">65% of hackathon complete</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center hover-scale">
                      <i className="fas fa-clock text-white text-2xl"></i>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 animate-pulse-slow -z-10"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced hover-lift bg-white/80 backdrop-blur-sm border border-white/20" data-testid="card-team-size">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-team-label">Team Size</p>
                    <p className="text-3xl font-bold text-gradient-secondary" data-testid="text-team-value">4 Members</p>
                    <p className="text-xs text-muted mt-1">All members active</p>
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center hover-scale">
                      <i className="fas fa-users text-white text-2xl"></i>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl opacity-20 animate-pulse-slow -z-10"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-enhanced hover-lift bg-white/80 backdrop-blur-sm border border-white/20" data-testid="card-submissions">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-submissions-label">Submissions</p>
                    <p className="text-3xl font-bold text-gradient" data-testid="text-submissions-value">2 / 3</p>
                    <div className="mt-2">
                      <div className="w-full bg-background rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full" style={{ width: '66%' }}></div>
                      </div>
                      <p className="text-xs text-muted mt-1">1 submission pending</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center hover-scale">
                      <i className="fas fa-upload text-white text-2xl"></i>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl opacity-20 animate-pulse-slow -z-10"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <Card className="card-enhanced hover-lift bg-white/80 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up" data-testid="card-team-section">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-gradient text-xl" data-testid="text-team-name">Team: AI Innovators 🚀</CardTitle>
                  <p className="text-sm text-muted mt-1">Building the future together</p>
                </div>
                <Button className="btn-secondary-enhanced text-white border-0" data-testid="button-invite-member">
                  <i className="fas fa-plus mr-2"></i>Invite Member
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group flex items-center space-x-4 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover-lift" data-testid="member-alex">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                      alt="Alex Johnson profile" 
                      className="w-14 h-14 rounded-full ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 status-online rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-lg" data-testid="text-member-name-alex">Alex Johnson</h3>
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">LEAD</span>
                    </div>
                    <p className="text-sm text-muted font-medium" data-testid="text-member-role-alex">Full Stack Developer</p>
                    <div className="flex items-center space-x-3 mt-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></div>
                        <span className="text-xs text-green-600 font-medium" data-testid="status-online-alex">Online</span>
                      </div>
                      <div className="flex space-x-1">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">React</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Node.js</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4 p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover-lift" data-testid="member-sarah">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                      alt="Sarah Chen profile" 
                      className="w-14 h-14 rounded-full ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 status-online rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg" data-testid="text-member-name-sarah">Sarah Chen</h3>
                    <p className="text-sm text-muted font-medium" data-testid="text-member-role-sarah">UI/UX Designer</p>
                    <div className="flex items-center space-x-3 mt-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></div>
                        <span className="text-xs text-green-600 font-medium" data-testid="status-online-sarah">Online</span>
                      </div>
                      <div className="flex space-x-1">
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Figma</span>
                        <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs">UI/UX</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4 p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100 hover-lift" data-testid="member-mike">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                      alt="Mike Rodriguez profile" 
                      className="w-14 h-14 rounded-full ring-4 ring-orange-100 group-hover:ring-orange-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 status-away rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg" data-testid="text-member-name-mike">Mike Rodriguez</h3>
                    <p className="text-sm text-muted font-medium" data-testid="text-member-role-mike">Backend Developer</p>
                    <div className="flex items-center space-x-3 mt-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse-slow"></div>
                        <span className="text-xs text-orange-600 font-medium" data-testid="status-away-mike">Away</span>
                      </div>
                      <div className="flex space-x-1">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Python</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">API</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100 hover-lift" data-testid="member-emma">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                      alt="Emma Wilson profile" 
                      className="w-14 h-14 rounded-full ring-4 ring-emerald-100 group-hover:ring-emerald-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 status-online rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg" data-testid="text-member-name-emma">Emma Wilson</h3>
                    <p className="text-sm text-muted font-medium" data-testid="text-member-role-emma">Data Scientist</p>
                    <div className="flex items-center space-x-3 mt-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></div>
                        <span className="text-xs text-green-600 font-medium" data-testid="status-online-emma">Online</span>
                      </div>
                      <div className="flex space-x-1">
                        <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs">ML</span>
                        <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">AI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Team Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">72h</div>
                  <div className="text-xs text-muted">Total Work Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-secondary">12</div>
                  <div className="text-xs text-muted">Commits Today</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">95%</div>
                  <div className="text-xs text-muted">Sync Rate</div>
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
