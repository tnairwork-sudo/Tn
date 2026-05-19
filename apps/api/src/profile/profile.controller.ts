import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('me')
  getMe() {
    return this.profileService.getMe();
  }

  @Patch('me')
  patchMe(@Body() patch: Record<string, unknown>) {
    return this.profileService.updateMe(patch);
  }

  @Post('me/photo/upload-url')
  createPhotoUploadUrl(@Body() body: { ownerId?: string; mimeType?: string }) {
    return this.profileService.createPhotoUploadUrl(
      body.ownerId,
      body.mimeType,
    );
  }

  @Patch('me/privacy')
  updatePrivacy(@Body() body: Record<string, string>) {
    return this.profileService.updatePrivacy(body);
  }

  @Post('me/map-visibility')
  updateMapVisibility(@Body() body: { enabled: boolean }) {
    return this.profileService.updateMapVisibility(Boolean(body.enabled));
  }
}
