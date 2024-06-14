import React from 'react';
import { View, Text, StyleSheet } from 'react';

export default function ContatoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato / Quem Somos</Text>
      <Text>Descrição de quais novidades traz o aplicativo para uso cotidiano.</Text>
      <Text>Email: contato@cinemanamao.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
