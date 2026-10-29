# 🚀 InvestUp | Mobile Financial Portfolio Tracker

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />
</p>

## 💡 Sobre o Projeto
O **InvestUp** é um aplicativo mobile multiplataforma desenvolvido em React Native e Expo com TypeScript, projetado para oferecer uma experiência de gestão patrimonial de alto desempenho (*Private Banking style*). O aplicativo conta com um Design System exclusivo em Dark Graphite e texturas metálicas em 3D, cálculos precisos de valorização de ativos e sincronização robusta com o Supabase.

---

## 🎨 Design System & UI Highlights
- **Dark Graphite Theme (`#0B0F19`)** combinando com acabamentos em gradientes metálicos refinados (Cobre 3D e Aço Prateado).
- **Renderização Vetorial (`react-native-svg`)** de alta performance para gráficos de desempenho temporal e sombras de prensa (*deboss*).
- **Tipografia Escalada** com hierarquia visual rigorosa e suporte a múltiplos horizontes e classes de ativos financeiros.

---

## 🛠️ Tecnologias & Stack
- **Core:** React Native, Expo SDK, TypeScript
- **Estilização & Vetores:** `expo-linear-gradient`, `react-native-svg`
- **Backend & Auth:** Supabase (PostgreSQL + Row Level Security)
- **Arquitetura:** Componentização modular orientada a features (*Clean Architecture approach*)

---

## 📁 Estrutura do Repositório
```text
investup/
├── .github/
│   └── workflows/          # Pipelines de CI/CD (Expo EAS Build)
├── docs/                   # Documentação técnica (Arquitetura e UI Specs)
├── src/
│   ├── @types/             # Tipagens globais do TypeScript (.d.ts)
│   ├── components/         # Componentes atômicos reutilizáveis (SilverButton, Custom Cards)
│   ├── constants/          # Tokens globais de design e paletas de cores
│   ├── navigation/         # Configuração de rotas e Bottom Tab Navigator
│   ├── screens/            # Telas principais (AuthScreen, DashboardScreen)
│   ├── services/           # Camada de comunicação com o Supabase e APIs
│   └── utils/              # Funções utilitárias e formatadores de moeda/datas
├── App.tsx                 # Entry point da aplicação Expo
├── app.json                # Configurações do Expo
├── package.json            # Dependências e scripts de execução
└── tsconfig.json           # Configuração estrita do TypeScript