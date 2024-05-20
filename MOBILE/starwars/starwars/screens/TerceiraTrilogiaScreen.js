import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function TerceiraTrilogiaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>O Ataque dos Clones</Text>
      <Text style={styles.text}>
        No hiato entre o primeiro e o segundo episódio, há todo o treinamento de Anakin, o que foi mostrado em algumas histórias em quadrinhos. Não há muitos fatos relevantes durante esse período, exceto o fato de que o jovem se esforça tanto para se destacar dentro da Ordem quanto para conquistar a simpatia do Chanceler Palpatine.
      </Text>
      <Text style={styles.text}>
        E é quando começa O Ataque dos Clones, trazendo de volta os Jedi na missão de proteger Padmé. Desta vez, a princesa está na mira de assassinos e os heróis precisam mantê-la a salvo. O difícil mesmo, porém, é você se manter protegido do amor, e a mocinha acaba se apaixonando por Anakin. Enquanto os dois descobrem a paixão, conhecemos o antigo Jedi Conde Dooku, que acabou cedendo ao Lado Sombrio e se transformando em Darth Tyranus, que elabora uma conspiração juntamente com Darth Sidous para trazer os Sith ao poder, criando um movimento Separatista que visava retirar vários sistemas estelares da influência da República Galáctica — uma tensão que acaba evoluindo para que o viria a ser as Guerras Clônicas.
        Diante dessa treta enorme, todos os Jedi se unem para enfrentar Dooku. É nesse momento que Anakin acaba perdendo sua mão direita.
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
  },
  text: {
    color: '#fff', 
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'justify',
  },
});

export default TerceiraTrilogiaScreen;
