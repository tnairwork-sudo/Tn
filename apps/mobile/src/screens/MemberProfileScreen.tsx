import { Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenFrame } from '../components/ScreenFrame';

export function MemberProfileScreen() {
  return (
    <ScreenFrame title="Member Profile" subtitle="Respect privacy masking by field">
      <Card title="Profile Details">
        <Text>Display only fields allowed by privacy settings.</Text>
      </Card>
      <Card title="Editions Attended Chips">
        <Text>Edition chips and intro eligibility by shared edition.</Text>
      </Card>
      <Card title="Introduce Action" tone="accent">
        <Text>Creates introduction via POST /v1/introductions.</Text>
      </Card>
    </ScreenFrame>
  );
}
