import { Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenFrame } from '../components/ScreenFrame';
import { getMapboxConfig } from '../services/mapbox';

export function MapScreen() {
  const mapbox = getMapboxConfig();

  return (
    <ScreenFrame title="Map" subtitle="Neighborhood-level member clusters only">
      <Card title="Mapbox Integration" tone="accent">
        <Text>Provider: {mapbox.provider}</Text>
        <Text>Mode: {mapbox.mode}</Text>
      </Card>
      <Card title="City Filter Pills">
        <Text>Delhi • Bombay • London • Dubai</Text>
      </Card>
      <Card title="Visibility Banner" tone="warning">
        <Text>Map visibility is currently OFF (prototype state).</Text>
      </Card>
    </ScreenFrame>
  );
}
