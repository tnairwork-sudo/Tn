import { Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenFrame } from '../components/ScreenFrame';
import { getStorageConfig } from '../services/storage';

export function ProfileSelfScreen() {
  const storage = getStorageConfig();

  return (
    <ScreenFrame title="Profile" subtitle="Photo, bio prompts, privacy controls, map visibility">
      <Card title="Photo Upload" tone="accent">
        <Text>AWS S3 mode: {storage.mode}</Text>
      </Card>
      <Card title="Core Fields">
        <Text>Name + City (Delhi/Bombay/London/Dubai)</Text>
        <Text>Bio prompts: drives, principle, building</Text>
      </Card>
      <Card title="Privacy Controls">
        <Text>Per-field visibility toggles scaffolded</Text>
      </Card>
      <Card title="Map Visibility">
        <Text>ON/OFF member presence toggle scaffolded</Text>
      </Card>
    </ScreenFrame>
  );
}
