# The Table — Full App Architecture

## 1) System Overview

### Clients
- React Native iOS/Android app (mobile-first).
- Auth via email OTP + optional magic link.

### Backend Services
- **API Gateway / BFF:** REST endpoints consumed by app.
- **Auth Service:** session issuance, refresh tokens, device binding.
- **Member Service:** profile, privacy, introductions.
- **Feed Service:** posts, comments, reactions, moderation queue.
- **Map Presence Service:** ephemeral neighborhood-level presence.
- **Time Capsule Service:** availability windows + join requests.
- **City Circles Service:** city-level member directories + pass-through state.
- **Editions Service:** immutable archive of dinners and consenting attendees.
- **Hangouts Service:** self-organized meetups.
- **Notification Service:** push triggers for introductions, requests, approvals.
- **Media Service:** signed S3 upload URLs + image processing webhooks.

### Data & Infra
- PostgreSQL (primary relational DB).
- Redis (cache + rate limiting + ephemeral map TTL state).
- S3 (originals + transformed media variants).
- CloudFront (private CDN signed URLs).
- Queue (SQS) for async jobs (thumbnails, notifications).
- Observability: OpenTelemetry + Datadog/New Relic + audit logs.

## 2) Access & Membership Model
- User starts as `pending`.
- Becomes `verified_member` only when linked to attendance in at least one edition.
- Admin or trusted host validates attendance.
- Only `verified_member` can access Feed, Map, Time Capsule, Circles.

## 3) Security & Privacy
- JWT access token (15 min) + refresh token rotation.
- Device session table for revocation.
- Field-level privacy (`public_to_members` / `same_edition_only` / `private`).
- Neighborhood location obfuscation:
  - Convert precise GPS to geohash at coarse precision (e.g., 5-6 chars),
  - Never persist raw coordinates beyond short-lived encrypted cache,
  - Display only area label.
- Rate limits:
  - Upload URL creation, introductions, join requests.
- Audit trails for:
  - profile privacy changes,
  - map visibility toggles,
  - attendee consent changes.

## 4) Domain Modules

### Profile & Introductions
- Editable fields: photo, name, city, bio blocks from application prompts.
- Privacy toggle per field.
- Introduction flow limited to members from same edition.

### Feed
- Instagram-style permanent posts.
- Location tags at city/neighborhood level.
- No follower count concepts.
- Strictly members-only read/write.

### Map
- User toggles visibility ON/OFF.
- ON publishes coarse location with TTL (e.g., 15 min refresh heartbeat).
- City-filtered nearby member clusters.

### Time Capsule
- Member posts availability (city + start/end time + intent/note).
- Others in same city request to join.
- Owner approves/declines requests.
- Push notifications for requests and decisions.

### City Circles
- 4 fixed circles: Delhi, Bombay, London, Dubai.
- Shows current city members, editions attended, pass-through visitors.

### Editions Archive
- Permanent dinner records: city, venue, date.
- Only consenting attendees displayed.
- Immutable audit-friendly history.

### Smaller Hangouts
- Member-created city hangouts.
- Join requests or open join depending on organizer setting.

## 5) Suggested Monorepo Layout

```txt
/apps
  /mobile             # React Native app
  /api                # Node.js service (modular monolith)
/packages
  /ui                 # tokens, typography, components
  /config             # eslint, tsconfig, env schema
  /types              # shared DTO types
/infra
  terraform/          # VPC, RDS, S3, CloudFront, ECS/Lambda
```

## 6) Key Event Flows

### A) Verify Membership
1. Admin imports edition attendees.
2. User linked by phone/email match.
3. Role upgraded to `verified_member`.
4. Welcome push + onboarding unlocked.

### B) Feed Photo Upload
1. App requests signed upload URL.
2. Uploads original to S3.
3. Media worker generates variants.
4. Post created referencing media asset IDs.

### C) Map Presence
1. User enables visibility.
2. App sends GPS every N minutes.
3. Backend stores coarse geohash only (DB/cache).
4. Nearby query returns anonymized neighborhood markers.

### D) Time Capsule Request
1. Member posts availability slot.
2. Nearby/city members discover slot.
3. Request to join sent.
4. Owner accepts/declines.
5. Both parties notified.

