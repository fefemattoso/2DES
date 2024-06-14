import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch } from 'react-native';



export default function telaSwitch() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = () => {setHabilitado(!habilitado)};

return (
    <View style = {styles.container}>
      {/* <Image source={icon} style={styles.icon}/> */}
      <Text style={styles.title}>I have two sides</Text>
      <Switch value={habilitado} onValueChange={habilitar}/>
      <Image source={{uri:(habilitado) ? "./assets/gifs-do-joker.gif" : "./assets/strawberry.png"}} style={styles.morango}/>
      <StatusBar style='auto'/>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcb3d8',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '66px'
  },
  icon:{
    width: '370px',
    height: '260px'
  },
  morango:{
    width: '310px',
    height: '400px'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
