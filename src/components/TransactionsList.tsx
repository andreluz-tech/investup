import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Transaction } from '../@types';

interface TransactionsListProps {
  transactions: Transaction[];
  onSeeAllPress?: () => void;
}

export function TransactionsList({ transactions, onSeeAllPress }: TransactionsListProps) {
  return (
    <View style={styles.transactionsSection}>
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>Atividades Recentes</Text>
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text style={styles.seeAllText}>Ver todas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionsList}>
        {transactions.map((item) => (
          <View key={item.id} style={styles.transactionItem}>
            <View style={styles.txIconBox}>
              <Text style={styles.txIconText}>
                {item.tipo === 'Compra' ? '↗' : item.tipo === 'Provento' ? '💰' : '📥'}
              </Text>
            </View>
            <View style={styles.txInfo}>
              <Text style={styles.txTicker}>{item.ticker}</Text>
              <Text style={styles.txType}>{item.tipo} • {item.data}</Text>
            </View>
            <Text style={styles.txValue}>{item.valor}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  transactionsSection: {
    gap: 12,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#E2E8F0',
    fontSize: 16,
    fontWeight: '700',
  },
  seeAllText: {
    color: '#E6B02E',
    fontSize: 13,
    fontWeight: '600',
  },
  transactionsList: {
    backgroundColor: '#111622',
    borderRadius: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    gap: 12,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txIconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1A202C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txIconText: {
    fontSize: 14,
  },
  txInfo: {
    flex: 1,
    marginLeft: 12,
  },
  txTicker: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  txType: {
    color: '#64748B',
    fontSize: 11,
  },
  txValue: {
    color: '#E2E8F0',
    fontSize: 14,
    fontWeight: '700',
  },
});