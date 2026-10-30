import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export type NavigationTab = 'dashboard' | 'analise' | 'carteira' | 'alocacao' | 'configuracoes';

interface BottomNavProps {
  activeTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
}

const NAV_ITEMS: { id: NavigationTab; label: string; iconKey: string }[] = [
  { id: 'dashboard', label: 'Início', iconKey: 'home' },
  { id: 'analise', label: 'Análise', iconKey: 'chart' },
  { id: 'carteira', label: 'Carteira', iconKey: 'wallet' },
  { id: 'alocacao', label: 'Alocação', iconKey: 'bars' },
  { id: 'configuracoes', label: 'Ajustes', iconKey: 'gear' },
];

export function BottomNav({ activeTab, onSelectTab }: BottomNavProps) {
  return (
    <View style={styles.bottomNav}>
      {NAV_ITEMS.map((item) => {
        const isActive = activeTab === item.id;
        const strokeColor = isActive ? '#FFF1B8' : '#475569';

        return (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.7}
            onPress={() => onSelectTab(item.id)}
            style={styles.navItem}
          >
            {isActive && (
              <View style={styles.activeTopBarContainer}>
                <LinearGradient
                  colors={['#FFF1B8', '#E6B02E', '#9B6C0D']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.activeTopBarGradient}
                />
              </View>
            )}

            <View style={styles.iconBox}>
              <Svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
                {item.iconKey === 'home' && (
                  <Path
                    d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5z"
                    stroke={strokeColor}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}

                {item.iconKey === 'chart' && (
                  <>
                    <Rect x="3" y="3" width="18" height="18" rx="5" stroke={strokeColor} />
                    <Path
                      d="M7 15l3.5-3.5 2.5 2.5 4-4"
                      stroke={strokeColor}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M14 10h3v3"
                      stroke={strokeColor}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </>
                )}

                {item.iconKey === 'wallet' && (
                  <>
                    <Path
                      d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"
                      stroke={strokeColor}
                    />
                    <Path d="M16 14h2" stroke={strokeColor} strokeLinecap="round" />
                    <Path d="M4 7V5a2 2 0 012-2h12" stroke={strokeColor} />
                  </>
                )}

                {item.iconKey === 'bars' && (
                  <Path
                    d="M6 20V10M12 20V4M18 20v-7"
                    stroke={strokeColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}

                {item.iconKey === 'gear' && (
                  <>
                    <Path
                      d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.38a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z"
                      stroke={strokeColor}
                    />
                    <Circle cx="12" cy="12" r="3" stroke={strokeColor} />
                  </>
                )}
              </Svg>
            </View>

            <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    width: '100%',
    height: 68,
    backgroundColor: 'rgba(13, 18, 31, 0.98)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
    gap: 3,
  },
  iconBox: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTopBarContainer: {
    position: 'absolute',
    top: 0,
    width: '50%',
    height: 2,
  },
  activeTopBarGradient: {
    flex: 1,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  navLabel: {
    fontSize: 10,
    color: '#475569',
    fontWeight: '600',
  },
  navLabelActive: {
    color: '#FFF1B8',
    fontWeight: '800',
  },
});