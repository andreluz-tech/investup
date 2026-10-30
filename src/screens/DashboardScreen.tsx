import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Svg, {
  Defs,
  LinearGradient as SvgGradient,
  Stop,
  Circle,
  Path,
  Polyline,
} from 'react-native-svg';

// Importando as tipagens Pro Developer
import { TimeFilterOption, Transaction } from '../@types';

// Importando os componentes modulares
import { PortfolioCard } from '../components/PortfolioCard';
import { SilverButton } from '../components/SilverButton';
import { CategoryCard } from '../components/CategoryCard';
import { ChartSection } from '../components/ChartSection';
import { TransactionsList } from '../components/TransactionsList';

interface DashboardScreenProps {
  userEmail?: string;
}

export default function DashboardScreen({ userEmail }: DashboardScreenProps) {
  const [timeFilter, setTimeFilter] = useState<TimeFilterOption>('1D');
  
  const totalPatrimonio = 142380.5;
  const rendaFixa = 21355.5;
  const rendaVariavel = 17330.5;

  const ultimasTransacoes: Transaction[] = [
    { id: '1', ticker: 'WEGE3', tipo: 'Compra', valor: 'R$ 1.250,00', data: 'Hoje' },
    { id: '2', ticker: 'Tesouro Selic 2029', tipo: 'Aplicação', valor: 'R$ 3.000,00', data: 'Ontem' },
    { id: '3', ticker: 'VALE3', tipo: 'Provento', valor: 'R$ 142,80', data: '22 Out' },
  ];

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity 
            activeOpacity={0.8} 
            style={styles.userInfo}
            onPress={() => {}}
          >
            <View style={styles.avatarBorder}>
              <View style={styles.avatarInner}>
                <Text style={styles.avatarText}>AH</Text>
              </View>
            </View>
            <View>
              <Text style={styles.userGreeting}>Olá, André</Text>
              <Text style={styles.userAccountType}>InvestUp Private</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 1. CARD PRINCIPAL (PATRIMÔNIO TOTAL MODULARIZADO) */}
        <PortfolioCard totalPatrimonio={totalPatrimonio} />

        {/* 2. SEÇÃO DE DESEMPENHO (GRÁFICO) */}
        <ChartSection timeFilter={timeFilter} onSelectFilter={setTimeFilter} />

        {/* 3. BOTÕES PRATEADOS PÍLULA */}
        <View style={styles.buttonRow}>
          <SilverButton title="Adicionar Transação" onPress={() => {}} />
          <SilverButton title="Rebalancear" onPress={() => {}} />
        </View>

        {/* 4. CARDS DE CATEGORIA (RENDA FIXA E VARIÁVEL) */}
        <View style={styles.cardsRow}>
          <CategoryCard
            title="Renda Fixa"
            value={rendaFixa}
            variant="cobre"
            percentage="+2.4%"
            icon={
              <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <Defs>
                  <SvgGradient id="gradCobreIcon" x1="0" y1="0" x2="1" y2="1">
                    <Stop offset="0%" stopColor="#FAD6C8" />
                    <Stop offset="50%" stopColor="#F0B5A1" />
                    <Stop offset="100%" stopColor="#A34319" />
                  </SvgGradient>
                </Defs>
                <Circle cx="12" cy="12" r="10" stroke="url(#gradCobreIcon)" />
                <Path
                  d="M12 6v12 M15 9.5 a2.5 2.5 0 0 0 -2.5 -2.5 H10 a2 2 0 0 0 0 4 h4 a2 2 0 0 1 0 4 H10.5 a2.5 2.5 0 0 1 -2.5 -2.5"
                  stroke="url(#gradCobreIcon)"
                />
              </Svg>
            }
          />

          <CategoryCard
            title="Renda Variável"
            value={rendaVariavel}
            variant="dourado"
            percentage="+2.4%"
            icon={
              <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2">
                <Defs>
                  <SvgGradient id="gradDouradoIcon" x1="0" y1="0" x2="1" y2="1">
                    <Stop offset="0%" stopColor="#FFF1B8" />
                    <Stop offset="50%" stopColor="#E6B02E" />
                    <Stop offset="100%" stopColor="#A37415" />
                  </SvgGradient>
                </Defs>
                <Polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="url(#gradDouradoIcon)" />
                <Polyline points="17 6 23 6 23 12" stroke="url(#gradDouradoIcon)" />
              </Svg>
            }
          />
        </View>

        {/* 5. ÚLTIMAS TRANSAÇÕES */}
        <TransactionsList transactions={ultimasTransacoes} onSeeAllPress={() => {}} />

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
    paddingBottom: 90, // Espaço confortável para não cortar o último item sob a BottomNav
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarBorder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    padding: 1.5,
    backgroundColor: '#E6B02E',
  },
  avatarInner: {
    flex: 1,
    backgroundColor: '#111622',
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFF1B8',
    fontWeight: '800',
    fontSize: 14,
  },
  userGreeting: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  userAccountType: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  cardsRow: {
    flexDirection: 'row',
    gap: 12,
  },
});