# GS Mobile – Monitoramento de Interrupções de Energia

Aplicativo desenvolvido em React Native com Expo para o monitoramento de eventos relacionados a interrupções no fornecimento de energia elétrica. Ele permite o registro, visualização, edição e exclusão de eventos, além de oferecer recomendações para lidar com as ocorrências.

## 📱 Funcionalidades

- Registro de eventos com:
  - Localização da ocorrência
  - Tempo de interrupção
  - Prejuízos causados
- Visualização de todos os eventos em lista
- Edição individual dos campos de um evento (localização, tempo, prejuízos)
- Exclusão de eventos
- Recomendações sobre o que fazer em caso de falhas elétricas
- Suporte ao tema claro/escuro
- Persistência de dados com AsyncStorage

## 🚀 Tecnologias Utilizadas

- React Native (via Expo)
- AsyncStorage
- React Navigation
- Ícones via @expo/vector-icons (MaterialIcons)

## 🧠 Organização do Código

- Telas:
  - Panorama (lista de eventos)
  - Localizacao
  - Tempo
  - Prejuizos
  - Recomendacoes
- Armazenamento local:
  - storage.js
- Navegação:
  - react-navigation stack

## 👥 Integrantes

- Fabrício Saavedra – RA: 97631  
- Guilherme Akio – RA: 98582  
- Açussena Macedo Mautone – RA: 552568

## 📦 Instalação e Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/gs-mobile.git
   cd gs-mobile
