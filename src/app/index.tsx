import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [inputName, setInputName] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.wrapper}
      >
        <View style={styles.card}>

          {/* Profile Image */}
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
            style={styles.avatar}
          />

          {/* Name */}
          <Text style={styles.name}>Emmanuel Marasigan</Text>

          {/* Bio */}
          <Text style={styles.bio}>MMA Student · CS126</Text>

          {/* Input */}
          <TextInput
            style={styles.input}
            placeholder="Type your name here..."
            placeholderTextColor="#aaa"
            value={inputName}
            onChangeText={setInputName}
          />

          {/* Display typed name */}
          {inputName.length > 0 && (
            <Text style={styles.greeting}>
              Hello, {inputName}!
            </Text>
          )}

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    gap: 6,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
  },
  bio: {
    fontSize: 13,
    color: '#888',
  },
  input: {
    marginTop: 16,
    width: 220,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 14,
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});