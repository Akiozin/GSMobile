import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';
import Panorama from './screens/Panorama';
import Localizacao from './screens/Localizacao';
import Tempo from './screens/Tempo';
import Prejuizos from './screens/Prejuizos';
import Recomendacoes from './screens/Recomendacoes';

const Stack = createStackNavigator();

export default function App() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Panorama" component={Panorama} />
        <Stack.Screen name="Localizacao" component={Localizacao} />
        <Stack.Screen name="Tempo" component={Tempo} />
        <Stack.Screen name="Prejuizos" component={Prejuizos} />
        <Stack.Screen name="Recomendacoes" component={Recomendacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}