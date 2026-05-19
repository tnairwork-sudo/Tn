import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { HangoutsService } from './hangouts.service';

@Controller('hangouts')
export class HangoutsController {
  constructor(private readonly hangoutsService: HangoutsService) {}

  @Get()
  list(@Query('city') city?: string, @Query('cursor') cursor?: string) {
    return this.hangoutsService.list(city, cursor);
  }

  @Post()
  create(@Body() body: Record<string, unknown>) {
    return this.hangoutsService.create(body);
  }

  @Post(':id/join')
  join(@Param('id') id: string) {
    return this.hangoutsService.join(id);
  }

  @Patch(':id/participants/:participantId')
  updateParticipant(
    @Param('id') id: string,
    @Param('participantId') participantId: string,
    @Body() body: { status: string },
  ) {
    return this.hangoutsService.updateParticipant(
      id,
      participantId,
      body.status,
    );
  }
}
