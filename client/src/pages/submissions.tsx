import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { authService } from "@/lib/auth";
import { User } from "@shared/schema";

export default function Submissions() {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    githubUrl: "",
    demoUrl: "",
    videoUrl: "",
    documentUrl: ""
  });

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", formData);
  };

  return (
    <div className="min-h-screen bg-background" data-testid="submissions-page">
      <Navbar />
      <div className="flex">
        <Sidebar userRole={user.role} />
        
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8" data-testid="text-page-title">Project Submissions</h1>
            
            {/* Submission Timeline */}
            <Card className="mb-8" data-testid="card-submission-timeline">
              <CardHeader>
                <CardTitle data-testid="text-timeline-title">Submission Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4" data-testid="timeline-proposal">
                    <div className="bg-secondary bg-opacity-10 p-2 rounded-full">
                      <i className="fas fa-check text-secondary"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium" data-testid="text-proposal-title">Project Proposal</h3>
                      <p className="text-sm text-muted" data-testid="text-proposal-status">Submitted & Approved • Due: March 12, 2024</p>
                    </div>
                    <span className="bg-secondary bg-opacity-10 text-secondary px-3 py-1 rounded-full text-sm font-medium" data-testid="status-approved">
                      Approved
                    </span>
                  </div>
                  <div className="flex items-center space-x-4" data-testid="timeline-prototype">
                    <div className="bg-primary bg-opacity-10 p-2 rounded-full">
                      <i className="fas fa-circle-notch text-primary"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium" data-testid="text-prototype-title">Working Prototype</h3>
                      <p className="text-sm text-muted" data-testid="text-prototype-status">In Progress • Due: March 16, 2024</p>
                    </div>
                    <span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm font-medium" data-testid="status-current">
                      Current
                    </span>
                  </div>
                  <div className="flex items-center space-x-4" data-testid="timeline-final">
                    <div className="bg-muted bg-opacity-10 p-2 rounded-full">
                      <i className="fas fa-circle text-muted"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-muted" data-testid="text-final-title">Final Submission</h3>
                      <p className="text-sm text-muted" data-testid="text-final-status">Pending • Due: March 17, 2024</p>
                    </div>
                    <span className="bg-muted bg-opacity-10 text-muted px-3 py-1 rounded-full text-sm font-medium" data-testid="status-pending">
                      Pending
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Submissions */}
            <Card className="mb-8" data-testid="card-current-submissions">
              <CardHeader>
                <CardTitle data-testid="text-current-title">Current Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg" data-testid="submission-proposal">
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary bg-opacity-10 p-2 rounded">
                        <i className="fas fa-file-alt text-secondary"></i>
                      </div>
                      <div>
                        <h3 className="font-medium" data-testid="text-proposal-name">Project Proposal Document</h3>
                        <p className="text-sm text-muted" data-testid="text-proposal-date">Submitted March 10, 2024 • PDF, 2.3 MB</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-secondary bg-opacity-10 text-secondary px-2 py-1 rounded text-xs font-medium" data-testid="status-approved-proposal">
                        Approved
                      </span>
                      <Button variant="outline" size="sm" data-testid="button-view-proposal">
                        <i className="fas fa-eye mr-2"></i>View
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg" data-testid="submission-code">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary bg-opacity-10 p-2 rounded">
                        <i className="fab fa-github text-primary"></i>
                      </div>
                      <div>
                        <h3 className="font-medium" data-testid="text-code-name">Source Code Repository</h3>
                        <p className="text-sm text-muted" data-testid="text-code-date">Last updated 2 hours ago • GitHub</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-primary bg-opacity-10 text-primary px-2 py-1 rounded text-xs font-medium" data-testid="status-active-code">
                        Active
                      </span>
                      <Button variant="outline" size="sm" data-testid="button-view-code">
                        <i className="fas fa-external-link-alt mr-2"></i>Open
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New Submission Form */}
            <Card data-testid="card-new-submission">
              <CardHeader>
                <CardTitle data-testid="text-form-title">Submit Working Prototype</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-submission">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Project Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        placeholder="Enter your project title"
                        data-testid="input-title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="githubUrl">GitHub Repository</Label>
                      <Input
                        id="githubUrl"
                        value={formData.githubUrl}
                        onChange={(e) => handleInputChange("githubUrl", e.target.value)}
                        placeholder="https://github.com/username/repository"
                        data-testid="input-github"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Describe your project, its features, and technical implementation..."
                      rows={4}
                      data-testid="textarea-description"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="demoUrl">Live Demo URL</Label>
                      <Input
                        id="demoUrl"
                        value={formData.demoUrl}
                        onChange={(e) => handleInputChange("demoUrl", e.target.value)}
                        placeholder="https://your-demo-url.com"
                        data-testid="input-demo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="videoUrl">Demo Video URL</Label>
                      <Input
                        id="videoUrl"
                        value={formData.videoUrl}
                        onChange={(e) => handleInputChange("videoUrl", e.target.value)}
                        placeholder="https://youtube.com/watch?v=..."
                        data-testid="input-video"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="documentUrl">Additional Documentation</Label>
                    <Input
                      id="documentUrl"
                      value={formData.documentUrl}
                      onChange={(e) => handleInputChange("documentUrl", e.target.value)}
                      placeholder="Link to additional documentation or presentation"
                      data-testid="input-document"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button type="submit" data-testid="button-submit">
                      <i className="fas fa-upload mr-2"></i>Submit Prototype
                    </Button>
                    <Button type="button" variant="outline" data-testid="button-save-draft">
                      <i className="fas fa-save mr-2"></i>Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}