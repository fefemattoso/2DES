import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import telaEscolha from './components/telaEscolha';
import telaJuros from './components/telaJuros';
import telaSwitch from './components/telaSwitch';

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
            component={Login}
            options={{ title: 'Bem vindo ' }} />
            
        <Stack.Screen
            name="telaEscolha"
            component={telaEscolha}
            options={{ title: 'Tela Escolha' }}
        />

        <Stack.Screen
            name="telaJuros"
            component={telaJuros}
            options={{ title: 'Tela Juros' }}
        />

        <Stack.Screen
            name="telaSwitch"
            component={telaSwitch}
            options={{ title: 'Tela Switch' }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
