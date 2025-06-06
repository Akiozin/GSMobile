import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Tempo({ route, navigation }) {
  const { evento = {}, index = null, novo = true } = route.params || {};
  const [tempo, setTempo] = useState(evento.tempo || '');

  const proximo = () => {
    const novoEvento = { ...evento, tempo };
    navigation.navigate('Prejuizos', { evento: novoEvento, index, novo });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tempo sem energia (em horas):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={tempo.toString()}
        onChangeText={setTempo}
        placeholder="Ex: 2.5"
      />
      <TouchableOpacity style={styles.botao} onPress={proximo}>
        <Text style={styles.textoBotao}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
