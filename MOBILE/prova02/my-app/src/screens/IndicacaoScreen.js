import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function IndicacaoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes que Indico</Text>
      <Text>1. Filme A</Text>
      <Text>2. Filme B</Text>
      <Text>3. Filme C</Text>
      <Text>4. Filme D</Text>
      <Text>5. Filme E</Text>
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
