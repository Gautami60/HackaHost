import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { authService } from "@/lib/auth";
import { User } from "@shared/schema";

export default function Schedule() {
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

  const scheduleEvents = [
    {
      id: 1,
      time: "March 15, 9:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address and hackathon kickoff",
      type: "ceremony",
      status: "completed"
    },
    {
      id: 2,
      time: "March 15, 10:00 AM",
      title: "Team Formation Workshop",
      description: "AI-powered team matching session",
      type: "workshop",
      status: "completed"
    },
    {
      id: 3,
      time: "March 15, 2:00 PM",
      title: "Technical Workshop: API Integration",
      description: "Learn how to integrate external APIs effectively",
      type: "workshop",
      status: "completed"
    },
    {
      id: 4,
      time: "March 16, 10:00 AM",
      title: "Mentor Check-in Session",
      description: "One-on-one sessions with industry mentors",
      type: "mentoring",
      status: "current"
    },
    {
      id: 5,
      time: "March 16, 6:00 PM",
      title: "Progress Showcase",
      description: "Present your current progress to peers",
      type: "presentation",
      status: "upcoming"
    },
    {
      id: 6,
      time: "March 17, 10:00 AM",
      title: "Final Presentations",
      description: "Present your completed projects to judges",
      type: "presentation",
      status: "upcoming"
    },
    {
      id: 7,
      time: "March 17, 4:00 PM",
      title: "Awards Ceremony",
      description: "Announcement of winners and closing ceremony",
      type: "ceremony",
      status: "upcoming"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-secondary bg-opacity-10 text-secondary";
      case "current": return "bg-primary bg-opacity-10 text-primary";
      case "upcoming": return "bg-muted bg-opacity-10 text-muted";
      default: return "bg-muted bg-opacity-10 text-muted";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "ceremony": return "fas fa-flag";
      case "workshop": return "fas fa-tools";
      case "mentoring": return "fas fa-user-tie";
      case "presentation": return "fas fa-presentation";
      default: return "fas fa-calendar";
    }
  };

  return (
    <div className="min-h-screen bg-background" data-testid="schedule-page">
      <Navbar />
      <div className="flex">
        <Sidebar userRole={user.role} />
        
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8" data-testid="text-page-title">Event Schedule</h1>
            
            {/* Current Event */}
            <Card className="mb-8 border-primary border-opacity-50" data-testid="card-current-event">
              <CardHeader>
                <CardTitle className="text-primary" data-testid="text-current-title">Current Event</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                    <i className="fas fa-user-tie text-primary text-xl"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold" data-testid="text-current-event-title">Mentor Check-in Session</h3>
                    <p className="text-muted" data-testid="text-current-event-time">March 16, 10:00 AM - 12:00 PM</p>
                    <p className="text-sm text-muted" data-testid="text-current-event-description">
                      One-on-one sessions with industry mentors to get feedback on your project progress
                    </p>
                  </div>
                  <Button data-testid="button-join-current">
                    <i className="fas fa-video mr-2"></i>Join Session
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Full Schedule */}
            <Card data-testid="card-full-schedule">
              <CardHeader>
                <CardTitle data-testid="text-schedule-title">Complete Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduleEvents.map((event) => (
                    <div 
                      key={event.id} 
                      className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-background transition-colors"
                      data-testid={`event-${event.id}`}
                    >
                      <div className="bg-background p-3 rounded-lg border border-border">
                        <i className={`${getTypeIcon(event.type)} text-lg`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold" data-testid={`text-event-title-${event.id}`}>{event.title}</h3>
                          <span 
                            className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(event.status)}`}
                            data-testid={`status-${event.status}-${event.id}`}
                          >
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-sm text-muted mb-1" data-testid={`text-event-time-${event.id}`}>{event.time}</p>
                        <p className="text-sm text-muted" data-testid={`text-event-description-${event.id}`}>{event.description}</p>
                      </div>
                      {event.status === "current" && (
                        <Button size="sm" data-testid={`button-join-${event.id}`}>
                          <i className="fas fa-play mr-2"></i>Join
                        </Button>
                      )}
                      {event.status === "upcoming" && (
                        <Button variant="outline" size="sm" data-testid={`button-remind-${event.id}`}>
                          <i className="fas fa-bell mr-2"></i>Remind Me
                        </Button>
                      )}
                      {event.status === "completed" && (
                        <Button variant="ghost" size="sm" data-testid={`button-view-${event.id}`}>
                          <i className="fas fa-eye mr-2"></i>View
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card data-testid="card-quick-actions">
                <CardHeader>
                  <CardTitle data-testid="text-actions-title">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" data-testid="button-calendar-sync">
                      <i className="fas fa-calendar-plus mr-3"></i>Add to Calendar
                    </Button>
                    <Button variant="outline" className="w-full justify-start" data-testid="button-notifications">
                      <i className="fas fa-bell mr-3"></i>Setup Notifications
                    </Button>
                    <Button variant="outline" className="w-full justify-start" data-testid="button-timezone">
                      <i className="fas fa-clock mr-3"></i>Change Timezone
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="card-event-info">
                <CardHeader>
                  <CardTitle data-testid="text-info-title">Event Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Duration</span>
                      <span data-testid="text-duration">48 hours</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Time Remaining</span>
                      <span className="text-primary font-medium" data-testid="text-time-remaining">24h 32m</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Total Events</span>
                      <span data-testid="text-total-events">7 scheduled</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Location</span>
                      <span data-testid="text-location">Virtual & On-site</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}