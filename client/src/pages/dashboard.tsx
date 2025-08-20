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
          {/* AI-Enhanced Welcome Section */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gradient mb-2">
                  Welcome back, {user.username}! 🤖
                </h1>
                <p className="text-muted text-lg">
                  Your AI-powered hackathon workspace is ready. Let's innovate together!
                </p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-xl border border-emerald-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                    <span className="text-sm font-medium text-emerald-700">AI Assistant Active</span>
                  </div>
                </div>
              </div>
            </div>
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
                    <p className="text-sm text-muted" data-testid="text-team-label">AI Team Score</p>
                    <p className="text-3xl font-bold text-gradient-secondary" data-testid="text-team-value">92% Match</p>
                    <p className="text-xs text-muted mt-1">Optimal team composition</p>
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
                    <p className="text-sm text-muted" data-testid="text-submissions-label">AI Analysis Score</p>
                    <p className="text-3xl font-bold text-gradient" data-testid="text-submissions-value">8.7 / 10</p>
                    <div className="mt-2">
                      <div className="w-full bg-background rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                      </div>
                      <p className="text-xs text-muted mt-1">Innovation potential: High</p>
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

          {/* Dashboard Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Actions */}
              <Card className="card-enhanced hover-lift bg-white/80 backdrop-blur-sm border border-white/20 animate-fade-in-up" data-testid="card-quick-actions">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-t-lg">
                  <CardTitle className="flex items-center space-x-2 text-gradient">
                    <i className="fas fa-bolt text-yellow-500"></i>
                    <span>Quick Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button className="group flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover-lift" data-testid="action-new-submission">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <i className="fas fa-upload text-white"></i>
                      </div>
                      <span className="text-sm font-medium text-center">New Submission</span>
                    </button>
                    
                    <button className="group flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 hover-lift" data-testid="action-team-chat">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <i className="fas fa-comments text-white"></i>
                      </div>
                      <span className="text-sm font-medium text-center">Team Chat</span>
                    </button>
                    
                    <button className="group flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 hover-lift" data-testid="action-view-schedule">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <i className="fas fa-calendar text-white"></i>
                      </div>
                      <span className="text-sm font-medium text-center">Schedule</span>
                    </button>
                    
                    <button className="group flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 hover-lift" data-testid="action-ai-assistant">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <i className="fas fa-robot text-white"></i>
                      </div>
                      <span className="text-sm font-medium text-center">AI Assistant</span>
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* AI-Enhanced Project Progress */}
              <Card className="card-enhanced hover-lift bg-white/80 backdrop-blur-sm border border-white/20 animate-fade-in-up" data-testid="card-project-progress">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2 text-gradient">
                      <i className="fas fa-brain text-emerald-500"></i>
                      <span>AI Project "EcoTrack ML" - Multi-Round Progress</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <span className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        AI-OPTIMIZED
                      </span>
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ROUND 2/3
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {/* AI-Enhanced Progress Metrics */}
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                      <div className="text-2xl font-bold text-gradient mb-1">87%</div>
                      <div className="text-sm text-muted">AI Code Quality</div>
                      <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                      <div className="text-2xl font-bold text-gradient-secondary mb-1">9.2</div>
                      <div className="text-sm text-muted">Innovation Score</div>
                      <div className="flex justify-center mt-2">
                        {[1,2,3,4,5].map(star => (
                          <i key={star} className={`fas fa-star text-sm ${star <= 5 ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <div className="text-2xl font-bold text-gradient mb-1">2/3</div>
                      <div className="text-sm text-muted">Rounds Complete</div>
                      <div className="text-xs text-green-600 mt-2 font-medium">On Schedule</div>
                    </div>
                    
                    <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                      <div className="text-2xl font-bold text-gradient mb-1">94%</div>
                      <div className="text-sm text-muted">Team Sync</div>
                      <div className="text-xs text-green-600 mt-2 font-medium">Excellent</div>
                    </div>
                  </div>
                  
                  {/* Recent Activity Chart */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted mb-3">Weekly Activity</h4>
                    <div className="flex items-end space-x-2 h-16 bg-gradient-to-r from-gray-50 to-blue-50 p-3 rounded-xl">
                      {[12, 8, 15, 22, 18, 25, 19].map((height, index) => (
                        <div 
                          key={index} 
                          className="flex-1 chart-bar bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg opacity-80 hover:opacity-100 transition-all duration-300 group cursor-pointer relative" 
                          style={{ height: `${height * 2}px` }}
                          title={`${height} commits on ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}`}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            {height}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-muted mt-2">
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                  </div>
                  
                  {/* Key Milestones */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted mb-3">Key Milestones</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <i className="fas fa-check text-white text-xs"></i>
                        </div>
                        <span className="text-sm">MVP Development</span>
                        <span className="text-xs text-green-600 font-medium">Completed</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-pulse-slow">
                          <i className="fas fa-cog text-white text-xs"></i>
                        </div>
                        <span className="text-sm">Feature Integration</span>
                        <span className="text-xs text-blue-600 font-medium">In Progress</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                          <i className="fas fa-video text-gray-600 text-xs"></i>
                        </div>
                        <span className="text-sm">Demo Recording</span>
                        <span className="text-xs text-gray-600 font-medium">Pending</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Live Activity Feed */}
              <Card className="card-enhanced hover-lift bg-white/80 backdrop-blur-sm border border-white/20 animate-slide-in-right" data-testid="card-activity-feed">
                <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-t-lg">
                  <CardTitle className="flex items-center space-x-2 text-gradient">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></div>
                    <span>Live Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 max-h-80 overflow-y-auto custom-scrollbar">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg" data-testid="activity-commit">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <i className="fab fa-git-alt text-white text-xs"></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Alex pushed new changes</p>
                        <p className="text-xs text-muted">Added ML model integration • 5 min ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg" data-testid="activity-message">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                        <i className="fas fa-comment text-white text-xs"></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Sarah shared designs</p>
                        <p className="text-xs text-muted">Updated dashboard mockups • 12 min ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg" data-testid="activity-submission">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <i className="fas fa-upload text-white text-xs"></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Mike uploaded API docs</p>
                        <p className="text-xs text-muted">Backend documentation • 1h ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg" data-testid="activity-milestone">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                        <i className="fas fa-flag text-white text-xs"></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Team reached 70% completion</p>
                        <p className="text-xs text-muted">Development milestone achieved • 2h ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Deadlines */}
              <Card className="card-enhanced hover-lift bg-white/80 backdrop-blur-sm border border-white/20 animate-slide-in-right" data-testid="card-deadlines">
                <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 rounded-t-lg">
                  <CardTitle className="flex items-center space-x-2 text-gradient">
                    <i className="fas fa-clock text-red-500"></i>
                    <span>Upcoming Deadlines</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-100" data-testid="deadline-urgent">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-slow"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Final Demo Video</p>
                        <p className="text-xs text-red-600 font-medium">Due in 47 hours</p>
                      </div>
                      <i className="fas fa-exclamation-triangle text-red-500"></i>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-100" data-testid="deadline-warning">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Technical Documentation</p>
                        <p className="text-xs text-orange-600 font-medium">Due in 3 days</p>
                      </div>
                      <i className="fas fa-clock text-orange-500"></i>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100" data-testid="deadline-normal">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Final Presentation</p>
                        <p className="text-xs text-blue-600 font-medium">Due in 5 days</p>
                      </div>
                      <i className="fas fa-presentation text-blue-500"></i>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Advanced AI Analytics */}
              <Card className="card-enhanced hover-lift bg-white/80 backdrop-blur-sm border border-white/20 animate-slide-in-right" data-testid="card-ai-insights">
                <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-t-lg">
                  <CardTitle className="flex items-center space-x-2 text-gradient">
                    <i className="fas fa-brain text-violet-500"></i>
                    <span>AI Intelligence Hub</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                      <div className="flex items-start space-x-2">
                        <i className="fas fa-code text-blue-500 mt-1"></i>
                        <div>
                          <p className="text-sm font-medium text-blue-900">Code Analysis</p>
                          <p className="text-xs text-blue-700 mt-1">AI detected potential optimization in your ML pipeline. Est. 25% performance gain.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                      <div className="flex items-start space-x-2">
                        <i className="fas fa-trophy text-emerald-500 mt-1"></i>
                        <div>
                          <p className="text-sm font-medium text-emerald-900">Winning Prediction</p>
                          <p className="text-xs text-emerald-700 mt-1">Your project has 87% chance of advancing to final round based on current metrics.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                      <div className="flex items-start space-x-2">
                        <i className="fas fa-network-wired text-purple-500 mt-1"></i>
                        <div>
                          <p className="text-sm font-medium text-purple-900">Integration Alert</p>
                          <p className="text-xs text-purple-700 mt-1">New GitHub commits detected. Auto-syncing with submission system.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                      <div className="flex items-start space-x-2">
                        <i className="fas fa-comments text-amber-500 mt-1"></i>
                        <div>
                          <p className="text-sm font-medium text-amber-900">Smart Communication</p>
                          <p className="text-xs text-amber-700 mt-1">AI moderator suggests focusing team discussion on backend optimization.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI-Powered Live Activity */}
          <Card data-testid="card-activity" className="card-enhanced hover-lift bg-white/80 backdrop-blur-sm border border-white/20">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-t-lg">
              <CardTitle data-testid="text-activity-title" className="flex items-center space-x-2 text-gradient">
                <i className="fas fa-bolt text-indigo-500"></i>
                <span>Real-Time AI Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4" data-testid="activity-commit">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-full animate-pulse-slow">
                    <i className="fas fa-brain text-white text-sm"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm" data-testid="text-activity-commit">
                      <span className="font-medium">🤖 AI Assistant</span> analyzed your latest ML model and suggested optimizations
                    </p>
                    <p className="text-xs text-muted" data-testid="text-activity-time-commit">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-testid="activity-design">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-full">
                    <i className="fas fa-network-wired text-white text-sm"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm" data-testid="text-activity-design">
                      <span className="font-medium">GitHub Integration</span> auto-synced latest commits with Round 2 submission
                    </p>
                    <p className="text-xs text-muted" data-testid="text-activity-time-design">15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-testid="activity-upload">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-2 rounded-full">
                    <i className="fas fa-comments text-white text-sm"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm" data-testid="text-activity-upload">
                      <span className="font-medium">Smart Chat</span> translated team messages and detected positive sentiment
                    </p>
                    <p className="text-xs text-muted" data-testid="text-activity-time-upload">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-testid="activity-prediction">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-full">
                    <i className="fas fa-trophy text-white text-sm"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm" data-testid="text-activity-prediction">
                      <span className="font-medium">Predictive Analytics</span> forecast 87% chance of advancing to finals
                    </p>
                    <p className="text-xs text-muted" data-testid="text-activity-time-prediction">2 hours ago</p>
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
