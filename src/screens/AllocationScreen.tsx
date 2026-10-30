import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {
  AllocationHeader,
  DistributionBarCard,
  CategoryAllocationCard,
  type CategoryAllocation,
} from '../components';

const ALLOCATION_DATA: CategoryAllocation[] = [
  {
    id: '1',
    category: 'Ações',
    amount: 56952.2,
    percentage: 40,
    colors: ['#FFE5A3', '#D4AF37', '#AA771C'],
  },
  {
    id: '2',
    category: 'FIIs',
    amount: 35595.12,
    percentage: 25,
    colors: ['#38BDF8', '#0284C7', '#0369A1'],
  },
  {
    id: '3',
    category: 'Renda Fixa',
    amount: 28476.1,
    percentage: 20,
    colors: ['#FFCBA4', '#E07A5F', '#9E2A2B'],
  },
  {
    id: '4',
    category: 'FIAGRO',
    amount: 21357.08,
    percentage: 15,
    colors: ['#4ADE80', '#16A34A', '#15803D'],
  },
];

export default function AllocationScreen() {
  const totalAmount = ALLOCATION_DATA.reduce((acc, item) => acc + item.amount, 0);

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <AllocationHeader />

        <DistributionBarCard totalAmount={totalAmount} allocations={ALLOCATION_DATA} />

        <Text style={styles.sectionTitle}>Detalhamento</Text>
        <View style={styles.listContainer}>
          {ALLOCATION_DATA.map((item) => (
            <CategoryAllocationCard key={item.id} item={item} />
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
    gap: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 8,
  },
  listContainer: {
    gap: 12,
  },
});