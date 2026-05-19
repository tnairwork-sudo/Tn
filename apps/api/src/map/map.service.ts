import { Injectable } from '@nestjs/common';
import { MapboxService } from '../integrations/mapbox/mapbox.service';

@Injectable()
export class MapService {
  constructor(private readonly mapboxService: MapboxService) {}

  updatePresence(lat: number, lng: number, city = 'london') {
    return {
      city,
      ...this.mapboxService.obfuscateLocation(lat, lng),
      expiresInMinutes: 15,
      updatedAt: new Date().toISOString(),
    };
  }

  listNearby(city = 'london') {
    return {
      city,
      clusters: [
        {
          neighborhoodLabel: 'Approx Soho',
          memberCount: 4,
        },
      ],
      mapbox: this.mapboxService.getConfig(),
    };
  }
}
