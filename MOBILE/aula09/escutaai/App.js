// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Modal, TextInput, Image } from 'react-native';

const HomeScreen = () => {
  const [aboutModalVisible, setAboutModalVisible] = React.useState(false);
  const [requestModalVisible, setRequestModalVisible] = React.useState(false);
  const [songRequest, setSongRequest] = React.useState('');

  const handleSongRequest = () => {
    // Lógica para enviar a solicitação de música
    console.log('Solicitada a música:', songRequest);
    setSongRequest('');
    setRequestModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
        <View style={styles.navbarRight}>
          <TouchableOpacity onPress={() => setRequestModalVisible(true)}>
            <Text style={styles.navbarLink}>Peça sua música</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAboutModalVisible(true)}>
            <Text style={styles.navbarLink}>Quem somos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Abrir player')}>
            <Text style={styles.navbarLink}>Player</Text>
          </TouchableOpacity>
        </View>
      </View>


      {/* Modais */}
      <Modal animationType="slide" transparent={true} visible={aboutModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Quem somos</Text>
            <Text>Texto sobre a empresa...</Text>
            <Button title="Fechar" onPress={() => setAboutModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent={true} visible={requestModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Peça sua música</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome da música"
              value={songRequest}
              onChangeText={setSongRequest}
            />
            <Button title="Enviar" onPress={handleSongRequest} />
            <Button title="Fechar" onPress={() => setRequestModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#dc143c',
    padding: 20,
    height: 100,
    width: '100%',
    
  },

  logo: {
    width: 120, 
    height: 70,
    resizeMode: 'contain', // Redimensionamento da imagem
  },

  navbarTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  navbarRight: {
    flexDirection: 'row',
  },
  navbarLink: {
    marginLeft: 20,
    color: 'black',
    fontSize: 15,
  },
  card: {
    marginBottom: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    width: 500,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
});

export default HomeScreen;