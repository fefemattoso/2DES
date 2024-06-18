import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

function IndicacaoScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    {
      title: 'O Senhor dos Anéis: A Sociedade do Anel (2001)',
      image: require('../assets/sda.jpg'),
      description: 'Um hobbit é encarregado de destruir um anel poderoso para impedir que um senhor das trevas conquiste a Terra-média.'
    },
    {
      title: 'Harry Potter e a Pedra Filosofal (2001)',
      image: require('../assets/hp.jpg'),
      description: 'Um jovem garoto descobre que é um bruxo e começa sua educação mágica em Hogwarts.'
    },
    {
      title: 'O Labirinto do Fauno (2006)',
      image: require('../assets/ldf.jpg'),
      description: 'Na Espanha fascista de 1944, a jovem Ofélia descobre um mundo mágico onde conhece criaturas fantásticas.'
    },
    {
      title: 'Coraline - E o Mundo Secreto (2009)',
      image: require('../assets/coraline.jpg'),
      description: 'Uma jovem aventureira descobre uma porta secreta em sua nova casa que a leva a um mundo paralelo.'
    },
    {
      title: 'Labirinto - A Magia do Tempo (1986)',
      image: require('../assets/labirinto.jpg'),
      description: 'Uma jovem embarca em uma jornada para resgatar seu irmão mais novo das garras do Rei dos Duendes.'
    }
  ];

  const toggleModal = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Filmes que Indico</Text>
      {movies.map((movie, index) => (
        <View key={index} style={styles.movieContainer}>
          <Text style={styles.movieTitle}>{index + 1}. {movie.title}</Text>
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
    justifyContent:'center',
    display: 'flex',
  },
  modalTitle: {
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontFamily: 'Arial',
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

export default IndicacaoScreen;
