import { Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenFrame } from '../components/ScreenFrame';

export function HangoutsScreen() {
  return (
    <ScreenFrame title="Smaller Hangouts" subtitle="City hangout feed + create + join/request flow">
      <Card title="Hangout Feed">
        <Text>City-filtered cards with starts at / join mode.</Text>
      </Card>
      <Card title="Create Hangout">
        <Text>POST /v1/hangouts scaffolded.</Text>
      </Card>
      <Card title="Join Flow" tone="accent">
        <Text>POST /v1/hangouts/:id/join + moderator decision.</Text>
      </Card>
    </ScreenFrame>
  );
}
