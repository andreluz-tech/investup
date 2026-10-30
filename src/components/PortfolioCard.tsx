import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, {
  Text as SvgText,
  Defs,
  LinearGradient as SvgGradient,
  Stop,
  Filter,
  FeDropShadow,
} from 'react-native-svg';

interface PortfolioCardProps {
  totalPatrimonio: number;
  variationPercentage?: number;
}

export function PortfolioCard({
  totalPatrimonio,
  variationPercentage = 2.4,
}: PortfolioCardProps) {
  const isPositive = variationPercentage >= 0;
  const formattedPercentage = `${isPositive ? '▲ +' : '▼ '}${variationPercentage.toFixed(1)}%`;
  const percentageColor = isPositive ? '#10B981' : '#EF4444';

  return (
    <View style={styles.mainCardShadow}>
      {/* Moldura Externa com Gradiente Metálico */}
      <LinearGradient
        colors={['#FFDCB8', '#D67D52', '#7A2C08', '#2D0D02']}
        locations={[0.0, 0.3, 0.7, 1.0]}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.9, y: 1 }}
        style={styles.mainCardBevelWrapper}
      >
        {/* Corpo Interno com Gradiente Iluminado */}
        <LinearGradient
          colors={['rgba(35, 39, 52, 0.95)', 'rgba(17, 22, 34, 0.85)']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.mainCardInner}
        >
          <Text style={styles.mainCardLabel}>PATRIMÔNIO TOTAL</Text>

          <View style={styles.svgValueContainer}>
            <Svg height="45" width="100%" viewBox="0 0 320 45">
              <Defs>
                <SvgGradient id="logoGoldGradient" x1="0" y1="0" x2="0" y2="1">
                  <Stop offset="0%" stopColor="#FFF1B8" />
                  <Stop offset="50%" stopColor="#F3C343" />
                  <Stop offset="100%" stopColor="#9B6C0D" />
                </SvgGradient>

                <Filter id="debossShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <FeDropShadow
                    dx="0"
                    dy="2"
                    stdDeviation="1.2"
                    floodColor="#000000"
                    floodOpacity="0.8"
                  />
                </Filter>
              </Defs>

              <SvgText
                fill="url(#logoGoldGradient)"
                filter="url(#debossShadow)"
                fontSize="42"
                fontWeight="900"
                x="0"
                y="32"
                letterSpacing="0.5"
              >
                R$ {totalPatrimonio.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </SvgText>
            </Svg>
          </View>

          <View style={styles.subtextContainer}>
            <Text style={[styles.variationText, { color: percentageColor }]}>
              {formattedPercentage}
            </Text>
            <Text style={styles.todayText}> (Hoje)</Text>
          </View>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCardShadow: {
    borderRadius: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.85,
    shadowRadius: 24,
    elevation: 20,
  },
  mainCardBevelWrapper: {
    borderRadius: 24,
    padding: 2,
  },
  mainCardInner: {
    borderRadius: 22,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  mainCardLabel: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '600',
    letterSpacing: 0.6,
    marginBottom: 8,
  },
  svgValueContainer: {
    height: 45,
    marginVertical: 2,
  },
  subtextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  variationText: {
    fontSize: 13,
    fontWeight: '700',
  },
  todayText: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '500',
  },
});