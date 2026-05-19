import { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/tokens';

type Props = PropsWithChildren<{
  title: string;
  subtitle?: string;
}>;

export function ScreenFrame({ title, subtitle, children }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ivory,
    padding: spacing.lg,
    paddingBottom: spacing.lg * 2,
    minHeight: '100%',
  },
  title: {
    color: colors.verdigris,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  subtitle: {
    color: colors.muted,
    marginBottom: spacing.md,
  },
  content: {
    gap: spacing.sm,
  },
});
