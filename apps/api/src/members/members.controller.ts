import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MembersService } from './members.service';

@Controller()
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get('members')
  listMembers(
    @Query('city') city?: string,
    @Query('edition_id') edition_id?: string,
    @Query('q') q?: string,
  ) {
    return this.membersService.listMembers({ city, edition_id, q });
  }

  @Get('members/:id')
  getMember(@Param('id') id: string) {
    return this.membersService.getMember(id);
  }

  @Post('introductions')
  createIntroduction(@Body() body: Record<string, unknown>) {
    return this.membersService.createIntroduction(body);
  }

  @Get('introductions/mine')
  listMine() {
    return this.membersService.listMine();
  }
}
