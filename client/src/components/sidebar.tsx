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
    <aside className="w-64 bg-white/80 backdrop-blur-sm border-r border-white/20 min-h-screen custom-scrollbar" data-testid="sidebar">
      <nav className="p-6">
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></div>
            <span className="text-xs font-medium text-green-600">Live Event</span>
          </div>
          <h2 className="text-sm font-semibold text-muted">Navigation</h2>
        </div>
        
        <div className="space-y-1">
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <div
                className={cn(
                  "group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 hover-lift",
                  location === link.href
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-muted hover:text-foreground hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-100"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                  location === link.href 
                    ? "bg-white/20 text-white" 
                    : "bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white"
                )}>
                  <i className={`${link.icon} text-sm`}></i>
                </div>
                <span className={cn(
                  "font-medium transition-all duration-300",
                  location === link.href ? "text-white" : "group-hover:text-foreground"
                )}>
                  {link.label}
                </span>
                {location === link.href && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
                )}
              </div>
            </Link>
          ))}
        </div>
        
        {userRole === "participant" && (
          <div className="mt-8 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-blue-100 animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-white text-xs"></i>
              </div>
              <h3 className="text-sm font-semibold text-gradient" data-testid="text-event-progress">
                Event Progress
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted">Registration</span>
                </div>
                <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full" data-testid="status-registration">
                  ✓ Complete
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted">Team Formation</span>
                </div>
                <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full" data-testid="status-team-formation">
                  ✓ Complete
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-slow"></div>
                  <span className="text-sm text-muted">Development</span>
                </div>
                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full" data-testid="status-development">
                  🔄 In Progress
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-muted">Submission</span>
                </div>
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full" data-testid="status-submission">
                  ⏳ Pending
                </span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-muted mb-2">
                <span>Overall Progress</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="progress-bar h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </aside>
  );
}
