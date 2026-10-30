import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CategoryAllocation } from './DistributionBarCard';

interface CategoryAllocationCardProps {
  item: CategoryAllocation;
}

const formatCurrency = (val: number) => {
  return `R$ ${val.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

export function CategoryAllocationCard({ item }: CategoryAllocationCardProps) {
  return (
    <View style={styles.allocationRow}>
      <View style={styles.rowLeft}>
        <LinearGradient
          colors={item.colors as any}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.categoryIndicator}
        />
        <View style={styles.infoBox}>
          <Text style={styles.categoryName}>{item.category}</Text>
          <Text style={styles.categoryPercentage}>{item.percentage}% da carteira</Text>
        </View>
      </View>

      <Text style={styles.categoryValue}>{formatCurrency(item.amount)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  allocationRow: {
    backgroundColor: 'rgba(17, 22, 34, 0.85)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.03)',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  categoryIndicator: {
    width: 4,
    height: 38,
    borderRadius: 2,
  },
  infoBox: {
    gap: 2,
  },
  categoryName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  categoryPercentage: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '500',
  },
  categoryValue: {
    color: '#E6B02E',
    fontSize: 16,
    fontWeight: '800',
  },
});