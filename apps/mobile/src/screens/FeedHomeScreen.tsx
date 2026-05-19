import { Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenFrame } from '../components/ScreenFrame';

export function FeedHomeScreen() {
  return (
    <ScreenFrame title="Feed" subtitle="Photo-first cards, city/neighborhood tags, cursor pagination">
      <Card title="Prototype Feed Card">
        <Text>Caption: Dinner afterglow</Text>
        <Text>Neighborhood: Soho, London</Text>
      </Card>
      <Card title="Behavior">
        <Text>Pull-to-refresh + cursor pagination endpoints scaffolded.</Text>
      </Card>
    </ScreenFrame>
  );
}
