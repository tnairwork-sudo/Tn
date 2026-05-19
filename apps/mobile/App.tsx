import { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ActionButton } from './src/components/ActionButton';
import { Card } from './src/components/Card';
import { ScreenFrame } from './src/components/ScreenFrame';
import { CityCirclesScreen } from './src/screens/CityCirclesScreen';
import { CreatePostScreen } from './src/screens/CreatePostScreen';
import { CreateTimeCapsuleScreen } from './src/screens/CreateTimeCapsuleScreen';
import { EditionsArchiveScreen } from './src/screens/EditionsArchiveScreen';
import { FeedHomeScreen } from './src/screens/FeedHomeScreen';
import { HangoutsScreen } from './src/screens/HangoutsScreen';
import { MapScreen } from './src/screens/MapScreen';
import { MemberProfileScreen } from './src/screens/MemberProfileScreen';
import { NotificationsCenterScreen } from './src/screens/NotificationsCenterScreen';
import { OnboardingVerificationScreen } from './src/screens/OnboardingVerificationScreen';
import { ProfileSelfScreen } from './src/screens/ProfileSelfScreen';
import { TimeCapsuleListScreen } from './src/screens/TimeCapsuleListScreen';
import { TimeCapsuleRequestsScreen } from './src/screens/TimeCapsuleRequestsScreen';
import { getApiConfig } from './src/services/api';
import { colors, spacing } from './src/theme/tokens';

type PrimaryTab = 'feed' | 'map' | 'time' | 'circles' | 'profile';

type SecondaryScreen =
  | 'onboarding'
  | 'member-profile'
  | 'create-post'
  | 'create-time-capsule'
  | 'time-capsule-requests'
  | 'editions-archive'
  | 'hangouts'
  | 'notifications';

const tabs: { key: PrimaryTab; label: string }[] = [
  { key: 'feed', label: 'Feed' },
  { key: 'map', label: 'Map' },
  { key: 'time', label: 'Time Capsule' },
  { key: 'circles', label: 'Circles' },
  { key: 'profile', label: 'Profile' },
];

const secondaryRoutes: { key: SecondaryScreen; label: string }[] = [
  { key: 'onboarding', label: 'Onboarding + Verification' },
  { key: 'member-profile', label: 'Member Profile' },
  { key: 'create-post', label: 'Create Post' },
  { key: 'create-time-capsule', label: 'Create Time Capsule' },
  { key: 'time-capsule-requests', label: 'Time Capsule Requests' },
  { key: 'editions-archive', label: 'Editions Archive' },
  { key: 'hangouts', label: 'Smaller Hangouts' },
  { key: 'notifications', label: 'Notifications Center' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<PrimaryTab>('feed');
  const [activeSecondary, setActiveSecondary] = useState<SecondaryScreen | null>(null);
  const apiConfig = getApiConfig();

  const primaryContent = useMemo(() => {
    switch (activeTab) {
      case 'feed':
        return <FeedHomeScreen />;
      case 'map':
        return <MapScreen />;
      case 'time':
        return <TimeCapsuleListScreen />;
      case 'circles':
        return <CityCirclesScreen />;
      case 'profile':
      default:
        return <ProfileSelfScreen />;
    }
  }, [activeTab]);

  const secondaryContent = useMemo(() => {
    if (!activeSecondary) {
      return null;
    }

    switch (activeSecondary) {
      case 'onboarding':
        return <OnboardingVerificationScreen />;
      case 'member-profile':
        return <MemberProfileScreen />;
      case 'create-post':
        return <CreatePostScreen />;
      case 'create-time-capsule':
        return <CreateTimeCapsuleScreen />;
      case 'time-capsule-requests':
        return <TimeCapsuleRequestsScreen />;
      case 'editions-archive':
        return <EditionsArchiveScreen />;
      case 'hangouts':
        return <HangoutsScreen />;
      case 'notifications':
        return <NotificationsCenterScreen />;
      default:
        return null;
    }
  }, [activeSecondary]);

  if (activeSecondary) {
    return (
      <SafeAreaView style={styles.shell}>
        {secondaryContent}
        <View style={styles.backButtonArea}>
          <ActionButton label="Back to main tabs" onPress={() => setActiveSecondary(null)} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.shell}>
      <View style={styles.header}>
        <Text style={styles.brand}>The Table</Text>
        <Text style={styles.meta}>API: {apiConfig.baseUrl}</Text>
      </View>

      <View style={styles.main}>{primaryContent}</View>

      <ScreenFrame title="Secondary Screens" subtitle="Prototype navigation to all documented flows">
        <Card title="Open any secondary screen" tone="accent">
          <View style={styles.routeList}>
            {secondaryRoutes.map((route) => (
              <ActionButton key={route.key} label={route.label} onPress={() => setActiveSecondary(route.key)} />
            ))}
          </View>
        </Card>
      </ScreenFrame>

      <View style={styles.tabBar}>
        {tabs.map((tab) => (
          <Pressable
            key={tab.key}
            style={[styles.tab, activeTab === tab.key && styles.tabActive]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text style={[styles.tabLabel, activeTab === tab.key && styles.tabLabelActive]}>{tab.label}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.ivory,
  },
  header: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
  },
  brand: {
    color: colors.verdigris,
    fontSize: 24,
    fontWeight: '700',
  },
  meta: {
    color: colors.muted,
    marginTop: spacing.xs,
  },
  main: {
    flex: 1,
  },
  routeList: {
    gap: spacing.sm,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E9E2D6',
    backgroundColor: colors.white,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
  },
  tabActive: {
    borderTopWidth: 2,
    borderTopColor: colors.gold,
  },
  tabLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  tabLabelActive: {
    color: colors.verdigris,
  },
  backButtonArea: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
});
