import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
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
  create(@Body() body: Record<string, unknown>) {
    return this.timeCapsulesService.create(body);
  }

  @Post('time-capsules/:id/requests')
  createRequest(
    @Param('id') id: string,
    @Body() body: Record<string, unknown>,
  ) {
    return this.timeCapsulesService.createRequest(id, body);
  }

  @Patch('time-capsules/requests/:requestId')
  updateRequestStatus(
    @Param('requestId') requestId: string,
    @Body() body: { status: 'accepted' | 'declined' },
  ) {
    return this.timeCapsulesService.updateRequestStatus(requestId, body.status);
  }
}
