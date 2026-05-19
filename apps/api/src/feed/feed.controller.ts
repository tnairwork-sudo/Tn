import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { FeedService } from './feed.service';

@Controller()
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get('feed')
  listFeed(@Query('city') city?: string, @Query('cursor') cursor?: string) {
    return this.feedService.listFeed(city, cursor);
  }

  @Post('feed/posts')
  createPost(@Body() body: Record<string, unknown>) {
    return this.feedService.createPost(body);
  }

  @Get('feed/posts/:id')
  getPost(@Param('id') id: string) {
    return this.feedService.getPost(id);
  }

  @Delete('feed/posts/:id')
  removePost(@Param('id') id: string) {
    return this.feedService.removePost(id);
  }
}
