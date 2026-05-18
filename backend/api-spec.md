# The Table API Endpoints (v1)

Base URL: `/v1`
Auth: `Bearer <access_token>` for all member endpoints.

## Auth
- `POST /auth/request-otp` → send OTP to email/phone.
- `POST /auth/verify-otp` → returns access + refresh tokens.
- `POST /auth/refresh` → rotate refresh token.
- `POST /auth/logout` → revoke session.

## Profile
- `GET /me`
- `PATCH /me`
- `POST /me/photo/upload-url` → signed S3 URL.
- `PATCH /me/privacy` → per-field privacy updates.
- `POST /me/map-visibility` → enable/disable map presence.

## Members / Introductions
- `GET /members?city=&edition_id=&q=`
- `GET /members/:id`
- `POST /introductions`
- `GET /introductions/mine`

## Feed
- `GET /feed?city=&cursor=`
- `POST /feed/posts`
- `GET /feed/posts/:id`
- `DELETE /feed/posts/:id`

### Create feed post body
```json
{
  "caption": "Dinner afterglow",
  "city": "london",
  "neighborhoodLabel": "Soho",
  "assetIds": ["uuid"]
}
```

## Map
- `POST /map/presence` (lat/lng accepted, server obfuscates)
- `GET /map/nearby?city=london`

## Time Capsule
- `GET /time-capsules?city=&from=&to=`
- `POST /time-capsules`
- `POST /time-capsules/:id/requests`
- `PATCH /time-capsules/requests/:requestId` (accept/decline)

## City Circles
- `GET /circles`
- `GET /circles/:city`
- `GET /circles/:city/passing-through`

## Editions Archive
- `GET /editions`
- `GET /editions/:id`
- `GET /editions/:id/attendees` (consenting only)

## Hangouts
- `GET /hangouts?city=&cursor=`
- `POST /hangouts`
- `POST /hangouts/:id/join`
- `PATCH /hangouts/:id/participants/:participantId`

## Notifications
- `POST /devices/register-push-token`
- `GET /notifications`
- `PATCH /notifications/:id/read`
