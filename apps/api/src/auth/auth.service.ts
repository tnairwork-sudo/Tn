import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  requestOtp(identifier: string) {
    return {
      identifier,
      otpDispatched: true,
      provider: 'placeholder',
      expiresInSeconds: 300,
    };
  }

  verifyOtp(identifier: string) {
    return {
      accessToken: `mock-access-token-for-${identifier || 'member'}`,
      refreshToken: `mock-refresh-token-for-${identifier || 'member'}`,
      tokenType: 'Bearer',
      expiresIn: 900,
      status: 'verified_member',
    };
  }

  refresh() {
    return {
      accessToken: 'mock-refreshed-access-token',
      refreshToken: 'mock-rotated-refresh-token',
      tokenType: 'Bearer',
      expiresIn: 900,
    };
  }

  logout() {
    return { success: true };
  }
}
