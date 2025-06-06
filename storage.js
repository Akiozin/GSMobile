import AsyncStorage from '@react-native-async-storage/async-storage';

export const salvarEvento = async (evento) => {
  const dados = await AsyncStorage.getItem('eventos');
  const eventos = JSON.parse(dados) || [];
  eventos.push(evento);
  await AsyncStorage.setItem('eventos', JSON.stringify(eventos));
};

export const atualizarEvento = async (index, eventoAtualizado) => {
  const dados = await AsyncStorage.getItem('eventos');
  const eventos = JSON.parse(dados) || [];
  eventos[index] = eventoAtualizado;
  await AsyncStorage.setItem('eventos', JSON.stringify(eventos));
};

export const obterEventos = async () => {
  const dados = await AsyncStorage.getItem('eventos');
  return JSON.parse(dados) || [];
};
