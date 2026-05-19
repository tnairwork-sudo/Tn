import { Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenFrame } from '../components/ScreenFrame';

export function TimeCapsuleListScreen() {
  return (
    <ScreenFrame title="Time Capsule" subtitle="City-filtered availability windows">
      <Card title="Availability Card">
        <Text>City: London</Text>
        <Text>Window: Today, 6:00 PM – 8:00 PM</Text>
      </Card>
      <Card title="CTA" tone="accent">
        <Text>Request to join flow scaffolded.</Text>
      </Card>
    </ScreenFrame>
  );
}
