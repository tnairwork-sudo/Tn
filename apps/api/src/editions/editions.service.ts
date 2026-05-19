import { Injectable } from '@nestjs/common';

@Injectable()
export class EditionsService {
  list() {
    return {
      items: [
        {
          id: 'edition-2025-london-01',
          city: 'london',
          venueName: 'The Conservatory',
          happenedOn: '2025-09-12',
        },
      ],
    };
  }

  getById(id: string) {
    return {
      id,
      city: 'london',
      venueName: 'The Conservatory',
      happenedOn: '2025-09-12',
      notes: 'Prototype archive record',
    };
  }

  attendees(id: string) {
    return {
      editionId: id,
      attendees: [
        {
          userId: 'member-1',
          displayName: 'Prototype Member',
          consentListed: true,
        },
      ],
    };
  }
}
