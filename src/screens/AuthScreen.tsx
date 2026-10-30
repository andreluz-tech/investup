import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { supabase } from '../services/supabase';
import GradientText from '../components/GradientText';
import { AuthButton } from '../components/AuthButton';

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
      const { error } = await supabase.auth.signUp({ email, password });

      if (error) {
        notify('Erro no Cadastro', error.message);
      } else {
        notify('Sucesso!', 'Conta criada com sucesso. Faça o login.');
        setIsSignUp(false);
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });

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
      {/* Moldura Externa com Gradiente Metálico (Mesmo tom do PortfolioCard) */}
      <LinearGradient
        colors={['#FFDCB8', '#D67D52', '#7A2C08', '#2D0D02']}
        locations={[0.0, 0.3, 0.7, 1.0]}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.9, y: 1 }}
        style={styles.cardGradient}
      >
        {/* Corpo Interno com Fundo Fumê Translúcido */}
        <View style={styles.cardInner}>
          <GradientText text="InvestUp" style={styles.title} />
          <Text style={styles.subtitle}>
            {isSignUp ? 'Crie sua conta de investimentos' : 'Acesse sua carteira'}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Seu e-mail"
            placeholderTextColor="#64748B"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Sua senha"
            placeholderTextColor="#64748B"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Componente Modular do Botão Metálico 3D */}
          <AuthButton
            title={isSignUp ? 'Cadastrar' : 'Entrar'}
            onPress={handleAuth}
            loading={loading}
          />

          <TouchableOpacity
            onPress={() => setIsSignUp(!isSignUp)}
            style={styles.switchButton}
            activeOpacity={0.7}
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
    backgroundColor: '#070A10', // Fundo geral fumê escuro do app
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardGradient: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 24,
    padding: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.85,
    shadowRadius: 24,
    elevation: 20,
  },
  cardInner: {
    backgroundColor: 'rgba(17, 22, 34, 0.85)', // Fundo fumê translúcido padronizado
    borderRadius: 22,
    padding: 28,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: 0.8,
  },
  subtitle: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: 28,
    fontWeight: '500',
  },
  input: {
    backgroundColor: 'rgba(10, 14, 23, 0.9)',
    color: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  switchButton: {
    marginTop: 22,
    alignItems: 'center',
  },
  switchText: {
    color: '#E6B02E',
    fontSize: 13,
    fontWeight: '600',
  },
});