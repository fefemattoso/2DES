import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const telaEscolha = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo! Escolha uma das opções:</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('telaJuros')}>
        <Text style={styles.buttonText}>Calcular Juros</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('telaSwitch')}>
        <Text style={styles.buttonText}>Switch</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffb6c1',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff007f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default telaEscolha;
