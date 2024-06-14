import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

function IndicacaoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Filmes que Indico</Text>
      
      <Text style={styles.movieTitle}>1. O Senhor dos Anéis: A Sociedade do Anel (2001)</Text>
      <Image source={require('../assets/sda.jpg')} style={styles.image} />
      
      <Text style={styles.movieTitle}>2. Harry Potter e a Pedra Filosofal (2001)</Text>
      <Image source={require('../assets/sda.jpg')} style={styles.image} />
      
      <Text style={styles.movieTitle}>3. O Labirinto do Fauno (2006)</Text>
      <Image source={require('../assets/sda.jpg')} style={styles.image} />
      
      <Text style={styles.movieTitle}>4. Stardust - O Mistério da Estrela (2007)</Text>
      <Image source={require('../assets/sda.jpg')} style={styles.image} />
      
      <Text style={styles.movieTitle}>5. A Princesa Prometida (1987)</Text>
      <Image source={require('../assets/sda.jpg')} style={styles.image} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'brown',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff', 
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#fff', 
    fontSize: 18,
    textAlign: 'justify',
  },
  
});

export default IndicacaoScreen;
