import { Injectable } from '@nestjs/common';

@Injectable()
export class HangoutsService {
  list(city?: string, cursor?: string) {
    return {
      items: [
        {
          id: 'hangout-1',
          city: city ?? 'london',
          title: 'Sunday Walk + Coffee',
          joinMode: 'request',
          startsAt: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
        },
      ],
      nextCursor: cursor ? undefined : 'cursor-hangout-2',
    };
  }

  create(body: Record<string, unknown>) {
    return {
      id: 'hangout-new',
      ...body,
      createdAt: new Date().toISOString(),
    };
  }

  join(id: string) {
    return {
      id: 'participant-1',
      hangoutId: id,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
  }

  updateParticipant(id: string, participantId: string, status: string) {
    return {
      hangoutId: id,
      participantId,
      status,
      updatedAt: new Date().toISOString(),
    };
  }
}
