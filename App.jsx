import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import responseMovies from './src/mocks/withResults.json'
import withoutResults from './src/mocks/withoutResults.json'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const renderMovie = (movie) =>
  <View style={styles.movie}>
    <Text style={styles.movieTitle}>{movie.Title}</Text>

    <Image
      style={styles.poster}
      source={{ uri: movie.Poster }}
      resizeMode='contain'
    />
    <Text style={styles.movieTitle}>{movie.Year}</Text>
  </View>

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>Buscador de peliculas</Text>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <TextInput
            style={styles.input}
            placeholder='Avengers, Matrix, Star Wars...'
            placeholderTextColor='white'
          />
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.movieContainer}>
          {hasMovies
            ? movies.map((movie) => renderMovie(movie))
            : <Text>No movies found</Text>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202b38',
    height: windowHeight,
    width: windowWidth,

  },
  sectionContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 15,
    gap: 10,
  },

  sectionTitle: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 35,
    fontWeight: '600',
    color: 'white'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  input: {
    height: 40,
    backgroundColor: '#0c151c',
    padding: 10,
    color: 'white',
    fontSize: 15,
    borderRadius: 10
  },
  button: {
    justifyContent: 'center',

    color: 'white',
    fontSize: 15,
    borderRadius: 5,
    backgroundColor: 'black',
    width: 100,
    height: 40,
  },
  movieContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  movie: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: windowWidth / 2,
  },
  movieTitle: {
    marginVertical: 10,
    fontSize: 15,
    textAlign: 'center',
    color: 'white'
  },
  poster: {
    width: windowWidth / 2,
    aspectRatio: 1 * 1.4,
  },
});

export default App;
