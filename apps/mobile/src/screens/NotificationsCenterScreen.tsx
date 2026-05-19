import { Text } from 'react-native';
import { Card } from '../components/Card';
import { ScreenFrame } from '../components/ScreenFrame';
import { getNotificationConfig } from '../services/notifications';

export function NotificationsCenterScreen() {
  const notificationConfig = getNotificationConfig();

  return (
    <ScreenFrame title="Notifications" subtitle="Intro requests, time capsule actions, decisions">
      <Card title="OneSignal Integration" tone="accent">
        <Text>Mode: {notificationConfig.mode}</Text>
      </Card>
      <Card title="Notification Item">
        <Text>New intro request from a shared edition member.</Text>
      </Card>
    </ScreenFrame>
  );
}
