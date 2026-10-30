import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';
import { TimeFilterOption } from '../@types';

const { width } = Dimensions.get('window');

interface ChartSectionProps {
  timeFilter: TimeFilterOption;
  onSelectFilter: (filter: TimeFilterOption) => void;
}

export function ChartSection({ timeFilter, onSelectFilter }: ChartSectionProps) {
  const filters: TimeFilterOption[] = ['1D', '1W', '1M', '1Y', 'ALL'];

  return (
    <View style={styles.chartSection}>
      <View style={styles.chartHeader}>
        <Text style={styles.sectionTitle}>Desempenho</Text>
        
        <View style={styles.timeFilterRow}>
          {filters.map((tf) => {
            const isActive = timeFilter === tf;
            return (
              <TouchableOpacity
                key={tf}
                onPress={() => onSelectFilter(tf)}
                style={[
                  styles.conceptFilterPill,
                  isActive && styles.conceptFilterPillActiveGold,
                ]}
              >
                <Text
                  style={[
                    styles.conceptFilterText,
                    isActive && styles.conceptFilterTextActiveGold,
                  ]}
                >
                  {tf}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Svg height="120" width={width - 72} viewBox="0 0 300 120">
          <Defs>
            <SvgGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor="#E6B02E" stopOpacity="0.3" />
              <Stop offset="100%" stopColor="#E6B02E" stopOpacity="0.0" />
            </SvgGradient>
            <SvgGradient id="chartLine" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0%" stopColor="#CE844B" />
              <Stop offset="50%" stopColor="#E6B02E" />
              <Stop offset="100%" stopColor="#FFF1B8" />
            </SvgGradient>
          </Defs>
          
          <Path
            d="M 0 100 Q 50 80, 100 65 T 200 40 T 300 10 L 300 120 L 0 120 Z"
            fill="url(#chartFill)"
          />
          <Path
            d="M 0 100 Q 50 80, 100 65 T 200 40 T 300 10"
            fill="none"
            stroke="url(#chartLine)"
            strokeWidth="2.5"
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chartSection: {
    backgroundColor: '#111622',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    gap: 12,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#E2E8F0',
    fontSize: 16,
    fontWeight: '700',
  },
  timeFilterRow: {
    flexDirection: 'row',
    gap: 6,
  },
  conceptFilterPill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    backgroundColor: 'transparent',
  },
  conceptFilterPillActiveGold: {
    borderColor: '#FFF1B8',
    backgroundColor: 'rgba(230, 176, 46, 0.15)',
  },
  conceptFilterText: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: '700',
  },
  conceptFilterTextActiveGold: {
    color: '#FFF1B8',
    fontWeight: '800',
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
});
