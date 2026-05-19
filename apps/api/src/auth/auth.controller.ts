import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('request-otp')
  requestOtp(@Body() body: { email?: string; phoneE164?: string }) {
    return this.authService.requestOtp(
      body.email ?? body.phoneE164 ?? 'unknown',
    );
  }

  @Post('verify-otp')
  verifyOtp(
    @Body() body: { email?: string; phoneE164?: string; otp?: string },
  ) {
    return this.authService.verifyOtp(body.email ?? body.phoneE164 ?? 'member');
  }

  @Post('refresh')
  refresh() {
    return this.authService.refresh();
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }
}
