import { Controller, Get, Param } from '@nestjs/common';
import { CirclesService } from './circles.service';

@Controller('circles')
export class CirclesController {
  constructor(private readonly circlesService: CirclesService) {}

  @Get()
  list() {
    return this.circlesService.list();
  }

  @Get(':city')
  byCity(@Param('city') city: string) {
    return this.circlesService.byCity(city);
  }

  @Get(':city/passing-through')
  passingThrough(@Param('city') city: string) {
    return this.circlesService.passingThrough(city);
  }
}
