import { Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenFrame } from '../components/ScreenFrame';

export function OnboardingVerificationScreen() {
  return (
    <ScreenFrame
      title="Onboarding + Verification"
      subtitle="OTP sign-in and pending/verified membership states"
    >
      <Card title="Step 1: Enter email or phone">
        <Text>Prototype uses mock OTP verification flow.</Text>
      </Card>
      <Card title="Step 2: Verify OTP">
        <Text>Backend endpoint: POST /v1/auth/verify-otp</Text>
      </Card>
      <Card title="Community Norms" tone="accent">
        <Text>Private, invite-only members community.</Text>
      </Card>
    </ScreenFrame>
  );
}
