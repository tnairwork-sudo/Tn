import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class HealthService {
  constructor(private readonly databaseService: DatabaseService) {}

  getHealth() {
    return {
      status: 'ok',
      service: 'the-table-api',
      database: this.databaseService.getStatus(),
      timestamp: new Date().toISOString(),
    };
  }
}
