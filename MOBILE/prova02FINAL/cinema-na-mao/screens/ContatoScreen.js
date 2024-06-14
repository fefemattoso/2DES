import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function ContatoScreen() {
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'brown',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  text: {
    color: '#fff', 
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'justify',
    fontFamily: 'Arial',
  },
});

export default ContatoScreen;
