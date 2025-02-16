import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const songs = [
  { id: '1', title: 'Song 1', artist: 'Artist 1', image: require('path to image') },
  { id: '2', title: 'Song 2', artist: 'Artist 2', image: require('path to image') },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spotify Music App</Text>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.songItem} onPress={() => navigation.navigate('Player', { song: item })}>
            <Image source={item.image} style={styles.albumArt} />
            <View>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.artist}>{item.artist}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1DB954', textAlign: 'center', marginBottom: 20 },
  songItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  albumArt: { width: 50, height: 50, borderRadius: 5, marginRight: 10 },
  songTitle: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  artist: { color: 'gray', fontSize: 14 },
});
