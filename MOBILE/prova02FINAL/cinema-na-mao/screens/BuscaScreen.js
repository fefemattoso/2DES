import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function BuscaScreen() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = () => {
    axios.get(`http://www.omdbapi.com/?apikey=3c8d94f2&s=${search}`)
      .then(response => {
        setMovies(response.data.Search);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar filmes..."
        value={search}
        onChangeText={setSearch}
      />
      <Button title="Buscar" onPress={searchMovies} />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <View style={styles.movie}>
            <Text>{item.Title}</Text>
            <Text>{item.Year}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'brown',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff'
  },
  movie: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
  },
});
