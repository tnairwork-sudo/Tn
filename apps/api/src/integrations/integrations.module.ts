import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MapboxService } from './mapbox/mapbox.service';
import { OnesignalService } from './onesignal/onesignal.service';
import { S3Service } from './s3/s3.service';

@Module({
  imports: [ConfigModule],
  providers: [MapboxService, S3Service, OnesignalService],
  exports: [MapboxService, S3Service, OnesignalService],
})
export class IntegrationsModule {}
