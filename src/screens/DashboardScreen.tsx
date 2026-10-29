import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, {
  Text as SvgText,
  Path,
  Circle,
  Polyline,
  Defs,
  LinearGradient as SvgGradient,
  Stop,
  Rect,
  Filter,
  FeDropShadow,
} from 'react-native-svg';

const { width } = Dimensions.get('window');

// ESTILOS NO TOPO DO ARQUIVO (PREVINE ERROS DE HOISTING/ESCOPO NO TS)
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0B0F19',
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 54,
    paddingBottom: 100,
    gap: 20,
  },

  // HEADER
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

  // CARD PRINCIPAL - EFEITO ALMOFADADO/VOLUMÉTRICO REAL EM 3D
  mainCardShadow: {
    borderRadius: 24,
    backgroundColor: '#0B0F19',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.85,
    shadowRadius: 24,
    elevation: 20,
  },
  // MOLDURA DO BISEL (Cria o gradiente de reflexo volumétrico ao redor)
  mainCardBevelWrapper: {
    borderRadius: 24,
    padding: 2, // Espessura do bisel macio
  },
  mainCardGradientInner: {
    borderRadius: 22,
    padding: 24,
  },
  mainCardLabel: {
    fontSize: 13,
    color: '#2b0f03',
    fontWeight: '600',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(255, 255, 255, 0.35)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
    marginBottom: 10,
  },
  svgValueContainer: {
    height: 45,
    marginVertical: 2,
  },
  mainCardSubtext: {
    fontSize: 13,
    color: '#381505',
    fontWeight: '800',
    textShadowColor: 'rgba(255, 255, 255, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },

  // SEÇÃO DE DESEMPENHO (GRÁFICO)
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

  // BOTÕES PRATEADOS PÍLULA
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  silverButtonContainer: {
    flex: 1,
    height: 48,
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  silverGradient: {
    flex: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  silverButtonText: {
    color: '#0F172A',
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: -0.2,
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.7)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },

  // CARDS DE CATEGORIA
  cardsRow: {
    flexDirection: 'row',
    gap: 12,
  },
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
    backgroundColor: '#111622',
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

  // TRANSAÇÕES RECENTES
  transactionsSection: {
    gap: 12,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  // BOTTOM NAVIGATION BAR
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 68,
    backgroundColor: '#0D121F',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.06)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  navItem: {
    width: 48,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  iconBox: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTopBarContainer: {
    position: 'absolute',
    top: 0,
    width: 28,
    height: 2.5,
    borderRadius: 2,
    overflow: 'hidden',
  },
  activeTopBarGradient: {
    flex: 1,
    borderRadius: 2,
  },
});

// COMPONENTE REUTILIZÁVEL: BOTÃO PRATEADO PÍLULA
interface SilverButtonProps {
  title: string;
  onPress?: () => void;
}

function SilverButton({ title, onPress }: SilverButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.silverButtonContainer}
    >
      <LinearGradient
        colors={['#5b6370', '#b5c0cf', '#ffffff', '#b5c0cf', '#5b6370']}
        locations={[0.0, 0.25, 0.5, 0.75, 1.0]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.silverGradient}
      >
        <Text style={styles.silverButtonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

// DASHBOARD PRINCIPAL COMPLETA - INVESTUP
export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [timeFilter, setTimeFilter] = useState('1D');

  const totalPatrimonio = 142380.5;
  const rendaFixa = 21355.5;
  const rendaVariavel = 17330.5;

  const ultimasTransacoes = [
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
            onPress={() => setActiveTab('perfil')}
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

        {/* 1. CARD PRINCIPAL (RELEVO 3D MACIO SEM BORDAS FINAS DURAS) */}
        <View style={styles.mainCardShadow}>
          {/* MOLDURA DE REFLEXO E BISEL (LUZ EM CIMA E SOMBRA EM BAIXO) */}
          <LinearGradient
            colors={['#FFDCB8', '#D67D52', '#7A2C08', '#2D0D02']}
            locations={[0.0, 0.3, 0.7, 1.0]}
            start={{ x: 0.1, y: 0 }}
            end={{ x: 0.9, y: 1 }}
            style={styles.mainCardBevelWrapper}
          >
            {/* CORPO DE COBRE INTERNO */}
            <LinearGradient
              colors={['#fba57e', '#df7c51', '#a34319', '#eb9169', '#913c16', '#531f07']}
              locations={[0.0, 0.25, 0.5, 0.6, 0.85, 1.0]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.mainCardGradientInner}
            >
              <Text style={styles.mainCardLabel}>PATRIMÔNIO TOTAL</Text>

              {/* Valor com Gradiente Dourado + Sombra de Prensa Escavada */}
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
                        floodColor="#1A0802"
                        floodOpacity="0.95"
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

              <Text style={styles.mainCardSubtext}>▲ +2.4% (Hoje)</Text>
            </LinearGradient>
          </LinearGradient>
        </View>

        {/* 2. SEÇÃO DE DESEMPENHO (GRÁFICO) */}
        <View style={styles.chartSection}>
          <View style={styles.chartHeader}>
            <Text style={styles.sectionTitle}>Desempenho</Text>
            
            <View style={styles.timeFilterRow}>
              {['1D', '1W', '1M', '1Y', 'ALL'].map((tf) => {
                const isActive = timeFilter === tf;
                return (
                  <TouchableOpacity
                    key={tf}
                    onPress={() => setTimeFilter(tf)}
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

        {/* 3. BOTÕES PRATEADOS */}
        <View style={styles.buttonRow}>
          <SilverButton title="Adicionar Transação" onPress={() => {}} />
          <SilverButton title="Rebalancear" onPress={() => {}} />
        </View>

        {/* 4. CARDS DE CATEGORIA */}
        <View style={styles.cardsRow}>
          
          {/* Renda Fixa */}
          <LinearGradient
            colors={['#fba57e', '#a34319', '#531f07']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.categoryCardBorder}
          >
            <View style={styles.categoryCardInner}>
              <View style={styles.cardHeaderRow}>
                <Text style={styles.categoryTitle}>Renda Fixa</Text>
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
                    d="M12 6v12M15 9.5a2.5 2.5 0 0 0-2.5-2.5H10a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4h-3.5A2.5 2.5 0 0 1 8 14.5"
                    stroke="url(#gradCobreIcon)"
                  />
                </Svg>
              </View>

              <Text style={styles.smallCardValueCobre}>
                R$ {rendaFixa.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </Text>

              <View style={styles.cardFooterRow}>
                <Text style={styles.percentGreen}>+2.4% </Text>
                <Text style={styles.todayNeutral}>(Hoje)</Text>
              </View>
            </View>
          </LinearGradient>

          {/* Renda Variável */}
          <LinearGradient
            colors={['#FFF1B8', '#E6B02E', '#A37415']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.categoryCardBorder}
          >
            <View style={styles.categoryCardInner}>
              <View style={styles.cardHeaderRow}>
                <Text style={styles.categoryTitle}>Renda Variável</Text>
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
              </View>

              <Text style={styles.smallCardValueDourado}>
                R$ {rendaVariavel.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </Text>

              <View style={styles.cardFooterRow}>
                <Text style={styles.percentGreen}>+2.4% </Text>
                <Text style={styles.todayNeutral}>(Hoje)</Text>
              </View>
            </View>
          </LinearGradient>

        </View>

        {/* 5. ÚLTIMAS TRANSAÇÕES */}
        <View style={styles.transactionsSection}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Atividades Recentes</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Ver todas</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.transactionsList}>
            {ultimasTransacoes.map((item) => (
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

      </ScrollView>

      {/* 6. BOTTOM NAVIGATION BAR */}
      <View style={styles.bottomNav}>
        {[
          { id: 'dashboard', key: 'home' },
          { id: 'analise', key: 'chart' },
          { id: 'carteira', key: 'wallet' },
          { id: 'alocacao', key: 'bars' },
          { id: 'configuracoes', key: 'gear' },
        ].map((nav) => {
          const isActive = activeTab === nav.id;
          const strokeColor = isActive ? '#FFF1B8' : '#475569';

          return (
            <TouchableOpacity
              key={nav.id}
              activeOpacity={0.7}
              onPress={() => setActiveTab(nav.id)}
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
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
                  {nav.key === 'home' && (
                    <Path
                      d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5z"
                      stroke={strokeColor}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}

                  {nav.key === 'chart' && (
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

                  {nav.key === 'wallet' && (
                    <>
                      <Path
                        d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"
                        stroke={strokeColor}
                      />
                      <Path d="M16 14h2" stroke={strokeColor} strokeLinecap="round" />
                      <Path d="M4 7V5a2 2 0 012-2h12" stroke={strokeColor} />
                    </>
                  )}

                  {nav.key === 'bars' && (
                    <Path
                      d="M6 20V10M12 20V4M18 20v-7"
                      stroke={strokeColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}

                  {nav.key === 'gear' && (
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
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}