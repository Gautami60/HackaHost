import { type User, type InsertUser, type Event, type InsertEvent, type Team, type InsertTeam, type Submission, type InsertSubmission, type Score, type InsertScore } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Event operations
  getEvent(id: string): Promise<Event | undefined>;
  getEvents(): Promise<Event[]>;
  getEventsByOrganizer(organizerId: string): Promise<Event[]>;
  createEvent(event: InsertEvent & { organizerId: string }): Promise<Event>;
  
  // Team operations
  getTeam(id: string): Promise<Team | undefined>;
  getTeamsByEvent(eventId: string): Promise<Team[]>;
  getTeamByUserAndEvent(userId: string, eventId: string): Promise<Team | undefined>;
  createTeam(team: InsertTeam & { leaderId: string }): Promise<Team>;
  addTeamMember(teamId: string, userId: string): Promise<void>;
  removeTeamMember(teamId: string, userId: string): Promise<void>;
  
  // Submission operations
  getSubmission(id: string): Promise<Submission | undefined>;
  getSubmissionsByEvent(eventId: string): Promise<Submission[]>;
  getSubmissionByTeam(teamId: string): Promise<Submission | undefined>;
  createSubmission(submission: InsertSubmission): Promise<Submission>;
  updateSubmission(id: string, submission: Partial<InsertSubmission>): Promise<Submission | undefined>;
  
  // Score operations
  getScore(submissionId: string, judgeId: string): Promise<Score | undefined>;
  getScoresBySubmission(submissionId: string): Promise<Score[]>;
  getScoresByJudge(judgeId: string): Promise<Score[]>;
  createScore(score: InsertScore & { judgeId: string }): Promise<Score>;
  updateScore(id: string, score: Partial<InsertScore>): Promise<Score | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private events: Map<string, Event>;
  private teams: Map<string, Team>;
  private submissions: Map<string, Submission>;
  private scores: Map<string, Score>;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.teams = new Map();
    this.submissions = new Map();
    this.scores = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample organizer
    const organizer: User = {
      id: "org-1",
      username: "admin",
      email: "admin@hackflow.com",
      password: "$2b$10$hash", // In real app, this would be properly hashed
      role: "organizer",
      fullName: "Admin User",
      skills: [],
      createdAt: new Date(),
    };
    this.users.set(organizer.id, organizer);

    // Sample judge
    const judge: User = {
      id: "judge-1",
      username: "judge",
      email: "judge@hackflow.com",
      password: "$2b$10$hash",
      role: "judge",
      fullName: "Dr. James Wilson",
      skills: [],
      createdAt: new Date(),
    };
    this.users.set(judge.id, judge);

    // Sample event
    const event: Event = {
      id: "event-1",
      title: "Spring 2024 Innovation Challenge",
      description: "A hackathon focused on innovative solutions for environmental challenges",
      organizerId: organizer.id,
      startDate: new Date("2024-03-15"),
      endDate: new Date("2024-03-17"),
      registrationDeadline: new Date("2024-03-10"),
      maxTeamSize: 4,
      status: "active",
      createdAt: new Date(),
    };
    this.events.set(event.id, event);
  }

  // User operations
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      role: insertUser.role || "participant",
      skills: insertUser.skills || null,
      createdAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }

  // Event operations
  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEventsByOrganizer(organizerId: string): Promise<Event[]> {
    return Array.from(this.events.values()).filter(event => event.organizerId === organizerId);
  }

  async createEvent(eventData: InsertEvent & { organizerId: string }): Promise<Event> {
    const id = randomUUID();
    const event: Event = {
      ...eventData,
      id,
      maxTeamSize: eventData.maxTeamSize || 4,
      status: "upcoming",
      createdAt: new Date(),
    };
    this.events.set(id, event);
    return event;
  }

  // Team operations
  async getTeam(id: string): Promise<Team | undefined> {
    return this.teams.get(id);
  }

  async getTeamsByEvent(eventId: string): Promise<Team[]> {
    return Array.from(this.teams.values()).filter(team => team.eventId === eventId);
  }

  async getTeamByUserAndEvent(userId: string, eventId: string): Promise<Team | undefined> {
    return Array.from(this.teams.values()).find(team => 
      team.eventId === eventId && (team.leaderId === userId || (team.members && team.members.includes(userId)))
    );
  }

  async createTeam(teamData: InsertTeam & { leaderId: string }): Promise<Team> {
    const id = randomUUID();
    const team: Team = {
      ...teamData,
      id,
      members: [teamData.leaderId],
      createdAt: new Date(),
    };
    this.teams.set(id, team);
    return team;
  }

  async addTeamMember(teamId: string, userId: string): Promise<void> {
    const team = this.teams.get(teamId);
    if (team && team.members && !team.members.includes(userId)) {
      team.members.push(userId);
      this.teams.set(teamId, team);
    }
  }

  async removeTeamMember(teamId: string, userId: string): Promise<void> {
    const team = this.teams.get(teamId);
    if (team && team.members) {
      team.members = team.members.filter(id => id !== userId);
      this.teams.set(teamId, team);
    }
  }

  // Submission operations
  async getSubmission(id: string): Promise<Submission | undefined> {
    return this.submissions.get(id);
  }

  async getSubmissionsByEvent(eventId: string): Promise<Submission[]> {
    return Array.from(this.submissions.values()).filter(submission => submission.eventId === eventId);
  }

  async getSubmissionByTeam(teamId: string): Promise<Submission | undefined> {
    return Array.from(this.submissions.values()).find(submission => submission.teamId === teamId);
  }

  async createSubmission(insertSubmission: InsertSubmission): Promise<Submission> {
    const id = randomUUID();
    const submission: Submission = {
      ...insertSubmission,
      id,
      description: insertSubmission.description || null,
      githubUrl: insertSubmission.githubUrl || null,
      demoUrl: insertSubmission.demoUrl || null,
      videoUrl: insertSubmission.videoUrl || null,
      documentUrl: insertSubmission.documentUrl || null,
      submittedAt: new Date(),
    };
    this.submissions.set(id, submission);
    return submission;
  }

  async updateSubmission(id: string, updateData: Partial<InsertSubmission>): Promise<Submission | undefined> {
    const submission = this.submissions.get(id);
    if (submission) {
      const updated = { ...submission, ...updateData };
      this.submissions.set(id, updated);
      return updated;
    }
    return undefined;
  }

  // Score operations
  async getScore(submissionId: string, judgeId: string): Promise<Score | undefined> {
    return Array.from(this.scores.values()).find(score => 
      score.submissionId === submissionId && score.judgeId === judgeId
    );
  }

  async getScoresBySubmission(submissionId: string): Promise<Score[]> {
    return Array.from(this.scores.values()).filter(score => score.submissionId === submissionId);
  }

  async getScoresByJudge(judgeId: string): Promise<Score[]> {
    return Array.from(this.scores.values()).filter(score => score.judgeId === judgeId);
  }

  async createScore(scoreData: InsertScore & { judgeId: string }): Promise<Score> {
    const id = randomUUID();
    const score: Score = {
      ...scoreData,
      id,
      feedback: scoreData.feedback || null,
      createdAt: new Date(),
    };
    this.scores.set(id, score);
    return score;
  }

  async updateScore(id: string, updateData: Partial<InsertScore>): Promise<Score | undefined> {
    const score = this.scores.get(id);
    if (score) {
      const updated = { ...score, ...updateData };
      this.scores.set(id, updated);
      return updated;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
