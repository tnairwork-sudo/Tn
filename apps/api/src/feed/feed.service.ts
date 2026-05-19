import { Injectable } from '@nestjs/common';

@Injectable()
export class FeedService {
  listFeed(city?: string, cursor?: string) {
    return {
      items: [
        {
          id: 'post-1',
          authorUserId: 'member-1',
          caption: 'Dinner afterglow',
          city: city ?? 'london',
          neighborhoodLabel: 'Soho',
          createdAt: new Date().toISOString(),
        },
      ],
      nextCursor: cursor ? undefined : 'cursor-post-2',
    };
  }

  createPost(body: Record<string, unknown>) {
    return {
      id: 'post-new',
      ...body,
      createdAt: new Date().toISOString(),
    };
  }

  getPost(id: string) {
    return {
      id,
      caption: 'Prototype post',
      city: 'london',
      neighborhoodLabel: 'Shoreditch',
    };
  }

  removePost(id: string) {
    return { id, deleted: true };
  }
}
