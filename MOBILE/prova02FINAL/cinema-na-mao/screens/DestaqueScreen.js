import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function DestaqueScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destaques</Text>
      <Text>Filmes lançamentos ou que merecem destaque a seu critério.</Text>
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
  },
  text: {
    color: '#fff', 
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'justify',
  },
});

export default DestaqueScreen;
