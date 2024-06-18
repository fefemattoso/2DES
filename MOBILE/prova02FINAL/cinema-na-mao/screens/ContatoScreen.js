import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function ContatoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Contato / Quem Somos</Text>
        <Text style={styles.text}>
          O aplicativo Cinema na Mão traz as últimas novidades do mundo dos filmes, permitindo que você
          busque informações sobre seus filmes favoritos e receba indicações personalizadas. Nossa missão é 
          tornar a experiência de encontrar e assistir filmes mais fácil e divertida.
        </Text>
        <Text style={styles.text}>
          Email: contato@cinemanamao.com
        </Text>
      </View>
    </ScrollView>
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
  card: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: '90%',
  },
  title: {
    fontFamily: 'Arial',
    color: 'black',
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Arial',
    color: 'black',
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'justify',
  },
});

export default ContatoScreen;
