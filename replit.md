# HackFlow - AI-Powered Hackathon Platform

## Overview

HackFlow is an advanced, AI-powered web platform designed for hosting modern hackathons and innovation events. The platform revolutionizes traditional hackathon management by leveraging artificial intelligence across all core functions. It serves three main user roles: participants (who benefit from AI team formation and intelligent project guidance), judges (who use AI-assisted evaluation tools), and organizers (who access predictive analytics and automated management systems). The application provides cutting-edge features including AI-driven team formation, multi-round submission tracking, intelligent judging systems, real-time communication with smart moderation, advanced analytics with predictive modeling, and seamless third-party integrations.

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
- **Enhanced Schema**: Extended to support AI features with new entities (messages, aiInsights, teamFormationRequests, integrationEvents)
- **AI Team Formation**: Advanced team formation system with skill matching, compatibility scoring, and preference algorithms
- **Multi-Round Submissions**: Progressive submission tracking across multiple evaluation rounds with AI-powered analysis
- **Intelligent Scoring**: Dynamic criteria-based scoring system with AI assistance and bias detection
- **Real-Time Communication**: Message system with sentiment analysis, smart moderation, and automated translation support
- **Integration Support**: Comprehensive webhook and API integration system for external tool connectivity

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

## Recent Changes (Latest Session)

### Major Platform Transformation - AI-Powered Features
- **Complete Schema Redesign**: Added comprehensive AI-focused database schema including team formation requests, AI insights, real-time messaging, and integration events
- **Landing Page Overhaul**: Updated to showcase AI-powered capabilities with enhanced feature descriptions emphasizing machine learning, predictive analytics, and intelligent automation
- **Dashboard Enhancement**: Transformed participant dashboard to display AI metrics including team compatibility scores, AI analysis ratings, and real-time AI assistant activity
- **Feature Focus Shift**: Platform now emphasizes AI-driven team formation, multi-round intelligent submissions, smart communication systems, advanced analytics with ML insights, and seamless integrations

### AI-Powered Core Features
1. **AI Team Formation**: Machine learning algorithms for optimal team composition based on skills, experience, and compatibility
2. **Multi-Round Submissions**: Progressive submission system with AI-powered code analysis and quality feedback
3. **Intelligent Judging**: AI-assisted evaluation with bias detection, consistency scoring, and automated rubric generation
4. **Real-Time Communication**: Smart messaging with AI moderators, automated translations, and sentiment analysis
5. **Advanced Analytics**: Predictive modeling for participation trends, performance forecasting, and automated insights
6. **Seamless Integrations**: AI-powered integration hub with smart webhook processing and unified workflow management