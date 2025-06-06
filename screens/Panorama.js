import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Panorama() {
  const [eventos, setEventos] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    if (isFocused) carregarEventos();
  }, [isFocused]);

  const carregarEventos = async () => {
    const dados = await AsyncStorage.getItem('eventos');
    setEventos(JSON.parse(dados) || []);
  };

  const deletarEvento = (index) => {
    Alert.alert(
      'Confirmar exclusão',
      'Deseja realmente deletar este evento?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Deletar',
          style: 'destructive',
          onPress: async () => {
            const novosEventos = [...eventos];
            novosEventos.splice(index, 1);
            await AsyncStorage.setItem('eventos', JSON.stringify(novosEventos));
            setEventos(novosEventos);
          },
        },
      ]
    );
  };

  const editarEvento = (index) => {
    const eventoSelecionado = eventos[index];
    navigation.navigate('Localizacao', {
      evento: eventoSelecionado,
      index,
      novo: false,
    });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.titulo}>Evento {index + 1}</Text>
      <Text>Localização: {item.localizacao || '-'}</Text>
      <Text>Tempo sem energia: {item.tempo || '-'} h</Text>
      <Text>Prejuízos: {item.prejuizos || '-'}</Text>
      <View style={styles.botoes}>
        <TouchableOpacity onPress={() => editarEvento(index)} style={styles.botaoEditar}>
          <MaterialIcons name="edit" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deletarEvento(index)} style={styles.botaoDeletar}>
          <MaterialIcons name="delete" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resumo dos Eventos</Text>

      <View style={styles.topBotoes}>
        <TouchableOpacity
          style={styles.botaoNovo}
          onPress={() => navigation.navigate('Localizacao', { novo: true })}
        >
          <MaterialIcons name="add-circle" size={20} color="#fff" />
          <Text style={styles.textoBotao}>Novo Evento</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoRecomendacoes}
          onPress={() => navigation.navigate('Recomendacoes')}
        >
          <MaterialIcons name="info" size={20} color="#fff" />
          <Text style={styles.textoBotao}>Recomendações</Text>
        </TouchableOpacity>
      </View>

      {eventos.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 30 }}>Nenhum evento registrado.</Text>
      ) : (
        <FlatList
          data={eventos}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  titulo: { fontWeight: 'bold', marginBottom: 5 },
  botoes: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 },
  botaoEditar: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 6,
    marginRight: 10,
  },
  botaoDeletar: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 6,
  },
  topBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  botaoNovo: {
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  botaoRecomendacoes: {
    flexDirection: 'row',
    backgroundColor: '#673AB7',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    marginLeft: 6,
    fontWeight: 'bold',
  },
});
