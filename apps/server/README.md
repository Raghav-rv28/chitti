# Express TypeScript Server

This is a Node.js Express server with TypeScript support and integration with a Prisma database.

## Features

- Express API endpoints for user management
- TypeScript support
- Database integration with Prisma
- Google Cloud Text-to-Speech integration
- Environment variable support with dotenv

## Setup

1. Make sure you have Node.js and pnpm installed
2. Install dependencies:
   ```
   pnpm install
   ```
3. Configure environment variables:
   Create a `.env` file in the server directory with:
   ```
   PORT=3001
   DATABASE_URL=your_database_url
   ```

## Available Scripts

- `pnpm run dev` - Starts the development server with hot-reload using nodemon and ts-node
- `pnpm run build` - Builds the TypeScript code to JavaScript
- `pnpm run start` - Runs the built JavaScript code
- `pnpm run lint` - Lints the code using ESLint

## API Endpoints

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `DELETE /api/users/:id` - Delete a user

## Database Integration

This server uses the `@repo/database` package for database access, which is implemented with Prisma. Make sure the database is properly configured for the server to work correctly. 