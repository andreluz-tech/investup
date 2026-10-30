import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CategoryCardProps {
  title: string;
  value: number;
  variant: 'cobre' | 'dourado';
  percentage: string;
  icon: ReactNode;
}

export function CategoryCard({ title, value, variant, percentage, icon }: CategoryCardProps) {
  // Define as cores da borda de acordo com a variante (Renda Fixa vs Variável)
  const borderColors =
    variant === 'cobre'
      ? (['#fba57e', '#a34319', '#531f07'] as const)
      : (['#FFF1B8', '#E6B02E', '#A37415'] as const);

  const valueStyle = variant === 'cobre' ? styles.smallCardValueCobre : styles.smallCardValueDourado;

  return (
    <LinearGradient
      colors={borderColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.categoryCardBorder}
    >
      {/* Troca de View para LinearGradient para criar o reflexo iluminado no topo */}
      <LinearGradient
        colors={['rgba(35, 39, 52, 0.95)', 'rgba(17, 22, 34, 0.85)']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.categoryCardInner}
      >
        <View style={styles.cardHeaderRow}>
          <Text style={styles.categoryTitle}>{title}</Text>
          {icon}
        </View>

        <Text style={valueStyle}>
          R$ {value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </Text>

        <View style={styles.cardFooterRow}>
          <Text style={styles.percentGreen}>{percentage} </Text>
          <Text style={styles.todayNeutral}>(Hoje)</Text>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  categoryCardBorder: {
    flex: 1,
    borderRadius: 18,
    padding: 1.5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 8,
  },
  categoryCardInner: {
    flex: 1,
    borderRadius: 16.5,
    padding: 16,
    gap: 6,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#E2E8F0',
  },
  smallCardValueCobre: {
    fontSize: 17,
    fontWeight: '800',
    color: '#F0B5A1',
    marginVertical: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  smallCardValueDourado: {
    fontSize: 17,
    fontWeight: '800',
    color: '#F3C343',
    marginVertical: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cardFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentGreen: {
    fontSize: 12,
    fontWeight: '700',
    color: '#10B981',
  },
  todayNeutral: {
    fontSize: 12,
    fontWeight: '500',
    color: '#94A3B8',
  },
});