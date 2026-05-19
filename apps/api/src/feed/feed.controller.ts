import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { sanitizeText } from '../common/sanitize';
import { FeedService } from './feed.service';

@Controller()
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get('feed')
  listFeed(@Query('city') city?: string, @Query('cursor') cursor?: string) {
    return this.feedService.listFeed(city, cursor);
  }

  @Post('feed/posts')
  createPost(
    @Body()
    body: {
      caption?: unknown;
      city?: unknown;
      neighborhoodLabel?: unknown;
      assetIds?: unknown;
    },
  ) {
    return this.feedService.createPost({
      caption: sanitizeText(body.caption),
      city: sanitizeText(body.city),
      neighborhoodLabel: sanitizeText(body.neighborhoodLabel),
      assetIds: Array.isArray(body.assetIds)
        ? body.assetIds.filter(
            (item): item is string => typeof item === 'string',
          )
        : [],
    });
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
