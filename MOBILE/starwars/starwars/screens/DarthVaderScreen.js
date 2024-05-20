// screens/DarthVaderScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function DarthVaderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      🤠👍
      </Text>
      <Image
        source={require('../assets/darkside.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}></Text>
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
    width: 300,
    height: 300, 
    resizeMode: 'contain',
  },
});

export default DarthVaderScreen;
