# The Table (Private Members App) — Prototype

This repository now contains the **first working prototype scaffold** for The Table.

## What was created

### Backend (`apps/api`)
- NestJS backend scaffold with `/v1` REST routes aligned to `backend/api-spec.md`.
- Feature modules for:
  - Auth
  - Profile
  - Members / Introductions
  - Feed
  - Map
  - Time Capsule
  - City Circles
  - Editions Archive
  - Hangouts
  - Notifications
- Health endpoint: `GET /v1/health`.
- Placeholder integrations:
  - **Mapbox** config + neighborhood-level location obfuscation stub
  - **OneSignal** notification queue stub
  - **AWS S3** signed upload URL stub

### Database
- PostgreSQL Docker Compose setup in `apps/api/docker-compose.yml`.
- Existing schema (`backend/schema.sql`) is mounted automatically into Postgres init.
- DB service status exposed in health check output.

### Mobile (`apps/mobile`)
- Expo React Native TypeScript app scaffold.
- Primary tabs from spec:
  - Feed, Map, Time Capsule, Circles, Profile
- Secondary prototype screens matching `mobile/ui-screens.md`:
  - Onboarding + Verification
  - Member Profile
  - Create Post
  - Create Time Capsule
  - Time Capsule Requests
  - Editions Archive
  - Smaller Hangouts
  - Notifications Center
- Placeholder config hooks for Mapbox, OneSignal, and AWS S3.

## Quick start (non-technical)

1. Install Node.js (LTS) and Docker Desktop.
2. Open terminal in this repository.
3. Start backend:
   ```bash
   cd apps/api
   npm install
   cp .env.example .env
   npm run db:up
   npm run start:dev
   ```
4. Start mobile app (new terminal):
   ```bash
   cd apps/mobile
   npm install
   cp .env.example .env
   npm run start
   ```
5. Open Expo Go on your phone and scan the QR code.

## What still needs real credentials later
- Mapbox access token
- OneSignal app + REST API keys
- AWS S3 bucket + IAM keys

You can keep placeholder values for local prototype development.
