import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

interface SidebarProps {
  userRole: string;
}

export function Sidebar({ userRole }: SidebarProps) {
  const [location] = useLocation();

  const participantLinks = [
    { href: "/dashboard", icon: "fas fa-home", label: "Dashboard" },
    { href: "/team", icon: "fas fa-users", label: "My Team" },
    { href: "/submissions", icon: "fas fa-upload", label: "Submissions" },
    { href: "/schedule", icon: "fas fa-calendar", label: "Schedule" },
    { href: "/messages", icon: "fas fa-comments", label: "Messages" },
  ];

  const judgeLinks = [
    { href: "/judge-dashboard", icon: "fas fa-gavel", label: "Review Queue" },
    { href: "/judge-overview", icon: "fas fa-chart-bar", label: "Scoring Overview" },
    { href: "/judge-feedback", icon: "fas fa-comments", label: "Feedback Center" },
  ];

  const organizerLinks = [
    { href: "/organizer-dashboard", icon: "fas fa-tachometer-alt", label: "Dashboard" },
    { href: "/events", icon: "fas fa-calendar", label: "Events" },
    { href: "/participants", icon: "fas fa-users", label: "Participants" },
    { href: "/analytics", icon: "fas fa-chart-line", label: "Analytics" },
  ];

  const links = userRole === "judge" ? judgeLinks : userRole === "organizer" ? organizerLinks : participantLinks;

  return (
    <aside className="w-64 bg-surface border-r border-border min-h-screen" data-testid="sidebar">
      <nav className="p-6">
        <div className="space-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <div
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                  location === link.href
                    ? "bg-primary bg-opacity-10 text-primary"
                    : "text-muted hover:text-foreground hover:bg-gray-50"
                )}
              >
                <i className={`${link.icon} text-sm`}></i>
                <span className={location === link.href ? "font-medium" : ""}>{link.label}</span>
              </div>
            </Link>
          ))}
        </div>
        
        {userRole === "participant" && (
          <div className="mt-8">
            <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3" data-testid="text-event-progress">
              Event Progress
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Registration</span>
                <span className="text-secondary font-medium" data-testid="status-registration">Complete</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Team Formation</span>
                <span className="text-secondary font-medium" data-testid="status-team-formation">Complete</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Development</span>
                <span className="text-primary font-medium" data-testid="status-development">In Progress</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Submission</span>
                <span className="text-muted" data-testid="status-submission">Pending</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </aside>
  );
}
