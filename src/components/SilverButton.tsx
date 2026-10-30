import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface SilverButtonProps {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
}

export function SilverButton({ title, onPress, variant = 'primary' }: SilverButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.buttonWrapper}
    >
      {/* Borda em Gradiente Prateado/Platina */}
      <LinearGradient
        colors={
          isPrimary
            ? ['#E2E8F0', '#94A3B8', '#475569', '#CBD5E1'] // Gradiente Prata Metálico com Brilho
            : ['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.15)']
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBorder}
      >
        {/* Preenchimento Interno Fumê */}
        <View style={styles.innerContainer}>
          <Text
            style={[
              styles.buttonText,
              isPrimary ? styles.primaryText : styles.secondaryText,
            ]}
          >
            {title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    height: 48,
    borderRadius: 16,
  },
  gradientBorder: {
    flex: 1,
    borderRadius: 16,
    padding: 1.2, // Espessura da borda metálica
  },
  innerContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: 'rgba(17, 22, 34, 0.85)', // Fundo fumê translúcido
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: -0.2,
    textAlign: 'center',
  },
  primaryText: {
    color: '#F1F5F9', // Branco prateado/platina
  },
  secondaryText: {
    color: '#94A3B8', // Cinza prateado suave
  },
});