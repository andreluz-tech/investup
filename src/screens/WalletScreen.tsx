import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { AssetCard } from '../components/AssetCard';
import { WalletHeader } from '../components/WalletHeader';
import { CategoryFilter, type CategoryFilterOption } from '../components/CategoryFilter';
import { AssetPosition } from '../@types/portfolio';

const WALLET_ASSETS: AssetPosition[] = [
  {
    id: '1',
    ticker: 'WEGE3',
    name: 'WEG S.A.',
    category: 'Ações',
    totalValue: 6630,
    profitabilityPercentage: 14.80,
    averagePrice: 38.50,
    currentPrice: 44.20,
    quantity: 150,
  },
  {
    id: '2',
    ticker: 'BTLG11',
    name: 'BTG Pactual Logística',
    category: 'FIIs',
    totalValue: 4612.50,
    profitabilityPercentage: 4.48,
    averagePrice: 98.10,
    currentPrice: 102.50,
    quantity: 45,
  },
  {
    id: '3',
    ticker: 'PETR4',
    name: 'Petróleo Brasileiro S.A.',
    category: 'Ações',
    totalValue: 7760,
    profitabilityPercentage: 10.85,
    averagePrice: 35.00,
    currentPrice: 38.80,
    quantity: 200,
  },
  {
    id: '4',
    ticker: 'SNAG11',
    name: 'Suno Agro FIAGRO',
    category: 'FIAGRO',
    totalValue: 3015,
    profitabilityPercentage: -0.98,
    averagePrice: 10.15,
    currentPrice: 10.05,
    quantity: 300,
  },
];

export default function WalletScreen() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterOption>('Todas');

  const filteredAssets = selectedCategory === 'Todas'
    ? WALLET_ASSETS
    : WALLET_ASSETS.filter((asset) => asset.category === selectedCategory);

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <WalletHeader totalAssets={filteredAssets.length} />

        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <View style={styles.assetsList}>
          {filteredAssets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#070A10',
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 54,
    paddingBottom: 90,
    gap: 16,
  },
  assetsList: {
    gap: 12,
    marginTop: 8,
  },
});