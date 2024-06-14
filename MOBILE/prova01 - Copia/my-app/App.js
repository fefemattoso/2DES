import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import BuscaScreen from './src/screens/BuscaScreen';
import ContatoScreen from './src/screens/ContatoScreen';
import DestaquesScreen from './src/screens/DestaquesScreen';
import IndicacaoScreen from './src/screens/IndicacaoScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#000000', 
          },
          labelStyle: {
            color: '#000000',
            fontSize: 16,
          },
          tabStyle: {
            justifyContent: 'center', 
            alignItems: 'center',
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Buscar" 
          component={BuscaScreen} 
          options={{
            tabBarLabel: 'Dia 4',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="event" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Destaques" 
          component={DestaquesScreen} 
          options={{
            tabBarLabel: '1º',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="movie" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Indicações" 
          component={IndicacaoScreen} 
          options={{
            tabBarLabel: '2º',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="movie" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Contato" 
          component={ContatoScreen} 
          options={{
            tabBarLabel: '3º',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="movie" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
