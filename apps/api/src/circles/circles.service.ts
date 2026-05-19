import { Injectable } from '@nestjs/common';

const CITIES = ['delhi', 'bombay', 'london', 'dubai'] as const;

@Injectable()
export class CirclesService {
  list() {
    return {
      circles: CITIES.map((city) => ({
        city,
        memberCount: city === 'london' ? 120 : 80,
      })),
    };
  }

  byCity(city: string) {
    return {
      city,
      members: [
        {
          id: 'member-1',
          displayName: 'Prototype Member',
          editionsAttended: 1,
        },
      ],
    };
  }

  passingThrough(city: string) {
    return {
      city,
      visitors: [
        {
          id: 'member-visitor-1',
          displayName: 'Visiting Member',
          until: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        },
      ],
    };
  }
}
