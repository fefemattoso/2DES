import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from 'components/LoginScreen.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Provider
    <NavigationContainer>

      {/* Container de navegaçao */}
      <Stack.Navigator>

        {/* Telas */}
        <Stack.Screen
            name="Login"
            component={LoginForm}
            options={{ title: 'Bem vindo ' }} />
            
      </Stack.Navigator>

    </NavigationContainer>
  );
}
