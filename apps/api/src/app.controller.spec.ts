import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from './database/database.service';
import { HealthService } from './health/health.service';

describe('HealthService', () => {
  let service: HealthService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        HealthService,
        {
          provide: DatabaseService,
          useValue: {
            getStatus: () => ({ provider: 'postgresql', configured: false }),
          },
        },
      ],
    }).compile();

    service = app.get<HealthService>(HealthService);
  });

  it('returns a healthy status', () => {
    expect(service.getHealth()).toEqual(
      expect.objectContaining({
        status: 'ok',
      }),
    );
  });
});
