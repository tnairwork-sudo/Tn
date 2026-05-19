const oneSignalAppId = process.env.EXPO_PUBLIC_ONESIGNAL_APP_ID;

export function getNotificationConfig() {
  return {
    provider: 'onesignal',
    configured: Boolean(oneSignalAppId),
    mode: oneSignalAppId ? 'live' : 'placeholder',
  };
}
