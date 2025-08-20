import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertEventSchema, insertTeamSchema, insertSubmissionSchema, insertScoreSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth routes
  app.post("/api/auth/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(userData.email);
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      
      const user = await storage.createUser(userData);
      const { password, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error) {
      res.status(400).json({ message: "Invalid user data" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await storage.getUserByEmail(email);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      const { password: _, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error) {
      res.status(400).json({ message: "Login failed" });
    }
  });

  // User routes
  app.get("/api/users/:id", async (req, res) => {
    const user = await storage.getUser(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  });

  // Event routes
  app.get("/api/events", async (req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  app.get("/api/events/:id", async (req, res) => {
    const event = await storage.getEvent(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  });

  app.post("/api/events", async (req, res) => {
    try {
      const eventData = insertEventSchema.parse(req.body);
      const { organizerId } = req.body;
      
      if (!organizerId) {
        return res.status(400).json({ message: "Organizer ID required" });
      }
      
      const event = await storage.createEvent({ ...eventData, organizerId });
      res.json(event);
    } catch (error) {
      res.status(400).json({ message: "Invalid event data" });
    }
  });

  // Team routes
  app.get("/api/events/:eventId/teams", async (req, res) => {
    const teams = await storage.getTeamsByEvent(req.params.eventId);
    res.json(teams);
  });

  app.get("/api/teams/:id", async (req, res) => {
    const team = await storage.getTeam(req.params.id);
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }
    res.json(team);
  });

  app.post("/api/teams", async (req, res) => {
    try {
      const teamData = insertTeamSchema.parse(req.body);
      const { leaderId } = req.body;
      
      if (!leaderId) {
        return res.status(400).json({ message: "Leader ID required" });
      }
      
      const team = await storage.createTeam({ ...teamData, leaderId });
      res.json(team);
    } catch (error) {
      res.status(400).json({ message: "Invalid team data" });
    }
  });

  app.post("/api/teams/:id/members", async (req, res) => {
    try {
      const { userId } = req.body;
      await storage.addTeamMember(req.params.id, userId);
      res.json({ message: "Member added successfully" });
    } catch (error) {
      res.status(400).json({ message: "Failed to add member" });
    }
  });

  app.delete("/api/teams/:id/members/:userId", async (req, res) => {
    try {
      await storage.removeTeamMember(req.params.id, req.params.userId);
      res.json({ message: "Member removed successfully" });
    } catch (error) {
      res.status(400).json({ message: "Failed to remove member" });
    }
  });

  // Submission routes
  app.get("/api/events/:eventId/submissions", async (req, res) => {
    const submissions = await storage.getSubmissionsByEvent(req.params.eventId);
    res.json(submissions);
  });

  app.get("/api/teams/:teamId/submission", async (req, res) => {
    const submission = await storage.getSubmissionByTeam(req.params.teamId);
    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }
    res.json(submission);
  });

  app.post("/api/submissions", async (req, res) => {
    try {
      const submissionData = insertSubmissionSchema.parse(req.body);
      const submission = await storage.createSubmission(submissionData);
      res.json(submission);
    } catch (error) {
      res.status(400).json({ message: "Invalid submission data" });
    }
  });

  app.put("/api/submissions/:id", async (req, res) => {
    try {
      const submissionData = insertSubmissionSchema.partial().parse(req.body);
      const submission = await storage.updateSubmission(req.params.id, submissionData);
      if (!submission) {
        return res.status(404).json({ message: "Submission not found" });
      }
      res.json(submission);
    } catch (error) {
      res.status(400).json({ message: "Invalid submission data" });
    }
  });

  // Score routes
  app.get("/api/submissions/:submissionId/scores", async (req, res) => {
    const scores = await storage.getScoresBySubmission(req.params.submissionId);
    res.json(scores);
  });

  app.get("/api/judges/:judgeId/scores", async (req, res) => {
    const scores = await storage.getScoresByJudge(req.params.judgeId);
    res.json(scores);
  });

  app.post("/api/scores", async (req, res) => {
    try {
      const scoreData = insertScoreSchema.parse(req.body);
      const { judgeId } = req.body;
      
      if (!judgeId) {
        return res.status(400).json({ message: "Judge ID required" });
      }
      
      const score = await storage.createScore({ ...scoreData, judgeId });
      res.json(score);
    } catch (error) {
      res.status(400).json({ message: "Invalid score data" });
    }
  });

  app.put("/api/scores/:id", async (req, res) => {
    try {
      const scoreData = insertScoreSchema.partial().parse(req.body);
      const score = await storage.updateScore(req.params.id, scoreData);
      if (!score) {
        return res.status(404).json({ message: "Score not found" });
      }
      res.json(score);
    } catch (error) {
      res.status(400).json({ message: "Invalid score data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
