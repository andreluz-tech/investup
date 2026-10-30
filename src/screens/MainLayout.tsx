import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DashboardScreen from './DashboardScreen';
import WalletScreen from './WalletScreen';
import AllocationScreen from './AllocationScreen';
import { BottomNav, type NavigationTab } from '../components';

interface MainLayoutProps {
  userEmail?: string;
}

export default function MainLayout({ userEmail }: MainLayoutProps) {
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');

  return (
    <View style={styles.container}>
      {/* Área da Tela Ativa */}
      <View style={styles.content}>
        {activeTab === 'dashboard' && <DashboardScreen userEmail={userEmail} />}
        {activeTab === 'carteira' && <WalletScreen />}
        {activeTab === 'analise' && <AllocationScreen />}
        {activeTab === 'alocacao' && <AllocationScreen />}

        {activeTab === 'configuracoes' && <View style={styles.placeholder} />}
      </View>

      {/* Menu Inferior Fixo */}
      <View style={styles.navWrapper}>
        <BottomNav activeTab={activeTab} onSelectTab={(tab) => setActiveTab(tab)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070A10',
  },
  content: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    backgroundColor: '#070A10',
  },
  navWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 68,
    zIndex: 9999,
    elevation: 10,
    backgroundColor: '#0D121F',
  },
});