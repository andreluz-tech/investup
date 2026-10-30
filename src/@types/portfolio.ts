export type AssetCategory = 'Ações' | 'FIIs' | 'Renda Fixa' | 'FIAGRO' | 'Cripto';

export interface AssetPosition {
  id: string;
  ticker: string;
  name: string;
  category: AssetCategory;
  quantity: number;
  averagePrice: number;
  currentPrice: number;
  totalValue: number;
  profitabilityPercentage: number; // Ex: 12.5 para +12.5%
}

export interface CategoryAllocation {
  category: AssetCategory;
  totalValue: number;
  percentage: number;
  color: string;
}