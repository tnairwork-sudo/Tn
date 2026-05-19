import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/tokens';

type Props = PropsWithChildren<{
  title: string;
  tone?: 'default' | 'accent' | 'warning';
}>;

export function Card({ title, tone = 'default', children }: Props) {
  return (
    <View style={[styles.card, tone === 'accent' && styles.accent, tone === 'warning' && styles.warning]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.body}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E9E2D6',
    padding: spacing.md,
  },
  accent: {
    borderColor: colors.gold,
  },
  warning: {
    borderColor: colors.burntOrange,
  },
  title: {
    color: colors.verdigris,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  body: {
    gap: spacing.xs,
  },
});
