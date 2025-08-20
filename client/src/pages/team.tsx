import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authService } from "@/lib/auth";
import { User } from "@shared/schema";

export default function Team() {
  const [user, setUser] = useState<User | null>(null);
  const [inviteEmail, setInviteEmail] = useState("");

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

  const handleInviteMember = () => {
    console.log("Inviting:", inviteEmail);
    setInviteEmail("");
  };

  return (
    <div className="min-h-screen bg-background" data-testid="team-page">
      <Navbar />
      <div className="flex">
        <Sidebar userRole={user.role} />
        
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8" data-testid="text-page-title">My Team</h1>
            
            {/* Team Overview */}
            <Card className="mb-8" data-testid="card-team-overview">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle data-testid="text-team-name">AI Innovators</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="bg-secondary bg-opacity-10 text-secondary px-3 py-1 rounded-full text-sm font-medium" data-testid="status-complete">
                      Team Complete
                    </span>
                    <span className="text-sm text-muted" data-testid="text-team-size">4/4 Members</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4 p-4 bg-background rounded-lg border-2 border-primary border-opacity-20" data-testid="member-alex">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                      alt="Team lead" 
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium" data-testid="text-member-name-alex">Alex Johnson</h3>
                        <span className="bg-primary bg-opacity-10 text-primary px-2 py-1 rounded text-xs font-medium" data-testid="badge-team-lead">
                          Team Lead
                        </span>
                      </div>
                      <p className="text-sm text-muted" data-testid="text-member-skills-alex">Full Stack Developer • React, Node.js, Python</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-xs text-muted" data-testid="status-online-alex">Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-background rounded-lg" data-testid="member-sarah">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                      alt="Designer" 
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium" data-testid="text-member-name-sarah">Sarah Chen</h3>
                      <p className="text-sm text-muted" data-testid="text-member-skills-sarah">UI/UX Designer • Figma, Adobe Creative Suite</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-xs text-muted" data-testid="status-online-sarah">Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-background rounded-lg" data-testid="member-mike">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                      alt="Backend developer" 
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium" data-testid="text-member-name-mike">Mike Rodriguez</h3>
                      <p className="text-sm text-muted" data-testid="text-member-skills-mike">Backend Developer • Java, Spring Boot, AWS</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-xs text-muted" data-testid="status-away-mike">Away</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-background rounded-lg" data-testid="member-emma">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                      alt="Data scientist" 
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium" data-testid="text-member-name-emma">Emma Wilson</h3>
                      <p className="text-sm text-muted" data-testid="text-member-skills-emma">Data Scientist • Python, Machine Learning, R</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-xs text-muted" data-testid="status-online-emma">Online</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Invite New Member */}
            <Card className="mb-8" data-testid="card-invite-member">
              <CardHeader>
                <CardTitle data-testid="text-invite-title">Invite Team Member</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Input
                    placeholder="Enter email address"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    className="flex-1"
                    data-testid="input-invite-email"
                  />
                  <Button onClick={handleInviteMember} data-testid="button-send-invite">
                    Send Invite
                  </Button>
                </div>
                <p className="text-sm text-muted mt-2" data-testid="text-invite-note">
                  Team members will receive an email invitation to join your team.
                </p>
              </CardContent>
            </Card>

            {/* Team Communication */}
            <Card data-testid="card-team-communication">
              <CardHeader>
                <CardTitle data-testid="text-communication-title">Team Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4" data-testid="section-channels">
                    <h3 className="font-semibold">Communication Channels</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start" data-testid="button-discord">
                        <i className="fab fa-discord mr-3 text-indigo-500"></i>
                        Join Discord Channel
                      </Button>
                      <Button variant="outline" className="w-full justify-start" data-testid="button-slack">
                        <i className="fab fa-slack mr-3 text-green-500"></i>
                        Connect Slack Workspace
                      </Button>
                      <Button variant="outline" className="w-full justify-start" data-testid="button-github">
                        <i className="fab fa-github mr-3"></i>
                        GitHub Repository
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4" data-testid="section-activity">
                    <h3 className="font-semibold">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3" data-testid="activity-sarah">
                        <div className="bg-primary bg-opacity-10 p-2 rounded-full">
                          <i className="fas fa-palette text-primary text-sm"></i>
                        </div>
                        <div>
                          <p className="text-sm" data-testid="text-activity-sarah">Sarah shared new design mockups</p>
                          <p className="text-xs text-muted" data-testid="text-activity-time-sarah">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3" data-testid="activity-mike">
                        <div className="bg-secondary bg-opacity-10 p-2 rounded-full">
                          <i className="fas fa-code text-secondary text-sm"></i>
                        </div>
                        <div>
                          <p className="text-sm" data-testid="text-activity-mike">Mike pushed new backend updates</p>
                          <p className="text-xs text-muted" data-testid="text-activity-time-mike">4 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3" data-testid="activity-emma">
                        <div className="bg-accent bg-opacity-10 p-2 rounded-full">
                          <i className="fas fa-chart-bar text-accent text-sm"></i>
                        </div>
                        <div>
                          <p className="text-sm" data-testid="text-activity-emma">Emma completed data analysis</p>
                          <p className="text-xs text-muted" data-testid="text-activity-time-emma">6 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}