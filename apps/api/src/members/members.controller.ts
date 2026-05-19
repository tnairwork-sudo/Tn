import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { sanitizeText } from '../common/sanitize';
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
  createIntroduction(
    @Body()
    body: {
      memberAId?: unknown;
      memberBId?: unknown;
      editionId?: unknown;
      contextNote?: unknown;
    },
  ) {
    return this.membersService.createIntroduction({
      memberAId: sanitizeText(body.memberAId),
      memberBId: sanitizeText(body.memberBId),
      editionId: sanitizeText(body.editionId),
      contextNote: sanitizeText(body.contextNote),
    });
  }

  @Get('introductions/mine')
  listMine() {
    return this.membersService.listMine();
  }
}
