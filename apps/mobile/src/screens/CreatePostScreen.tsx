import { Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenFrame } from '../components/ScreenFrame';

export function CreatePostScreen() {
  return (
    <ScreenFrame title="Create Post" subtitle="Multi-photo upload + caption + city + neighborhood label">
      <Card title="Upload">
        <Text>Uses S3 signed upload URL endpoint scaffold.</Text>
      </Card>
      <Card title="Submit" tone="accent">
        <Text>POST /v1/feed/posts ready for integration.</Text>
      </Card>
    </ScreenFrame>
  );
}
