// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';

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
        <Text style={styles.navbarTitle}>Escuta aí!</Text>
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

      <View style={styles.container}>
        {/* Conteúdo da tela */}
        {/* Exemplo de card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Domingo a noite</Text>
          <Text>Confira a playlist 1</Text>
          <Button title="Ir para Playlist 1" onPress={() => alert('Navegar para a Playlist 1')} />
        </View>
        {/* Outros cards aqui */}
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  navbarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navbarRight: {
    flexDirection: 'row',
  },
  navbarLink: {
    marginLeft: 20,
    color: 'blue',
  },
  card: {
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
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
  },
});

export default HomeScreen;