import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DestaquesScreen from './screens/DestaquesScreen';
import BuscaScreen from './screens/BuscaScreen';
import IndicacaoScreen from './screens/IndicacaoScreen';
import ContatoScreen from './screens/ContatoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Destaques" component={DestaquesScreen} />
        <Tab.Screen name="Busca" component={BuscaScreen} />
        <Tab.Screen name="Indicação" component={IndicacaoScreen} />
        <Tab.Screen name="Contato" component={ContatoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
