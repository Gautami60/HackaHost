import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("participant"), // participant, organizer, judge
  fullName: text("full_name").notNull(),
  skills: jsonb("skills").$type<string[]>().default([]),
  createdAt: timestamp("created_at").defaultNow(),
});

export const events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  organizerId: varchar("organizer_id").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  registrationDeadline: timestamp("registration_deadline").notNull(),
  maxTeamSize: integer("max_team_size").default(4),
  status: text("status").default("upcoming"), // upcoming, active, ended
  submissionRounds: jsonb("submission_rounds").$type<{
    name: string;
    deadline: string;
    description: string;
    required: boolean;
  }[]>().default([]),
  judgingCriteria: jsonb("judging_criteria").$type<{
    name: string;
    weight: number;
    description: string;
  }[]>().default([]),
  aiSettings: jsonb("ai_settings").$type<{
    teamFormationEnabled: boolean;
    intelligentJudging: boolean;
    realTimeInsights: boolean;
  }>().default({ teamFormationEnabled: false, intelligentJudging: false, realTimeInsights: false }),
  integrations: jsonb("integrations").$type<{
    github: boolean;
    slack: boolean;
    discord: boolean;
    zoom: boolean;
  }>().default({ github: false, slack: false, discord: false, zoom: false }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const teams = pgTable("teams", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  eventId: varchar("event_id").notNull(),
  leaderId: varchar("leader_id").notNull(),
  members: jsonb("members").$type<string[]>().default([]),
  aiFormed: boolean("ai_formed").default(false),
  compatibilityScore: integer("compatibility_score").default(0),
  skillsMatrix: jsonb("skills_matrix").$type<{
    frontend: number;
    backend: number;
    design: number;
    ml: number;
    mobile: number;
  }>().default({ frontend: 0, backend: 0, design: 0, ml: 0, mobile: 0 }),
  communicationChannels: jsonb("communication_channels").$type<{
    slack?: string;
    discord?: string;
    github?: string;
  }>().default({}),
  createdAt: timestamp("created_at").defaultNow(),
});

export const submissions = pgTable("submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  teamId: varchar("team_id").notNull(),
  eventId: varchar("event_id").notNull(),
  roundName: text("round_name").notNull().default("final"),
  title: text("title").notNull(),
  description: text("description"),
  githubUrl: text("github_url"),
  demoUrl: text("demo_url"),
  videoUrl: text("video_url"),
  documentUrl: text("document_url"),
  tags: jsonb("tags").$type<string[]>().default([]),
  techStack: jsonb("tech_stack").$type<string[]>().default([]),
  aiAnalysis: jsonb("ai_analysis").$type<{
    innovationScore: number;
    technicalComplexity: number;
    marketPotential: number;
    codeQuality: number;
    insights: string[];
  }>(),
  status: text("status").default("draft"), // draft, submitted, reviewed
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export const scores = pgTable("scores", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  submissionId: varchar("submission_id").notNull(),
  judgeId: varchar("judge_id").notNull(),
  roundName: text("round_name").notNull().default("final"),
  criteriaScores: jsonb("criteria_scores").$type<{
    [key: string]: number;
  }>().default({}),
  aiAssistance: jsonb("ai_assistance").$type<{
    suggestions: string[];
    anomalyDetection: boolean;
    biasScore: number;
  }>(),
  feedback: text("feedback"),
  confidence: integer("confidence").default(100),
  timeSpent: integer("time_spent"), // in minutes
  createdAt: timestamp("created_at").defaultNow(),
});

// Real-time Communication
export const messages = pgTable("messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  teamId: varchar("team_id").notNull(),
  userId: varchar("user_id").notNull(),
  content: text("content").notNull(),
  type: text("type").default("text"), // text, file, announcement, ai_insight
  metadata: jsonb("metadata").$type<{
    fileName?: string;
    fileUrl?: string;
    aiGenerated?: boolean;
    priority?: string;
  }>().default({}),
  threadId: varchar("thread_id"),
  reactions: jsonb("reactions").$type<{
    [userId: string]: string;
  }>().default({}),
  createdAt: timestamp("created_at").defaultNow(),
});

// AI Insights and Analytics
export const aiInsights = pgTable("ai_insights", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  eventId: varchar("event_id").notNull(),
  teamId: varchar("team_id"),
  type: text("type").notNull(), // team_performance, submission_quality, event_trends
  insights: jsonb("insights").$type<{
    title: string;
    description: string;
    severity: string; // info, warning, critical, success
    actionable: boolean;
    suggestions: string[];
    data: any;
  }>().notNull(),
  confidence: integer("confidence").default(80),
  viewed: boolean("viewed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Team Formation Requests
export const teamFormationRequests = pgTable("team_formation_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  eventId: varchar("event_id").notNull(),
  userId: varchar("user_id").notNull(),
  preferences: jsonb("preferences").$type<{
    skills: string[];
    experience: string;
    interests: string[];
    workStyle: string;
    availability: string;
  }>().notNull(),
  aiRecommendations: jsonb("ai_recommendations").$type<{
    potentialTeammates: string[];
    compatibilityScores: { [userId: string]: number };
    reasoning: string[];
  }>(),
  status: text("status").default("pending"), // pending, matched, cancelled
  createdAt: timestamp("created_at").defaultNow(),
});

// Integration Events
export const integrationEvents = pgTable("integration_events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  eventId: varchar("event_id").notNull(),
  teamId: varchar("team_id"),
  platform: text("platform").notNull(), // github, slack, discord, zoom
  eventType: text("event_type").notNull(), // commit, message, meeting, deployment
  data: jsonb("data").$type<any>().notNull(),
  processed: boolean("processed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
  fullName: true,
  role: true,
  skills: true,
});

export const insertEventSchema = createInsertSchema(events).pick({
  title: true,
  description: true,
  startDate: true,
  endDate: true,
  registrationDeadline: true,
  maxTeamSize: true,
});

export const insertTeamSchema = createInsertSchema(teams).pick({
  name: true,
  eventId: true,
});

export const insertSubmissionSchema = createInsertSchema(submissions).pick({
  teamId: true,
  eventId: true,
  title: true,
  description: true,
  githubUrl: true,
  demoUrl: true,
  videoUrl: true,
  documentUrl: true,
});

export const insertScoreSchema = createInsertSchema(scores).pick({
  submissionId: true,
  judgeId: true,
  roundName: true,
  criteriaScores: true,
  feedback: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;
export type InsertTeam = z.infer<typeof insertTeamSchema>;
export type Team = typeof teams.$inferSelect;
export type InsertSubmission = z.infer<typeof insertSubmissionSchema>;
export type Submission = typeof submissions.$inferSelect;
export type InsertScore = z.infer<typeof insertScoreSchema>;
export type Score = typeof scores.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type AIInsight = typeof aiInsights.$inferSelect;
export type TeamFormationRequest = typeof teamFormationRequests.$inferSelect;
export type IntegrationEvent = typeof integrationEvents.$inferSelect;
