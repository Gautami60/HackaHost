import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { authService } from "@/lib/auth";
import { User } from "@shared/schema";

export default function Messages() {
  const [user, setUser] = useState<User | null>(null);
  const [selectedChannel, setSelectedChannel] = useState("general");
  const [newMessage, setNewMessage] = useState("");

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

  const channels = [
    { id: "general", name: "General", unread: 3, icon: "fas fa-hashtag" },
    { id: "team", name: "AI Innovators", unread: 1, icon: "fas fa-users" },
    { id: "mentors", name: "Mentors", unread: 0, icon: "fas fa-user-tie" },
    { id: "announcements", name: "Announcements", unread: 2, icon: "fas fa-bullhorn" },
    { id: "help", name: "Help & Support", unread: 0, icon: "fas fa-question-circle" }
  ];

  const messages = [
    {
      id: 1,
      user: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32",
      message: "Great progress on the frontend everyone! The UI is looking really clean.",
      time: "2 hours ago",
      isOwn: false
    },
    {
      id: 2,
      user: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32",
      message: "Thanks! I've uploaded the latest design assets to our shared folder. Let me know if you need any adjustments.",
      time: "2 hours ago",
      isOwn: false
    },
    {
      id: 3,
      user: "You",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32",
      message: "Perfect! I'll integrate them into the prototype today. Mike, how's the API integration coming along?",
      time: "1 hour ago",
      isOwn: true
    },
    {
      id: 4,
      user: "Mike Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32",
      message: "Almost done! The main endpoints are working. Just need to add authentication and we'll be ready for testing.",
      time: "45 minutes ago",
      isOwn: false
    },
    {
      id: 5,
      user: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32",
      message: "Excellent! I've finished the data analysis model. It's showing some really promising results that we can showcase.",
      time: "30 minutes ago",
      isOwn: false
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background" data-testid="messages-page">
      <Navbar />
      <div className="flex">
        <Sidebar userRole={user.role} />
        
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8" data-testid="text-page-title">Messages</h1>
            
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Channels Sidebar */}
              <Card className="lg:col-span-1" data-testid="card-channels">
                <CardHeader>
                  <CardTitle data-testid="text-channels-title">Channels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {channels.map((channel) => (
                      <button
                        key={channel.id}
                        onClick={() => setSelectedChannel(channel.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          selectedChannel === channel.id 
                            ? "bg-primary bg-opacity-10 text-primary" 
                            : "hover:bg-background"
                        }`}
                        data-testid={`channel-${channel.id}`}
                      >
                        <div className="flex items-center space-x-3">
                          <i className={`${channel.icon} text-sm`}></i>
                          <span className="text-sm font-medium">{channel.name}</span>
                        </div>
                        {channel.unread > 0 && (
                          <span className="bg-primary text-white text-xs px-2 py-1 rounded-full" data-testid={`unread-${channel.id}`}>
                            {channel.unread}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Chat Area */}
              <Card className="lg:col-span-3" data-testid="card-chat">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle data-testid="text-chat-title">
                      # {channels.find(c => c.id === selectedChannel)?.name}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" data-testid="button-video-call">
                        <i className="fas fa-video mr-2"></i>Video Call
                      </Button>
                      <Button variant="outline" size="sm" data-testid="button-audio-call">
                        <i className="fas fa-phone mr-2"></i>Audio Call
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Messages */}
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto" data-testid="messages-container">
                    {messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`flex space-x-3 ${message.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}
                        data-testid={`message-${message.id}`}
                      >
                        <img 
                          src={message.avatar} 
                          alt={`${message.user} avatar`} 
                          className="w-8 h-8 rounded-full"
                        />
                        <div className={`flex-1 ${message.isOwn ? "text-right" : ""}`}>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-medium" data-testid={`message-user-${message.id}`}>
                              {message.user}
                            </span>
                            <span className="text-xs text-muted" data-testid={`message-time-${message.id}`}>
                              {message.time}
                            </span>
                          </div>
                          <div 
                            className={`p-3 rounded-lg ${
                              message.isOwn 
                                ? "bg-primary text-white ml-8" 
                                : "bg-background mr-8"
                            }`}
                            data-testid={`message-content-${message.id}`}
                          >
                            <p className="text-sm">{message.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="flex space-x-2" data-testid="message-input-area">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1"
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                      data-testid="input-message"
                    />
                    <Button onClick={handleSendMessage} data-testid="button-send">
                      <i className="fas fa-paper-plane"></i>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Assistant */}
            <Card className="mt-6" data-testid="card-ai-assistant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2" data-testid="text-ai-title">
                  <i className="fas fa-robot text-accent"></i>
                  <span>AI Assistant</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-accent bg-opacity-5 border border-accent border-opacity-20 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3" data-testid="text-ai-suggestion">
                    <strong>💡 Suggestion:</strong> Based on your team's recent activity, consider scheduling a quick sync meeting to align on the final implementation details before the submission deadline.
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" data-testid="button-schedule-meeting">
                      Schedule Meeting
                    </Button>
                    <Button size="sm" variant="outline" data-testid="button-ask-ai">
                      Ask AI Assistant
                    </Button>
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