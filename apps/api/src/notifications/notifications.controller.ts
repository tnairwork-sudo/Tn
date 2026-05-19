import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('devices/register-push-token')
  registerPushToken(@Body() body: { token: string }) {
    return this.notificationsService.registerPushToken(body.token);
  }

  @Get('notifications')
  list() {
    return this.notificationsService.list();
  }

  @Patch('notifications/:id/read')
  markRead(@Param('id') id: string) {
    return this.notificationsService.markRead(id);
  }

  @Post('notifications/prototype-send')
  sendPrototypeNotification(@Body() body: { title: string; message: string }) {
    return this.notificationsService.sendPrototypeNotification(
      body.title,
      body.message,
    );
  }
}
