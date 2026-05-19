import { Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenFrame } from '../components/ScreenFrame';

export function TimeCapsuleRequestsScreen() {
  return (
    <ScreenFrame title="Time Capsule Requests" subtitle="Accept / decline incoming requests">
      <Card title="Incoming Request">
        <Text>Member: Visiting Member</Text>
        <Text>Message: In town and happy to join.</Text>
      </Card>
      <Card title="Actions" tone="accent">
        <Text>PATCH /v1/time-capsules/requests/:requestId</Text>
      </Card>
    </ScreenFrame>
  );
}
