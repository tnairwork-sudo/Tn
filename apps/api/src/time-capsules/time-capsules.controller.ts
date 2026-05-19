import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { sanitizeText } from '../common/sanitize';
import { TimeCapsulesService } from './time-capsules.service';

@Controller()
export class TimeCapsulesController {
  constructor(private readonly timeCapsulesService: TimeCapsulesService) {}

  @Get('time-capsules')
  list(
    @Query('city') city?: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.timeCapsulesService.list(city, from, to);
  }

  @Post('time-capsules')
  create(
    @Body()
    body: {
      city?: unknown;
      availableFrom?: unknown;
      availableUntil?: unknown;
      note?: unknown;
    },
  ) {
    return this.timeCapsulesService.create({
      city: sanitizeText(body.city),
      availableFrom: sanitizeText(body.availableFrom),
      availableUntil: sanitizeText(body.availableUntil),
      note: sanitizeText(body.note),
    });
  }

  @Post('time-capsules/:id/requests')
  createRequest(@Param('id') id: string, @Body() body: { message?: unknown }) {
    return this.timeCapsulesService.createRequest(id, {
      message: sanitizeText(body.message),
    });
  }

  @Patch('time-capsules/requests/:requestId')
  updateRequestStatus(
    @Param('requestId') requestId: string,
    @Body() body: { status?: unknown },
  ) {
    const status = sanitizeText(body.status);
    return this.timeCapsulesService.updateRequestStatus(
      requestId,
      status === 'accepted' ? 'accepted' : 'declined',
    );
  }
}
