import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import BuscaScreen from './screens/BuscaScreen';
import IndicacaoScreen from './screens/IndicacaoScreen';
import ContatoScreen from './screens/ContatoScreen';
import DestaqueScreen from './screens/DestaqueScreen';


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
          name="BuscaScreen" 
          component={BuscaScreen} 
          options={{
            tabBarLabel: 'Busca',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="event" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="IndicacaoScreen" 
          component={IndicacaoScreen} 
          options={{
            tabBarLabel: 'Indicações',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="movie" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="ContatoScreen" 
          component={ContatoScreen} 
          options={{
            tabBarLabel: 'Contato',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="movie" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="DestaqueScreen" 
          component={DestaqueScreen} 
          options={{
            tabBarLabel: 'Destaques',
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
