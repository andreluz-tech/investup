// Tipos para os filtros de tempo do gráfico de desempenho
export type TimeFilterOption = '1D' | '1W' | '1M' | '1Y' | 'ALL';

// Tipos para as abas da barra de navegação inferior (Bottom Tab Bar)
export type NavigationTab = 'dashboard' | 'analise' | 'carteira' | 'alocacao' | 'configuracoes';

// Tipagem para a estrutura de uma transação recente
export interface Transaction {
  id: string;
  ticker: string;
  tipo: 'Compra' | 'Aplicação' | 'Provento' | 'Venda';
  valor: string;
  data: string;
}
// Re-exportação das tipagens de portfólio e ativos (AssetPosition, AssetCategory, etc.)
export * from './portfolio';