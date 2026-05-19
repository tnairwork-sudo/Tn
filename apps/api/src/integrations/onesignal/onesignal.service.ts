import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';

@Injectable()
export class OnesignalService {
  constructor(private readonly configService: ConfigService) {}

  getConfig() {
    const appId = this.configService.get<string>('ONESIGNAL_APP_ID');
    return {
      provider: 'onesignal',
      configured: Boolean(appId),
      appId,
      mode: appId ? 'live' : 'placeholder',
    };
  }

  queueNotification(title: string, message: string) {
    return {
      id: randomUUID(),
      title,
      message,
      status: 'queued',
      integration: this.getConfig(),
      createdAt: new Date().toISOString(),
    };
  }
}
