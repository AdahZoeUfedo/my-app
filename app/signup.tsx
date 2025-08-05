// app/signup.tsx
import { View, Text, TextInput, Pressable, StyleSheet, useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Colors } from '@/constants/Colors';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const theme = useColorScheme() ?? 'light';
  const themeColors = Colors[theme];
  

  const handleSignup = () => {
    if (!name || !email || !password) {
      setError('Email and password are required');
    } else {
      setError('');
      // Continue with authentication...
      console.log('Login logic goes here');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background}]}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
      placeholder="Full Name"
      placeholderTextColor="#999"
      value={name}
      onChangeText={setName}
      style={[styles.input, { borderColor: error && !email ? 'red' : themeColors.primary }]}
      autoCapitalize="none"
        />

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

      <Pressable
  style={[styles.button, { backgroundColor: themeColors.primary }]}
  onPress={handleSignup}
>
  <Text style={styles.buttonText}>Log In</Text>
</Pressable>


      <Pressable style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </Pressable>

      <Text style={styles.footerText}>
        Already have an account? <Link href="/login" style={styles.link}>Login</Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 100,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    fontWeight: '600',
    color: '#1e1e1e',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2CC5AB',
    padding: 16,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 8,
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footerText: {
    marginTop: 16,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    fontWeight: '500',
  },
  error: {
  color: 'red',
  marginBottom: 10,
  textAlign: 'center',
  },
});
