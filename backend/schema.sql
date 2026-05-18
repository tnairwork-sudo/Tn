-- The Table PostgreSQL Schema

CREATE TYPE city_enum AS ENUM ('delhi', 'bombay', 'london', 'dubai');
CREATE TYPE member_status_enum AS ENUM ('pending', 'verified_member', 'suspended');
CREATE TYPE privacy_level_enum AS ENUM ('public_to_members', 'same_edition_only', 'private');
CREATE TYPE request_status_enum AS ENUM ('pending', 'accepted', 'declined', 'cancelled');

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email CITEXT UNIQUE,
  phone_e164 TEXT UNIQUE,
  status member_status_enum NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE profiles (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  display_name TEXT NOT NULL,
  city city_enum,
  photo_asset_id UUID,
  what_drives_you TEXT,
  guiding_principle TEXT,
  what_building TEXT,
  privacy_name privacy_level_enum NOT NULL DEFAULT 'public_to_members',
  privacy_city privacy_level_enum NOT NULL DEFAULT 'public_to_members',
  privacy_what_drives_you privacy_level_enum NOT NULL DEFAULT 'public_to_members',
  privacy_guiding_principle privacy_level_enum NOT NULL DEFAULT 'public_to_members',
  privacy_what_building privacy_level_enum NOT NULL DEFAULT 'public_to_members',
  map_visibility_enabled BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE editions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  city city_enum NOT NULL,
  venue_name TEXT NOT NULL,
  happened_on DATE NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE edition_attendees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  edition_id UUID NOT NULL REFERENCES editions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  consent_listed BOOLEAN NOT NULL DEFAULT TRUE,
  attended_verified BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (edition_id, user_id)
);

CREATE TABLE introductions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  from_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  member_a_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  member_b_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  edition_id UUID NOT NULL REFERENCES editions(id) ON DELETE CASCADE,
  context_note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK (member_a_id <> member_b_id)
);

CREATE TABLE media_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  bucket_key TEXT NOT NULL UNIQUE,
  mime_type TEXT NOT NULL,
  width INT,
  height INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE feed_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  caption TEXT,
  city city_enum,
  neighborhood_label TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE feed_post_assets (
  post_id UUID NOT NULL REFERENCES feed_posts(id) ON DELETE CASCADE,
  asset_id UUID NOT NULL REFERENCES media_assets(id) ON DELETE CASCADE,
  position INT NOT NULL DEFAULT 0,
  PRIMARY KEY (post_id, asset_id)
);

CREATE TABLE map_presence (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  city city_enum NOT NULL,
  geohash6 TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE time_capsules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  city city_enum NOT NULL,
  available_from TIMESTAMPTZ NOT NULL,
  available_until TIMESTAMPTZ NOT NULL,
  note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK (available_until > available_from)
);

CREATE TABLE time_capsule_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  capsule_id UUID NOT NULL REFERENCES time_capsules(id) ON DELETE CASCADE,
  requester_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  message TEXT,
  status request_status_enum NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (capsule_id, requester_user_id)
);

CREATE TABLE hangouts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  host_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  city city_enum NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  venue_hint TEXT,
  starts_at TIMESTAMPTZ NOT NULL,
  ends_at TIMESTAMPTZ,
  join_mode TEXT NOT NULL DEFAULT 'request',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE hangout_participants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hangout_id UUID NOT NULL REFERENCES hangouts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status request_status_enum NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (hangout_id, user_id)
);

CREATE INDEX idx_profiles_city ON profiles(city);
CREATE INDEX idx_feed_posts_created ON feed_posts(created_at DESC);
CREATE INDEX idx_feed_posts_city_created ON feed_posts(city, created_at DESC);
CREATE INDEX idx_time_capsules_city_window ON time_capsules(city, available_from, available_until);
CREATE INDEX idx_map_presence_city_expires ON map_presence(city, expires_at);
