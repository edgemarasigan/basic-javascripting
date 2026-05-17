import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [inputName, setInputName] = useState('');
  const [count, setCount] = useState(0);

  const getDynamicMessage = () => {
    if (count === 0) return 'Press + to start counting!';
    if (count < 0) return 'Going negative? Bold move.';
    if (count >= 10) return 'Woah, slow down! 🔥';
    if (count >= 5) return "You're on a roll! 🚀";
    return `Count is at ${count}, keep going!`;
  };

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

          {/* Divider */}
          <View style={styles.divider} />

          {/* Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Type your name here..."
            placeholderTextColor="#aaa"
            value={inputName}
            onChangeText={setInputName}
          />

          {/* Greeting */}
          {inputName.length > 0 && (
            <Text style={styles.greeting}>
              Hello, {inputName}! 👋
            </Text>
          )}

          {/* Divider */}
          <View style={styles.divider} />

          {/* Counter */}
          <Text style={styles.counterLabel}>Counter</Text>
          <Text style={styles.counterValue}>{count}</Text>

          {/* Dynamic Message */}
          <Text style={styles.dynamicMessage}>{getDynamicMessage()}</Text>

          {/* Counter Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.buttonMinus]}
              onPress={() => setCount(count - 1)}
            >
              <Text style={styles.buttonText}>−</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonReset]}
              onPress={() => setCount(0)}
            >
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonPlus]}
              onPress={() => setCount(count + 1)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>

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
    gap: 8,
    width: '100%',
    paddingHorizontal: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 8,
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
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 14,
  },
  greeting: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  counterLabel: {
    fontSize: 13,
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  counterValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#111',
  },
  dynamicMessage: {
    fontSize: 13,
    color: '#555',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 60,
    alignItems: 'center',
  },
  buttonPlus: {
    backgroundColor: '#4CAF50',
  },
  buttonMinus: {
    backgroundColor: '#f44336',
  },
  buttonReset: {
    backgroundColor: '#888',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});