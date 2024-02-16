import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch } from 'react-native';

const icon = require('./assets/icon.png');

export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = () => {setHabilitado(!habilitado)};

return (
    <View style = {styles.container}>
      <Image source={icon} style={styles.icon}/>
      <Switch value={habilitado} onValueChange={habilitar}/>
      <Image source={{uri:(habilitado) ? "./assets/lampada.png" : "./assets/lampadaOFF.png"}} style={styles.lampada}/>
      <StatusBar style='auto'/>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '66px'
  },
  icon:{
    width: '200px',
    height: '160px'
  },
  lampada:{
    width: '150px',
    height: '150px'
  },
});
