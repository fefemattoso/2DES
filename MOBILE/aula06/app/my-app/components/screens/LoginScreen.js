// src/screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  // Definindo usuários e senhas válidas
  const usuarios = [
    { username: 'user1', password: 'senha1' },
    { username: 'user2', password: 'senha2' }
  ];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verificar se o usuário e a senha correspondem a um usuário válido
    const usuarioValido = usuarios.find(user => user.username === username && user.password === password);

    if (usuarioValido) {
      navigation.navigate('BemVindo');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <View>
      <Text>Username:</Text>
      <TextInput value={username} onChangeText={setUsername} />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
