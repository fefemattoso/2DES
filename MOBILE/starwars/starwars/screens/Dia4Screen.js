import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

function Dia4Screen() {
  const handlePress = () => {
    Linking.openURL('https://www.starwars.com/star-wars-day');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/starwars.jpg')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ir para o site oficial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Dia4Screen;
