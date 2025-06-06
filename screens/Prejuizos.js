import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Prejuizos({ route, navigation }) {
  const { evento = {}, index = null, novo = true } = route.params || {};
  const [prejuizos, setPrejuizos] = useState(evento.prejuizos || '');

  const salvarEvento = async () => {
    try {
      const eventosSalvos = await AsyncStorage.getItem('eventos');
      const listaEventos = JSON.parse(eventosSalvos) || [];

      const novoEvento = { ...evento, prejuizos };

      if (novo) {
        listaEventos.push(novoEvento);
      } else if (typeof index === 'number' && index >= 0 && index < listaEventos.length) {
        listaEventos[index] = novoEvento;
      } else {
        Alert.alert('Erro', 'Modo de edição não suportado.');
        return;
      }

      await AsyncStorage.setItem('eventos', JSON.stringify(listaEventos));
      navigation.navigate('Panorama');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar o evento.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descreva os prejuízos:</Text>
      <TextInput
        style={styles.input}
        value={prejuizos}
        onChangeText={setPrejuizos}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.botao} onPress={salvarEvento}>
        <Text style={styles.textoBotao}>Finalizar Evento</Text>
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
    textAlignVertical: 'top',
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
