import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AssetPosition } from '../@types/portfolio';

interface AssetCardProps {
  asset: AssetPosition;
}

export function AssetCard({ asset }: AssetCardProps) {
  const isPositive = asset.profitabilityPercentage >= 0;
  const profitColor = isPositive ? '#10B981' : '#EF4444';
  const profitFormatted = `${isPositive ? '+' : ''}${asset.profitabilityPercentage.toFixed(2)}%`;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerRow}>
        <View style={styles.badgeContainer}>
          <Text style={styles.tickerText}>{asset.ticker}</Text>
          <Text style={styles.categoryBadge}>{asset.category}</Text>
        </View>
        <Text style={styles.totalValueText}>
          R$ {asset.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </Text>
      </View>

      <View style={styles.detailsRow}>
        <Text style={styles.nameText} numberOfLines={1}>
          {asset.name}
        </Text>
        <Text style={[styles.profitText, { color: profitColor }]}>
          {profitFormatted}
        </Text>
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.metaText}>
          {asset.quantity} un. • PM: R$ {asset.averagePrice.toFixed(2)}
        </Text>
        <Text style={styles.metaText}>
          Atual: R$ {asset.currentPrice.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'rgba(17, 22, 34, 0.85)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.06)',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tickerText: {
    color: '#FFF1B8',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  categoryBadge: {
    color: '#94A3B8',
    fontSize: 10,
    fontWeight: '700',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  totalValueText: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: '700',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  nameText: {
    color: '#94A3B8',
    fontSize: 12,
    flex: 1,
    marginRight: 8,
  },
  profitText: {
    fontSize: 13,
    fontWeight: '700',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.04)',
  },
  metaText: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: '500',
  },
});