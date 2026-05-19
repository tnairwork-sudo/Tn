import { Injectable } from '@nestjs/common';

@Injectable()
export class MembersService {
  listMembers(query: { city?: string; edition_id?: string; q?: string }) {
    return {
      items: [
        {
          id: 'member-1',
          displayName: 'Ananya Rao',
          city: query.city ?? 'london',
          editionsAttended: ['edition-2025-london-01'],
        },
      ],
      query,
    };
  }

  getMember(id: string) {
    return {
      id,
      displayName: 'Prototype Member',
      city: 'london',
      bio: 'Built from the docs as first prototype.',
    };
  }

  createIntroduction(payload: Record<string, unknown>) {
    return {
      id: 'intro-1',
      ...payload,
      status: 'created',
      createdAt: new Date().toISOString(),
    };
  }

  listMine() {
    return {
      items: [
        {
          id: 'intro-1',
          contextNote: 'Met at TBD London edition',
          createdAt: new Date().toISOString(),
        },
      ],
    };
  }
}
