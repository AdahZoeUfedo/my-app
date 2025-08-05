// /app/login.tsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';



export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useColorScheme() ?? 'light';
  const themeColors = Colors[theme];
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Email and password are required');
    } else {
      setError('');
      // Continue with authentication...
      console.log('Login logic goes here');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background }]}>
      <Text style={[styles.title, { color: themeColors.text }]}>Welcome Back</Text>
      

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, { borderColor: error && !email ? 'red' : themeColors.primary }]}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}


      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        style={[styles.input, { borderColor: error && !password ? 'red' : themeColors.primary }]}
        secureTextEntry
      />

      <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.primary }]}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Don’t have an account? <Link href="/signup" style={[styles.link, { color: themeColors.primary }]}>Signup</Link>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // white background for light theme
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2ebfa5', // seafoam green
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2ebfa5', // seafoam green
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  googleText: {
    color: '#333',
    fontSize: 16,
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    color: '#555',
  },
  error: {
  color: 'red',
  marginBottom: 10,
  textAlign: 'center',
},

  link: {
    color: '#2ebfa5',
    fontWeight: 'bold',
  },
});
