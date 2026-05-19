import { Module } from '@nestjs/common';
import { IntegrationsModule } from '../integrations/integrations.module';
import { MapController } from './map.controller';
import { MapService } from './map.service';

@Module({
  imports: [IntegrationsModule],
  controllers: [MapController],
  providers: [MapService],
})
export class MapModule {}
