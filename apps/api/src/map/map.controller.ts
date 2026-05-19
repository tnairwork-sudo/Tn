import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MapService } from './map.service';

@Controller()
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Post('map/presence')
  updatePresence(@Body() body: { lat: number; lng: number; city?: string }) {
    return this.mapService.updatePresence(body.lat, body.lng, body.city);
  }

  @Get('map/nearby')
  listNearby(@Query('city') city?: string) {
    return this.mapService.listNearby(city);
  }
}
