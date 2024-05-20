import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PrimeiraTrilogiaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        A Ameaça Fantasma
      </Text>
      {'\n'}
      <Text style={styles.text}>
      {'\n'}O primeiro filme começa com os Jedi Qui-Gon Jinn e Obi-Wan Kenobi indo a Naboo para avaliar a situação e resgatar a princesa Padmé Amidala das forças da Federação. Durante a missão, eles fazem uma parada em Tatooine, onde conhecem Anakin Skywalker, um escravo com uma forte conexão com a Força. Descobrindo o potencial de Anakin, os Jedi decidem levá-lo ao Templo dos Jedi para treiná-lo. Em Naboo, ocorre uma batalha entre as forças locais e o exército de droides da Federação, resultando na vitória das forças de segurança e dos Gungans. Durante esse conflito, o Sith Darth Maul mata Qui-Gon, mas é derrotado por Obi-Wan. Reconhecendo a ameaça contínua dos Sith, a Ordem Jedi promove Obi-Wan a cavaleiro e permite que ele treine Anakin como seu Padawan.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
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

export default PrimeiraTrilogiaScreen;
