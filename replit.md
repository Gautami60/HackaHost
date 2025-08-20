# HackFlow - Hackathon Management Platform

## Overview

HackFlow is a modern, scalable web platform designed for hosting hackathons and innovation events. The platform serves three main user roles: participants (who join teams and submit projects), judges (who evaluate submissions), and organizers (who manage events). The application provides comprehensive features including user registration, team management, project submission handling, multi-round evaluation systems, and role-based dashboards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern component development
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **Routing**: Wouter for lightweight client-side routing with role-based route protection
- **State Management**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API development
- **Language**: TypeScript throughout the entire stack for consistency and type safety
- **Database ORM**: Drizzle ORM for type-safe database operations and schema management
- **Storage**: In-memory storage implementation with interface abstraction for easy database migration
- **Authentication**: Simple session-based authentication with role-based access control

### Database Design
- **Schema Structure**: Five main entities (users, events, teams, submissions, scores)
- **User Roles**: Participant, organizer, and judge roles with appropriate permissions
- **Team Management**: Flexible team structure with leader designation and member arrays
- **Submission System**: Support for multiple artifact types (GitHub links, demos, videos, documents)
- **Scoring System**: Multi-criteria evaluation with judge-specific scoring

### Component Architecture
- **UI Components**: Comprehensive shadcn/ui component library including forms, dialogs, cards, and navigation
- **Layout Components**: Responsive navbar and role-specific sidebar navigation
- **Page Components**: Dedicated dashboard views for each user role
- **Shared Components**: Reusable components with consistent styling and behavior

### API Design
- **RESTful Endpoints**: Clean API structure with logical resource grouping
- **Authentication Routes**: Registration and login endpoints with password handling
- **Resource Routes**: CRUD operations for users, events, teams, submissions, and scores
- **Error Handling**: Centralized error handling with appropriate HTTP status codes

### Development Workflow
- **Hot Reloading**: Vite development server with instant updates
- **Type Checking**: Full TypeScript integration across client and server
- **Path Aliases**: Organized import structure with @ prefixes for clean code organization
- **Build Process**: Separate client and server build processes with optimized output

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database adapter for serverless environments
- **drizzle-orm** & **drizzle-kit**: Type-safe ORM and migration tools
- **express**: Web application framework for Node.js
- **react** & **react-dom**: Frontend framework and rendering
- **@tanstack/react-query**: Server state management and data fetching

### UI and Styling Dependencies
- **@radix-ui/***: Comprehensive set of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx** & **tailwind-merge**: Utility functions for conditional and merged class names

### Development and Build Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for server code
- **wouter**: Lightweight routing library

### Form and Validation Dependencies
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for form handling
- **zod**: Schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### Additional UI Dependencies
- **cmdk**: Command palette component
- **date-fns**: Date utility functions
- **embla-carousel-react**: Carousel component
- **lucide-react**: Icon library
- **nanoid**: Unique ID generation
- **vaul**: Drawer component library