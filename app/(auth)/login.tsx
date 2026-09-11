import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { supabase } from '../../services/supabase';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    setLoading(true);
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      Alert.alert('Login Failed', authError.message);
      setLoading(false);
      return;
    }

    // Fetch user role from profiles table
    const userId = authData.user.id;
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .single();

    setLoading(false);

    if (profileError || !profileData) {
      Alert.alert('Error', 'User account found, but role data is missing.');
      return;
    }

    // Route user based on their specific database role
    const userRole = profileData.role;
    if (userRole === 'owner') {
      router.replace('/(tabs)/owner/dashboard' as any);
    } else if (userRole === 'caretaker') {
      router.replace('/(tabs)/caretaker/dashboard' as any);
    } else if (userRole === 'tenant') {
      router.replace('/(tabs)/tenant/dashboard' as any);
    } else {
      Alert.alert('Error', 'Unrecognized user role assigned to account.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nads & Gracy Boarding House</Text>
      <Text style={styles.subtitle}>Rental Management System</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#333' },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 30, color: '#666' },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#ddd', marginBottom: 15, fontSize: 16 },
  button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});