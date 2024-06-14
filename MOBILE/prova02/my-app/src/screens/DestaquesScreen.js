import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function DestaquesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destaques</Text>
      <Text>Filmes lançamentos ou que merecem destaque a seu critério.</Text>
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
