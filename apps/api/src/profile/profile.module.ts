import { Module } from '@nestjs/common';
import { IntegrationsModule } from '../integrations/integrations.module';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [IntegrationsModule],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
