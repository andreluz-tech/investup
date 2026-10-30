import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GradientText from './GradientText';

export function AllocationHeader() {
  return (
    <View style={styles.header}>
      <GradientText text="Alocação de Carteira" style={styles.title} />
      <Text style={styles.subtitle}>Distribuição percentual por classe de ativos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 2,
  },
});