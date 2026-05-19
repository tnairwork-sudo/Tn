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
import { HangoutsService } from './hangouts.service';

@Controller('hangouts')
export class HangoutsController {
  constructor(private readonly hangoutsService: HangoutsService) {}

  @Get()
  list(@Query('city') city?: string, @Query('cursor') cursor?: string) {
    return this.hangoutsService.list(city, cursor);
  }

  @Post()
  create(
    @Body()
    body: {
      city?: unknown;
      title?: unknown;
      description?: unknown;
      venueHint?: unknown;
      startsAt?: unknown;
      endsAt?: unknown;
      joinMode?: unknown;
    },
  ) {
    return this.hangoutsService.create({
      city: sanitizeText(body.city),
      title: sanitizeText(body.title),
      description: sanitizeText(body.description),
      venueHint: sanitizeText(body.venueHint),
      startsAt: sanitizeText(body.startsAt),
      endsAt: sanitizeText(body.endsAt),
      joinMode: sanitizeText(body.joinMode),
    });
  }

  @Post(':id/join')
  join(@Param('id') id: string) {
    return this.hangoutsService.join(id);
  }

  @Patch(':id/participants/:participantId')
  updateParticipant(
    @Param('id') id: string,
    @Param('participantId') participantId: string,
    @Body() body: { status?: unknown },
  ) {
    return this.hangoutsService.updateParticipant(
      id,
      participantId,
      sanitizeText(body.status) ?? 'pending',
    );
  }
}
