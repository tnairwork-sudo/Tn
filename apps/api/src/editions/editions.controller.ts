import { Controller, Get, Param } from '@nestjs/common';
import { EditionsService } from './editions.service';

@Controller('editions')
export class EditionsController {
  constructor(private readonly editionsService: EditionsService) {}

  @Get()
  list() {
    return this.editionsService.list();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.editionsService.getById(id);
  }

  @Get(':id/attendees')
  attendees(@Param('id') id: string) {
    return this.editionsService.attendees(id);
  }
}
