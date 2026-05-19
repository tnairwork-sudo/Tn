import { Module } from '@nestjs/common';
import { TimeCapsulesController } from './time-capsules.controller';
import { TimeCapsulesService } from './time-capsules.service';

@Module({
  controllers: [TimeCapsulesController],
  providers: [TimeCapsulesService],
})
export class TimeCapsulesModule {}
