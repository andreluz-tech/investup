import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export type CategoryFilterOption = 'Todas' | 'Ações' | 'FIIs' | 'FIAGRO' | 'Renda Fixa';

interface CategoryFilterProps {
  selectedCategory: CategoryFilterOption;
  onSelectCategory: (category: CategoryFilterOption) => void;
}

const CATEGORIES: CategoryFilterOption[] = ['Todas', 'Ações', 'FIIs', 'FIAGRO', 'Renda Fixa'];

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <TouchableOpacity
              key={category}
              activeOpacity={0.8}
              onPress={() => onSelectCategory(category)}
              style={[styles.pill, isActive && styles.pillActive]}
            >
              <Text style={[styles.pillText, isActive && styles.pillTextActive]}>
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  scrollContent: {
    gap: 8,
  },
  pill: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(17, 22, 34, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  pillActive: {
    backgroundColor: '#E6B02E',
    borderColor: '#FFF1B8',
  },
  pillText: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
  },
  pillTextActive: {
    color: '#070A10',
    fontWeight: '800',
  },
});