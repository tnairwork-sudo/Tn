import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CirclesModule } from './circles/circles.module';
import { DatabaseModule } from './database/database.module';
import { EditionsModule } from './editions/editions.module';
import { FeedModule } from './feed/feed.module';
import { HangoutsModule } from './hangouts/hangouts.module';
import { HealthModule } from './health/health.module';
import { IntegrationsModule } from './integrations/integrations.module';
import { MapModule } from './map/map.module';
import { MembersModule } from './members/members.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ProfileModule } from './profile/profile.module';
import { TimeCapsulesModule } from './time-capsules/time-capsules.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    IntegrationsModule,
    HealthModule,
    AuthModule,
    ProfileModule,
    MembersModule,
    FeedModule,
    MapModule,
    TimeCapsulesModule,
    CirclesModule,
    EditionsModule,
    HangoutsModule,
    NotificationsModule,
  ],
})
export class AppModule {}
