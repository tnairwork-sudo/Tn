import { Injectable } from '@nestjs/common';
import { S3Service } from '../integrations/s3/s3.service';

@Injectable()
export class ProfileService {
  constructor(private readonly s3Service: S3Service) {}

  getMe() {
    return {
      id: 'demo-user',
      displayName: 'Prototype Member',
      city: 'london',
      status: 'verified_member',
      mapVisibilityEnabled: false,
      privacy: {
        name: 'public_to_members',
        city: 'public_to_members',
      },
    };
  }

  updateMe(patch: Record<string, unknown>) {
    return {
      ...this.getMe(),
      ...patch,
      updatedAt: new Date().toISOString(),
    };
  }

  createPhotoUploadUrl(ownerId = 'demo-user', mimeType?: string) {
    return this.s3Service.createSignedUploadUrl(ownerId, mimeType);
  }

  updatePrivacy(privacy: Record<string, string>) {
    return {
      success: true,
      privacy,
      updatedAt: new Date().toISOString(),
    };
  }

  updateMapVisibility(enabled: boolean) {
    return {
      mapVisibilityEnabled: enabled,
      updatedAt: new Date().toISOString(),
    };
  }
}
