import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeCapsulesService {
  list(city?: string, from?: string, to?: string) {
    return {
      items: [
        {
          id: 'capsule-1',
          city: city ?? 'london',
          availableFrom: from ?? new Date().toISOString(),
          availableUntil:
            to ?? new Date(Date.now() + 60 * 60 * 1000).toISOString(),
          note: 'Coffee and conversation',
        },
      ],
    };
  }

  create(body: Record<string, unknown>) {
    return {
      id: 'capsule-new',
      ...body,
      createdAt: new Date().toISOString(),
    };
  }

  createRequest(id: string, body: Record<string, unknown>) {
    return {
      id: 'capsule-request-1',
      capsuleId: id,
      ...body,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
  }

  updateRequestStatus(requestId: string, status: 'accepted' | 'declined') {
    return {
      requestId,
      status,
      updatedAt: new Date().toISOString(),
    };
  }
}
