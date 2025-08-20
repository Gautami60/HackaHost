import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to HackFlow AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of hackathons with AI-powered team formation, intelligent judging, and real-time collaboration
          </p>
        </div>

        {/* AI Metrics Section */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="metric-ai-score">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <i className="fas fa-brain text-white"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">92%</div>
              <div className="text-sm text-gray-600 font-medium">AI Match Score</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="metric-team-sync">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <i className="fas fa-users text-white"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">95%</div>
              <div className="text-sm text-gray-600 font-medium">Team Sync Rate</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="metric-ai-insights">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <i className="fas fa-lightbulb text-white"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">24</div>
              <div className="text-sm text-gray-600 font-medium">AI Insights Today</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="metric-innovation">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <i className="fas fa-rocket text-white"></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">8.9</div>
              <div className="text-sm text-gray-600 font-medium">Innovation Score</div>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" data-testid="card-team-section">
          <CardHeader className="bg-gradient-to-r from-blue-50/80 to-purple-50/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <i className="fas fa-users text-white"></i>
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-testid="text-team-name">
                    AI Innovators
                  </CardTitle>
                  <p className="text-gray-600 font-medium">Building the future with artificial intelligence</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300" data-testid="button-invite-member">
                <i className="fas fa-plus mr-2"></i>Invite Member
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Team Member 1 */}
              <div className="bg-gradient-to-br from-blue-50/70 to-indigo-50/70 backdrop-blur-sm p-6 rounded-2xl border border-blue-200/50 hover:shadow-xl transition-all duration-500" data-testid="member-alex">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64" 
                      alt="Alex Johnson profile" 
                      className="w-16 h-16 rounded-2xl shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-3 border-white shadow-md"></div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-bold text-xl text-gray-800" data-testid="text-member-name-alex">Alex Johnson</h3>
                      <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">TEAM LEAD</span>
                    </div>
                    <p className="text-gray-600 font-semibold" data-testid="text-member-role-alex">Full Stack Developer</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                        <span className="text-sm text-green-600 font-semibold" data-testid="status-online-alex">Online</span>
                      </div>
                      <div className="flex space-x-2">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">React</span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Node.js</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-gradient-to-br from-purple-50/70 to-pink-50/70 backdrop-blur-sm p-6 rounded-2xl border border-purple-200/50 hover:shadow-xl transition-all duration-500" data-testid="member-sarah">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64" 
                      alt="Sarah Chen profile" 
                      className="w-16 h-16 rounded-2xl shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-3 border-white shadow-md"></div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-bold text-xl text-gray-800" data-testid="text-member-name-sarah">Sarah Chen</h3>
                    <p className="text-gray-600 font-semibold" data-testid="text-member-role-sarah">AI/UX Designer</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                        <span className="text-sm text-green-600 font-semibold" data-testid="status-online-sarah">Online</span>
                      </div>
                      <div className="flex space-x-2">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">Figma</span>
                        <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">AI/UX</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 backdrop-blur-sm rounded-2xl border border-indigo-200/50">
              <div className="text-center space-y-2">
                <div className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">72h</div>
                <div className="text-sm font-semibold text-gray-600">Total Work Time</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">12</div>
                <div className="text-sm font-semibold text-gray-600">AI Insights Today</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">95%</div>
                <div className="text-sm font-semibold text-gray-600">Team Sync Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" data-testid="card-quick-actions">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
            <CardTitle className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              <i className="fas fa-bolt text-yellow-500"></i>
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <button className="group flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" data-testid="action-new-submission">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-upload text-white text-lg"></i>
                </div>
                <span className="text-sm font-semibold text-center">New Submission</span>
              </button>
              
              <button className="group flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" data-testid="action-team-chat">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-comments text-white text-lg"></i>
                </div>
                <span className="text-sm font-semibold text-center">Team Chat</span>
              </button>
              
              <button className="group flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" data-testid="action-view-schedule">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-calendar text-white text-lg"></i>
                </div>
                <span className="text-sm font-semibold text-center">Schedule</span>
              </button>
              
              <button className="group flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" data-testid="action-ai-assistant">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-robot text-white text-lg"></i>
                </div>
                <span className="text-sm font-semibold text-center">AI Assistant</span>
              </button>
            </div>
          </CardContent>
        </Card>

        {/* AI Project Progress */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl" data-testid="card-project-progress">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-blue-50">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                <i className="fas fa-brain text-emerald-500"></i>
                <span>AI Project "EcoTrack ML" Progress</span>
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
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">87%</div>
                <div className="text-sm text-gray-600 font-semibold">AI Code Quality</div>
                <div className="w-full bg-blue-200 rounded-full h-3 mt-3">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">9.2</div>
                <div className="text-sm text-gray-600 font-semibold">Innovation Score</div>
                <div className="flex justify-center mt-3">
                  {[1,2,3,4,5].map(star => (
                    <i key={star} className="fas fa-star text-yellow-400 text-sm"></i>
                  ))}
                </div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">2/3</div>
                <div className="text-sm text-gray-600 font-semibold">Rounds Complete</div>
                <div className="text-xs text-green-600 mt-3 font-medium">On Schedule</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">94%</div>
                <div className="text-sm text-gray-600 font-semibold">Team Sync</div>
                <div className="text-xs text-green-600 mt-3 font-medium">Excellent</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}