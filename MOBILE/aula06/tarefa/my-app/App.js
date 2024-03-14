import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from './components/loginForm';
import ScreenIMC from './components/FormIMC';
import CalculateInterest from './components/CalculateInterest';
import CalculateAge from './components/CalculateAge';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{ title: 'Buenos Dias' }}
        />
        <Stack.Screen
          name="Welcome"
          component={ScreenIMC}
          options={{ title: 'Welcome to the mato' }}
        />
        <Stack.Screen
          name="CalculateInterest"
          component={CalculateInterest}
          options={{ title: 'Calculate Interest' }}
        />
        <Stack.Screen
          name="CalculateAge"
          component={CalculateAge}
          options={{ title: 'Calculate Age' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
