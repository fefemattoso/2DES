import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

function DestaqueScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    {
      title: 'Duna 2',
      image: require('../assets/duna.jpg'),
      description: 'A continuação da épica saga de Duna, onde Paul Atreides une forças com Chani e os Fremen enquanto busca vingança contra os conspiradores que destruíram sua família.'
    },
    {
      title: 'Poor Things',
      image: require('../assets/pt.jpg'),
      description: 'Um conto bizarro e gótico sobre uma mulher ressuscitada por um cientista excêntrico em uma viagem de autodescoberta e exploração de suas novas habilidades.'
    },
    {
      title: 'Inside Out 2',
      image: require('../assets/insideout.jpeg'),
      description: 'A sequência da amada animação que explora o mundo das emoções dentro da mente de uma adolescente, apresentando novos desafios e emoções à medida que ela cresce.'
    },
    {
      title: 'Deadpool & Wolverine',
      image: require('../assets/wd.jpg'),
      description: 'Deadpool se junta a Wolverine em uma nova aventura cheia de ação, humor irreverente e muita pancadaria, enquanto enfrentam novos inimigos e desafios juntos.'
    }
  ];

  const toggleModal = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Destaques</Text>
      <Text>Filmes lançamentos ou que merecem destaque.</Text>
      {movies.map((movie, index) => (
        <View key={index} style={styles.movieContainer}>
          <Text style={styles.movieTitle}>{movie.title}</Text>
          <TouchableOpacity
            onPress={() => toggleModal(movie)}
            style={styles.imageWrapper}
            activeOpacity={0.7}
          >
            <Image source={movie.image} style={styles.image} />
          </TouchableOpacity>
        </View>
      ))}
      
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{selectedMovie?.title}</Text>
          <Text style={styles.modalDescription}>{selectedMovie?.description}</Text>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'brown',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  movieContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  movieTitle: {
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
  imageWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'brown',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DestaqueScreen;
