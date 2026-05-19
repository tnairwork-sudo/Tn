import { Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenFrame } from '../components/ScreenFrame';

export function CityCirclesScreen() {
  return (
    <ScreenFrame title="City Circles" subtitle="4 fixed hubs + passing-through members">
      <Card title="Circle Hubs">
        <Text>Delhi • Bombay • London • Dubai</Text>
      </Card>
      <Card title="Directory">
        <Text>Member list by city with editions attended.</Text>
      </Card>
      <Card title="Passing Through" tone="accent">
        <Text>Dedicated section for temporary city presence.</Text>
      </Card>
    </ScreenFrame>
  );
}
