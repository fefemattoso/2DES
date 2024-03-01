// Form.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Form = ({ onSubmit }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handlePress = () => {
    // Validar e processar os dados antes de enviar para o componente pai
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      // Tratar erros de entrada inválida
      console.log('Por favor, insira valores válidos para peso e altura.');
      return;
    }

    // Calcular IMC e enviar para o componente pai
    const imc = weightValue / (heightValue * heightValue);
    onSubmit(imc);
  };

  return (
    <View style={styles.container}>
      <Text>Peso (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira seu peso"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />

      <Text>Altura (m):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira sua altura"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />

      <Button title="Calcular IMC" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Form;
