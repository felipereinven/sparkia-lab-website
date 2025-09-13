# Overview

This is a modern full-stack web application for "Sparkia Lab," a digital marketing agency that specializes in helping entrepreneurs and small businesses build authentic, automated digital presence using AI. The application serves as the agency's landing page and lead generation platform, featuring a comprehensive contact form for client acquisition.

The tech stack includes React with TypeScript for the frontend, Express.js for the backend API, and PostgreSQL with Drizzle ORM for data persistence. The application uses modern UI components from shadcn/ui and Radix UI, styled with Tailwind CSS, and enhanced with Framer Motion animations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using **React 18 with TypeScript** in a single-page application (SPA) architecture. The application uses **Vite** as the build tool and development server, providing fast hot module replacement and optimized production builds.

**Component Structure**: The UI follows a modular component architecture with reusable components stored in `client/src/components/`. The application uses **shadcn/ui** components built on top of **Radix UI primitives**, providing accessible and customizable UI elements.

**Styling**: **Tailwind CSS** is used for styling with a custom design system defined in the configuration. The application includes custom CSS variables for theming and uses **Framer Motion** for smooth animations and transitions.

**Routing**: The application uses **wouter** for lightweight client-side routing, though currently implements only a simple home page and 404 structure.

**State Management**: The application uses **React Query (TanStack Query)** for server state management, handling API requests, caching, and synchronization with the backend.

**Internationalization (i18n)**: The application implements a comprehensive multi-language support system using React Context. The system supports Spanish and English, with English as the default language. Key features include:
- **LanguageContext**: Custom React Context providing language state, switching functionality, and translation function `t()`
- **Translation Files**: JSON-based translation files (`client/src/translations/en.json` and `client/src/translations/es.json`) containing all UI text
- **LanguageSwitch Component**: Interactive language switcher available in navigation header and footer
- **Comprehensive Coverage**: All major components are fully internationalized including navigation, hero section, services grid, process section, statistics sections, problem-solution grid, CTA section, and contact form
- **Localized Validation**: Form validation messages are dynamically localized using the current language context
- **Persistent Selection**: User language preference is stored in localStorage and maintained across browser sessions

## Backend Architecture

The backend follows a **RESTful API** architecture built with **Express.js** and TypeScript. The server implements a clean separation of concerns with dedicated modules for routing, storage, and utilities.

**API Design**: RESTful endpoints are defined in `server/routes.ts`, currently implementing contact form submission (`POST /api/contacts`) and contact retrieval (`GET /api/contacts`) endpoints.

**Data Layer**: The application uses an **adapter pattern** for data storage with an `IStorage` interface. Currently implements an in-memory storage solution (`MemStorage`) for development, designed to be easily replaceable with a database-backed implementation.

**Error Handling**: Centralized error handling middleware processes validation errors (Zod) and server errors, returning consistent JSON responses.

## Data Storage Solutions

**Database**: The application is configured to use **PostgreSQL** as the primary database, with **Drizzle ORM** for type-safe database operations and migrations.

**Schema Design**: Database schemas are defined in `shared/schema.ts` using Drizzle's schema definition syntax. The current schema includes:
- `users` table for authentication (prepared but not currently used)
- `contacts` table for storing lead information from the contact form

**Validation**: **Zod** schemas provide runtime validation for API inputs, ensuring data integrity and type safety across the full stack.

## Development and Deployment

**Build System**: The application uses **Vite** for frontend bundling and **esbuild** for backend compilation, providing fast development builds and optimized production assets.

**Development Setup**: The development environment integrates frontend and backend servers, with the Express server serving the Vite development middleware in development mode and static assets in production.

**Environment Configuration**: The application supports different configurations for development and production environments, with proper TypeScript path mapping and asset resolution.

# External Dependencies

## UI and Design Libraries

- **@radix-ui/***: Complete suite of accessible UI primitives for building the component library
- **tailwindcss**: Utility-first CSS framework for styling
- **framer-motion**: Animation library for smooth transitions and interactions
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Icon library providing consistent iconography

## Form and Validation

- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration layer between React Hook Form and validation libraries
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod for schema validation

## Data Management

- **@tanstack/react-query**: Server state management and data fetching library
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: PostgreSQL driver optimized for serverless environments

## Development Tools

- **vite**: Fast build tool and development server
- **typescript**: Static typing for enhanced developer experience
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Development tooling for Replit integration

## Routing and Navigation

- **wouter**: Lightweight routing library for React applications

## Utilities

- **date-fns**: Date manipulation and formatting utilities
- **clsx**: Utility for constructing className strings conditionally
- **nanoid**: Compact URL-safe unique string ID generator