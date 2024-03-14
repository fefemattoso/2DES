// src/screens/BemVindoScreen.js

import React from 'react';
import { View, Button } from 'react-native';

const BemVindoScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Calcular Juros" onPress={() => navigation.navigate('CalcularJuros')} />
      <Button title="Calcular Idade" onPress={() => navigation.navigate('CalcularIdade')} />
    </View>
  );
};

export default BemVindoScreen;
