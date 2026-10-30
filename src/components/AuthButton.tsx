import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator, Platform, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface AuthButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
}

export function AuthButton({ title, onPress, loading = false }: AuthButtonProps) {
  return (
    <TouchableOpacity
      style={styles.buttonShadowContainer}
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.85}
    >
      {/* 1. MOLDURA EXTERNA (Borda 3D com efeito de bisel/luz superior) */}
      <LinearGradient
        colors={['#FFF1B8', '#9B6C0D', '#543904']}
        locations={[0, 0.6, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.buttonBevelWrapper}
      >
        {/* 2. CORPO INTERNO (Metal com reflexo claro no centro) */}
        <LinearGradient
          colors={[
            '#B38728', 
            '#FFF1B8', 
            '#FCF6BA', 
            '#E6B02E', 
            '#9B6C0D'  
          ]}
          locations={[0, 0.3, 0.5, 0.7, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonGradientInner}
        >
          {loading ? (
            <ActivityIndicator color="#0B0F19" />
          ) : (
            <Text style={styles.buttonText}>{title}</Text>
          )}
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonShadowContainer: {
    marginTop: 8,
    borderRadius: 26,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
      web: {
        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.5)',
      }
    }),
  },
  buttonBevelWrapper: {
    borderRadius: 26,
    padding: 1.5, // Espessura fina e elegante da borda 3D
  },
  buttonGradientInner: {
    height: 46,
    borderRadius: 24.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#0B0F19',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: -0.2,
    textShadowColor: 'rgba(255, 255, 255, 0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
});