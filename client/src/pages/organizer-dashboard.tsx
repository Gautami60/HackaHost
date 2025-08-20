import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { authService } from "@/lib/auth";
import { User } from "@shared/schema";

export default function OrganizerDashboard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = authService.getUser();
    if (!currentUser || currentUser.role !== "organizer") {
      window.location.href = "/login";
      return;
    }
    setUser(currentUser);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background" data-testid="organizer-dashboard-page">
      <Navbar />
      <div className="flex">
        <Sidebar userRole="organizer" />
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Overview Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card data-testid="card-total-participants">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-participants-label">Total Participants</p>
                    <p className="text-2xl font-bold text-foreground" data-testid="text-participants-value">156</p>
                  </div>
                  <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                    <i className="fas fa-users text-primary text-xl"></i>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card data-testid="card-total-teams">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-teams-label">Teams Formed</p>
                    <p className="text-2xl font-bold text-foreground" data-testid="text-teams-value">39</p>
                  </div>
                  <div className="bg-secondary bg-opacity-10 p-3 rounded-lg">
                    <i className="fas fa-layer-group text-secondary text-xl"></i>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card data-testid="card-submissions">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-submissions-label">Submissions</p>
                    <p className="text-2xl font-bold text-foreground" data-testid="text-submissions-value">32</p>
                  </div>
                  <div className="bg-accent bg-opacity-10 p-3 rounded-lg">
                    <i className="fas fa-upload text-accent text-xl"></i>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card data-testid="card-judges">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted" data-testid="text-judges-label">Active Judges</p>
                    <p className="text-2xl font-bold text-foreground" data-testid="text-judges-value">8</p>
                  </div>
                  <div className="bg-orange-500 bg-opacity-10 p-3 rounded-lg">
                    <i className="fas fa-gavel text-orange-500 text-xl"></i>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Event Management */}
          <Card className="mb-8" data-testid="card-event-management">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle data-testid="text-event-title">Spring 2024 Innovation Challenge</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" data-testid="button-edit-event">
                    <i className="fas fa-edit mr-2"></i>Edit Event
                  </Button>
                  <Button data-testid="button-announcements">
                    <i className="fas fa-bullhorn mr-2"></i>Send Announcement
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div data-testid="section-event-status">
                  <h3 className="font-semibold mb-3">Event Status</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Status</span>
                      <span className="text-primary font-medium" data-testid="status-active">Active</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Start Date</span>
                      <span data-testid="text-start-date">March 15, 2024</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">End Date</span>
                      <span data-testid="text-end-date">March 17, 2024</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Duration</span>
                      <span data-testid="text-duration">48 hours</span>
                    </div>
                  </div>
                </div>
                <div data-testid="section-registration">
                  <h3 className="font-semibold mb-3">Registration</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Deadline</span>
                      <span data-testid="text-registration-deadline">March 10, 2024</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Registered</span>
                      <span data-testid="text-registered-count">156/200</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }} data-testid="progress-registration"></div>
                    </div>
                  </div>
                </div>
                <div data-testid="section-judging">
                  <h3 className="font-semibold mb-3">Judging Progress</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Reviewed</span>
                      <span data-testid="text-reviewed-count">24/32</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Completion</span>
                      <span data-testid="text-completion-rate">75%</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: "75%" }} data-testid="progress-judging"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card data-testid="card-quick-actions">
              <CardHeader>
                <CardTitle data-testid="text-quick-actions-title">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" data-testid="button-view-participants">
                    <i className="fas fa-users mr-3"></i>View All Participants
                  </Button>
                  <Button variant="outline" className="w-full justify-start" data-testid="button-export-data">
                    <i className="fas fa-download mr-3"></i>Export Event Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start" data-testid="button-manage-judges">
                    <i className="fas fa-gavel mr-3"></i>Manage Judges
                  </Button>
                  <Button variant="outline" className="w-full justify-start" data-testid="button-view-submissions">
                    <i className="fas fa-upload mr-3"></i>View All Submissions
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-recent-activity">
              <CardHeader>
                <CardTitle data-testid="text-activity-title">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4" data-testid="activity-new-team">
                    <div className="bg-secondary bg-opacity-10 p-2 rounded-full">
                      <i className="fas fa-plus text-secondary text-sm"></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm" data-testid="text-activity-new-team">
                        New team "Data Wizards" registered
                      </p>
                      <p className="text-xs text-muted" data-testid="text-activity-time-new-team">5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4" data-testid="activity-submission">
                    <div className="bg-accent bg-opacity-10 p-2 rounded-full">
                      <i className="fas fa-upload text-accent text-sm"></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm" data-testid="text-activity-submission">
                        Team "AI Innovators" submitted their project
                      </p>
                      <p className="text-xs text-muted" data-testid="text-activity-time-submission">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4" data-testid="activity-judge-review">
                    <div className="bg-primary bg-opacity-10 p-2 rounded-full">
                      <i className="fas fa-check text-primary text-sm"></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm" data-testid="text-activity-judge-review">
                        Judge completed review of "EcoTrack" project
                      </p>
                      <p className="text-xs text-muted" data-testid="text-activity-time-judge-review">2 hours ago</p>
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
