import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export interface CategoryAllocation {
  id: string;
  category: string;
  amount: number;
  percentage: number;
  colors: readonly [string, string, ...string[]];
}

interface DistributionBarCardProps {
  totalAmount: number;
  allocations: CategoryAllocation[];
}

const formatCurrency = (val: number) => {
  return `R$ ${val.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

export function DistributionBarCard({ totalAmount, allocations }: DistributionBarCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>DIVERSIFICAÇÃO TOTAL</Text>
      <Text style={styles.totalValue}>{formatCurrency(totalAmount)}</Text>

      {/* Barra Única: O container externo arredonda as pontas e recorta os blocos internos */}
      <View style={styles.progressBarContainer}>
        {allocations.map((item) => (
          <View
            key={item.id}
            style={{
              width: `${item.percentage}%`,
              height: '100%',
            }}
          >
            <LinearGradient
              colors={item.colors as any}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progressSegment}
            />
          </View>
        ))}
      </View>

      {/* Legenda dos Segmentos */}
      <View style={styles.legendGrid}>
        {allocations.map((item) => (
          <View key={item.id} style={styles.legendItem}>
            <LinearGradient
              colors={item.colors as any}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.dot}
            />
            <Text style={styles.legendText}>
              {item.category} <Text style={styles.legendPercent}>({item.percentage}%)</Text>
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(17, 22, 34, 0.85)', // Tom fumê idêntico aos cards de ativos
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  cardTitle: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  totalValue: {
    fontSize: 28,
    fontWeight: '800',
    color: '#E6B02E',
    marginVertical: 6,
  },
  progressBarContainer: {
    height: 12,
    flexDirection: 'row',
    width: '100%',
    borderRadius: 6,
    overflow: 'hidden',
    marginVertical: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  progressSegment: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  legendGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 2,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  legendText: {
    color: '#CBD5E1',
    fontSize: 12,
    fontWeight: '600',
  },
  legendPercent: {
    color: '#64748B',
  },
});