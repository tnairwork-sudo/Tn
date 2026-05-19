# The Table API Prototype (NestJS)

This is the first backend scaffold for **The Table** private members app.

## What this prototype includes
- NestJS API with `/v1` routes aligned to `backend/api-spec.md`.
- PostgreSQL starter setup (Docker Compose + schema import from `backend/schema.sql`).
- Placeholder integrations for:
  - Mapbox (map config + location obfuscation stub)
  - OneSignal (notification queue stub)
  - AWS S3 (signed upload URL placeholder)

## Start locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env file:
   ```bash
   cp .env.example .env
   ```
3. Start PostgreSQL:
   ```bash
   npm run db:up
   ```
4. Start API in dev mode:
   ```bash
   npm run start:dev
   ```

Health check: `GET http://localhost:3000/v1/health`

## Notes for non-technical setup
- If service accounts are not ready yet, keep placeholder values in `.env`.
- Replace placeholders later with real credentials for production use.
- The app already runs in prototype mode without live Mapbox/OneSignal/S3 credentials.
