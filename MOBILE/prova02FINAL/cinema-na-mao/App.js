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
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


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
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name="Buscar" 
          component={BuscaScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name="Indicações" 
          component={IndicacaoScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="star" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name="Destaques do Ano" 
          component={DestaqueScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome6 name="ranking-star" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name="Contato" 
          component={ContatoScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="headphones" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
