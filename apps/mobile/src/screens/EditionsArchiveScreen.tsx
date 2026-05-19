import { Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenFrame } from '../components/ScreenFrame';

export function EditionsArchiveScreen() {
  return (
    <ScreenFrame title="Editions Archive" subtitle="Chronological dinners + consenting attendees">
      <Card title="Edition Record">
        <Text>London • The Conservatory • 12 Sep 2025</Text>
      </Card>
      <Card title="Attendees">
        <Text>Only attendees with consent listed are shown.</Text>
      </Card>
    </ScreenFrame>
  );
}
