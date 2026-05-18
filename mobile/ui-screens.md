# The Table Mobile UX / UI Screen Blueprint

## Design System
- **Typography:** Cormorant Garamond for headings; system sans for body.
- **Palette:**
  - Verdigris `#1A3D33`
  - Burnt Orange `#B85C38`
  - Gold `#C9A84C`
  - Ivory `#FAF6EE`
- Editorial spacing, high whitespace, minimal chrome.
- Light and dark mode tokens with same semantic roles.

## Navigation
- Bottom tabs: `Feed`, `Map`, `Time Capsule`, `Circles`, `Profile`.
- Secondary stack screens pushed modally/detail.

## Screens

1. **Onboarding + Verification**
   - OTP sign-in
   - Membership pending / verified states
   - Intro copy for private community norms

2. **Profile (Self)**
   - Photo upload
   - Name, city selector (Delhi/Bombay/London/Dubai)
   - Bio prompts: drives, principle, building
   - Privacy toggles per field
   - Map visibility toggle

3. **Member Profile (Other)**
   - Respect privacy masking by field
   - Editions attended chips
   - “Introduce” action (if same edition)

4. **Feed Home**
   - Photo-first cards
   - Caption, neighborhood/city tag
   - No followers/likes count emphasis
   - Pull-to-refresh + cursor pagination

5. **Create Post**
   - Multi-photo picker/upload
   - Caption + city + neighborhood label

6. **Map**
   - Mapbox view
   - City filter pills
   - Nearby member clusters by neighborhood only
   - Visibility ON/OFF state banner

7. **Time Capsule List**
   - City-filtered cards with availability windows
   - CTA: request to join

8. **Create Time Capsule**
   - Date/time range picker
   - City + optional context note

9. **Time Capsule Requests**
   - Incoming requests
   - Accept / decline actions

10. **City Circles**
    - 4 circle hubs
    - Member directory by city
    - Passing-through section

11. **Editions Archive**
    - Chronological dinners
    - Dinner details (city, venue, date)
    - Consenting attendees list

12. **Smaller Hangouts**
    - City hangout feed
    - Create hangout form
    - Join/request flow

13. **Notifications Center**
    - Intro request, time capsule request, decisions

## Interaction Notes
- Use subtle haptics for accept/decline decisions.
- Gold accent for primary CTA.
- Burnt orange for urgent state labels.
- Dark mode uses deep charcoal base; keeps Verdigris/Gold accents.
