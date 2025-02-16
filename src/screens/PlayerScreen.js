import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PlayerScreen({ route, navigation }) {
  const { song } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      
      <Image source={song.image} style={styles.albumArt} />
      <Text style={styles.songTitle}>{song.title}</Text>
      <Text style={styles.artist}>{song.artist}</Text>

      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="play-skip-back" size={40} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
          <Ionicons name={isPlaying ? "pause-circle" : "play-circle"} size={60} color="#1DB954" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="play-skip-forward" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center', padding: 20 },
  albumArt: { width: 250, height: 250, borderRadius: 10, marginVertical: 20 },
  songTitle: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  artist: { color: 'gray', fontSize: 18 },
  controls: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%', marginTop: 20 },
});
