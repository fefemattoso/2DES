import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Cinema na Mão!</Text>
      <Image source={require('../assets/icon.png')} style={styles.image}></Image>
      <Text style={styles.title}>Aqui você encontra seus filmes favoritos em um só lugar.</Text>
    </View>
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
    fontFamily: 'Arial',
    color: 'black',
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: 'Arial',
    color: '#FFD700',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: '#FFD700',
    borderWidth: 2,
  },
});


export default HomeScreen;
