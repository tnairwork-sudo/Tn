import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MapboxService {
  constructor(private readonly configService: ConfigService) {}

  getConfig() {
    const token = this.configService.get<string>('MAPBOX_ACCESS_TOKEN');
    return {
      provider: 'mapbox',
      configured: Boolean(token),
      mode: token ? 'live' : 'placeholder',
    };
  }

  obfuscateLocation(lat: number, lng: number) {
    const coarseLat = Number(lat.toFixed(2));
    const coarseLng = Number(lng.toFixed(2));

    return {
      geohash6: `${Math.abs(coarseLat).toString().replace('.', '')}${Math.abs(
        coarseLng,
      )
        .toString()
        .replace('.', '')}`.slice(0, 6),
      neighborhoodLabel: `Approx ${coarseLat}, ${coarseLng}`,
      mapbox: this.getConfig(),
    };
  }
}
