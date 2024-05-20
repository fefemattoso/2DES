import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function SegundaTrilogiaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Histórias dos Jedi</Text>
      <Text style={styles.text}>
        Em 2022, a Lucasfilm trouxe uma pequena série de animação com episódios bem curtinhos contando as histórias de alguns Jedi. Não é nada que impacta o grande universo da saga e pode ser facilmente pulado por quem não está tão interessado nos míseros detalhes, mas que dá novas camadas a alguns personagens que vão ser importantes no futuro.
      </Text>
      <Text style={styles.text}>
        É o caso aqui de Dooku. Nesse período da história, ele é um habilidoso Jedi, mas que passa a questionar algumas decisões tomadas tanto pela sua Ordem quanto pela própria República. E essa dúvida que surge acaba se tornando a porta de entrada para o Lado Sombrio da Força começar a se manifestar. Assim, trata-se do primeiro passo para mostrar como ele se tornará o vilão que veremos a seguir.
      </Text>
      <Text style={styles.text}>
        Em paralelo, Star Wars: Histórias dos Jedi mostra ainda o nascimento de Ahsoka Tano e como sua vida sempre foi complicada desde seus primeiros dias — ainda que nunca tenha sido abandonada pela Força. De novo, é um complemento interessante para a personagem que vai ganhar mais relevância em outro ponto da cronologia.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  text: {
    color: '#fff', 
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'justify',
    fontFamily: 'Arial',
  },
});

export default SegundaTrilogiaScreen;
