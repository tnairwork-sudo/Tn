import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {
  private readonly databaseUrl?: string;
  private readonly pool?: Pool;

  constructor(private readonly configService: ConfigService) {
    this.databaseUrl = this.configService.get<string>('DATABASE_URL');
    if (this.databaseUrl) {
      this.pool = new Pool({
        connectionString: this.databaseUrl,
      });
    }
  }

  getStatus() {
    return {
      provider: 'postgresql',
      configured: Boolean(this.databaseUrl),
    };
  }

  async query(
    text: string,
    values?: unknown[],
  ): Promise<Record<string, unknown>[]> {
    if (!this.pool) {
      return [];
    }

    const result = await this.pool.query<Record<string, unknown>>(text, values);
    return result.rows;
  }
}
