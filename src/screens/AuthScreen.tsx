import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { supabase } from '../services/supabase';
import GradientText from '../components/GradientText';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  function notify(title: string, message: string) {
    if (Platform.OS === 'web') {
      window.alert(`${title}: ${message}`);
    } else {
      Alert.alert(title, message);
    }
  }

  async function handleAuth() {
    if (!email || !password) {
      notify('Atenção', 'Por favor, preencha o e-mail e a senha.');
      return;
    }

    setLoading(true);

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        notify('Erro no Cadastro', error.message);
      } else {
        notify('Sucesso!', 'Conta criada com sucesso. Tente fazer o login.');
        setIsSignUp(false);
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        notify('Erro ao Entrar', error.message);
      }
    }

    setLoading(false);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <LinearGradient
        colors={['#BF953F', '#FCF6BA', '#B38728', '#FBF5B7', '#AA771C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardGradient}
      >
        <View style={styles.cardInner}>
          <GradientText text="InvestUp" style={styles.title} />
          <Text style={styles.subtitle}>
            {isSignUp ? 'Crie sua conta de investimentos' : 'Acesse sua carteira'}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Seu e-mail"
            placeholderTextColor="#94A3B8"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Sua senha"
            placeholderTextColor="#94A3B8"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleAuth}
            disabled={loading}
          >
            <LinearGradient
              colors={['#BF953F', '#FCF6BA', '#AA771C']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonGradient}
            >
              {loading ? (
                <ActivityIndicator color="#0F172A" />
              ) : (
                <Text style={styles.buttonText}>
                  {isSignUp ? 'Cadastrar' : 'Entrar'}
                </Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsSignUp(!isSignUp)}
            style={styles.switchButton}
          >
            <Text style={styles.switchText}>
              {isSignUp
                ? 'Já possui uma conta? Faça Login'
                : 'Não tem conta? Cadastre-se'}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardGradient: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 22,
    padding: 1.5,
  },
  cardInner: {
    backgroundColor: '#161F30',
    borderRadius: 20.5,
    padding: 28,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: 0.8,
  },
  subtitle: {
    fontSize: 15,
    color: '#CBD5E1',
    textAlign: 'center',
    marginBottom: 28,
  },
  input: {
    backgroundColor: '#0F172A',
    color: '#F8FAFC',
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  buttonContainer: {
    marginTop: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonGradient: {
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#0B0F19',
    fontSize: 16,
    fontWeight: '800',
  },
  switchButton: {
    marginTop: 22,
    alignItems: 'center',
  },
  switchText: {
    color: '#F0A886',
    fontSize: 14,
    fontWeight: '600',
  },
});