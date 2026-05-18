# The Table (TBD Members App)

Private, invite-only full-stack members app for **The Big Dinner (TBD)**.

## Stack
- **Mobile:** React Native (Expo + TypeScript)
- **Backend:** Node.js (NestJS or Express + TypeScript)
- **Database:** PostgreSQL
- **Storage:** AWS S3 (photo uploads)
- **Maps:** Mapbox
- **Notifications:** FCM/APNs via OneSignal or direct provider

## Included in this repository
- `docs/architecture.md` — end-to-end architecture, services, security, event flows.
- `backend/schema.sql` — PostgreSQL schema with enums, tables, indexes, constraints.
- `backend/api-spec.md` — REST API surface area with request/response contracts.
- `mobile/ui-screens.md` — mobile IA, screen specs, design system, light/dark mode behavior.

## Core Product Rules
1. Members-only; no public access.
2. Access granted only after attending a verified TBD edition.
3. Map shares neighborhood-level approximation only.
4. Feed posts are permanent by default.
5. Privacy controls are per profile field.

