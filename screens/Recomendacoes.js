import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function Recomendacoes() {
  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Recomendações</Text>
      <Text>• Tenha lanternas e pilhas sempre acessíveis.</Text>
      <Text>• Evite abrir geladeira e freezer durante a falta de energia.</Text>
      <Text>• Desligue aparelhos eletrônicos para evitar danos quando a energia voltar.</Text>
      <Text>• Mantenha contato com vizinhos, especialmente idosos e pessoas vulneráveis.</Text>
      <Text>• Após tempestades, cuidado com fios caídos e postes danificados.</Text>
    </ScrollView>
  );
}