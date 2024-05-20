import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import Dia4Screen from './screens/Dia4Screen';
import PrimeiraTrilogiaScreen from './screens/PrimeiraTrilogiaScreen';
import SegundaTrilogiaScreen from './screens/SegundaTrilogiaScreen';
import TerceiraTrilogiaScreen from './screens/TerceiraTrilogiaScreen';
import DarthVaderScreen from './screens/DarthVaderScreen';

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
          name="Dia 4" 
          component={Dia4Screen} 
          options={{
            tabBarLabel: 'Dia 4',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="event" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Primeira Trilogia" 
          component={PrimeiraTrilogiaScreen} 
          options={{
            tabBarLabel: '1º',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="movie" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Segunda Trilogia" 
          component={SegundaTrilogiaScreen} 
          options={{
            tabBarLabel: '2º',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="movie" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Terceira Trilogia" 
          component={TerceiraTrilogiaScreen} 
          options={{
            tabBarLabel: '3º',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="movie" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Darth Vader" 
          component={DarthVaderScreen} 
          options={{
            tabBarLabel: 'Darth Vader',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
