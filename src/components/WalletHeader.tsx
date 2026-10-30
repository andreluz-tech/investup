import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GradientText from './GradientText';

interface WalletHeaderProps {
  totalAssets: number;
}

export function WalletHeader({ totalAssets }: WalletHeaderProps) {
  return (
    <View style={styles.header}>
      <GradientText text="Minha Carteira" style={styles.title} />
      <Text style={styles.subtitle}>Posições e distribuição de ativos</Text>
      <Text style={styles.assetCount}>Ativos ({totalAssets})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 2,
    marginBottom: 16,
  },
  assetCount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 8,
  },
});