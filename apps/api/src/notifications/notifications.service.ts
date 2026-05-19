import { Injectable } from '@nestjs/common';
import { OnesignalService } from '../integrations/onesignal/onesignal.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly onesignalService: OnesignalService) {}

  registerPushToken(token: string) {
    return {
      token,
      registered: true,
      integration: this.onesignalService.getConfig(),
    };
  }

  list() {
    return {
      items: [
        {
          id: 'notification-1',
          title: 'New intro request',
          message: 'A member asked for an introduction.',
          read: false,
          createdAt: new Date().toISOString(),
        },
      ],
    };
  }

  markRead(id: string) {
    return {
      id,
      read: true,
      updatedAt: new Date().toISOString(),
    };
  }

  sendPrototypeNotification(title: string, message: string) {
    return this.onesignalService.queueNotification(title, message);
  }
}
