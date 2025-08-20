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
  createdAt: timestamp("created_at").defaultNow(),
});

export const teams = pgTable("teams", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  eventId: varchar("event_id").notNull(),
  leaderId: varchar("leader_id").notNull(),
  members: jsonb("members").$type<string[]>().default([]),
  createdAt: timestamp("created_at").defaultNow(),
});

export const submissions = pgTable("submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  teamId: varchar("team_id").notNull(),
  eventId: varchar("event_id").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  githubUrl: text("github_url"),
  demoUrl: text("demo_url"),
  videoUrl: text("video_url"),
  documentUrl: text("document_url"),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export const scores = pgTable("scores", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  submissionId: varchar("submission_id").notNull(),
  judgeId: varchar("judge_id").notNull(),
  innovation: integer("innovation").notNull(),
  technical: integer("technical").notNull(),
  impact: integer("impact").notNull(),
  presentation: integer("presentation").notNull(),
  feedback: text("feedback"),
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
  innovation: true,
  technical: true,
  impact: true,
  presentation: true,
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
