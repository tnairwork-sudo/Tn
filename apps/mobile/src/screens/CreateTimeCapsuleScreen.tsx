import { Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenFrame } from '../components/ScreenFrame';

export function CreateTimeCapsuleScreen() {
  return (
    <ScreenFrame title="Create Time Capsule" subtitle="Date/time range + city + context note">
      <Card title="Form Fields">
        <Text>Start time, end time, city, optional note.</Text>
      </Card>
      <Card title="Submit" tone="accent">
        <Text>POST /v1/time-capsules scaffolded.</Text>
      </Card>
    </ScreenFrame>
  );
}
